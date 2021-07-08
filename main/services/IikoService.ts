const fetch = require('node-fetch')
const { URLSearchParams } = require('url')
import iikoConfig from 'Config/iiko'

export default class IikoService {
  private token: string

  public async authenticate() {
    const params = new URLSearchParams({
      user_id: iikoConfig.login,
      user_secret: iikoConfig.password,
    })
    const url = `${iikoConfig.baseUrl}/${iikoConfig.urlGetToken}?${params}`
    const response = await fetch(url)
    this.token = await response.json()
  }

  public async getOrganizations() {
    const params = new URLSearchParams({
      access_token: this.token,
    })
    const url = `${iikoConfig.baseUrl}/${iikoConfig.urlGetOrganizationList}?${params}`
    const response = await fetch(url)
    return await response.json()
  }

  public async loadNomenclature() {
    const params = new URLSearchParams({
      access_token: this.token,
    })
    const url = `${iikoConfig.baseUrl}/${iikoConfig.urlGetNomencaluter}/${iikoConfig.organizationId}?${params}`
    const response = await fetch(url)
    return await response.json()
  }
}
