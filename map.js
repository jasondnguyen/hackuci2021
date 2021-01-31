let lat1 = ''
let lat2 = ''
let lat3 = ''

let lon1 = ''
let lon2 = ''
let lon3 = ''

const fetchYelp = async () => {
    let chosenName = localStorage.getItem('chosenName');
    let longitude = localStorage.getItem('lon');
    let latitude = localStorage.getItem('lat');
    const myParams = { "term": chosenName, "latitude": latitude, "longitude": longitude };
    let url = new URL('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search');
    url.search = new URLSearchParams(myParams)
    const res = await fetch(url, { headers: { 'Authorization': 'Bearer 1oLYc5PCEWVwWuK6aM7G1_vjHJfZqWqfSkx9-SrFK3x5Uc6kT1cXXIw6rVwgKvolQsS7aSpaYt336gO3wpIErXBHrQbC0Pp-9TgjA7mVYwolLBzgkvbBE8A2YPsUYHYx' } })
    const data = await res.json();
    let size = Object.keys(data.businesses).length;
    let randomInt = Math.floor(Math.random() * size)
    let numArray = []
    numArray.push(randomInt)
    console.log(data.businesses)
    lat1 = data.businesses[randomInt]['coordinates']['latitude']
    lon1 = data.businesses[randomInt]['coordinates']['longitude']
    document.getElementById('restaurant1name').innerHTML = data.businesses[randomInt]['name']
    document.getElementById('restaurant1info').innerHTML = data.businesses[randomInt]['location']['display_address']
    document.getElementById('restaurant1phone').innerHTML = data.businesses[randomInt]['display_phone']
    let randomInt2 = Math.floor(Math.random() * size)
    while (numArray.indexOf(randomInt2) > -1) {
        randomInt2 = Math.floor(Math.random() * size)
    }
    numArray.push(randomInt2)
    lat2 = data.businesses[randomInt2]['coordinates']['latitude']
    lon2 = data.businesses[randomInt2]['coordinates']['longitude']
    document.getElementById('restaurant2name').innerHTML = data.businesses[randomInt2]['name']
    document.getElementById('restaurant2info').innerHTML = data.businesses[randomInt2]['location']['display_address']
    document.getElementById('restaurant2phone').innerHTML = data.businesses[randomInt2]['display_phone']
    let randomInt3 = Math.floor(Math.random() * size)
    while (numArray.indexOf(randomInt3) > -1) {
        randomInt3 = Math.floor(Math.random() * size)
    }
    numArray.push(randomInt3)
    lat3 = data.businesses[randomInt3]['coordinates']['latitude']
    lon3 = data.businesses[randomInt3]['coordinates']['longitude']
    document.getElementById('restaurant3name').innerHTML = data.businesses[randomInt3]['name']
    document.getElementById('restaurant3info').innerHTML = data.businesses[randomInt3]['location']['display_address']
    document.getElementById('restaurant3phone').innerHTML = data.businesses[randomInt3]['display_phone']
}

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 13,
//         scrollwheel: false,
//         zoomControl: false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         draggable: false,
//         disableDefaultUI: true,
//         center: pos
//     });
//     var pos = getLatLng(map);
//     /*const test = {lat: 33.758060799999996, lng: -117.9600352}
//     // for(i = 1; i < 4; i++){
//     console.log(localStorage.getItem('address1'))
//     var address = localStorage.getItem('address1').replace(/ /g, "+")
//     console.log(address)
//     var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAIaqZXCHledPTJ1pfyC0gqkfiHpbQIvAE" 
//         // console.log(url)
//     const res = await fetch(url)
//     const data = res.json()
//         // console.log(typeof(data))
//         // console.log(JSON.stringify(data))
//         // console.log("json okokok")
//     console.log(data)
//         // console.log(data['results']['0']['geometry']['location']['lat'])
//         // console.log(data['results']['0']['geometry']['location']['lng'])
//      */
//     const test = { lat: 33.758060799999996, lng: -117.9600352 }
//     addMarker(test, map)
//     console.log(typeof (lat1))
//     console.log(lat1)
//     lat1int = parseFloat(lat1, 10);
//     console.log(lat1int)
//     const loc1 = { lat: parseInt(lat1, 10), lng: parseInt(lon1, 10) }
//     const loc2 = { lat: parseInt(lat2, 10), lng: parseInt(lon2, 10) }
//     const loc3 = { lat: parseInt(lat3, 10), lng: parseInt(lon3, 10) }
//     addMarker(loc1, map);
//     addMarker(loc2, map);
//     addMarker(loc3, map);
//     //}
// }

// function addMarker(location, map) {
//     new google.maps.Marker({
//         position: location,
//         //label: labels[labelIndex++ % labels.length],
//         label: "A",
//         map: map
//     });
// }
document.onload = fetchYelp()
document.onload = initMap()



