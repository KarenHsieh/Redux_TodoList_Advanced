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
      isEditMode: false,
      editState: []
    };
  }

  handleClick = () => {
    this.props.addItems({ 
      inputValue: this.state.inputValue 
    });

    this.setState({
      editState: [...this.state.editState, false]
    });
  }

  handleChange = (e) => {
    
    const inputValue = e.target.value;
    this.setState({
      inputValue: inputValue
    });
  }

  handleDelete = (index) => {

    const newEditState = this.state.editState.filter(function(state, deleteIndex){
        return (deleteIndex !== index);
    })

    this.setState({
      editState: newEditState
    });

    this.props.deleteItems( { deleteIndex: index } );
  }

  // 按下儲存
  handleSave = (index) => {

    const oriState = this.state.editState;

    // 更改開關狀態
    const newState = oriState.map(function (value, key) {
      return (key === index) ? !value : false ;
    })
    
    // 更改資料
    this.props.updateItem({
      updateIndex: index,
      editValue: this.state.editValue
    })

    this.setState({
      editState: newState
    });

  }

  // 按下修改
  clickReviseBtn = (index) => {

    const oriState = this.state.editState;
    
    // 更改開關狀態
    const newState = oriState.map(function (value, key) {
      return (key === index) ? !value : false ;
    })

    this.setState({
      editState: newState
    }, () => {
      this.setState({
        editValue: ''
      })
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
          handleSave={this.handleSave} 
          clickReviseBtn={this.clickReviseBtn}
          editValue={this.state.editValue}
          handleEditChange={this.handleEditChange}
          editState={this.state.editState}
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

