// Setup empty array to act as endpoint for all routes
let projectData = []; // here i have used array to push the all data direct
let savedata = {}

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Start up an instance of app
const app = express();
const port = 9000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// get route
// app.get('/', (req, res) => {
//     res.send('hellow mdian')

// })

app.get('/getdata', (reg, res) => {
    res.send(projectData);
    projectData = [];
});

//post route
app.post('/adddata', (req, res) => {
    const newdata = {
        lats: req.body.lat,
        lngs: req.body.lng,
        countryNames: req.body.countryname,
        name: req.body.name,
        weather: req.body.weather,
        imgurl: req.body.imgurl
    };
    savedata.lat = req.body.lat
    savedata.lng = req.body.lng
    savedata.name = req.body.name
    savedata.countryname = req.body.countryname
    savedata.weather = req.body.weather
    savedata.imgurl = req.body.imgurl

    console.log('thee name:' + savedata.name)
    console.log('thee name:' + savedata.weather)
    res.send(savedata)
    projectData.push(newdata);

    console.log(projectData);

});

app.listen(port, (reg, res) => {
    console.log(`the server is running on port ${port}`);
});

module.exports = app; // very important to  work jesting tests