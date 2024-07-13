import { Product } from "./product";

export class Category {
    id?: number;
    name?: string;
    parentCategory?: Category | null;
    subCategories?: Category[];
    products?: Product[];
}
