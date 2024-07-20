import s from './popup.module.scss';
import { Button } from "@/shared/ui";
import { Close } from "@/shared/assets";
import { AuthForm } from "@/widgets";

type Props = {
    isOpen: boolean;
    handleClose: () => void;
}
export const Popup = ({ isOpen, handleClose }: Props) => {

    return (
        <div
            className={`${s.overlay} ${s.animated} ${
                isOpen ? `${s.show}` : ''
            } ${isOpen && ''}`}
        >
            <div className={s.wrapper}>
                <div className={s.popup}>
                    <Button onClick={handleClose} classname={s.close} type="icon" icon={<Close />} variant=""/>
                    <AuthForm />
                </div>
            </div>
        </div>
    );
};

