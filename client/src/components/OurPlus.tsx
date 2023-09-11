import Image from "next/image";

export const OurPlus = () => {
    return (
        <section className={'bg-[#FCFCFC]'}>
            <div className={"container w-3/4 mx-auto"}>
                <div className={"boxes flex h-36 justify-between items-center"}>
                    <div className={'w-1/4 text-center'}>
                        <div className={'flex justify-center'}>
                            <Image src={'./next.svg'} alt={'example icon'}
                                   width={40}
                                   height={40}/>
                            <h5 className={'text-2xl'}>97%</h5>
                        </div>
                        <span className={'text-sm'}>Довольных клиентов</span>
                    </div>
                    <div className={'w-1/4 text-center'}>
                        <div className={'flex justify-center'}>
                            <Image src={'./next.svg'} alt={'example icon'}
                                   width={40}
                                   height={40}/>
                            <h5 className={'text-2xl'}>97%</h5>
                        </div>
                        <span className={'text-sm'}>Довольных клиентов</span>
                    </div>
                    <div className={'w-1/4 text-center'}>
                        <div className={'flex justify-center'}>
                            <Image src={'./next.svg'} alt={'example icon'}
                                   width={40}
                                   height={40}/>
                            <h5 className={'text-2xl'}>97%</h5>
                        </div>
                        <span className={'text-sm'}>Довольных клиентов</span>
                    </div>
                    <div className={'w-1/4 text-center'}>
                        <div className={'flex justify-center'}>
                            <Image src={'./next.svg'} alt={'example icon'}
                                   width={40}
                                   height={40}/>
                            <h5 className={'text-2xl'}>97%</h5>
                        </div>
                        <span className={'text-sm'}>Довольных клиентов</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
