import { screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import { Product } from "~/interfaces/Product";
import Home from "~/pages/Home";
import { useGetProducts } from "~/services/hooks/useGetProducts";
import { renderWithProviders } from "../helper";

vi.mock("~/components/Header", () => ({
    __esModule: true,
    default: () => <header>Header Component</header>,
}));

vi.mock("~/components/ProductCard", () => ({
    __esModule: true,
    default: ({ product }: { product?: Product }) => (
        <div>{product ? product.name : "Loading Product"}</div>
    ),
}));

vi.mock("~/components/FetchingError", () => ({
    __esModule: true,
    default: () => <div>Fetching Error</div>,
}));

vi.mock("~/services/hooks/useGetProducts", () => ({
    useGetProducts: vi.fn(),
}));

describe("Home Component", () => {
    it("renders loading state initially", () => {
        (useGetProducts as Mock).mockReturnValue({
            data: [],
            loading: true,
            error: false,
        });

        renderWithProviders(<Home />);
        const loadingProducts = screen.getAllByText("Loading Product");
        expect(loadingProducts.length).toBe(8);
    });

    it("renders products when data is fetched", () => {
        const products = [{ name: "Product 1" }, { name: "Product 2" }];
        (useGetProducts as Mock).mockReturnValue({
            data: products,
            loading: false,
            error: false,
        });

        renderWithProviders(<Home />);
        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    it("renders error component when there's an error", () => {
        (useGetProducts as Mock).mockReturnValue({
            data: [],
            loading: false,
            error: true,
        });

        renderWithProviders(<Home />);
        expect(screen.getByText("Algo deu errado!")).toBeInTheDocument();
    });
});
