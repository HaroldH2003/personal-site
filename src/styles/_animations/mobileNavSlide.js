import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(250px);
    -webkit-transform:translateX(250px);
    -moz-transform:translateX(250px);
    -o-transform:translateX(250px);
    -ms-transform:translateX(250px);
  }

  to {
    transform: translateX(0);
    -webkit-transform:translateX(0);
    -moz-transform:translateX(0);
    -o-transform:translateX(0);
    -ms-transform:translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    -webkit-transform:translateX(0);
    -moz-transform:translateX(0);
    -o-transform:translateX(0);
    -ms-transform:translateX(0);
  }
  
  to {
    transform: translateX(250px);
    -webkit-transform:translateX(250px);
    -moz-transform:translateX(250px);
    -o-transform:translateX(250px);
    -ms-transform:translateX(250px);
  }
`;

export { slideIn, slideOut };
