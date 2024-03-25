import React from 'react';

function List({ obj, index, deletetoList, handleEdit, editTask }) {
  const handleDelete = () => {
    deletetoList(index);
  };

  const handleEditClick = () => {
    handleEdit(index, obj);
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    const editedTask = { ...obj, status: status };
    editTask(index, editedTask);
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <p>
              <b>Name: </b>
              {obj.name}
            </p>
            <p className="card-text">
              <b>Description: </b>
              {obj.description}
            </p>

            <label htmlFor="Task-Status">
              <b>Status:&nbsp;</b>
            </label>
            <select name="task" id="Task-Status" onChange={handleStatusChange} value={obj.status}>
              <option value="completed">
                COMPLETED
              </option>
              <option value="not completed">
                NOT COMPLETED
              </option>
            </select>

          </div>
          <div className="icons">
            <button className="btn btn-info" onClick={handleEditClick}>
              Edit
            </button>
            <span className="delete-icon">
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;