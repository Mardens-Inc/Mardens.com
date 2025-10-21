import {Icon} from "@iconify-icon/react";
import {Button} from "@heroui/react";
import {motion} from "framer-motion";

type StoreFinderDrawerProps = {
    open: boolean;
    onClose: () => void;
}

export function StoreFinderDrawer(props: StoreFinderDrawerProps)
{
    const {open, onClose} = props;

    return (
        <div className={"fixed right-0 top-0 z-50 h-screen w-screen data-[open=true]:pointer-events-auto pointer-events-none"} data-open={open}>
            <motion.div
                className={"fixed inset-0 bg-black/50 backdrop-contrast-50 backdrop-blur-sm -z-10 data-[open=true]:pointer-events-auto pointer-events-none"} onClick={onClose}
                initial={{opacity: 0}}
                animate={{opacity: open ? 1 : 0}}
                data-open={open}
            />
            <motion.div
                className={"pt-24 w-[450px] max-w-[95vw] overflow-y-auto h-full ml-auto p-4 bg-white shadow-2xl flex flex-col gap-2 items-center text-center z-10"}
                initial={{opacity: 0, x: 200}}
                animate={{opacity: open ? 1 : 0, x: open ? 0 : 200}}
            >
                <Button isIconOnly radius={"full"} variant={"ghost"} className={"absolute right-4"} onPress={onClose}><Icon icon={"mingcute:close-line"} /></Button>
                <h2 className={"text-primary font-bold text-3xl uppercase"}>Select a Store</h2>
                <div className={"flex items-center underline text-black text-base relative hover:text-primary focus:text-primary transition"}><Icon icon={"tdesign:location"}/> use my current location?</div>
                <p className={"text-xs text-center opacity-75 my-3 mx-auto max-w-xs"}>Each store is different—think different merchandise and different deals. Pick a favorite or stop by a few and find smart ways to save more.</p>
            </motion.div>

        </div>
    );
}