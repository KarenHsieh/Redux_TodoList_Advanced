
function reducer(state = {}, action) {

  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload.inputValue]
      }
    case 'DELETE_ITEM':
      const deleteIndex = action.payload.deleteIndex;
      const newItems = state.items.filter(function(item, index){
        if(index !== deleteIndex) {
          return item;
        }
      })

      return {
        ...state,
        items: newItems
      }
    case 'UPDATE_ITEM':
      const data = action.payload;
      const {updateIndex, editValue} = data;
    
      const updatedItems = state.items.map(function(item, index){
        if(editValue !== '' && index === updateIndex) {
          return editValue;
        }
        return item;
      })
      
      return {
        ...state,
        items: updatedItems
      }
      
    default:
        return state;
  }
}

export default reducer;