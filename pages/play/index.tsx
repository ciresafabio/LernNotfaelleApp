import DefaultHead from "../../components/common/DefaultHead";
import Play from "./play";
import { Box, Heading, Button } from "grommet";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <DefaultHead title="Play" />
      <Box align="center">
        <Link href="/" passHref>
          <Button>
            <Heading color="brand">Lern Notfälle App</Heading>
          </Button>
        </Link>
      </Box>
      <Play />
    </>
  );
}
