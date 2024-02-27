// test.js
const axios = require('axios');

// Predefined list of restaurants with their coordinates
const restaurants = [
  { name: "Restaurant A", latitude: 40.730610, longitude: -73.935242 },
  { name: "Restaurant B", latitude: 40.732610, longitude: -73.935242 },
  // Add more restaurants as needed
];

// Simulated user coordinates (can be dynamically set as per real user location in an actual scenario)
const userLatitude = 40.7128;
const userLongitude = -74.0060;

async function testDistanceCalculation() {
  try {
    console.log("Calculating distances to restaurants from user location...");
    for (let restaurant of restaurants) {
      const response = await axios.post('http://localhost:3000/calculate-distance', {
        user_latitude: userLatitude,
        user_longitude: userLongitude,
        restaurant_latitude: restaurant.latitude,
        restaurant_longitude: restaurant.longitude,
      });

      console.log(`${restaurant.name} Distance:`, response.data.distance);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testDistanceCalculation();
