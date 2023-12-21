import Image from "next/image";
import Badge from "@/components/Badge";

const VotingHeader = () => (
        <div className={`px-6 lg:px-0`}>
            <button className="flex items-center">
                <Image src="/svg/back.svg" alt="back-icon" width={16} height={16} />
                <div className="ml-2">Back</div>
            </button>
            <div className={`mt-5`}>
                <div className={`flex items-center`}>
                    <div className={`typo-large mr-4`}>
                        Lorem ipsum dolor sit amet
                    </div>
                    <Badge status="active">Active</Badge>
                </div>
                <div className={`mt-3`}>
                    Active ends in : 2 days
                </div>
            </div>
        </div>
        
);

export default VotingHeader;