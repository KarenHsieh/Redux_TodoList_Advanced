import React from "react";
// import { connect } from 'react-redux';

class InputField extends React.Component {

  render() {
    const { handleClick, handleChange, inputValue } = this.props;

    // console.log(`props = ${this.props.inputValue}`)

    return(
      <div>
        <input type='text' value={ inputValue } onChange={ handleChange } />
        <button type='button' onClick={ handleClick }>Add</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
// 	return {
//     inputValue: state.inputValue,
// 	  items: state.items
//   }
// }

// export default connect(mapStateToProps)(InputField);

export default InputField;