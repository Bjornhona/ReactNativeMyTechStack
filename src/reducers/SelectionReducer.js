export default (state = null, action) => {    // returns default value of null
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;     // returns whatever it returned the last time.
  }
};