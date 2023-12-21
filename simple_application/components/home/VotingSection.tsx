import Image from "next/image";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

const VotingSection = () => (
    <>
        <div className={`flex flex-col md:flex-row md:items-center pl-6 pr-10 py-5 mt-[26px] gap-6`}>
            <div className={`typo-medium typo-bold flex-1`}>
                Your Voting
            </div>

            <div className={`flex flex-col xs:flex-row xs:items-center gap-6 xs:gap-0`}>
                <div className={`md:text-right mr-10`}>
                    <div className={`mb-1`}>Voting Power</div>
                    <div className={`typo-medium typo-bold`}>00,000.00 VOTE</div>
                </div>

                <div className={`flex gap-2`}>
                    <Button variant="success">Support</Button>
                    <Button variant="error">Reject</Button>
                </div>
            </div>
        </div>

        <div className={`px-6 pt-4 pb-6 bg-[#fff]`}>
            <div className={`typo-medium typo-bold pb-[16px] border-b border-border-gray1 mb-6`}>
                Voting results
            </div>


            <div className={`flex flex-col md:flex-row gap-6 md:gap-[156px]`}>

                <div className={`flex-1 flex flex-col gap-6`}>

                    <ProgressBar variant="success" percent={90} votes="9,000,000">
                        Support
                    </ProgressBar>
                    <ProgressBar variant="error" percent={10} votes="1,000,000">
                        Reject
                    </ProgressBar>
                    <a className={`underline underline-offset-2`}>View all votes</a>

                </div>

                <div className={`flex-1 flex flex-col gap-2`}>

                    <div className={`flex justify-between`}>
                        <span className={``}>Quorum</span>
                        <div className={`flex items-center`}>
                            <span className={`typo-bold`}>Reached</span>
                            <Image src="/svg/reached.svg" alt={`reached-icon`} width={12} height={12} className={`ml-1`} />
                        </div>  
                    </div>

                    <div className={`flex justify-between`}>
                        <div className={`flex items-center`}>
                            <span className={``}>Current Votes</span>
                            <span className={`typo-tiny opacity-50 ml-1`}>Required 000K</span>
                        </div>
                        <span className={`typo-bold`}>000K</span>
                    </div>

                    <div className={`flex justify-between`}>
                        <span className={``}>Differential</span>
                        <div className={`flex items-center`}>
                            <span className={`typo-bold`}>Reached</span>
                            <Image src="/svg/reached.svg" alt={`reached-icon`} width={12} height={12} className={`ml-1`} />
                        </div>  
                    </div>

                    <div className={`flex justify-between`}>
                        <div className={`flex items-center`}>
                            <span className={``}>Current Differential</span>
                            <span className={`typo-tiny opacity-50 ml-1`}>Required 00K</span>
                        </div>
                    
                        <span className={`typo-bold`}>00.00K</span>
                    </div>

                    <div className={`flex justify-between`}>
                        <span className={``}>Total Voting Power</span>
                        <span className={`typo-bold`}>00,000,000</span>  
                    </div>

                </div>

            </div>
            
        </div>
    </>
);

export default VotingSection;
