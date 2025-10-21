import {Icon} from "@iconify-icon/react";

type StoreFinderDrawerProps = {
    open: boolean;
    onClose: () => void;
}

export function StoreFinderDrawer(props: StoreFinderDrawerProps)
{
    const {open, onClose} = props;
    return (
        <div className={"fixed right-0 top-0 -z-10 h-screen w-96 bg-white shadow-2xl"}>
            <main className={"mt-24"}>
                <h2 className={"text-primary font-bold text-3xl uppercase"}>Select a Store</h2>
                <div className={"hover:text-primary underline"}><Icon icon={""} /> use my current location?</div>
            </main>

        </div>
    );
}