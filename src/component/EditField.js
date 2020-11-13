import React from "react";

class EditField extends React.Component {


  render() {

    const { index, editValue, handleEditChange, handleAction, isEditMode } = this.props;
    
    const editStyle = (isEditMode) ? { display: 'inline'} : { display: 'none' };
    return(
      <>
        <input type='text' value={ editValue } style={editStyle} onChange={ handleEditChange } />
        { ' ' }
        <button type='button' onClick={ () => { handleAction(index) } } >
          {
            isEditMode ? '儲存' : '修改'
          }
        
        </button>
      </>
    );
  }
}

export default EditField;