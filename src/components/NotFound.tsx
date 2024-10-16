import React from "react";

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-lg text-gray-700">Oops! A página que você está procurando não existe.</p>
                <a href="/" className="mt-6 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Voltar para a home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
