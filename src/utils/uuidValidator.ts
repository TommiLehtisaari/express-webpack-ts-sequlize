export default (uuid: String | Array<String>) => {
  // uuid validation regex from:
  // https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
  const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

  if (Array.isArray(uuid)) {
    uuid.forEach((value: string) => {
      if (!regex.test(value)) return false
    })
    return true
  } else if (typeof uuid === 'string') {
    return regex.test(uuid)
  } else {
    return false
  }
}
