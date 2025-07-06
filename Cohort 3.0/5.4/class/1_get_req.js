


// axios vs fetch

//fetch
async function main1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonResponse = await response.json();

    console.log(`jsonResponse by using FETCH ${JSON.stringify(jsonResponse)}`);
}

main1();


//axios

const axios = require("axios");

async function main2() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    console.log(`jsonResponse using AXIOS ${JSON.stringify(response.data)}`);
}

main2();