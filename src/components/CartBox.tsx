import { faMinus, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useCart } from '~/hooks/useCart';
import { formatCurrency } from '~/utils/formatters';

const CartBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.product.price) * item.quantity;
    }, 0);

    return (
        <div className="absolute right-4 z-50 mt-2 w-72 bg-white border rounded-md shadow-lg max-h-96 overflow-auto ">
            <div className="p-4">
                <h2 className="text-xl mb-4 font-semibold">Carrinho</h2>
                <button className="absolute top-2 right-2" onClick={onClose} aria-label="Fechar carrinho">
                    <FontAwesomeIcon icon={faTimes} width={16} height={16} />
                </button>
                {cart.length === 0 ? (
                    <p className="text-gray-500">Você ainda não possui nenhum produto no carrinho.</p>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.product.id} className="py-2 w-64">
                                <div className="flex justify-between w-full ">
                                    <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
                                    <span className="flex-1 ml-2">{item.product.name}</span>
                                    <button
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="ml-2 px-2 py-1 text-gray rounded"
                                        aria-label="Deletar item"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                                <div className="flex justify-between mt-2 w-full">
                                    <div className="flex items-baseline">
                                        <button
                                            onClick={() => decreaseQuantity(item.product.id)}
                                            className="px-2 py-1 bg-gray-300 rounded"
                                            aria-label="Remover unidade"
                                        >
                                            <FontAwesomeIcon icon={faMinus} width={8} height={8} />
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.product.id)}
                                            className="px-2 py-1 bg-gray-300 rounded"
                                            aria-label="Adicionar unidade"
                                        >
                                            <FontAwesomeIcon icon={faPlus} width={8} height={8} />
                                        </button>
                                    </div>
                                    <span>{formatCurrency((Number(item.product.price) * item.quantity).toString())}</span>
                                </div>
                                <hr className="my-2" />
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-gray-700 text-sm font-semibold rounded"
                >
                    Limpar carrinho
                </button>
                <div className="mt-4 flex justify-end">
                    <p className="text-lg font-medium text-gray-500">Total: {formatCurrency(total)}</p>
                </div>
            </div>
        </div >
    );
};

export default CartBox;
