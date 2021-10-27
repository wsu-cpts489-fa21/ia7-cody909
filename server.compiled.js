import path from 'path';
import express from 'express'; // const path = require('path');
// const express = require('express');

const __dirname = process.cwd();

const PORT = process.env.PORT || 8081;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
