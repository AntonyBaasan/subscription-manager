import * as functions from 'firebase-functions';
import { helloWorldFunc } from './services/hello-world.functions';
import { getRecordFunc, saveRecordFunc } from './services/record.functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// HelloRecord functions
export const helloWorld = functions.https.onRequest(helloWorldFunc);

// Record functions
export const getRecord = functions.https.onRequest(getRecordFunc);
export const saveRecord = functions.https.onRequest(saveRecordFunc);
