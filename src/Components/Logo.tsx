import styled from "@emotion/styled";
import logo from "../logo.svg";

const LogoStyle = styled.image`
  height: 10vmin;
  pointer-events: none;
`;
const Logo = () => {
  return (
    <LogoStyle>
      <img src={logo} alt="logo" />
    </LogoStyle>
  );
};

export default Logo;
