import Arrow from "../images/icons/bendy-arrow.svg";
import {useState, useEffect} from "react";
import {cn, Spinner} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import { motion } from "framer-motion";
import {fetchInstagramPost, formatCount, type InstagramPost} from "../services/instagram";

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
    const [post, setPost] = useState<InstagramPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        async function loadPost() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchInstagramPost(postId);
                if (mounted) {
                    setPost(data);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err.message : 'Failed to load post');
                    console.error('Failed to fetch Instagram post:', err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadPost();

        return () => {
            mounted = false;
        };
    }, [postId]);

    const handleClick = () => {
        if (post?.permalink) {
            window.open(post.permalink, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={handleClick}
            className={cn(
                "flex flex-col items-center justify-center w-[200px] h-[200px] bg-[#f7f7f4] rounded-md cursor-pointer transition-colors duration-300",
                "bg-cover bg-center bg-no-repeat relative overflow-hidden",
            )}
            style={{
                backgroundImage: post?.media_url ? `url("${post.media_url}")` : undefined
            }}
        >
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#f7f7f4]">
                    <Spinner size="lg" color="primary" />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#f7f7f4] p-4">
                    <p className="text-xs text-center text-red-500">
                        Failed to load post
                    </p>
                </div>
            )}

            {post && !loading && (
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: hovering ? 1 : 0, y: hovering ? 0 : 20}}
                    className={"bg-black/50 backdrop-contrast-50 backdrop-blur-sm absolute inset-0 rounded-md flex flex-col items-center justify-center text-white gap-4 p-4"}
                >
                    <div className={"flex flex-row items-center justify-center gap-4"}>
                        <span className="flex items-center gap-1">
                            <Icon icon={"solar:heart-linear"}/> {formatCount(post.like_count)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Icon icon={"uil:comment"}/> {formatCount(post.comments_count)}
                        </span>
                    </div>
                    {post.caption && (
                        <p className={"text-xs font-normal text-center line-clamp-3 font-roboto px-2"}>
                            {post.caption}
                        </p>
                    )}
                </motion.div>
            )}
        </div>
    );
}