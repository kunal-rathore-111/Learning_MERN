

// axios-

const axios = require('axios');

async function main() {

    await axios({
        url: "https://httpdump.app/dumps/44f91be2-3612-40b9-8e7c-205e959093af",
        method: "POST",
        data: { work: "student", class: "2nd" },
        headers: { username: "Panda", password: "2343", age: "15" },
    });

}

main();