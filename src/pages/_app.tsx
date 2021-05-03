import { AppProps } from "next/app";
import Layout from "../main";
import Provider from "../main/Provider";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
