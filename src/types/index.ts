export type userDetailsType = {
  email: string
  password: string
}

export type loggedInUserType = {
  id?: number
  email: string
  details: {
    name: string
    sent: number
    clicked: number
    opened: number
    replied: number
    positive_reply: number
  }[]
}
