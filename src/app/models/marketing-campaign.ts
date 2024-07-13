import { SocialMediaPost } from "./social-media-post";

export class MarketingCampaign {
    id?: number;
    name?: string;
    startDate?: string; // ISO 8601 date string format
    endDate?: string; // ISO 8601 date string format
    budget?: number; // BigDecimal equivalent in TypeScript is number
    status?: string;
    socialMediaPosts?: SocialMediaPost[];
}
