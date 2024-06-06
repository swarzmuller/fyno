export interface IHighlihts {
  title: string
  order: string
  tags: string[]
  highlihtsTitle: string
  placeToStayTitle: string
  highlihts: Highliht[]
  placeToStay: PlaceToStay[]
  description?: string
}

export interface Highliht {
  tag: string
  image: string
  title: string
  day?: number
  traffic?: string
  minutes?: number
  subtitle: string
}

export interface PlaceToStay {
  tag: string
  image: string
  title: string
  rating?: string
  subtitle: string
}
