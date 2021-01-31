const fetchYelp = async () => {
    let chosenName = localStorage.getItem('chosenName')
    let latitude = localStorage.getItem('lat')
    let longitude = localStorage.getItem('lon')
    const myParams = {"term": chosenName, "latitude": latitude, "longitude": longitude}
    let url = new URL('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search')
    url.search = new URLSearchParams(myParams)
    console.log(url.toString())
    const res = await fetch(url, {headers: {'Authorization': 'Bearer 1oLYc5PCEWVwWuK6aM7G1_vjHJfZqWqfSkx9-SrFK3x5Uc6kT1cXXIw6rVwgKvolQsS7aSpaYt336gO3wpIErXBHrQbC0Pp-9TgjA7mVYwolLBzgkvbBE8A2YPsUYHYx'}}) 
    const data = await res.json();
    let size = Object.keys(data.businesses).length;
    let randomInt = Math.floor(Math.random()*size) 
    let numArray = []
    numArray.push(randomInt) 
    document.getElementById('restaurant1name').innerHTML = data.businesses[randomInt]['name']
    document.getElementById('restaurant1info').innerHTML = data.businesses[randomInt]['location']['display_address']
    localStorage.setItem('address1', data.businesses[randomInt]['location']['display_address'])
    let randomInt2 = Math.floor(Math.random()*size)  
    while (numArray.indexOf(randomInt2) > -1){
        randomInt2 = Math.floor(Math.random()*size)  
    }
    numArray.push(randomInt2) 
    document.getElementById('restaurant2name').innerHTML = data.businesses[randomInt2]['name']
    document.getElementById('restaurant2info').innerHTML = data.businesses[randomInt2]['location']['display_address']
    localStorage.setItem('address2', data.businesses[randomInt2]['location']['display_address'])
    let randomInt3 = Math.floor(Math.random()*size)  
    while (numArray.indexOf(randomInt3) > -1){
        randomInt3 = Math.floor(Math.random()*size)  
    }
    numArray.push(randomInt3)
    console.log(numArray) 
    document.getElementById('restaurant3name').innerHTML = data.businesses[randomInt3]['name']
    document.getElementById('restaurant3info').innerHTML = data.businesses[randomInt3]['location']['display_address']  
    localStorage.setItem('address3', data.businesses[randomInt3]['location']['display_address'])
}   


document.onload = fetchYelp()