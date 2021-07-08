export interface ISelectOption {
  label: string,
  value: string | number
}

export interface IEssentialLink {
  title: string,
  icon: string,
  link: string
}

export type FieldTypes = 'text' | 'number' | 'select' | 'image'

export interface SchemaField {
  name: string,
  type: FieldTypes,
  label: string
  options?: ISelectOption[]
}
