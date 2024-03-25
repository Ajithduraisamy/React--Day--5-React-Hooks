import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';

function Todo({ addtoList, taskList, deletetoList, editTask }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterOption, setFilterOption] = useState('ALL');

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEditing) {
      const editedTask = { name: taskName, description: description, status: taskList[editIndex].status };
      editTask(editIndex, editedTask);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const obj = { name: taskName, description: description, status: 'not completed' };
      addtoList(obj);
    }
    setTaskName('');
    setDescription('');
  };

  const handleEdit = (index, obj) => {
    setIsEditing(true);
    setEditIndex(index);
    setTaskName(obj.name);
    setDescription(obj.description);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredTasks = taskList.filter((task) => {
    if (filterOption === 'ALL') {
      return true;
    } else {
      return task.status === filterOption;
    }
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center m-5">
            <h3 className='heading-text'>My todo</h3>
          </div>

          <div className="col-md-5 form-group">
            <input type="text" name="taskName" placeholder="Todo Name" className="form-control" value={taskName} onChange={handlechange} />
          </div>
          <div className="col-md-5 form-group">
            <input type="text" name="description" placeholder="Todo Description" className="form-control" value={description} onChange={handlechange} />
          </div>

          <div className="col-md-2">
            <button className="btn btn-success" onClick={handleSave}>{isEditing ? 'Save' : 'Add Todo'}</button>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <h5 className="filter">
            My Todos

            <span>
              <label htmlFor="Task-Status">Status Filter:&nbsp; </label>
              <select name="tasks" id="Task-Status" onChange={handleFilterChange} value={filterOption}>
                <option value="ALL"> ALL</option>
                <option value="completed"> COMPLETED</option>
                <option value="not completed"> NOT COMPLETED</option>
              </select>
            </span>

          </h5>
          {filteredTasks.map((obj, index) => {
            return <List key={index} obj={obj} index={index} deletetoList={deletetoList} handleEdit={handleEdit} editTask={editTask} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;