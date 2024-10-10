import React from "react";
import { useForm } from "react-hook-form";

function Card({ handleAdd }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleAdd(data);
    reset(); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="title font-semibold">Title</div>
          <input {...register('title', { required: true })} type="text" />
        </div>
        <div>
          <div className="description">
            <div className="title font-semibold">Description</div>
            <textarea {...register('description', { required: true })} cols="30" rows="10"></textarea>
          </div>
        </div>
        <button type="submit" className="flex justify-center w-full bg-emerald-400 rounded mt-5">
          Add
        </button>
      </form>
    </div>
  );
}

export default Card;
