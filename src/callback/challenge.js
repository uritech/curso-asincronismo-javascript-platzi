let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'
function fetchData (url_api, callback){
    let xhttp = new XMLHttpRequest();
    //Pedimos los datos a nuestra api, en el primer parámetro le indicamos que será una petición GET,
    //El segundo parámetro enviamos la url a la que accederemos, el tercer parámetro le indicamos que se activará el asincronismo
    //Por default es TRUE.
    xhttp.open('GET', url_api, true);
    //Escuchamos los datos que nos entrega la api y validamos los datos
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            //Validamos que el status del HTTP sea un 200
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback (error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
        fetchData (data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log('Numero de Personajes: ', data1.info.count);
            console.log('Nombre del primer personaje: ',data2.name);
            console.log('Nombre de la dimension: ', data3.dimension);
        })
    })
})

