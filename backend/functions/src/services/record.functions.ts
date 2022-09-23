import * as functions from 'firebase-functions';


export const getRecordFunc = async (
  req: functions.Request,
  res: functions.Response
) => {
  res.send('getRecordFunc !' + req.query.text);
};

export const saveRecordFunc = async (
  req: functions.Request,
  res: functions.Response
) => {
  res.send('saveRecordFunc !' + req.query.text);
};
