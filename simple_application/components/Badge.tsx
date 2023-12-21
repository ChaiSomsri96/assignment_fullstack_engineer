import type { WithChildren } from "@/types";

interface BadgeProp extends WithChildren {
    status?: string
}

const Badge = ({status = 'active', children}: BadgeProp) => {

    const statusClasses = {
        "active": 'bg-badge-active text-white'
    };

    const badgeClassName = statusClasses[status as keyof typeof statusClasses];

    return (
        <div className={`${badgeClassName} rounded py-[2px] px-[8px] min-w-[52px] flex justify-center`}>
            {children}
        </div>
    )
}

export default Badge;