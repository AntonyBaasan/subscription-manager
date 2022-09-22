import * as functions from 'firebase-functions';


export const helloWorldFunc = (
  request: functions.Request,
  response: functions.Response
) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase, from Test 6 !' + JSON.stringify(request));
};
