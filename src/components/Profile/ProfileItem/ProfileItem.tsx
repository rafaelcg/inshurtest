import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, Flex } from 'reflexbox';

interface ProfileItemProps {
  legend: string
  value?: string
}

const ProfileItem = ({ legend, value }: ProfileItemProps) => {
  return (
    <Flex>
      <Box width={4 / 12}>
        <span>{legend}:</span>
      </Box>

      <Box width={8 / 12}>
        <span>{value && <Skeleton width={'100%'} />}</span>
      </Box>
    </Flex>
  )
}

export default ProfileItem;
