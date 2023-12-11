import { Button, Grid } from "grommet";

const AnswerButtons = (props) => {
  return (
    <Grid pad={{ top: "medium" }} gap="small">
      <Button
        primary
        color="#F1433F"
        label="I"
        onClick={() =>
          props.handleAnswerOptionClick(
            props.data?.randomTraumata[props.currentQuestion].triageGroup ===
              "I"
          )
        }
      ></Button>
      <Button
        primary
        color="#F7E967"
        label="II"
        onClick={() =>
          props.handleAnswerOptionClick(
            props.data?.randomTraumata[props.currentQuestion].triageGroup ===
              "II"
          )
        }
      ></Button>
      <Button
        primary
        color="#A9CF54"
        label="III"
        onClick={() =>
          props.handleAnswerOptionClick(
            props.data?.randomTraumata[props.currentQuestion].triageGroup ===
              "III"
          )
        }
      ></Button>
      <Button
        primary
        color="#70B7BA"
        label="IV"
        onClick={() =>
          props.handleAnswerOptionClick(
            props.data?.randomTraumata[props.currentQuestion].triageGroup ===
              "IV"
          )
        }
      ></Button>
    </Grid>
  );
};

export default AnswerButtons;
