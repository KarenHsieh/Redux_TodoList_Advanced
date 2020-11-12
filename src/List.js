import React from "react";
// import { connect } from 'react-redux';

class List extends React.Component {

  render() {
    const { items } = this.props;

    return(
      <ul>
        {
          items.map((item, index) => {
            if(item){
              return(
                <li key={index}>{item}</li>
              );
            }
            return null;
          })
        }
      </ul>
    );
  }
}

// function mapListStateToProps(state) {
// 	return {
// 	  items: state.items
//   }
// }

// export default connect(mapListStateToProps)(List);

export default List;