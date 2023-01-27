import { useState } from 'react'
import { Container } from "@/components/Container"
import { useRouter } from "next/router"

const RichTextEditor = ({ formSubmitHandler }) => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const postData = new FormData()

    postData.append("title", title)
    postData.append("slug", slug)
    postData.append("body", body)

    formSubmitHandler(postData)
      .then((_) => {
        router.push(`/posts`)
      }).catch((e) => {
        console.error(e)
      alert(`${e.request.responseText}, please try again`)
    })
  }

  const changeHandlerFactory = (setState) => {
    return (event) => {
      setState(event.target.value)
    }
  }

  return (
    <Container>
      <form
        className="relative"
        onSubmit={handleSubmit}
      >
        <div
          className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
            placeholder="Title"
            onChange={changeHandlerFactory(setTitle)}
            value={title}
            required
          />
          <label htmlFor="slug" className="sr-only">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="block w-full border-0 pt-1.5 text-sm font-medium placeholder-gray-500 focus:ring-0"
            placeholder="Slug"
            onChange={changeHandlerFactory(setSlug)}
            value={slug}
            required
          />
          <label htmlFor="body" className="sr-only">
            Description
          </label>
          <textarea
            rows={2}
            name="body"
            id="body"
            className="block w-full min-h-[150px] h-fit max-h-[650px] resize-y border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Write a description..."
            onChange={changeHandlerFactory(setBody)}
            value={body}
            required
          />

          {/* Spacer element to match the height of the toolbar */}
          <div aria-hidden="true">
            <div className="py-2">
              <div className="h-9" />
            </div>
            <div className="h-px" />
            <div className="py-2">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-px bottom-0">
          <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default RichTextEditor
