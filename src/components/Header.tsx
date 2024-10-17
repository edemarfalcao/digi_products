import Logo from "~/assets/svg/logo.svg";

const Header: React.FC = () => {
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
                                <a href="#" className="group -m-2 flex items-center p-2">
                                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-500">0</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header;
