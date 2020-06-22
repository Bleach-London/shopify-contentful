// 'use strict';
// const express = require('express');
// const path = require('path');
// const serverless = require('serverless-http');
// const app = express();
// const bodyParser = require('body-parser');

// const router = express.Router();
// app.use(express.static('./public'));

// router.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
//   res.end();
// });

// module.exports = app;
// module.exports.handler = serverless(app);

/* Express App */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

/* My express App */
export default function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  const routerBasePath =
    process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

  /* define routes */
  router.get('/', (req, res) => {
    const html = `
    <html>
      <head>
        <style>
          body {
            padding: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Express via '${functionName}' ⊂◉‿◉つ</h1>
        <p>I'm using Express running via a <a href='https://www.netlify.com/docs/functions/' target='_blank'>Netlify Function</a>.</p>
        <p>Choose a route:</p>
        <div>
          <a href='/.netlify/functions/${functionName}/users'>View /users route</a>
        </div>
        <div>
          <a href='/.netlify/functions/${functionName}/hello'>View /hello route</a>
        </div>
        <br/>
        <br/>
        <div>
          <a href='/'>
            Go back to demo homepage
          </a>
        </div>
        <br/>
        <br/>
        <div>
          <a href='https://github.com/DavidWells/netlify-functions-express' target='_blank'>
            See the source code on github
          </a>
        </div>
      </body>
    </html>
  `;
    res.send(html);
  });

  router.get('/hello/', function(req, res) {
    res.send('hello world');
  });

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
}
