import { useParams } from "react-router-dom";

function Notes() {

    const { notesNum } = useParams();

    return (

        <h1>Notes {notesNum}</h1>

    )

};

export default Notes;