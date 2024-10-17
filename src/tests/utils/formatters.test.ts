import { describe, expect, it } from "vitest";
import { formatCurrency } from "~/utils/formatters";


describe("formatCurrency", () => {
    it("should format a valid number string as BRL currency", () => {
        const result = formatCurrency("1000");
        expect(result).toBe("R$ 1.000,00");
    });

    it("should handle decimal numbers correctly", () => {
        const result = formatCurrency("1234.56");
        expect(result).toBe("R$ 1.234,56");
    });

    it("should format zero correctly", () => {
        const result = formatCurrency("0");
        expect(result).toBe("R$ 0,00");
    });

    it("should format negative numbers correctly", () => {
        const result = formatCurrency("-100");
        expect(result).toBe("-R$ 100,00");
    });

    it("should return 'NaN' for invalid input", () => {
        const result = formatCurrency("invalid");
        expect(result).toBe("NaN");
    });
});
