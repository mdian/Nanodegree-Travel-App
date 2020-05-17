const getpixa = async (pixaurl, pixakey, result) => {
    const cityendpoit = `${pixaurl}?key=${pixakey}&q=${result.name}&image_type=photo`
    const countryendpoit = `${pixaurl}?key=${pixakey}&q=${result.countryname}&image_type=photo`
    console.log("urlofpixa:", cityendpoit)
    const res = await fetch(cityendpoit);
    try {
        const dataweather = await res.json();

        //Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
        if (dataweather.hits.length < 1) {
            const res = await fetch(countryendpoit);
            try {
                const dataweather = await res.json();
                return dataweather;
            } catch (error) {}
        }
        return dataweather;

    } catch (error) {
        console.log('error: ' + error);


    }
}
export {
    getpixa
}