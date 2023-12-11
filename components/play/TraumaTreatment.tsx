import { Heading, Paragraph, Text, Box, Card, CardBody } from "grommet";
const TraumaTreatment = (props) => {
  return (
    <>
      <Heading level="3" margin={{ top: "none", bottom: "margin" }}>
        Opfer {props.currentQuestion + 1}/{props.data?.randomTraumata.length}
      </Heading>
      <Box align="center" pad={{ bottom: "small" }}>
        {props.isLastAnswerCorrect ? (
          <Card
            background="#A9CF54"
            pad={{ horizontal: "xlarge", vertical: "small" }}
            elevation="none"
            round="large"
          >
            <CardBody>
              <Text size="large" weight="bold">
                Korrekt
              </Text>
            </CardBody>
          </Card>
        ) : (
          <>
            <Card
              background="#F1433F"
              pad={{ horizontal: "xlarge", vertical: "small" }}
              elevation="none"
              round="large"
            >
              <CardBody align="center">
                <Text size="large" weight="bold">
                  Falsch
                </Text>
                <Text size="small" margin={{ top: "xsmall" }}>
                  korrekt wäre{" "}
                  {
                    props.data?.randomTraumata[props.currentQuestion]
                      .triageGroup
                  }
                </Text>
              </CardBody>
            </Card>
          </>
        )}
      </Box>
      {props.data?.randomTraumata[props.currentQuestion].firstAid && (
        <>
          <Text
            style={{
              wordBreak: "break-word",
            }}
            weight="bold"
            color="brand"
          >
            Erste Hilfe
          </Text>
          <Paragraph
            size="small"
            fill
            margin={{ top: "xsmall" }}
            style={{
              wordBreak: "break-word",
            }}
          >
            {props.data?.randomTraumata[props.currentQuestion].firstAid
              ? props.data?.randomTraumata[props.currentQuestion].firstAid
              : "N/A"}
          </Paragraph>
        </>
      )}
      {props.data?.randomTraumata[props.currentQuestion].paramedicAid && (
        <>
          <Text
            style={{
              wordBreak: "break-word",
            }}
            weight="bold"
            color="brand"
          >
            Sanitätshilfe
          </Text>
          <Paragraph
            size="small"
            fill
            margin={{ top: "xsmall" }}
            style={{
              wordBreak: "break-word",
            }}
          >
            {props.data?.randomTraumata[props.currentQuestion].paramedicAid
              ? props.data?.randomTraumata[props.currentQuestion].paramedicAid
              : "N/A"}
          </Paragraph>
        </>
      )}
      {props.data?.randomTraumata[props.currentQuestion].emergencyDoctor && (
        <>
          <Text
            style={{
              wordBreak: "break-word",
            }}
            weight="bold"
            color="brand"
          >
            Notärztliche Hilfe
          </Text>
          <Paragraph
            size="small"
            fill
            margin={{ top: "xsmall" }}
            style={{
              wordBreak: "break-word",
            }}
          >
            {props.data?.randomTraumata[props.currentQuestion].emergencyDoctor
              ? props.data?.randomTraumata[props.currentQuestion]
                  .emergencyDoctor
              : "N/A"}
          </Paragraph>
        </>
      )}
    </>
  );
};

export default TraumaTreatment;
