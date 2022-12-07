import axios from 'axios';

// set up the request parameters
const params = {
    api_key: "549FF70A1538432F930EA02F4D892E85",
      amazon_domain: "amazon.com",
      asin: "B073JYC4XM",
      type: "product",
      include_html: "false",
      output: "json",
      currency: "usd",
      language: "en_US"
    }
    
    // make the http GET request to Rainforest API
    axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {
        

        // print the JSON response from Rainforest API
        // console.log(JSON.stringify(response.data, 0, 2));
        
        const price = response.data.product.buybox_winner.price.value;
        const image = response.data.product.main_image.link;
        console.log(image);

      }).catch(error => {
    // catch and print the error
    console.log(error);
    })