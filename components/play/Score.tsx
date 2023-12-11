import { Box, Button, Clock, Text, Stack, Meter } from "grommet";
import { Refresh } from "grommet-icons";

const Score = (props) => {
  return (
    <>
      <Clock
        margin={{ left: "auto" }}
        type="digital"
        time={props.stoppedTime}
        run={false}
      />
      <Box align="center">
        <Text
          margin={{ horizontal: "auto", bottom: "medium" }}
          style={{
            wordBreak: "break-word",
          }}
        >
          {props.score} von {props.data?.randomTraumata.length} korrekt
          triagiert
        </Text>
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: Math.round(
                  props.score / (props.data?.randomTraumata.length / 100)
                ),
              },
            ]}
            size="xsmall"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
            <Text size="xlarge" weight="bold">
              {Math.round(
                props.score / (props.data?.randomTraumata.length / 100)
              )}
            </Text>
            <Text size="small">%</Text>
          </Box>
        </Stack>
        <Box pad={{ top: "large" }}>
          <Button
            onClick={() => props.handlePlayAgainClick()}
            primary
            label="nochmal spielen"
            reverse
            size="large"
            icon={<Refresh />}
          ></Button>
        </Box>
      </Box>
    </>
  );
};

export default Score;
