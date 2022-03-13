import { IconType } from 'react-icons'

export type Category = {
  title: string
  slug: string
  image: string
  icon: IconType
}

export type Course = {
  title: string
  id: string
  image: string
  description: string
  rating: number
  category: string
  students_enrolled: number
  total_seats: number
  seats_available: number
  duration: string
  price: number
}

export type Service = {
  name: string
  description: string
  icon: IconType
}

export type Footer = {
  name: string
  href: string
  icon: IconType
}

export type NavLinks = {
  name: string
  href: string
}

export type Testimonial = {
  text: string
  author: string
  image: string
}
