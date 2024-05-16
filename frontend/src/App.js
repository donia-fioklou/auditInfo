import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
