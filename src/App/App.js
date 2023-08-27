import Canvas from "../Components/Canvas/Canvas";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import "./App.css";

function App() {
    return (
        <main className="app transition-all ease-in">
            <Home />
            <Canvas />
            <Main />
        </main>
    );
}

export default App;
