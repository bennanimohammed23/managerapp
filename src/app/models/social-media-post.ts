import { MarketingCampaign } from "./marketing-campaign";

export class SocialMediaPost {
    id?: number;
    platform?: string;
    message?: string;
    postDate?: Date;
    status?: string;
    marketingCampaign?: MarketingCampaign; // Assuming MarketingCampaign is also defined
}
