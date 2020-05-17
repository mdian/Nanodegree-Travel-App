const updateUI = async () => {
    const depdate = document.getElementById('depart').value;
    const remain = document.getElementById('remain');
    const days = document.getElementById('days');
    /*********************/
    var date1 = new Date();
    var date2 = new Date(depdate);

    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let result = Difference_In_Days.toFixed(0);
    remain.innerHTML = "The remaining days of the trip";
    days.innerHTML = result + ' days';
    console.log('yes', result)

    /*********************/

    const req = await fetch('http://localhost:9000/getdata')
    try {
        const data = await req.json();
        document.getElementById('name').innerHTML = `country: ${data[0].name}-${data[0].countryNames}`;
        document.getElementById('coords').innerHTML = `Coords  lat: ${data[0].lats} - lng: ${data[0].lngs}`
        document.getElementById('weather').innerHTML = `weather: ${data[0].weather}`;

        document.getElementById('img').src = `${data[0].imgurl}`;
        document.getElementById('img').alt = `${data[0].name}`;
        const loading = document.getElementById('loading')
        loading.innerHTML = '';

    } catch (error) {
        console.log('error: ' + error);

    }

}
export {
    updateUI
}