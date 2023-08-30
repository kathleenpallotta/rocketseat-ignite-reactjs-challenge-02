// assets
import ExpressoTradicional from '../../../../assets/images/products/Type=Expresso.png'
import ExpressoAmericano from '../../../../assets/images/products/Type=Americano.png'
import ExpressoCremoso from '../../../../assets/images/products/Type=Expresso Cremoso.png'
import ExpressoGelado from '../../../../assets/images/products/Type=Café Gelado.png'
import CafeComLeite from '../../../../assets/images/products/Type=Café com Leite.png'
import Latte from '../../../../assets/images/products/Type=Latte.png'
import Capuccino from '../../../../assets/images/products/Type=Capuccino.png'
import Macchiato from '../../../../assets/images/products/Type=Macchiato.png'
import Mocaccino from '../../../../assets/images/products/Type=Mochaccino.png'
import ChocolateQuente from '../../../../assets/images/products/Type=Chocolate Quente.png'
import Cubano from '../../../../assets/images/products/Type=Cubano.png'
import Havaiano from '../../../../assets/images/products/Type=Havaiano.png'
import Arabe from '../../../../assets/images/products/Type=Árabe.png'
import Irlandes from '../../../../assets/images/products/Type=Irlandês.png'

// types
import { ProductProps } from '../../components/Product/types'

export const COFFEE_TYPES = {
  1: 'Tradicional',
  2: 'Com leite',
  3: 'Gelado',
  4: 'Especial',
  5: 'Alcoólico',
}

export const PRODUCTS_LIST: ProductProps[] = [
  {
    id: 1,
    description: 'O tradicional café feito com água quente e grão moídos',
    image: ExpressoTradicional,
    labels: [COFFEE_TYPES[1]],
    title: 'Expresso Tradicional',
    value: 9.9,
  },
  {
    id: 2,
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: ExpressoAmericano,
    labels: [COFFEE_TYPES[1]],
    title: 'Expresso Americano',
    value: 9.9,
  },
  {
    id: 3,
    description: 'Café expresso tradicional com espuma cremosa',
    image: ExpressoCremoso,
    labels: [COFFEE_TYPES[1]],
    title: 'Expresso Cremoso',
    value: 9.9,
  },
  {
    id: 4,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: ExpressoGelado,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[3]],
    title: 'Expresso Gelado',
    value: 9.9,
  },
  {
    id: 5,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: CafeComLeite,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[2]],
    title: 'Café com Leite',
    value: 9.9,
  },
  {
    id: 6,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Latte,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[2]],
    title: 'Latte',
    value: 9.9,
  },
  {
    id: 7,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: Capuccino,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[2]],
    title: 'Capuccino',
    value: 9.9,
  },
  {
    id: 8,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: Macchiato,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[2]],
    title: 'Macchiato',
    value: 9.9,
  },
  {
    id: 9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mocaccino,
    labels: [COFFEE_TYPES[1], COFFEE_TYPES[2]],
    title: 'Mocaccino',
    value: 9.9,
  },
  {
    id: 10,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuente,
    labels: [COFFEE_TYPES[4], COFFEE_TYPES[2]],
    title: 'Chocolate Quente',
    value: 9.9,
  },
  {
    id: 11,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Cubano,
    labels: [COFFEE_TYPES[4], COFFEE_TYPES[5], COFFEE_TYPES[3]],
    title: 'Cubano',
    value: 9.9,
  },
  {
    id: 12,
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Havaiano,
    labels: [COFFEE_TYPES[4]],
    title: 'Havaiano',
    value: 9.9,
  },
  {
    id: 13,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Arabe,
    labels: [COFFEE_TYPES[4]],
    title: 'Árabe',
    value: 9.9,
  },
  {
    id: 14,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Irlandes,
    labels: [COFFEE_TYPES[4], COFFEE_TYPES[5]],
    title: 'Irlandês',
    value: 9.9,
  },
]
