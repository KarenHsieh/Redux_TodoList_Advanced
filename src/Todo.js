import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputField from './InputField';
import List from './List';
import * as ActionCreators from './actions';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: []
    };
  }

  handleClick = () => {
    // this.props.dispatch({ type: 'ADD_ITEM' });
    this.props.addItems({inputValue: this.state.inputValue});
  }

  handleChange = (e) => {
    const inputValue = e.target.value;

    //this.props.dispatch({ type: 'UPDATE_DATA' });
    this.setState({
      inputValue: inputValue
    });
  }

  render() {

    return(
      <div>
        <InputField inputValue={this.state.inputValue} handleClick={this.handleClick} handleChange={this.handleChange} />
        <List items={ this.props.items } />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
	  items: state.items
  }
};

// export default connect(
//   mapStateToProps
// )(Todo);

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(Todo);

