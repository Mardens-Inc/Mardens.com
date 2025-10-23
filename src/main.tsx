import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import Home from "./pages/Home.tsx";
import Navigation from "./components/nav/Navigation.tsx";
import {HeroUIProvider} from "@heroui/react";
import {StoreLocationProvider} from "./providers/StoreLocationProvider.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {ScreenSizeProvider} from "./providers/ScreenSizeProvider.tsx";
import {GiftCards} from "./pages/GiftCards.tsx";
import {GiftCardProvider} from "./providers/GiftCardProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ScreenSizeProvider>
            <GiftCardProvider>
                <StoreLocationProvider>
                    <BrowserRouter>
                        <MainContentRenderer/>
                    </BrowserRouter>
                </StoreLocationProvider>
            </GiftCardProvider>
        </ScreenSizeProvider>
    </React.StrictMode>
);

export function MainContentRenderer()
{
    const navigate = useNavigate();

    // Ensure that the page scrolls to the top when the route changes.
    const {pathname} = useLocation();
    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <HeroUIProvider navigate={navigate}>
            <Navigation/>
            <main className={"mt-16"}>
                <Routes>
                    <Route>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/gift-cards" element={<GiftCards/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </main>
        </HeroUIProvider>
    );
}
