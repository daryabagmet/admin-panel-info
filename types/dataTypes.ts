export interface Complaint {
  id: string
  subject: string
  body: string
  doctor: string
  date: string
  results: ComplaintResult[]
  prescriptions: string;
}

export interface ComplaintResult {
  id: string
  title: string
  result: string
  doctor: string
  date: string
}

export interface AnalyticsItem {
  name: string
  uv: number
  pv: number
  amt: number
}
