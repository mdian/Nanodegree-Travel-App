const getdata = async (url, username, location) => {
    console.log("url:" + url + location + username)
    const res = await fetch(url + location + username);
    try {
        const data = await res.json();
        return data;

    } catch (error) {
        console.log('error: ' + error);
    }
}
export {
    getdata
}