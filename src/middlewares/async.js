const async =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    //check to see if action has a promise on its playload
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then(function (response) {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };

export default async;
