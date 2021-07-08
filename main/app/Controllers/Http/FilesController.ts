import responseCodes, { ResonseCode } from './responseCodes'
import Image from 'App/Models/Image'
import ImageService from '../../../services/ImageService'

export default class FilesController {
  public async index() {
    const { code, message } = responseCodes.FILES_SUCCESS_FIND as unknown as ResonseCode
    const images = await Image.all()

    return {
      code,
      message,
      body: {
        data: images,
      },
    }
  }
  public async uploadProductImage({ request }) {
    const imageService = new ImageService(
      {
        XS: [200, 200],
        SM: [300, 300],
        MD: [400, 400],
        LG: [500, 500],
        XL: [600, 600],
      },
      ['png', 'webp']
    )
    const data = await imageService.generate(request)

    const result = await Image.create(data)

    const { code, message } =
      responseCodes.FILE_PRODUCT_IMAGE_SUCCESS_UPLOAD as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: result,
      },
    }
  }
}
