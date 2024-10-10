import React from "react";

function Cards({id, item, handleRemove}) {
  return (
    <div >
      
        <div className={`w-40 max-h-fit bg-zinc-400 m-2`}>
          <h3 className="font-semibold text-2xl flex justify-center text-white">{item.title}</h3>
          <hr />
          <p className="text-s text-center p-3">{item.description}</p>
          <button onClick={()=>handleRemove(id)}  className={` bg-red-400 flex justify-center rounded font-semibold w-full p-2`}>
            Remove
          </button>
        </div>
    </div>
  );
}

export default Cards;
