import Env from '@ioc:Adonis/Core/Env'

export default {
  organizationId: Env.get('IIKO_ORGANIZATION_ID'),
  baseUrl: Env.get('IIKO_BIZ_HOST'),
  login: Env.get('IIKO_USER_ID'),
  password: Env.get('IIKO_USER_SECRET'),
  urlGetToken: '/api/0/auth/access_token',
  urlGetOrganizationList: '/api/0/organization/list',
  urlGetNomencaluter: '/api/0/nomenclature/',
}
