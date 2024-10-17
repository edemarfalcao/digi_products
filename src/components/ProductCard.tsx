import React from "react";
import { Product } from "~/interfaces/Product";
import { formatCurrency } from "~/utils/formatters";

interface Props {
    product?: Product;
    index: number;
}

const ProductCard: React.FC<React.PropsWithChildren<Props>> = ({ product, index }) => {
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


    return (
        <div
            key={`product-${index}`}
            className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800
            ${product.hero ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""}`}
        >
            <div className="h-56 w-full">
                <a href="#">
                    <img
                        className="mx-auto h-full dark"
                        src={product.image}
                        alt={product.name}
                    />
                </a>
            </div>
            <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {product.offer || '‎'}
                    </span>
                </div>
                <a
                    href="#"
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                    {product.name}
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.detail}
                </p>
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {formatCurrency(product.price)}
                </p>

                {/* <div className="flex items-center justify-end gap-2">
                    <button className={`mt-4 ${product.hero ? 'w-64' : 'w-full'} rounded bg-pink-600 py-2 text-white hover:bg-pink-700`}>
                        Adicionar ao carrinho
                    </button>
                </div> */}
            </div>
        </div>)

}

export default ProductCard;
