import { Button, Grid } from "grommet";
import { Next } from "grommet-icons";

const NextQuestionButton = (props) => {
  if (props.nextQuestion < props.data.randomTraumata.length) {
    return (
      <Grid pad={{ top: "medium" }} gap="small">
        <Button
          primary
          label="Nächste Frage"
          reverse
          onClick={() => props.handleNextQuestionClick()}
          icon={<Next />}
        ></Button>{" "}
      </Grid>
    );
  } else {
    return (
      <Grid pad={{ top: "medium" }} gap="small">
        <Button
          primary
          label="Weiter"
          reverse
          icon={<Next />}
          onClick={() => props.handleNextQuestionClick()}
        ></Button>
      </Grid>
    );
  }
};

export default NextQuestionButton;
