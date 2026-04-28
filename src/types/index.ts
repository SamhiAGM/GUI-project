export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  stock: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: number
  name: string
  email: string
  password: string
}
