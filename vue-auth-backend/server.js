const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const userData = req.body;
  console.log('Received data:', userData);

  // Save data to database (example)
  // const newUser = new User(userData);
  // newUser.save()
  //   .then(() => res.status(201).json({ message: 'User data saved successfully!' }))
  //   .catch(err => res.status(500).json({ error: 'Failed to save user data', details: err }));

  res.status(201).json({ message: 'User data received successfully!', data: userData });
});

module.exports = router;
