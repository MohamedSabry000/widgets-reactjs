import axios from "axios";

export default axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php',
    crossDomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'

    },
    params: {
        action: "query",
        list: 'search',
        origin: '*',
        format: 'json'
    }
})

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming