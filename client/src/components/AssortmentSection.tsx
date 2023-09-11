import Image from "next/image";

export const AssortmentSection = () => {
    return (
        <>
            <section>
                <div className={"container w-3/4 mx-auto"}>
                    <h3 className={"text-3xl my-10 text-center"}>
                        Наш ассортимент
                    </h3>
                    <div className={"order mt-16 flex justify-between"}>
                        {/*max-w-xs for mobile*/}
                        <div>
                            <div className={'btn-container'}>
                                <button
                                    className="bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded">
                                    Еда
                                </button>
                                <button
                                    className="bg-[#F4F6F6] text-[#02111B] text-sm mx-10 py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded">
                                    Напитки
                                </button>
                                <button
                                    className="bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded">
                                    Хит
                                </button>
                            </div>
                            <div className={'food-menu flex  mt-10 max-w-screen-sm flex-wrap'}>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3   bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3 bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3 bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3 bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3 bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="food-menu__item px-5 py-5 mx-3 mt-3 bg-[#F4F6F6] flex flex-col items-center">
                                    <Image className={''} src={'/card-images/1.jpg'} alt={'ex'} height={200}
                                           width={100}/>
                                    <h5 className={'text-lg text-bold my-3'}>Пиво</h5>
                                    <p className={'text-sm'}>Lorem ipsum dolor sit.</p>
                                    <div className={'card-order'}>
                                        <button
                                            className={'mt-5 "bg-[#F4F6F6] text-[#02111B] text-sm py-2 px-4 rounded shadow-md hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out rounded'}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 button-box flex flex-col justify-center"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate
                                deleniti exercitationem explicabo inventore ipsum minus non quis quo, veritatis?
                                Id.</p>

                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};
