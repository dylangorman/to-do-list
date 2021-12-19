import { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState([""]);
  const [userInput, setUserInput] = useState("");

  const updateInput = (event) => {
    setUserInput(event.target.value);
  };
  const addHandler = () => {
    const newArray = [...list];
    newArray.push(userInput);

    setList(newArray);
    setUserInput("");
  };
  const removeHandler = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" value={userInput} onChange={updateInput} />
      <button onClick={addHandler}>add</button>
      <h2>{userInput}</h2>
      {list.map((item, index) => {
        return (
          <Card
            index={index}
            removeHandler={removeHandler}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
};
const Card = (props) => {
  return (
    <div>
      <h2>{props.item}</h2>
      <button onClick={() => props.removeHandler(props.index)}>remove</button>
    </div>
  );
};

export default ToDoList;
