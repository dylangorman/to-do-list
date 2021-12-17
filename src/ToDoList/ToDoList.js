// ATTEMPT 2 WITH RESEARCH AND ASSISTANCE
import { useState, useEffect } from "react";
import "./ToDoList.css";

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "" }} onClick={() => completeTask(index)}>
        ✓
      </button>
      <button
        className="delete"
        style={{ background: "" }}
        onClick={() => removeTask(index)}
      >
        x
      </button>
    </div>
  );
};
const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

const ToDoList = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <body>
      <div className="todo-container">
        <div className="header">Pending Tasks ({tasksRemaining})</div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={index}
            />
          ))}
        </div>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </div>
    </body>
  );
};
export default ToDoList;

// import { useState } from "react";

// const ToDoList = () => {
//   const [list, setList] = useState([""]);
//   const [userInput, setUserInput] = useState("");

//   const updateInput = (event) => {
//     setUserInput(event.target.value);
//   };
//   const addHandler = () => {
//     const newArray = [...list];
//     newArray.push(userInput);

//     setList(newArray);
//     setUserInput("");
//   };
//   const removeHandler = (index) => {
//     const newArray = [...list];
//     newArray.splice(index, 1);
//     setList(newArray);
//   };

//   return (
//     <div>
//       <h1>To Do List</h1>
//       <input type="text" value={userInput} onChange={updateInput} />
//       <button onClick={addHandler}>add</button>
//       <h2>{userInput}</h2>
//       {list.map((item, index) => {
//         return (
//           <Card
//             index={index}
//             removeHandler={removeHandler}
//             key={index}
//             item={item}
//           />
//         );
//       })}
//     </div>
//   );
// };
// const Card = (props) => {
//   return (
//     <div>
//       <h2>{props.item}</h2>
//       <button onClick={() => props.removeHandler(props.index)}>remove</button>
//     </div>
//   );
// };

// export default ToDoList;
