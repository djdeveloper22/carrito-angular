export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    cantidad: number,
    category: {
      id: number,
      name: string,
      image: string
    },
    images: []
}
