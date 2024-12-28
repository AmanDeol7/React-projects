
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query"
import { userType } from "./types/user"
import { Post } from "./types/posts"
import Formm from "./components/Formm"
function App() {  

 

  const {data, isLoading} = useQuery( {queryKey: ['users'], queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json())})


  const {mutate} = useMutation({mutationFn: (newPost:Post)=> fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then( (res)=> res.json()) })
  if (isLoading){
    return <p>Loading...</p>
  }
 
  const handleFormSubmit = (data: Post) => {
    mutate(data, {
      onSuccess: () => {
        alert("Post added successfully")
      },
      onError: () => {
        alert("Error adding post")
      },

    })
  }
   
  return (
    <>
   <Formm onSubmit={handleFormSubmit}/>
    {data.map((user: userType) => (
      <div key={user.id}>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      </div>
    ))}

    
      
    </>
  )
}

export default App
