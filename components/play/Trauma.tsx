import { Heading, Paragraph, Text } from "grommet";
const Trauma = (props) => {
  return (
    <>
      <Heading level="3" margin={{ top: "none", bottom: "margin" }}>
        Opfer {props.currentQuestion + 1}/{props.data?.randomTraumata.length}
      </Heading>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Diagnose
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].diagnose}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Ort
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].location}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Schminkmuster
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].makeup}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Airway
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].a}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Breathing
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].b}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Circulation
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].c}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Disability
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].d}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Exposure - SAMPLE/Traumacheck
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].eSampleTraumacheck}
      </Paragraph>
      <Text
        style={{
          wordBreak: "break-word",
        }}
        weight="bold"
        color="brand"
      >
        Exposure - Monitoring
      </Text>
      <Paragraph
        size="small"
        fill
        margin={{ top: "xsmall" }}
        style={{
          wordBreak: "break-word",
        }}
      >
        {props.data?.randomTraumata[props.currentQuestion].eMonitoring}
      </Paragraph>
    </>
  );
};

export default Trauma;
