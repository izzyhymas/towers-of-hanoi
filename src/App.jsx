import "./App.css";
import Game from "./Game.jsx";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </header>
      <Game />
      <footer>
        <p>Created by Izzy Hymas</p>
      </footer>
    </>
  );
}

export default App;
