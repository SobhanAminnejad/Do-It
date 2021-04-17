import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px 0;
  @media only screen and (max-width: 743px) {
  }
  input,
  p {
    font-size: ${(props) => props.theme.mediumFontsize};
    color: ${(props) => props.theme.textColor};
    font-weight: 300;
  }
  input {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #999;
    padding: 10px 20px;
    outline: none;
    ::placeholder {
      color: ${(props) => props.theme.placeHolderColor};
      font-size: ${(props) => props.theme.mediumFontsize};
      font-weight: 300;
    }
    ::-moz-placeholder {
      line-height: 48px;
    }
  }
`;

export const InputContent = styled.input`
  width: ${(props) => (props.prepend ? '' : '100%')};
  background: ${(props) => (props.readOnly ? '#ebebeb' : '#ffffff')};
  cursor: ${(props) => (props.readOnly ? 'not-allowed' : '')};
`;

export const InputPrepend = styled.div`
  height: calc(100% - 24px);
  padding: 2px 20px 0 20px;
  height: 24px;
  border-right: 1px solid #ebebeb;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.9px;
  text-align: left;
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
`;
