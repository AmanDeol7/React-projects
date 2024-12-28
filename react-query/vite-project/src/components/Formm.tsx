import React from 'react';
import { useForm } from 'react-hook-form';
import { Post } from '../types/posts';
interface FormmProps {
  onSubmit:(data:Post)=>void;

}
const Formm: React.FC<FormmProps> = ({onSubmit}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Post>();
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       
      <input type="number" placeholder="userId" {...register("userId", {})} />
      <input type="number" placeholder="id" {...register("id", {})} />
      <input type="text" placeholder="title" {...register("title", {})} />
      <input type="text" placeholder="body" {...register("body", {})} />


      <input type="submit" />
    </form>
  );
}
export default Formm;
