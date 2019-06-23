// cho saga
export const callLogin = payload => ({ type: 'auth/callLogin', payload });

// saga dispatch
export const markLogin = payload => ({ type: 'auth/markLogin', payload });
