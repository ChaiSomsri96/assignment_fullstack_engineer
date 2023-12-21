import type { WithChildren } from "@/types";

interface ProgressBarProp extends WithChildren {
    variant?: string;
    percent?: number;
    votes?: string;
    className?: string;
}

const ProgressBar = ({variant = 'success', percent = 0, votes = '0,000,000', children, className}: ProgressBarProp) => {

    const variantClasses = {
        success: 'bg-variant-success-progress',
        error: 'bg-variant-error-progress',
    };

    const progressBarClassName = variantClasses[variant as keyof typeof variantClasses];

    return (
        <div className={`w-full h-[32px] border border-border-gray2 rounded overflow-hidden relative flex items-center ${className}`}>
            
            <div className={`${progressBarClassName} h-full absolute ${percent >= 100 ? '' : 'rounded-r'}`}
            style={{ width: `${percent >= 100 ? 100 : percent}%` }}>
            </div>

            <div className={`absolute z-[100] flex px-4 items-center w-full`}>
                <span className={`typo-bold flex-1`}>
                    {children}
                </span>
                <span className={`typo-tiny`}>
                    {votes} VOTE
                </span>
                <span className={`typo-bold ml-4 w-[35px] text-right`}>
                    {percent >= 100 ? 100 : percent}%
                </span>
            </div>
        </div>  
    );
}

export default ProgressBar;