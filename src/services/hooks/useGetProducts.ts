import { useEffect, useState } from "react";
import { Product } from "~/interfaces/Product";

export const useGetProducts = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(import.meta.env.VITE_JSON_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const transformedData = data.map((item: Product, index: number) => ({
                    ...item,
                    id: index.toString(),
                }));
                setData(transformedData);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
};
