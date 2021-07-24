import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const DisplayQuote = ({ quoteToDisplay }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Random Quote Generator</CardTitle>
          <CardText>
            <blockquote class="blockquote mb-0">
              <p>{quoteToDisplay.quote}</p>
              <footer class="blockquote-footer">{quoteToDisplay.author}</footer>
            </blockquote>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DisplayQuote;
