import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, Flex } from 'reflexbox';
import './ProfileItem.scss';

interface ProfileItemProps {
  legend: string
  value?: string
}

const ProfileItem = ({ legend, value }: ProfileItemProps) => {
  return (
    <Flex>
      <Box className={'legend'} width={4 / 12}>
        <span data-testid={'legendElement'}>{legend}:</span>
      </Box>

      <Box className={'value'} width={8 / 12}>
        <span data-testid={'valueElement'}>{value ? value : <div data-testid={'valueSkeleton'}><Skeleton width={'100%'} /></div>}</span>
      </Box>
    </Flex>
  )
}

export default ProfileItem;
