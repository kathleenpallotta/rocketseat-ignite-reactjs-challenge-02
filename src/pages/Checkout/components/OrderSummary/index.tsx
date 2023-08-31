import { useContext } from 'react'

// components
import { Button } from '@/components/Button'
import { Product } from '@/components/Product'
import { Card, Footer, TotalSum, Totals, TotalsRow } from './styles'

// constants
import { DELIVERY_FEE } from '@/constants/values'

// contexts
import { CartContext } from '@/contexts/CartContext'

// helpers
import { convertToBRLCurrency } from '@/helpers/format'

export function OrderSummary() {
  const { products } = useContext(CartContext)

  function getTotalInItems() {
    return products.reduce((total, currentProduct) => {
      return total + currentProduct.quantity * currentProduct.value
    }, 0)
  }

  return (
    <Card>
      <div>
        {products.map((item, idx) => (
          <Product
            id={item.id}
            image={item.image}
            value={item.value}
            quantity={item.quantity}
            title={item.title}
            key={`products_summary_list_item_${idx}`}
            shortVersion
          />
        ))}
      </div>
      <TotalsRow>
        <Totals>
          <span>Total de itens</span>
          <span>R$ {convertToBRLCurrency(getTotalInItems())}</span>
        </Totals>
        <Totals>
          <span>Entrega</span>
          <span>R$ {convertToBRLCurrency(DELIVERY_FEE)}</span>
        </Totals>
      </TotalsRow>
      <Footer>
        <TotalSum>
          <span>Total</span>
          <span>
            R$ {convertToBRLCurrency(getTotalInItems() + DELIVERY_FEE)}
          </span>
        </TotalSum>
        <Button
          disabled={!products.length}
          label="Confirmar pedido"
          type="primary"
        />
      </Footer>
    </Card>
  )
}
