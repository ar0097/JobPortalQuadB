const initialState = {
    appData: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'COLLECT_DATA':
        return {
          ...state,
          appData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  