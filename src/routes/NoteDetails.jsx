import { useLoaderData, useParams } from "react-router-dom"

export async function NoteDetailsLoader({ params }){
    const { id } = params
    const data = await fetch(`http://localhost:1337/api/notes/${id}`)

    if (!data.ok){
        throw new Error("Something went wrong");
      }
    const noteDetails = await data.json() 
    return  noteDetails 
}

export default function NoteDetails(){
    const { id } = useParams()
    const note = useLoaderData()

    return(
        <>
        <div className="main-content">
            <h1>{note.data.attributes.title}</h1>
            <hr />
            <p>{note.data.attributes.date}</p>
            <div className="note-body">
                <p>{note.data.attributes.body}</p>
            </div>
        </div>
        </>
    )
}