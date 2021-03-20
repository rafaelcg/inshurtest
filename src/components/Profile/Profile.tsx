import axios from 'axios';
import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, Flex } from 'reflexbox';
import './Profile.scss';
import ProfileItem from './ProfileItem';

type userType = {
  id?: string
  name?: string
  jobTitle?: string
  favouriteFood?: string
  photoURL?: string
}

const Profile = () => {

  const [user, setUser] = React.useState<userType>({
    id: undefined,
    name: undefined,
    jobTitle: undefined,
    favouriteFood: undefined,
    photoURL: undefined
  })

  const [error, setError] = React.useState<boolean>(false)

  const getUserProfile = () => {
    axios
      .get('http://localhost:4000/users/1')
      .then(data => {
        if (data.status === 200) {
          const userData: userType = data.data
          setUser({
            id: userData.id,
            name: userData.name,
            jobTitle: userData.jobTitle,
            favouriteFood: userData.favouriteFood,
            photoURL: userData.photoURL
          })
        } else {
          setError(true)
        }
      })
      .catch(error => {
        console.error("Fatal error: " + error)
        setError(true)
      })
  }

  useEffect(() => {

    // added some fake lag in the frontend to make it simpler
    setTimeout(() => getUserProfile(), 3000)

    return () => {
      //axios.cancel goes here
    }
  })

  return (
    <section className={'profile__container'}>
      <h1>Home &#62; Profile</h1>

      {error && <div>An error has occured</div>}

      <Flex flexWrap={'wrap'} className={'profile__row'}>

        <Box width={1} className={'profile__row__item photo'}>
          {user.photoURL
            ? <div className={'photoContainer'} style={{
              backgroundImage: user.photoURL ? `url('${user.photoURL}')` : ''
            }}>
              {/* Would need a real img tag for a11y purposes */}
              {/* <img style={{ display: 'none' }} src={user.photoURL} alt={'User profile'} /> */}
            </div>
            : <Skeleton circle={true} height={125} width={125} />}
        </Box>

        <Box width={1} className={'profile__row__item username'}>
          {user.name ? user.name : <Skeleton width={'250px'} />}
        </Box>

        <Box width={1} className={'profile__row__item'}>
          <ul className={'profile__list'}>
            <li>
              <ProfileItem legend={'Job'} value={user.jobTitle} />
            </li>
            <li>
              <ProfileItem legend={'Favourite food'} value={user.favouriteFood} />
            </li>
          </ul>
        </Box>
      </Flex>

    </section>
  )
}

export default Profile;
