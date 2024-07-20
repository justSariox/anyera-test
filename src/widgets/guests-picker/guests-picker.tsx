import s from './guests-picker.module.scss'
import { Button } from "@/shared/ui";

type Guests = {
    adults: number,
    children: number
}

type Props = {
    isOpen: boolean
    guests: Guests
    setGuests: (guests: Guests) => void
    text: string
    setText: (text: string) => void
}

export const GuestsPicker = ({guests, setGuests, setText, isOpen }: Props) => {
    const updateGuests = (type: "adults" | "children", operation: string) => {
        const valueChange = operation === 'increase' ? 1 : -1;
        const newGuests = { ...guests, [type]: guests[type] + valueChange };

        if (newGuests[type] < 0) return;

        setText(
            `${newGuests.adults} взрослых ${newGuests.children} детей`
        );
        setGuests(newGuests);
    };

    const decreaseAdults = () => updateGuests('adults', 'decrease');
    const increaseAdults = () => updateGuests('adults', 'increase');
    const decreaseChildren = () => updateGuests('children', 'decrease');
    const increaseChildren = () => updateGuests('children', 'increase');


    return (
        <div className={`${s.picker} ${isOpen ? s.open : ''}`}>
            <div className={s.content}>
                <div className={s.item}>
                    <p>Взрослые</p>
                    <div className={s.counter}>
                        <Button onClick={decreaseAdults} type="text" label="-" variant=""/>
                        {guests.adults}
                        <Button onClick={increaseAdults} type="text" label="+" variant=""/>
                    </div>
                </div>
                <div className={s.item}>
                    <p>Дети</p>
                    <div className={s.counter}>
                        <Button onClick={decreaseChildren} type="text" label="-" variant=""/>
                        {guests.children}
                        <Button onClick={increaseChildren} type="text" label="+" variant=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}