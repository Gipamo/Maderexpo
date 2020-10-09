import React, { Suspense } from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './server/firebase'
import {FirebaseAppProvider} from 'reactfire'


render((
  <BrowserRouter>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'conectando a la app..'}>
      <App/>
      </Suspense>
    </FirebaseAppProvider>
  </BrowserRouter>
),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
