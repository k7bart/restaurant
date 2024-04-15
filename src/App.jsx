import "./App.css";
import MenuPage from "./components/MenuPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <MenuPage />
            <Routes>
                <Route path="/" />
                <Route path="/menu" />
                <Route path="/reservation" />
            </Routes>
        </>
    );
}

export default App;
