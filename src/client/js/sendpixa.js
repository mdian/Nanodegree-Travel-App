//send data to server

const sendpixa = async (url = '', data = {}) => {
    const sendnewdata = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newdata = await sendnewdata.json();
        return newdata;
    } catch (error) {
        //  console.log('error'+error);

    }
}

export {
    sendpixa
}