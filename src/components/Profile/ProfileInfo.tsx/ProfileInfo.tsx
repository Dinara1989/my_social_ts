import React from "react";
import s from './ProfileInfo.module.css';
export const ProfileInfo = () => {
    return (<div>
                <div>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="main img"/>
                </div>
                <div className={s.descriptionBlock}>avatar + description</div>
        </div>
    );
};