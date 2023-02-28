const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.get('/flights', (req, res) => {
    const options = {
        url: 'https://8539fbcf-bac2-45fa-bad8-307125861780-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures?page-size=6',
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': 'AstraCS:oiXeQiNxtOzzDZrvxqkAjRSa:0411510411b5c2a0fae9ad3ddc3c772ca97e5e16ffc58177d9ba9cecfcb05381' 
        }
    }

    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(PORT, () => console.log('running on port' + PORT))