import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import Home from "./pages/Home.tsx";
import Navigation from "./components/nav/Navigation.tsx";
import {HeroUIProvider} from "@heroui/react";
import {StoreLocationProvider} from "./providers/StoreLocationProvider.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {ScreenSizeProvider} from "./providers/ScreenSizeProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ScreenSizeProvider>
            <StoreLocationProvider>
                <BrowserRouter>
                    <MainContentRenderer/>
                </BrowserRouter>
            </StoreLocationProvider>
        </ScreenSizeProvider>
    </React.StrictMode>
);

export function MainContentRenderer()
{
    const navigate = useNavigate();
    return (
        <HeroUIProvider navigate={navigate}>
            <Navigation/>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </HeroUIProvider>
    );
}
