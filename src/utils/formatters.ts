export const formatCurrency = (price: string) => {
    const priceNumber = Number(price);

    if (isNaN(priceNumber)) return "NaN";

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(priceNumber);
};
