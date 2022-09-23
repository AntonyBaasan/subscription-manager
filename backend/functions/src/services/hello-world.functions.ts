import * as functions from 'firebase-functions';


export const helloWorldFunc = async (
  req: functions.Request,
  res: functions.Response
) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  res.send('Hello from Firebase, from Test 6 !' + req.query.text);
};
