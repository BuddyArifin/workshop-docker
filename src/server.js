'use strict'

const express = require('express');
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Helloooww World\n')
});

const server = app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

const shutdownManager = new GracefulShutdownManager(server);

process.on('SIGTERM', () => {
  shutdownManager.terminate(() => {
    console.log('Server is gracefully terminated');
  });
});