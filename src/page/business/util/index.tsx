import BigNumber from "bignumber.js"

export const isEmpty = (value: any) => ['undefined', 'null', 'NaN', ''].includes(String(value)) && !Array.isArray(value)

export const formatPrice = (price: string) => {
  if (price) {
    return price.split('.')
  }

  return []
}

export const handlePrice = (price, isNeedSuffix) => {
  const len = price.toString().length

  const newPrice = new BigNumber(price).dividedBy(len >= 7 && isNeedSuffix ? 1000000 : 100)

  const element = newPrice.toString()

  if (!isEmpty(element.split('.')[1])) {
    const decimal = element.split('.')[1]
    if (decimal.length === 1) {
      return `${new BigNumber(element).toFixed(1)}${len >= 7 && isNeedSuffix ? '万' : ''}`
    } else {
      const result = decimal.substring(0, 2)
      if (new BigNumber(result).toNumber() === 0) {
        return `${element.split('.')[0]}${len >= 7 && isNeedSuffix ? '万' : ''}`
      } else {
        return `${element.split('.')[0]}.${result}${len >= 7 && isNeedSuffix ? '万' : ''}`
      }
    }
  }

  return `${element}${len >= 7 && isNeedSuffix ? '万' : ''}`
}
