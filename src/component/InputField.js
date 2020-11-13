import React from "react";


function InputField({ handleClick, handleChange, inputValue }) {
  return(
    <div>
      <input type='text' value={ inputValue } onChange={ handleChange }  />
      {' '}
      <button type='button' onClick={ handleClick }>Add</button>
    </div>
  );
}


export default InputField;