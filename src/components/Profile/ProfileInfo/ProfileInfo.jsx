import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://siosports.com/wp-content/uploads/2018/07/help.png" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://kingsballpen.com.ng/wp-content/uploads/2019/12/img-avatar-blank.jpg" alt="" />
            </div>

        </div>

    );
}

export default ProfileInfo;