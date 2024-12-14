const axios = require('axios');

const url = process.env.CONSUMER1

axios.get(url)
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error al realizar la petición:', error);
  });

