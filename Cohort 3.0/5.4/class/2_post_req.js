


// axios vs fetch

//fetch
async function main1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: "POST" });
    const jsonResponse = await response.text();
    console.log(jsonResponse);
}

main1();


//axios

const axios = require("axios");

async function main2() {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
}

main2();