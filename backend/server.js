import Fastify from 'fastify';
import { Mongoose } from 'mongoose';

// backend/server.js

const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/feedback-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a feedback schema
const Feedback = mongoose.model('Feedback', {
  id: String,
  rating: String,
  text: String
});

// Create a route to handle CRUD operations
fastify.get('/api/feedback', async (request, reply) => {
  try {
    const feedbacks = await Feedback.find();
    return feedbacks;
  } catch (err) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Run the server
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
