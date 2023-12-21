import type { WithChildren } from "@/types";

interface ButtonProp extends WithChildren {
    variant?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({variant = 'success', children, className, onClick}: ButtonProp) => {

    const variantClasses = {
        success: 'bg-variant-success hover:bg-variant-success-active active:bg-variant-success-active typo-bold text-white',
        error: 'bg-variant-error hover:bg-variant-error-active active:bg-variant-error-active typo-bold text-white',
    };

    const buttonClassName = variantClasses[variant as keyof typeof variantClasses];

    return (
        <button 
            className={`min-w-[100px] h-[40px] px-[8px] rounded-lg ${buttonClassName} ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;