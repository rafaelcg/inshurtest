import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, Flex } from 'reflexbox';
import './Profile.scss';
import ProfileItem from './ProfileItem';

const Profile = () => {
  return (
    <section className={'profile__container'}>
      <h1>Profile</h1>

      <Flex flexWrap={'wrap'} className={'profile__row'}>
        <Box width={1} className={'profile__row__item'}>
          <Skeleton width={'250px'} />
        </Box>
        <Box width={1} className={'profile__row__item'}>
          <Skeleton circle={true} height={50} width={50} />
        </Box>

        <Box width={1} className={'profile__row__item'}>
          <ul className={'profile__list'}>
            <li>
              <ProfileItem legend={'Job'} />
            </li>
            <li>
              <ProfileItem legend={'Favourite food'} value={'test'} />
            </li>
          </ul>
        </Box>
      </Flex>

    </section>
  )
}

export default Profile;
