export const convertToBRLCurrency = (value: number) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}
