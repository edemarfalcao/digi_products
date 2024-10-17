import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from "~/assets/svg/logo.svg";
import { useCart } from '~/hooks/useCart';
import CartBox from './CartBox';

const Header: React.FC = () => {
    const { getTotalQuantity } = useCart();
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <header className="relative bg-white dark:bg-gray-900">
            <nav aria-label="Top" className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <div className="ml-4 flex lg:ml-0">
                            <a href="/">
                                <span className="sr-only">Digi</span>
                                <img className="h-8 w-auto" src={Logo} alt="Digi" />
                            </a>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="ml-4 flow-root lg:ml-6">
                                <button onClick={toggleCart} className="group -m-2 flex items-center p-2 dark:text-white">
                                    <FontAwesomeIcon icon={faShoppingCart} width={16} height={16} />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-500" aria-label="Total de itens no carrinho">
                                        {getTotalQuantity()}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isCartOpen && <CartBox onClose={toggleCart} />}
            </nav>
        </header>
    );
};

export default Header;
