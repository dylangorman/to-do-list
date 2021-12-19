import { useState } from "react";

const ToDoList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [userInput, setUserInput] = useState("");
  const addHandler = () => {
    const newArray = [...numbers];
    newArray.push(numbers[numbers.length - 1] + 1);
    setNumbers(newArray);
  };
  const removeHandler = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };
  const update = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>numbers</h1>

      <input type="text" onChange={update} />
      <h3>{userInput}</h3>
      {numbers.map((num, index) => {
        return (
          <>
            <h1 key={index}>{num}</h1>
            <button onClick={() => removeHandler(index)}>remove one</button>
          </>
        );
      })}
      <button onClick={addHandler}>add one</button>
    </div>
  );
};

export default ToDoList;

// ATTEMPT 1 WITH NO HELP
// import { useState } from "react";
// const ToDoList = () => {
//   const [tasks, setTasks] = useState([""]);
//   const addHandler = () => {
//     const newArray = [...tasks];
//     newArray.push(tasks[tasks.length - 1] + "");
//     setTasks(newArray);
//   };
//   const removeHandler = (index) => {
//     const newArray = [...tasks];
//     newArray.splice(index, 1);
//     setTasks(newArray);
//   };
//   const update = (event) => {
//     setTasks(event.target.value);
//   };
//   return (
//     <div>
//       <h1>To Do List</h1>
//       {tasks.map((task, index) => {
//         return (
//           <>
//             <div>
//               <input
//                 type="text"
//                 placeHolder="type task here"
//                 onChange={update}
//                 key={index}
//               ></input>
//             </div>
//             <button onClick={() => removeHandler(index)}>Delete Task</button>
//           </>
//         );
//       })}
//       <button onClick={addHandler}>Add Task</button>
//     </div>
//   );
// };
// export default ToDoList;
