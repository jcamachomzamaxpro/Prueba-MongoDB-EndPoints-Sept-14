require('dotenv').config();
const { MongoClient } = require('mongodb');
const { Router } = require('express');

const router = Router();

const client = new MongoClient(process.env.DDBB256);
const dbName = 'prueba-Sept-14';
const collections = {
  usuario: 'usuario',
  cita: 'cita',
  tipo_documento: 'tipo_documento',
  especialidad: 'especialidad',
  medico: 'medico',
  genero: 'genero',
  estado_cita: 'estado_cita',
  acudiente: 'acudiente',
  consultorio: 'consultorio',
};

router.get('/endpoint-1', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.usuario);
  const result = await collection
    .aggregate([{ $sort: { usu_nombre: 1 } }])
    .toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-2/:fecha', async (req, res) => {
  const fecha = req.params.fecha;

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.cita);
  const result = await collection.find({ cit_fecha: fecha }).toArray();
  res.send(result);
  console.log(fecha);
  client.close();
});

router.get('/endpoint-3/:especialidad', async (req, res) => {
  const especialidad = req.params.especialidad;

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.medico);
  const result = await collection
    .find({ med_especialidad: especialidad })
    .toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-4/:telefono', async (req, res) => {
  const telefono = req.params.telefono;

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.cita);
  const cel = Number(telefono);
  const result = await collection
    .find({ 'cit_datosUsuario.usu_telefono': cel })
    .toArray();
  res.send(result);
  console.log(cel);
  client.close();
});

router.get('/endpoint-5/:medico', async (req, res) => {
  const medico = req.params.medico;

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.cita);
  const result = await collection.find({ cit_medico: medico }).toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-6/:fecha', async (req, res) => {
  const fecha = req.params.fecha;

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.cita);
  const result = await collection.find({ cit_fecha: fecha }).toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-7', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.medico);
  const result = await collection.find({}).toArray();
  res.send(result);
  client.close();
});

//falta
router.get('/endpoint-8', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.medico);
  const result = await collection.find({}).toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-9', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.medico);
  const result = await collection.find({}).toArray();
  res.send(result);
  client.close();
});

router.get('/endpoint-10', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection(collections.cita);
  const result = await collection.find({}).toArray();
  res.send(result);
  client.close();
});

module.exports = router;
