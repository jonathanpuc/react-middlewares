export default function ({ dispatch }) {
    return next => action => {

        // if action does not have payload
        // or does not have a .then property
        // send it on
        if (!action.payload || !action.payload.then) {
            console.log(action);
            return next(action);
        }

        console.log('we do have a promise', action);
        action.payload.then(response => dispatch({ ...action, payload: response.data }))
    }
}