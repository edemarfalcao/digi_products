
import { act, renderHook } from "@testing-library/react";
import { Mock, vi } from 'vitest';
import { useGetProducts } from "~/services/hooks/useGetProducts";

global.fetch = vi.fn();

describe("useGetProducts", () => {
    beforeEach(() => {
        (fetch as Mock).mockClear();
    });

    it("should set loading to true and fetch data successfully", async () => {
        const mockProducts = [{ name: "Product 1" }, { name: "Product 2" }];

        (fetch as Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockProducts,
        });

        const { result } = renderHook(() => useGetProducts());

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(false);
        expect(result.current.data).toEqual([]);

        await act(async () => {
            await result.current;
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(false);
        expect(result.current.data).toEqual(mockProducts);
    });

    it("should set error state when the fetch fails", async () => {
        (fetch as Mock).mockRejectedValueOnce(new Error("Network error"));

        const { result } = renderHook(() => useGetProducts());

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(false);
        expect(result.current.data).toEqual([]);

        await act(async () => {
            await result.current;
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(true);
        expect(result.current.data).toEqual([]);
    });

    it("should set error state when response is not ok", async () => {
        (fetch as Mock).mockResolvedValueOnce({
            ok: false,
            json: async () => ({}),
        });

        const { result } = renderHook(() => useGetProducts());

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(false);
        expect(result.current.data).toEqual([]);

        await act(async () => {
            await result.current;
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(true);
        expect(result.current.data).toEqual([]);
    });
});
