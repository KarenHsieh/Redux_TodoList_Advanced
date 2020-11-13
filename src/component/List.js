import React from "react";
import EditField from './EditField';

class List extends React.Component {
   
  render() {
    const { items, handleDelete, handleEditChange, editValue, handleAction, isEditMode } = this.props;
    return (
      <ul>
        {
          items.map((item, index) => {
            if(item){
              return(
                <li key={index}>
                  {item}
                  {' '}
                  <button type='button' onClick={ () => handleDelete(index) }>刪除</button> 
                  { ' ' }
                  <EditField 
                    key={index}
                    index={index} 
                    handleAction={ handleAction }
                    editValue={editValue}
                    handleEditChange={ handleEditChange }
                    isEditMode={isEditMode}
                  />
                </li>
              );
            }
            return null;
          })
        }
      </ul>
    );
  }
}


export default List;