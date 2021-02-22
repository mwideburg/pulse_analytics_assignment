export default function uniqueBy(data, key) {
  // * Write function here
  let uniqueData = {}
  data.forEach(obj => {
    uniqueData[obj[key]] = obj
  })
  return Object.values(uniqueData)
}
