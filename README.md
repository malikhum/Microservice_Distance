# Microservice_Distance

## Requesting Data

To request data from the microservice, send a POST request to the `/calculate-distance` endpoint with JSON payload containing the latitude and longitude of the user and the restaurant.

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

### Example JSON Response

```json
{
  "distance": "5.678 miles"
}
