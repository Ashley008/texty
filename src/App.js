import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
// 
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  // dark mode enable or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // After setting the alert, you can clear it after a certain time if needed.
        setTimeout(() => { 
        setAlert(null);
    }, 900); // This will clear the alert after 5 seconds
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3A3B3C";
      showAlert(" dark enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" light enabled", "success ");
    }
  };
  return (
    <>
      <Router>
      <Navbar title="Texty" mode={mode} toggleMode={toggleMode} Home="Home" />
      {alert && <Alert alert={alert} />} {/* Display the alert when it exists */}
        <div className="container my-3">
          <Routes> {/* Replace 'Switch' with 'Routes' */}
            <Route path="/about" element={<About />} /> {/* Use 'element' for rendering components */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analysis" mode={mode} />} />
          </Routes>
        </div> 
        </Router>
    </>
  );
}

export default App;