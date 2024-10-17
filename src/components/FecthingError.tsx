const FecthingError: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center pt-32">
            <svg className="h-32 w-32 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Algo deu errado!
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Tente novamente mais tarde.
            </p>
        </div>
    )
}

export default FecthingError;
