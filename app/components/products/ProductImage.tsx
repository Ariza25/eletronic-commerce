"use client";

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void
}

const ProductImage: React.FC<ProductImageProps> = ({ cartProduct, product, handleColorSelect }) => {
    return (
        <div className="grid grid-cols-5 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product.images.map((image: SelectedImgType) => (
                    <div key={image.color} onClick={() => handleColorSelect(image)} className={`flex justify-center relative w-80% aspect-square rounded border-slate-300 ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}>
                  <Image src={image.image} alt={image.color} width={50} height={100} sizes="(max-width: 600px) 100vw, 600px" className="object-contain" />
                    </div>
                ))}
            </div>
            <div className="col-span-4 relative aspect-squares ms-20">
                <Image width={300} height={200} src={cartProduct.selectedImg.image} alt={cartProduct.name} className="object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"/>
            </div>
        </div>
    )
}

export default ProductImage