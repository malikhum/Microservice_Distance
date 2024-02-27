# Microservice_Distance

## Requesting Data

To interact with the microservice, you will need to make an HTTP POST request to the /calculate-distance endpoint. This request must include a JSON payload with four key-value pairs representing the latitude and longitude of both the user's location and the restaurant's location.

Here's how you can programmatically create such a request using Node.js and the Axios library:

### Example POST Request

```json
POST /calculate-distance HTTP/1.1
Host: [Microservice URL]
Content-Type: application/json

{
  "user_latitude": 40.7128,
  "user_longitude": -74.0060,
  "restaurant_latitude": 40.730610,
  "restaurant_longitude": -73.935242
}

```

### Receiving Data

When you make a request to the microservice, you will receive a JSON response. If the request was successful, the response will contain a distance key with the calculated distance as its value.

Here is an example of how to handle a successful response in Node.js:

```json

axios.post('http://[Microservice URL]/calculate-distance', requestData)
  .then(response => {
    // Handle success
    console.log('Distance:', response.data.distance);
  })
  .catch(error => {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error:', error.response.data.error);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
  });

```

### Example JSON Response

```json
{
  "distance": "5.678 miles"
}
