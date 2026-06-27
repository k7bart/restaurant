import Input from "./Input/Input";

const NumberOfChildrenInput = (props) => {
    return (
        <Input
            fieldName="numberOfChildren"
            label="Number of Children"
            {...props}
        />
    );
};

export default NumberOfChildrenInput;
