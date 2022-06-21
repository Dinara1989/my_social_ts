import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<div className={s.dialog + '' + s.active}>Dinara</div>*/}
                {/*<NavLink to="/dinara" className={s.dialog} ClassName={s.activeLink}>Dinara</NavLink>*/}
                <div className={s.dialog}>Hrayr</div>
                <div className={s.dialog}>Susanna</div>
                <div className={s.dialog}>Garo</div>
                <div className={s.dialog}>Lera</div>
                <div className={s.dialog}>Rocky</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I'm fine</div>
            </div>
        </div>
    );
};

