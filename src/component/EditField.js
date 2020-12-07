import React from "react";

class EditField extends React.Component {


  render() {

    const {
      index,
      editValue,
      handleEditChange,
      handleSave,
      clickReviseBtn,
      isEditMode
    } = this.props;
    
    const editStyle = (isEditMode) ? { display: 'inline'} : { display: 'none' };
    
    return(
      <>
        <input type='text' 
          style={ editStyle } 
          value={ editValue } 
          onChange={ handleEditChange } 
        />

        { ' ' }
        
          { isEditMode ?
            <button type='button' onClick={ () => { handleSave(index) } } > 儲存 </button>
            :
            <button type='button' onClick={ () => { clickReviseBtn(index) } } > 修改 </button>
          }
        
      </>
    );
  }
}

export default EditField;