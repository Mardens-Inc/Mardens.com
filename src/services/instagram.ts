export interface InstagramPost {
    id: string;
    caption?: string;
    media_url: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    permalink: string;
    like_count?: number;
    comments_count?: number;
    timestamp: string;
}

interface InstagramApiResponse {
    id: string;
    caption?: string;
    media_url: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    permalink: string;
    like_count?: number;
    comments_count?: number;
    timestamp: string;
}

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_GRAPH_API_BASE = 'https://graph.instagram.com';

/**
 * Fetches Instagram post data using the Instagram Graph API
 * Requires a valid access token from Facebook App with instagram_basic permission
 *
 * @param postId - The Instagram media ID
 * @returns Promise with the post data
 */
export async function fetchInstagramPost(postId: string): Promise<InstagramPost> {
    if (!INSTAGRAM_ACCESS_TOKEN) {
        throw new Error('Instagram access token is not configured. Please set VITE_INSTAGRAM_ACCESS_TOKEN in your .env file.');
    }

    try {
        const fields = [
            'id',
            'caption',
            'media_url',
            'media_type',
            'permalink',
            'like_count',
            'comments_count',
            'timestamp'
        ].join(',');

        const url = `${INSTAGRAM_GRAPH_API_BASE}/${postId}?fields=${fields}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                `Instagram API error: ${response.status} ${response.statusText}. ${
                    errorData.error?.message || ''
                }`
            );
        }

        const data: InstagramApiResponse = await response.json();

        return {
            id: data.id,
            caption: data.caption,
            media_url: data.media_url,
            media_type: data.media_type,
            permalink: data.permalink,
            like_count: data.like_count,
            comments_count: data.comments_count,
            timestamp: data.timestamp
        };
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch Instagram post data');
    }
}

/**
 * Formats the like count for display (e.g., 1000 -> "1K")
 */
export function formatCount(count: number | undefined): string {
    if (count === undefined) return '0';
    if (count < 1000) return count.toString();
    if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
    return `${(count / 1000000).toFixed(1)}M`;
}
