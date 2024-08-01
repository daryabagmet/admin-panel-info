export interface Complaint {
  id: string
  title: string
  body: string
  doctor: string
  date: string
  comments: ComplaintComment[]
}

export interface ComplaintComment {
  id: string
  text: string
  username: string
}

export interface AnalyticsItem {
  name: string
  uv: number
  pv: number
  amt: number
}
