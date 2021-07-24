import { Button } from "reactstrap";
const GenerateButton = ({ handleClick }) => {
  return (
    <Button color="primary" onClick={() => handleClick()}>
      Get new quote
    </Button>
  );
};

export default GenerateButton;
