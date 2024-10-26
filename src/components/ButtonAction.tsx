import Link from "next/link"
import { Pencil, Trash2} from "lucide-react"


const ButtonAction = () => {
  return (
    <div>
        <Link href="/edit/1" className="btn mr-2"> <Pencil size={16}/><span>Edit</span></Link>
        <button className="btn btn-error" ><Trash2 size={16}/><span>Delete</span></button>
        
    </div>
  )
}

export default ButtonAction