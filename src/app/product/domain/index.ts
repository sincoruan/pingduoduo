import { ImageSlider } from "src/app/shared/components";
import { Product } from "src/app/shared/domain";

export interface ProductVariant{
    id: number;
    product: Product;
    name: string;
    price: number;
    listPrice: number;
    productVariantImages: ImageSlider[];
}