import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import axios from 'axios';

import 'ignore-styles';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import * as timelineService from './services/timelines.service';

import storeConfig from '../src/store';
import App from '../src/App';

const readFileAsync = promisify(fs.readFile);

const renderFullPage = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        <link rel="stylesheet" href="/bootstrap.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Timeline Builder</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="http://localhost:3000/static/js/bundle.js"></script>
      </body>
    </html>
    `;
};

const universalLoader = async (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'index.html');

  try {
    const context = {};
    const data = await timelineService.fetchAll();
    const initialState = { timelines: { serverLoaded: true, data } };
    const store = storeConfig(initialState);

    res.send(renderFullPage(renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </Provider>
    ), initialState));

  } catch (error) {
    console.error('read error', error);
    return res.status(404).end();
  }
};

export default universalLoader;
