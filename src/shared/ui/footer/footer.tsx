import s from './footer.module.scss'
import { Email, Logo, Telegram, Vk, Whatsapp } from "@/shared/assets";

export const Footer = () => {
    return (
        <footer>
            <div className={s.footerContainer}>
                <div className={s.logo}>
                    <Logo />
                    <p className={s.description}>Аренда жилья и автомобилей от владельцев</p>
                </div>
                <div className={s.linksBlock}>
                    <div className={s.links}>
                        <a href="#">
                            <Whatsapp/>
                        </a>
                        <a href="#">
                            <Vk/>
                        </a>
                        <a href="#">
                            <Telegram/>
                        </a>
                        <a href="#">
                            <Email/>
                        </a>
                    </div>
                    <a href="#" className={s.confidentiality}>
                        Политика конфеденциальности
                    </a>
                </div>
            </div>
        </footer>
    )
}