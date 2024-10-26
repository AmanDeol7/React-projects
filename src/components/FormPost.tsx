"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";
import { FC } from "react";
interface FormPostProps {
    submit: SubmitHandler<FormInputPost>,
    isEditing?: boolean
}
const FormPost: FC<FormPostProps>  = ({submit, isEditing}) => {
    const {register, handleSubmit} = useForm<FormInputPost>()
    
  return (
    <form className="flex flex-col justify-center items-center gap-5 mt-10 " onSubmit={handleSubmit(submit)}>
      
        <input
        {...register("title", {required: true})}
          type="text"
          placeholder="Post Title"
          className="input input-bordered w-full max-w-lg"
        />
        <textarea
        {...register("content", {required: true})}
          className="textarea textarea-bordered w-full max-w-lg"
          placeholder="Post Content"
        ></textarea>
        <select className="select select-bordered w-full max-w-lg" {...register("tags", {required: true})} defaultValue={''}>
          <option disabled value=''>
        Select Tags
          </option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>C++</option>
          <option>Java</option>
        </select>
      <button type='submit' className="btn btn-primary w-full max-w-xs text-lg text-white/90">{isEditing?"Update":"Create" }</button>
    </form>
  );
};

export default FormPost;
