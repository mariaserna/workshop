const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const config = require('../appConfig');
const schema = require('./schema');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

// const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('test hola1'));

    server.use('/graphql', graphqlHTTP({ // use : get and post
      schema,
      graphiql: true,
    }));


    // server.get('/test', (req, res) => res.send('test'));

    server.get('*', (req, res) => handle(req, res));

    server.listen(config.PORT, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Ready on ${config.HOST}: ${config.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
