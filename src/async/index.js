const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Do something Async'), 3000)
            : reject (new Error ('Test Error'))
    });
}

// Antes de generar nuestra arrow function es donde debemos poner nuestra palabra reservada async
const doSomething = async () => {
    //Con await indicamos que tenemos que esperar a que suceda en este caso nuestra funcion doSomethingAsync();
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


// Para capturar nuestros errores y presentarlos

const anotherFunction = async () => {
    try{
        //Pausa el siguiente bloque de codigo que tengamos hasta que esta promesa tenga un resultado
        const something = await doSomethingAsync();
        console.log(something);
    } catch (err) {
        console.error(err);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');