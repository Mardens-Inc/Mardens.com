import {createContext, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {StoreFinderDrawer} from "../components/nav/StoreFinderDrawer.tsx";

type StoreLocation = {
    name: string,
    address: string,
    store_number: number,
}

interface StoreLocationContextType
{
    open: () => void;
    close: () => void;
    isOpen: boolean;
    stores: StoreLocation[];
}

const StoreLocationContext = createContext<StoreLocationContextType | undefined>(undefined);

export function StoreLocationProvider({children}: { children: ReactNode })
{
    const [storeLocations, setStoreLocations] = useState<StoreLocation[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const htmlSelector = useRef(document.querySelector("html"));

    useEffect(() =>
    {
        fetch("https://lib.mardens.com/stores").then(res => res.json()).then(setStoreLocations).catch(console.error);
    }, []);

    const close = () =>
    {
        setIsOpen(false);
        if (htmlSelector.current) htmlSelector.current.classList.remove("!overflow-hidden");
    };
    const open = () =>
    {
        setIsOpen(true);
        if (htmlSelector.current && !htmlSelector.current.classList.contains("overflow-hidden")) htmlSelector.current.classList.add("!overflow-hidden");
    };

    return (
        <StoreLocationContext.Provider value={{open, close, isOpen, stores: storeLocations}}>
            <StoreFinderDrawer open={isOpen} onClose={close}/>
            {children}
        </StoreLocationContext.Provider>
    );
}

export function useStoreLocation(): StoreLocationContextType
{
    const context = useContext(StoreLocationContext);
    if (!context)
    {
        throw new Error("useStoreLocation must be used within a StoreLocationProvider");
    }
    return context;
}