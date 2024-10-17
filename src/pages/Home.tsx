import FecthingError from "~/components/FecthingError";
import Header from "~/components/Header";
import ProductCard from "~/components/ProductCard";
import { useGetProducts } from "~/services/hooks/useGetProducts";

const Home: React.FC = () => {
    const { data, loading, error } = useGetProducts();

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 ">
            <Header />
            <section className="bg-gray-100 py-8 antialiased dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    {loading ? (
                        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                            {[...Array(8)].map((_, index) => (
                                <ProductCard key={index} index={index} />
                            ))}
                        </div>
                    ) : error ? (
                        <FecthingError />
                    ) : (
                        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                            {data.map((product, index) => (
                                <ProductCard product={product} index={index} key={`product-${index}`} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
