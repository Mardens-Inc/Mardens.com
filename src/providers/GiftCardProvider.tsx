import {createContext, ReactNode, useContext, useState} from "react";
import {GiftCardModal} from "../pages/GiftCards.tsx";

interface GiftCardContextType
{
    open: () => void;
    close: () => void;
    isOpen: boolean;
}

const GiftCardContext = createContext<GiftCardContextType | undefined>(undefined);

export function GiftCardProvider({children}: { children: ReactNode })
{
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <GiftCardContext.Provider value={{open, close, isOpen}}>
            <GiftCardModal isOpen={isOpen} onClose={close}/>
            {children}
        </GiftCardContext.Provider>
    );
}

export function useGiftCard(): GiftCardContextType
{
    const context = useContext(GiftCardContext);
    if (!context)
    {
        throw new Error("useGiftCard must be used within a GiftCardProvider");
    }
    return context;
}