import React from "react";
import EditField from "./EditField";

class List extends React.Component {
  render() {
    const {
      items,
      handleCheck,
      handleDelete,
      handleEditChange,
      editValue,
      handleSave,
      clickReviseBtn,
      editState,
      checkedState
    } = this.props;
    // console.log(checkedState);
    return (
      <ul>
        {items.map((item, index) => {
          const checkStyle = checkedState[index]
            ? { textDecoration: "line-through" }
            : {};

          if (item) {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={(event) => handleCheck(event, index)}
                />
                <span style={checkStyle}>{item}</span>{" "}
                <button type="button" onClick={() => handleDelete(index)}>
                  刪除
                </button>{" "}
                <EditField
                  key={index}
                  index={index}
                  handleSave={handleSave}
                  clickReviseBtn={clickReviseBtn}
                  editValue={editValue}
                  handleEditChange={handleEditChange}
                  isEditMode={editState[index]}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
    );
  }
}

export default List;
