import { Button } from "@/components/Button"
import { deletePost } from "@/api/adminPostsApi"

const DeleteButton = ({ slug, handleDelete = ()=>{} }) => {
  const innerDelete = () => {
    deletePost(slug)
      .then(res => handleDelete(res))
  }

  return (
    <div>
      <Button onClick={ innerDelete }>Delete</Button>
    </div>
  )
}

export default DeleteButton
