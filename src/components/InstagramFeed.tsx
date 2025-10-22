import Arrow from "../images/icons/bendy-arrow.svg";
import {useStoreLocation} from "../providers/StoreLocationProvider.tsx";
import {useState} from "react";
import {cn} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import { motion } from "framer-motion";

export function InstagramFeed()
{
    return (
        <div className={"flex flex-row items-center justify-center h-[200px] w-3/4 gap-16 mx-auto my-8"}>
            <div className={"flex flex-col items-center justify-center w-fit"}>
                <p className={"font-accent uppercase text-2xl"}>Follow us on</p>
                <p className={"text-primary font-headers font-bold text-3xl uppercase relative"}>instagram <img src={Arrow} alt={""} width={50} className={"absolute -right-16 top-0"}/></p>
                <p className={"text-center text-sm"}>Check out what's new at<br/>select store locations. </p>
            </div>
            <div className={"flex flex-row items-center justify-center w-full gap-8"}>
                <InstagramItem postId={"DLVjmFXvN4e"}/>
                <InstagramItem postId={"DHwZXn6yvis"}/>
                <InstagramItem postId={"DHwZXn6yvis"}/>
                <InstagramItem postId={"DGT0ffsSkOo"}/>
                <InstagramItem postId={"DGEUy3rsLI8"}/>
            </div>
        </div>
    );
}

type InstagramItemProps = {
    postId: string;
}

function InstagramItem(props: InstagramItemProps)
{
    const {postId} = props;
    const [hovering, setHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
                "flex flex-col items-center justify-center w-[200px] h-[200px] bg-[#f7f7f4] rounded-md cursor-pointer transition-colors duration-300",
                "bg-cover bg-center bg-no-repeat relative overflow-hidden",
            )}
            style={{
                backgroundImage: `url("https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft39.30808-6%2F497962133_1176420824527691_3180072465867003945_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_cat%3D107%26ig_cache_key%3DMzY2Mjk5MDQwMDQ2MjUyNzQ2Ng%253D%253D.3-ccb1-7%26ccb%3D1-7%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjQ4MHg2MDAuc2RyLkMzIn0%253D%26_nc_ohc%3DCdmLyduLhsgQ7kNvwHCQxCR%26_nc_oc%3DAdmcjb5BtK30EsXD-Kot-39Fzd8y_1gtUXX0hdzkiJ8Zm0SG8ZSDcIJx-LKGKh-szJY%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3DqlI-A0-1AriY4H3umXd4JQ%26oh%3D00_AfdkLi1wbxARiIheoLlu_WZRi_wF-XtMNB3an5JsTJq5qg%26oe%3D68FAA9EF")`
            }}
        >
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: hovering ? 1 : 0, y: hovering ? 0 : 20}}
                className={"bg-black/50 backdrop-contrast-50 backdrop-blur-sm absolute inset-0 rounded-md flex flex-col items-center justify-center text-white gap-4"}
            >
                <div className={"flex flex-row items-center justify-center gap-4"}>
                    <span> <Icon icon={"solar:heart-linear"}/> 104</span>
                    <span> <Icon icon={"uil:comment"}/> 1</span>
                </div>
                <p className={"text-xs font-normal text-center line-clamp-3 font-roboto"}>We love seeing bargain hunters having fun visiting our 14 unique locations, all while earning GIFT CARDS!🚨😁 </p>
            </motion.div>
        </div>
    );
}