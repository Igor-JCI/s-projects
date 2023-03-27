import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: Array<UserType>
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : ""
    const spanClass = error !== '' ? s.textError : ""

    return (
        <div>
            <div className={s.greeting}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnter}
                       onBlur={setNameCallback}/>
                <button onClick={addUser} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div className={spanClass}>{error}</div>
            <div>
                {users.map((u: UserType) => {
                    return (
                        <div key={u._id}>{u.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Greeting
