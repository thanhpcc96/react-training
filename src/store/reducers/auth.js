import { authMarkLogin } from '../type';

const initState = {
  isLogged: false,
  token: null,
  refresh_token: null
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'markLogin':
      return {
        ...state,
        isLogged: true,
        ...payload
      };

    default:
      return state;
  }
};
