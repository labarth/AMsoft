import { createGlobalStyle } from 'styled-components';
import { StyledReset } from './StyledReset';

export default createGlobalStyle`
  ${StyledReset}
  
  * {
    box-sizing: border-box;
  }
  
  #root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
