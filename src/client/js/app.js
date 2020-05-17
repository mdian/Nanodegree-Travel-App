/* Global Variables */

const url = ' http://api.geonames.org/searchJSON?Formatted=true&q=';
const username = '&username=mdian';
const weatherkey = '&key=195239d3db83400a8ebcc9dcfd252887';
const weatherurl = 'https://api.weatherbit.io/v2.0/current?';
const pixakey = '16494961-0469ad4283b8d110ec2df8ef7';
const pixaurl = 'https://pixabay.com/api/';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
let result = {}

const performAction = async () => {
    const location = document.getElementById('location').value;
    const loading = document.getElementById('loading')
    loading.innerHTML = 'please wait..';
    await Client.getdata(url, username, location)
        .then(function (data) {
            console.log(data)
            result = {
                lat: data.geonames[0].lat,
                lng: data.geonames[0].lng,
                countryname: data.geonames[0].countryName,
                name: data.geonames[0].name
            }

        })

    await Client.getweather(weatherurl, weatherkey, result)
        .then(res => {
            console.log(res.data[0].weather.description)
            result.weather = res.data[0].weather.description
        })
    await Client.getpixa(pixaurl, pixakey, result)
        .then(res => {
            result.imgurl = res.hits[0].webformatURL
            console.log(res)

        })

    await Client.senddata('http://localhost:9000/adddata', result)
    Client.updateUI()

}

export default performAction;