export const formatCurrency = (price: string | number) => {
    const priceNumber = Number(price);

    if (isNaN(priceNumber)) return "NaN";

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(priceNumber);
};
