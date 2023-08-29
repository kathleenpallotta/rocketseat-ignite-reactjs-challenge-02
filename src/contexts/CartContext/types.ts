export interface Product {
  title: string
  value: number
  image: string
  id: number
  quantity: number
}

export interface CartContextType {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}
