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
      <button
        className="tick"
        style={{ background: "" }}
        onClick={() => completeTask(index)}
      >
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
