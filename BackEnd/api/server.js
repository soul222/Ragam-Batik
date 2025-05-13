// server.js
const Hapi = require('@hapi/hapi');
const batikRoutes = require('./routes/batik');
const detectionRoutes = require('./routes/detection');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route([...batikRoutes, ...detectionRoutes]);

  await server.start();
  console.log('Server running on', server.info.uri);
};

init();
