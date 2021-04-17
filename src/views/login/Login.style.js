import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginBoxWrapper = styled.div`
  min-width: 640px;
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    flex: 2;
  }
`;

export const ImageContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  flex: 2;
  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    flex: 1;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    font-size: 18px;
  }
`;

export const SubmitButton = styled.div`
  background-color: ${(props) => (props.type === 'primary' ? 'rgba(9, 9, 121, 1)' : '#fff')};
  border: ${(props) => (props.type === 'primary' ? 'none' : '1px solid rgba(9, 9, 121, 1)')};
  color: ${(props) => (props.type === 'primary' ? '#fff' : 'rgba(9, 9, 121, 1)')};
  font-size: 18px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  margin: 5px 0;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
