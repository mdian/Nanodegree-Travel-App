const getweather = async (weatherurl, weatherkey, objinfo) => {
    const endpoit = `${weatherurl}lat=${objinfo.lat}&lon=${objinfo.lng}${weatherkey}`
    console.log("urlofweather:" + endpoit)
    const res = await fetch(endpoit);
    try {
        const dataweather = await res.json();
        return dataweather;

    } catch (error) {
        console.log('error: ' + error);
    }
}
export {
    getweather
}