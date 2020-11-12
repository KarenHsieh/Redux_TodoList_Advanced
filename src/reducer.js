
// const initialState = {
//   inputValue: '',
//   items: ['default']
// }

function reducer(state = {}, action) {

  

  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload.inputValue]
      }
    // case 'UPDATE_TEXT':
    //   return {
    //     inputValue: state.inputValue
    //   }
    default:
        return state;
  }
}

export default reducer;