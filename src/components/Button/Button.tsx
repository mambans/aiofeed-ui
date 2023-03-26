import { StyledButton } from "./styles";

const Button = ({ children, ...rest }: ButtonProps) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};
export default Button;
