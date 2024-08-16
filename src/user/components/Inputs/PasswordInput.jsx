import Input from "./Input/Input";

const PasswordInput = (props) => {
    return <Input fieldName="password" required={true} {...props} />;
};

export default PasswordInput;
