"use client"
import FormPost from "@/components/FormPost"
import { FormInputPost } from "@/types"
import { SubmitHandler } from "react-hook-form"
const page = () => {
    const handleCreatePost:SubmitHandler<FormInputPost> = (data) =>{
        console.log(data)
    }
  return (
   <>
   <div className="">
    <h1 className="text-2xl font-semibold text-center my-4"> Add New Post</h1>
    <FormPost submit={handleCreatePost} />
    </div>
   </>
  )
}

export default page