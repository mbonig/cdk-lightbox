#!/usr/bin/env node
import express from "express";
import { join } from "path";

const app = express()
const port = 3000
app.use(express.static(join(__dirname, '..', 'build')));

app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`cdk-lightbox available at: http://localhost:${port}`)
});
