let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        //Escuchamos los datos que nos entrega la api y validamos los datos
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve (JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    }); 
}

//De esta forma exportamos un modulo en node.js
module.exports = fetchData;