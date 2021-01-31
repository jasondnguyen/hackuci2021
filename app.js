let database = [
    {"name": "pizza","link": "https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg"}, 
    {"name": "pizza", "link": "https://houseofnasheats.com/wp-content/uploads/2020/05/Cast-Iron-Pan-Pizza-24.jpg"},
    {"name": "spaghetti", "link": "https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4.jpg"},
    {"name": "fried rice", "link": "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg"},
    {"name": "fried rice", "link": "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg"},
    {"name": "fried rice", "link": "https://www.acouplecooks.com/wp-content/uploads/2020/06/Fried-Rice-007.jpg"},
    {"name": "curry", "link": "https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormickcan/recipes/tablet/thai_yellow_curry_chicken_800.jpg"},
    {"name": "hamburger", "link": "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg "},
    {"name": "hamburger", "link": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_hambugers1.jpg.rend.hgtvcom.616.462.suffix/1558017418187.jpeg"}, 
    {"name": "hamburger", "link": "https://platedcravings.com/wp-content/uploads/2020/04/Air-Fryer-Hamburger-Plated-Cravings-5.jpg"},
    {"name": "french fries", "link": "https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg"},
    {"name": "chili fries", "link": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/3/13/0/sh0703_fries.jpg.rend.hgtvcom.826.620.suffix/1371585896219.jpeg"},
    {"name": "tacos", "link": "https://s23209.pcdn.co/wp-content/uploads/2019/08/Easy-Chicken-TacosIMG_9890.jpg"}, 
    {"name": "tacos", "link": "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg"},
    {"name": "tacos", "link": "https://www.dinneratthezoo.com/wp-content/uploads/2016/04/pork-tacos-4.jpg"},
    {"name": "tacos", "link": "https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg"},
    {"name": "hot wings", "link": "https://hips.hearstapps.com/hmg-prod/images/classic-buffalo-wings-horizontal-279-1547506077.jpg"},
    {"name": "hot wings", "link": "https://barbecuebible.com/wp-content/uploads/2017/05/featured-nashville-hot-wings-1024x577.jpg"},
    {"name": "hot wings", "link": "https://www.simplyrecipes.com/wp-content/uploads/2013/01/Buffalo-Wings-LEAD-1.jpg"},
    {"name": "ice cream", "link": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216744.jpg?output-format=auto&output-quality=auto"},
    {"name": "ramen", "link": "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"},
    {"name": "sushi", "link": "https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/source/rev-97d867a/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"},
    {"name": "hot pot", "link": "https://mykoreankitchen.com/wp-content/uploads/2017/06/3.-Korean-Hot-Pot-with-Dumplings.jpg"}, 
    {"name": "boba", "link": "https://cdn.shopify.com/s/files/1/1771/2939/products/VintageMilkTeawBoba-1_50fd616c-339e-4e96-bb13-ae470753a64d_1024x1024.jpg?v=1585511204"},
    {"name": "pho", "link": "https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg"}, 
    {"name": "pho", "link": "https://1bqu1qjqw3y3g50yf4cszxnd-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Chicken-Pho-1024x896.png"},
    {"name": "pho", "link": "https://www.simplyrecipes.com/wp-content/uploads/2019/04/Beef-Pho-LEAD-2.jpg"},
    {"name": "egg roll", "link": "https://leaf.nutrisystem.com/wp-content/uploads/2017/11/cheeseburger-egg-roll.jpg"},
    {"name": "fried chicken", "link": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg"},
    {"name": "fried chicken", "link": "https://media4.s-nbcnews.com/i/newscms/2020_09/1543282/chicken-fingers-today-main-200227_c73e99947f638328a263407fb90a9dc8.jpg"},
    {"name": "fried chicken", "link": "https://media.gq.com/photos/5b4fb4c9b3161f214d1a079e/4:3/w_1440,h_1080,c_limit/fried-chicken-summer-gq.jpg"},
    {"name": "fish", "link": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/3/tm1b24_fish_fry.jpg.rend.hgtvcom.826.620.suffix/1547589315824.jpeg"}, 
    {"name": "fish", "link": "https://cdn.cdnparenting.com/articles/2020/04/28172944/Grilled-Fish-Recipe.jpg"},
    {"name": "fish", "link": "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg"},
    {"name": "mac and cheese", "link": "https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg"},
    {"name": "burrito", "link": "https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos-760x569.jpg"},
    {"name": "salad", "link": "https://www.olivetomato.com/wp-content/uploads/2019/12/Green-salad-with-feta.jpeg"},
    {"name": "salad", "link": "https://cafedelites.com/wp-content/uploads/2017/02/Avocado-Greek-Salad-Greek-Dressing-FINAL-5-1.jpg"},
    {"name": "sushi", "link": "https://www.nippon.com/en/ncommon/contents/japan-data/169591/169591.jpg"},
    {"name": "sushi", "Link": "https://savorjapan.com/gg/content_image/t0330_005.jpg"}]   
let chosenName = 'pizza'

skipButton = document.getElementById('skipButton')
mapButton = document.getElementById('mapButton')

function newPic(){
    let size = Object.keys(database).length;
    let randomInt = Math.floor(Math.random()*size)
    let name = database[randomInt]['name']
    let link = database[randomInt]['link']
    var img = document.getElementById('pic');
    img.src = link;
    chosenName = name
    localStorage.setItem('chosenName', chosenName)
}

function mapRedirect() {
    localStorage.setItem('chosenName', chosenName)
    location.href = "map.html"
} 

skipButton.addEventListener('click', newPic)

mapButton.addEventListener('click', mapRedirect)

function getLatLng(map2) {
    var pos = { lat: 33.640495180719846, lng: -117.84428547343873 }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            localStorage.setItem('lat', position.coords.latitude)
            localStorage.setItem('lon', position.coords.longitude)
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map2.setCenter(pos)
            return pos
            },
        );
    }
    return pos;
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        scrollwheel: false,
        zoomControl: false,
        navigationControl: false, 
        mapTypeControl: false, 
        scaleControl: false, 
        draggable: false,
        disableDefaultUI: true,
        center: pos
    });
    var pos = getLatLng(map);
    const test = {lat: 33.758060799999996, lng: -117.9600352}
    for(i = 1; i < 4; i++){
        var address = localStorage.getItem('address' + i).replace(/ /g, "+")
        console.log(address)
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAIaqZXCHledPTJ1pfyC0gqkfiHpbQIvAE" 
        
        const res = await fetch(url)
        const data = res.json()

        
        addMarker(test, map);
    }
}

function addMarker(location, map) {
    new google.maps.Marker({
      position: location,
      //label: labels[labelIndex++ % labels.length],
      label: "A",
      map: map
  });
}

document.onload = initMap()

