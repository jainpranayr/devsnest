export const kFormatter = (num: number): number | string => {
  if (Math.abs(num) > 999) {
    return (Math.sign(num) * Math.abs(num)) / 1000 + 'k'
  } else {
    return Math.sign(num) * Math.abs(num)
  }
}

export const Capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
