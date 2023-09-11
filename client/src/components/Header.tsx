import Image from "next/image";

export const Header = () => {
    return (
        <>
            <header className={'flex justify-between items-center h-24 bg-[#FCFCFC] px-24'}>
                <div>
                    <Image aria-label={'logotype-icon'} src={'/logotype.png'} alt={'logotype'} width={50} height={50}/>
                </div>
                <div className={'text-base'}><p className={'flex items-center'}>
                    <Image src={'/icons/header-location-icon.png'} alt={'location-icon'} height={8}
                           width={24}/> Адресс:
                    улица
                    пушкина Дом калатушкина
                </p><p className={'text-sm ml-6'}>Время РАБОТЫ: ПН, СР, ЧТ. 19:00</p></div>
                <nav>
                    <ul className={'flex text-sm'}>
                        <li className={'mr-6'}>
                            <a href="#">
                                Преимущества
                            </a>
                        </li>
                        <li className={'mr-6'}>
                            <a href="#">
                                Блюда и Напитки
                            </a>
                        </li>
                        <li className={'mr-6'}>
                            <a href="#">
                                Акции
                            </a>
                        </li>
                        <li className={'mr-6'}>
                            <a href="#">
                                Мы на карте
                            </a>
                        </li>
                        <li className={'mr-6'}>
                            <a href="#">
                                О нас
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={'flex'}>
                    <a href="#">
                        <Image className={'mr-5'} src={'/icons/header-vk-icon.svg'} alt={'icon'} width={24}
                               height={24}/>
                    </a>
                    <a href="#">
                        <Image className={'mr-5'} src={'/icons/header-tg-icon.svg'} alt={'icon'} width={24}
                               height={24}/>
                    </a>
                    <a href="#">
                        <Image className={'mr-5'} src={'/icons/header-insta-icon.svg'} alt={'icon'} width={24}
                               height={24}/>
                    </a>
                    <a href="#">
                        <Image className={'mr-5'} src={'/icons/header-phone-icon.png'} alt={'icon'} width={24}
                               height={24}/>
                    </a>
                </div>
            </header>
        </>
    );
};
