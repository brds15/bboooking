const checkIsAnyNumber = (value: string | number): number | undefined => {
  if (typeof value === 'number') {
    return value
  }

  const parsed = parseFloat(value)
  if (!Number.isNaN(parsed) && parsed >= 0) {
    return parsed
  }

  return undefined
}

export default checkIsAnyNumber
