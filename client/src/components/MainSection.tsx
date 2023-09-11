export const MainSection = () => {
    return (
            <section className={'bg-mainBgImage'}>
                <div className={'bg-black opacity-75 flex'}>

                    <div className={"container py-96 w-3/4 mx-auto text-white "}>
                        <div className={'flex items-center'}>
                            <h1 className={'text-8xl'}>Клен</h1>
                            <span className={'mx-4 text-xl'}>-</span>
                            <span className={'text-4xl'}>это наслаждение</span>
                        </div>
                        <ul className={'flex'}>
                            <li>Бронь столика</li>
                            <li className={'mx-2'}>Бронь столика</li>
                            <li>Бронь столика</li>
                        </ul>
                    </div>
                </div>
            </section>
    );
};
