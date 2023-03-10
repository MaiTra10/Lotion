import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Notes from "./Notes";
import Layout from "./Layout";
import Edit from "./Edit";

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/notes"/>}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/notes/:notesNum" element={<Notes />}></Route>
          <Route path="/notes/:notesNum/edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )

}

export default App;
