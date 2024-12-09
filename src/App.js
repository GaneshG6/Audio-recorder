import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login, RecordAudio, Recorder, SignUp } from "./Module";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<RecordAudio/>}>
        <Route index element={<Recorder/>} />
        <Route path="saved-audio" element={<>saved audio</>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
