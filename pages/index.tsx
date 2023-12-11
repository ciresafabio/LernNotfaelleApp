import Link from "next/link";
import { Box, Card, CardBody, Heading, Paragraph, Button } from "grommet";
import { Next } from "grommet-icons";

import DefaultHead from "../components/common/DefaultHead";

export default function Home() {
  return (
    <Box>
      <DefaultHead />
      <Box align="center">
        <Heading color="brand">Lern Notfälle App</Heading>
        <Box pad={{ top: "large", horizontal: "small" }}>
          <Card width="800px" background="light">
            <CardBody pad="medium">
              <Paragraph fill size="large">
                Teste deine Kenntnisse im Triage-Quiz
              </Paragraph>
              <Box align="start">
                <Link href="/play" passHref>
                  <Button
                    size="large"
                    primary
                    label="Spielen"
                    icon={<Next />}
                    reverse
                  />
                </Link>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
