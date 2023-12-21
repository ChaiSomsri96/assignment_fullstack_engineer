import type { WithChildren } from "@/types";

interface ContentSectionProp extends WithChildren {
    title: string;
    className?: string;
    last?: Boolean;
}

const ContentSection = ({ title, children, className, last}: ContentSectionProp) => {
    return (
        <div className={`${!last ? 'border-b border-border-gray1 pb-12 mb-6' : ''} ${className ? className : ''}`}>
          <div className={`typo-medium typo-bold mb-1.5`}>
            {title}
          </div>

          <div className={`typo-medium`}>
            {children}
          </div>
        </div>
    )
}

export default ContentSection;