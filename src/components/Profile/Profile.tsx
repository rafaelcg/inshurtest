import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, Flex } from 'reflexbox';
import './Profile.scss';

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
              <Flex>
                <Box width={4 / 12}>
                  <span>Job:</span>
                </Box>

                <Box width={8 / 12}>
                  <span><Skeleton width={'100%'} /></span>
                </Box>
              </Flex>
            </li>
            <li>
              <Flex>
                <Box width={4 / 12}>
                  <span>Favourite food:</span>
                </Box>

                <Box width={8 / 12}>
                  <span><Skeleton width={'100%'} /></span>
                </Box>
              </Flex>
            </li>
          </ul>
        </Box>
      </Flex>

    </section>
  )
}

export default Profile;
