require('dotenv').config();
const { MongoClient } = require('mongodb');
const { Router } = require('express');

const router = Router();

const client = new MongoClient(process.env.DDBB256);
const dbName = 'prueba-Sept-14';
const collections = {
  XD: 'XD',
};

router.get('/', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.XD);
  const result = await collection.find({}).toArray();
  res.send(result);
  client.close();
});

module.exports = router;
