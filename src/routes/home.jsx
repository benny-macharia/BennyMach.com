import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import { notesLoader } from "../loaders";
import { truncateText } from "../utils/truncate";



export default function Home(){
    const { notes } = useLoaderData()
    return(
        <>
        <div className="main">
            <div className="title">
                <h1>"Impostor syndrome? Sounds like something bitches get." - George Hotz</h1>
                <hr />
            </div>
        <div className="home-notes">
          {notes.data.slice(0, 3).map(note => (
            <NavLink to={`notes/${note.id}`} key={note.id}>
                <div className="note-card">
                    <h2>{note.attributes.title}</h2>
                    <p className="note-card-text">{truncateText(note.attributes.body, 100)}</p>
                </div>
        </NavLink>
          ))}
         </div>
        </div>
        </>
    )
}