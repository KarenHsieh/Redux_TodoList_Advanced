import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputField from './InputField';
import List from './List';
import * as ActionCreators from '../actions';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
      editValue: '',
      isEditMode: false
    };
  }

  handleClick = () => {
    this.props.addItems( { inputValue: this.state.inputValue } );
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue: inputValue
    });
  }

  handleDelete = (index) => {

    this.props.deleteItems( { deleteIndex: index } );
  }

  // 按下儲存或修改
  handleAction = (index) => {
    if(this.state.isEditMode) {
      this.props.updateItem( { updateIndex: index } );
    }

    this.setState({
      isEditMode: !this.state.isEditMode
    });
    
  }

  // 修改輸入框change時
  handleEditChange = (e) => {
    const editValue = e.target.value;

    this.setState({
      editValue: editValue
    });
  }

  render() {

    return(
      <div>
        <InputField 
          inputValue={this.state.inputValue} 
          handleClick={this.handleClick} 
          handleChange={this.handleChange} 
        />
        
        <List 
          items={ this.props.items } 
          handleDelete={this.handleDelete} 
          handleAction={this.handleAction} 
          editValue={this.state.editValue}
          handleEditChange={this.handleEditChange}
          isEditMode={this.state.isEditMode}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    items: state.items,
    editValue: state.editValue
  }
};


export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(Todo);

