export interface Product {
  title: string
  value: number
  image: string
  id: number
  quantity: number
}

export interface Address {
  zipcode: number | null
  street: string | null
  number: number | null
  complement?: string | null
  neighborhood: string | null
  city: string | null
  statecode: string | null
}

export interface CartContextType {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  address: Address
  setAddress: React.Dispatch<React.SetStateAction<Address>>
  paymentMethod?: string
  setPaymentMethod: React.Dispatch<React.SetStateAction<string | undefined>>
  orderSuccessful: boolean
  setOrderAsSuccesful: React.Dispatch<React.SetStateAction<boolean>>
}
