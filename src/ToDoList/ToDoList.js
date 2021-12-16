import { useState } from "react";

const ToDoList = () => {
  // const [key, value = useState()];
  const updateInput = [tasks];
  const addTask = () => {
    // create item with unique id
    const newTask = () => {
      id: 1 + Math.random(),
      value: newTask.slice(),
    };
    // current list of tasks



    const list = [...this.state.list];
    // add new task
    list.push(newTask);
    //update with new list and clear new task input
    this.setState({
      list,
      newTask: "",
    });
  };


  
  const deleteTask = (index) => {
    const list = [...tasks];
    updatedList.filter((item) => item.index !== id);
    this.setState({ list: updatedList });
  };



  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Type New Task Here..."
        value={this.state.newTask}
        onChange={(event) => this.updateInput("newTask", event.target.value)}
      />
      <button onClick={() => addTask}>Add</button>
      <br />
      <ul>
        {list.map((task) => {
          return (
            <div>
              <li key={index}>
                {task.value}
                <button onClick={() => deleteTask(index)}>X</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
