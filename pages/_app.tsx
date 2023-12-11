import { AppProps } from "next/app";
import { grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import custom from "../custom.theme";

const theme = deepMerge(grommet, custom);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Grommet theme={theme} full>
        <Component {...pageProps} />
      </Grommet>
    </ApolloProvider>
  );
}

export default MyApp;
