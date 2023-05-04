// We need to make an api call
const cityData = async function() {
    try {
        const res = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=Philadelphia&limit=1&appid=a51d82057e5f4a39cb1b6b1cd1cb0032")
        const data = await res.json()
        return data[0]
    } catch(error) {
        console.log("Data is unavailable",error)
    }
    
}

let weather = cityData()
weather.then(function(value) {
    // console.log(value)
    let lonlat = [value.lat, value.lon]
    return lonlat
})
.catch(function(error) {
    console.log("Promise data error",error)
})

console.log(weather)