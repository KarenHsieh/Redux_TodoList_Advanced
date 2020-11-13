
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
      const updateIndex = action.payload.updateIndex;
      console.log('updateIndex', updateIndex);
      const editValue = state.editValue;
      console.log('editValue', editValue);
      
      const updatedItems = state.items.map(function(item, index){
        if(index === updateIndex) {
          return editValue;
        }
        return item;
      })
      
      console.log(updatedItems);
      
      return {
        ...state,
        items: updatedItems
      }
    default:
        return state;
  }
}

export default reducer;