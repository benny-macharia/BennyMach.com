import React from "react";
import useFetch from "../hooks/useFetch";
import { useLoaderData, Link } from "react-router-dom";
import { truncateText } from "../utils/truncate";



export default function Notes() {
    const { notes } = useLoaderData()
    
    return(
        <>
          <div className="notes-section">
            {notes.data.map(note=>(
                <div key={note.id}>
                <Link to={`${note.id}`}>
                    <div className="note-card">
                        <h2 className="note-card-title">{note.attributes.title}</h2>
                        <p className="note-card-text">{truncateText(note.attributes.body, 100)}</p>
                    </div>
                </Link>
                </div>
               
            ))}
            
          </div>
           
        </>
    )
}