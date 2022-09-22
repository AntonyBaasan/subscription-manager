import * as functions from 'firebase-functions';
import { helloWorldFunc } from './services/hello-world.service';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest(helloWorldFunc);
