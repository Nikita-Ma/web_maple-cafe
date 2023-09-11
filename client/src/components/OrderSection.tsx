import Image from "next/image";

export const OrderSection = () => {
    return (
        <>
            <section>
                <div className={"container w-3/4 mx-auto"}>
                    <h3 className={"text-3xl my-10 text-center"}>
                        Корпоративные мероприятия
                    </h3>
                    <div className={"order mt-16 flex justify-between"}>
                        <Image src={'/corp-meet/rec.jpg'} alt={'order-wallpapper'} width={600} height={400}/>
                        <div className={"button-box flex flex-col justify-center"}>
                            <div className="group-boxes ">
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#5AD380] border-solid rounded-full bg-[#CFF2DA] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                            </div>
                            <div className="group-boxes my-10">
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#5AD380] border-solid rounded-full bg-[#CFF2DA] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                            </div>
                            <div className="group-boxes">
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#5AD380] border-solid rounded-full bg-[#CFF2DA] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                                <button
                                    className={'mx-3 my-2 p-2 text-sm border border-[#FCFCFC] border-solid rounded-full bg-[#F4F6F6] text-[#3F4045]'}>
                                    Столик на двоих
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
