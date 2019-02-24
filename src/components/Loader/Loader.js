import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledLoader } from './Styled';

export const Loader = () => (
  <StyledLoader>
    <CircularProgress />
  </StyledLoader>
);
