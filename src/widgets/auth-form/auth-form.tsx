'use client'

import s from './auth-form.module.scss'
import { useState } from "react";
import { Button } from "@/shared/ui";


export const AuthForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);

    const handleLogin = () => {
        if (!login || !password) {
            alert('Поля должны быть заполнены');
            return;
        }
        alert('Авторизация успешна')
    };



    return (
        <div className={s.form}>
            <h2 className={s.title}>Вход</h2>
            <input
                className={s.login}
                type="text"
                placeholder="Введите e-mail или телефон"
                value={login}
                onChange={e => setLogin(e.currentTarget.value)}
            />
            <input
                className={s.password}
                type='password'
                placeholder='Введите пароль'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className={s.checkbox}>
                <label>
                    <input
                        type='checkbox'
                        checked={isRemember}
                        onChange={e => setIsRemember(e.currentTarget.checked)}
                    />
                    Запомнить меня
                </label>
                <a href='#'>Забыли пароль?</a>
            </div>
            <Button onClick={handleLogin} type="text" label="Войти" variant="primary" fullwidth/>
            <p className={s.caption}>
                Нет аккаунта? <a href='#'>Регистрация</a>
            </p>
        </div>
    )
}