'use client';

import s from './search-panel.module.scss'
import {useState} from "react";
import {GuestsPicker} from "@/widgets/guests-picker/guests-picker";
import {Button} from "@/shared/ui/button/button";
import {Search} from "@/shared/assets/svg";

export const SearchPanel = () => {
    const [startDate, setStartDate] = useState<Date | string>("");
    const [endDate, setEndDate] = useState<Date | string>("");
    const [guests, setGuests] = useState({ adults: 2, children: 0 });
    const [guestsText, setGuestsText] = useState('2 взрослых 0 детей');
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={s.searchPanel}>
            <label className={s.city}>
                <span>Город или адрес</span>
                <input type='text' placeholder='Куда едем'/>
            </label>

            <label className={s.startDate}>
                <span> Заезд</span>
                <input type="date"
                    value={startDate.toLocaleString()}
                       onChange={e => setStartDate(e.currentTarget.value)}
                />
            </label>
            <label className={s.endDate}>
                <span> Отъезд</span>
                <input
                    type="date"
                    value={endDate.toLocaleString()}
                    onChange={e => setEndDate(e.currentTarget.value)}
                />
            </label>
            <label className={`${s.guests}`} onClick={() => setIsOpen(prevState => !prevState)}>
                <span>Гости</span>
                <input
                    type='text'
                    placeholder='2 взрослых'
                    defaultValue={guestsText}
                    readOnly
                />
                {isOpen && (
                    <GuestsPicker isOpen={isOpen} guests={guests} setGuests={setGuests} text={guestsText} setText={setGuestsText} />
                )}
            </label>
            <Button classname={s.searchButton} type="icon" icon={<Search />} variant=""/>

        </div>
    )
}