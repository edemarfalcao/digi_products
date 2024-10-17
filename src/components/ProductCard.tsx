import React from "react";
import { useCart } from "~/hooks/useCart";
import { Product } from "~/interfaces/Product";
import { formatCurrency } from "~/utils/formatters";

interface Props {
    product?: Product;
    index: number;
}

const ProductCard: React.FC<React.PropsWithChildren<Props>> = ({ product, index }) => {
    const { addToCart, cart } = useCart();

    if (!product) return (
        <div
            key={`product-${index}-loading`}
            role="loading"
            className="animate-pulse rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
            <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <div className="pt-6 space-y-4">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex items-center justify-end gap-2">
                    <div className="mt-4 h-10 w-full bg-pink-300 rounded dark:bg-pink-800"></div>
                </div>
            </div>
        </div>
    )

    const quantity = cart.find((item) => item.product.id === product.id)?.quantity;

    return (
        <div
            key={`product-${index}`}
            className={`rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-2 sm:p-6
            ${product.hero ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""}`}

        >
            <div className="w-full">
                <img
                    className="mx-auto h-full dark"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            {product.hero &&
                <div>
                    <p className="text-pink-800 text-pink-600 text-xl bold font-large mt-2">
                        {product.hero}
                    </p>
                </div>
            }
            <div className="pt-2 sm:pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    {product.offer ?
                        <span className="me-2 rounded bg-primary-100 py-0.5 text-sm font-medium text-pink-800 dark:bg-primary-200 italic text-pink-200">
                            {product.offer}
                        </span> :
                        <div className="py-3"></div>
                    }
                </div>
                <span
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                    {product.name}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.detail}
                </p>
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {formatCurrency(product.price)}
                </p>

                <div className="flex items-center justify-end gap-2">
                    <button className={`mt-4 ${product.hero ? 'w-full sm:w-64' : 'w-full'} rounded bg-pink-600 py-2 px-2   text-white hover:bg-pink-700`} onClick={() => addToCart(product)}>
                        Adicionar ao carrinho
                    </button>
                </div>
                {quantity &&
                    <div className="text-right">
                        <span className="ml-2 text-sm font-medium text-gray-500 dark:text-white">No carrinho: {quantity}</span>
                    </div>
                }
            </div>
        </div>)

}

export default ProductCard;
