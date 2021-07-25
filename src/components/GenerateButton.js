import { Button } from "reactstrap";
const GenerateButton = ({ handleClick }) => {
  return (
    //reactstrap library is made up of components, with props being passed in like "primary" and onClick
    <Button color="primary" onClick={() => handleClick()}>
      Get new quote
    </Button>
  );
};

export default GenerateButton;
