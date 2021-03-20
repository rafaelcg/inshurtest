import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <section className={'profile__container'}>
      <h1>My Profile</h1>
      <div className={'profile__row'}>
        <div className={'profile__row__item'}>
          photo
        </div>
        <div className={'profile__row__item'}>
          Name
        </div>
      </div>

    </section>
  )
}

export default Profile;
