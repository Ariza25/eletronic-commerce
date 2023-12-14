"use client";

import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/useCart";
import {CiShoppingCart} from 'react-icons/ci'

const CartCount = () => {
    const router = useRouter()
    const {cartTotalQty} = useCart()

  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
        <div className="text-3x1">
            <CiShoppingCart size={25}/>
        </div>
        <span className="absolute top-[-5px] right-[-5px] bg-slate-700 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">{cartTotalQty}</span>
    </div>
  )
}

export default CartCount