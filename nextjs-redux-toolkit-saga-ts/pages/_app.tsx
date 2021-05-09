import { AppProps } from "next/app";
import { NextPage } from "next";
import wrapper from "../store/configureStore"; //좀전에 만든 store.tsx 파일

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
