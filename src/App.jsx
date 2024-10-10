import React, { useState } from "react";
import Card from "./Components/Card";
import Cards from "./Components/Cards";

function App() {
  const [data, setData] = useState(
    [{ title: "React", description: "This is made by React" }      
    ]);

  const handleAdd = (newItem) => {
    setData([...data, newItem]);
  };

  const handleRemove = (index) => {
    setData(data.filter((item, idx) => idx != index));
  }

  return (
    <div className="w-full h-full bg-zinc-300 p-4">
      <div className="flex flex-wrap justify-center rounded ">
        {data.map((item, index) => <Cards id = {index} handleRemove = {handleRemove} item = {item} />)}
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <Card handleAdd={handleAdd} />
      </div>
    </div>
  );
}

export default App;
