import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem('taskList');
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const addtoList = (obj) => {
    const tempList = [...taskList, obj];
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const deletetoList = (index) => {
    const tempList = [...taskList];
    tempList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const editTask = (index, editedTask) => {
    const tempList = [...taskList];
    tempList[index] = editedTask;
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Todo addtoList={addtoList} taskList={taskList} deletetoList={deletetoList} editTask={editTask} />
        </div>
      </div>
    </>
  );
}

export default App;
