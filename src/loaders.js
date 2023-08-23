export async function notesLoader(){
    const data = await fetch('http://localhost:1337/api/notes')
    if(!data){
        throw new Response("Something went wrong")
    }

    const notes = await data.json()
    return { notes }
}