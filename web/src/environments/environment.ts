// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'subscriptionmanager-d5905',
    appId: '1:209509258810:web:0b7bb0321f41b9968e0703',
    storageBucket: 'subscriptionmanager-d5905.appspot.com',
    apiKey: 'AIzaSyAED13KGsnTmA-SMni3UJrxwWTP9iJgtXc',
    authDomain: 'subscriptionmanager-d5905.firebaseapp.com',
    messagingSenderId: '209509258810',
    measurementId: 'G-QCY8FHT4XQ',
  },
  production: false,
  backendBase: 'http://localhost:5001/subscriptionmanager-d5905/us-central1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
