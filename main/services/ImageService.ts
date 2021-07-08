import sharp from 'sharp'
import path from 'path'
import fetch from 'node-fetch'
import fs from 'fs'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'

const UPLOAD_DIR = 'uploads'

export type ImageSize = 'XS' | 'SM' | 'MD' | 'LG' | 'XL'
export type ImageExt = 'png' | 'jpg' | 'webp'

export enum ImageMime {
  png = 'image/png',
  jpg = 'image/jpeg',
  webp = 'image/webp',
}

export type ImageVariantPath = {
  [key in ImageExt]?: string
}

export interface ImageVariant extends ImageVariantPath {
  width: number
  height: number
}

export type ImageVariants = {
  [key in ImageSize]?: ImageVariant
}

export type ImagePreset = {
  [key in ImageSize]?: [number, number]
}

export default class ImageService {
  private dest = Application.tmpPath(UPLOAD_DIR)
  private presets
  private extnames: ImageExt[]

  constructor(presets: ImagePreset, extnames: ImageExt[]) {
    this.presets = Object.entries(presets)
    this.extnames = extnames
  }

  public async generate(request) {
    const { filePath, fileName, fileNameWithoutExtension, mime, width, height, size } =
      await this.init(request)
    const url = this.getPublicPath(filePath)
    const variants = await this.generateVariants(filePath, fileNameWithoutExtension)

    return {
      mime,
      width,
      height,
      size,
      variants,
      url,
      name: fileName,
    }
  }
  public async generateVariants(filePath, fileNameWithoutExtension): Promise<ImageVariants> {
    const variants: ImageVariants = {}

    for (const preset of this.presets) {
      const [presetName, [width, height]] = preset

      variants[presetName] = {
        width,
        height,
      }

      const buff = await this.resize(filePath, width, height)

      for (const ext of this.extnames) {
        const fileName = `${fileNameWithoutExtension}-${presetName}.${ext}`
        const pathToFile = path.join(this.dest, fileName)
        const publicPath = path.join(`/${UPLOAD_DIR}`, fileName)

        variants[presetName][ext] = publicPath

        await this.convert(buff, pathToFile, ext)
      }
    }

    return variants
  }

  private async init(request) {
    const image = request.file('image')
    const name = `${cuid()}.${image.extname}`
    await image.move(this.dest, {
      name,
    })

    const meta = await sharp(image.filePath).metadata()

    return {
      mime: ImageMime[image.extname],
      filePath: image.filePath,
      fileName: image.fileName,
      fileNameWithoutExtension: this.getFileNameWithoutExtension(image.fileName),
      width: meta.width,
      height: meta.height,
      size: image.size,
    }
  }

  private async resize(filePath: string, width: number, height: number) {
    return sharp(filePath).resize({ width, height }).toBuffer()
  }
  private async convert(fileBuff, filePath, format) {
    return sharp(fileBuff).toFormat(format, { quality: 80 }).toFile(filePath)
  }

  private getFileNameWithoutExtension(fileName: string): string {
    return fileName.split('.').slice(0, -1).join('.')
  }
  private getPublicPath(filePath: string): string {
    return filePath.replace(Application.tmpPath(), '')
  }
  public async download(url) {
    const res = await fetch(url)
    const fileName = Date.now()
    const pathToFile = path.join(this.dest, `${fileName}.jpg`)
    const fileStream = fs.createWriteStream(pathToFile)
    await new Promise((resolve, reject) => {
      res.body.pipe(fileStream)
      res.body.on('error', reject)
      fileStream.on('finish', resolve)
    })
  }
}
