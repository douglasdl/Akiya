import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/home/akiya/:slug" element={ <Home /> } />
        </Routes>
    )
}