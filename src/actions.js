export const addItems = inputValue => ({ 
  type: 'ADD_ITEM' ,
  payload: inputValue
});

export const deleteItems = index => ({ 
  type: 'DELETE_ITEM',
  payload: index
});

export const updateItem = (data) => ({
  type: 'UPDATE_ITEM',
  payload: data
})
