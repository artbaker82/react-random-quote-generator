import { Button } from "reactstrap";

const PreviousQuoteButton = ({ handleClick }) => {
  return (
    <Button color="secondary" onClick={() => handleClick()}>
      Previous Quote
    </Button>
  );
};

export default PreviousQuoteButton;
