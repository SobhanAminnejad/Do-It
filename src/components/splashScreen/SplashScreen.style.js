import styled, { keyframes } from 'styled-components';

export const SplashScreen = styled.div`
  font-size: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const run = (left, right) => keyframes`
 0% {
   background:blue;
    left: ${left};
    color: #eee;
  
  }
  50% {
    color: #666;
  }
  100% {
    background:green;
    left: ${right};
    color: #eee;
   
  }
`;

export const LoadingDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-top: 20px;
  position: relative;
  animation: ease-in-out infinite alternate;
  animation-name: ${run('-180px', '180px')};
  animation-duration: 2.5s;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    animation-name: ${run('-90px', '90px')};
  }
`;
