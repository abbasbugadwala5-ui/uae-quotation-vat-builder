
export const calculateVAT = (amount) => {
  const vat = amount * 0.05
  return {
    vat,
    total: amount + vat
  }
}
