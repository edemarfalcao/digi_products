import { faCheck, faExclamationTriangle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    open: boolean;
    message: string;
    severity: string;
    onClose: () => void;
}

const Toast: React.FC<Props> = ({
    open,
    message,
    severity,
    onClose
}) => {

    const returnIcon = (icon: string) => {
        switch (icon) {
            case 'success':
                return faCheck
            case 'error':
                return faTimes
            case 'warning':
                return faExclamationTriangle
            default:
                return faCheck
        }
    };

    const returnColor = (color: string) => {
        switch (color) {
            case 'success':
                return 'green';
            case 'error':
                return 'red';
            case 'warning':
                return 'orange';
            default:
                return 'green';
        }
    };

    const color = returnColor(severity);

    return (
        <>
            {open && <div
                id="toast-success"
                className={`${open ? "flex" : "hidden"
                    } items-center w-84 sm:w-full max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow fixed top-4 right-4 z-50 dark:text-gray-400 dark:bg-gray-800 bg-${returnColor(severity)}-100 rounded-lg dark:bg-${color}-800`}
                role="alert"
            >
                <div data-testid="icon-wrapper" className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${color}-500  dark:text-${color}-200`}>
                    <FontAwesomeIcon icon={returnIcon(severity)} className="w-3 sm:w-4 h-3 sm:h-4" data-testid="icon" />
                </div>
                <div className="ms-3 text-sm font-normal dark:text-white">{message}</div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 dark:text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1. inline-flex items-center justify-center h-8 w-8 dark:text-white
                "
                    onClick={onClose}
                    aria-label="Close"
                >
                    <FontAwesomeIcon icon={faTimes} className="w-4 h-3 sm:h-4" />
                </button>
            </div>}
        </>
    );
};

export default Toast;
