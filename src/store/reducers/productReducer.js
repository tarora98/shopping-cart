import axios from 'axios';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plist':
      console.log('PSADKD', action);
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;