const express = require('express');
const haversine = require('haversine');

const app = express();
app.use(express.json());

const port = 3000; // Choose any port that is free on machine

app.post('/calculate-distance', (req, res) => {
  const { user_latitude, user_longitude, restaurant_latitude, restaurant_longitude } = req.body;

  const start = {
    latitude: user_latitude,
    longitude: user_longitude,
  };

  const end = {
    latitude: restaurant_latitude,
    longitude: restaurant_longitude,
  };

  const distance = haversine(start, end, { unit: 'mile' });

  res.json({ distance: `${distance} miles` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
