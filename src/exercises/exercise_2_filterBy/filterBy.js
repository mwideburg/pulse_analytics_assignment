export default function filterBy(data, searchTerm, keys) {
  let filteredData = []
  data.forEach(dataObj =>{
    //iterate through data
    for(let i = 0; i < keys.length; i++){
      // using for loop so we can break it once we find a match in keys
      let key = keys[i]

      const toSearch = dataObj[key].split(' ').map(word => word.toLowerCase())
      toSearch.forEach(ele => {
        if(ele.includes(searchTerm.toLowerCase())){
          filteredData.push(dataObj)
          // break the loop
          i = keys.length;
        }
      })
    }
  })

  return filteredData
}
