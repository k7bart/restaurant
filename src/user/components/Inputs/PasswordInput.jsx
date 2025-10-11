import Input from "./Input/Input";

const PasswordInput = (props) => {
    return <Input fieldName="password" required type="password" {...props} />;
};

export default PasswordInput;
