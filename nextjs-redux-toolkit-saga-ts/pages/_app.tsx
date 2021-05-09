import { AppProps } from "next/app";
import { NextPage } from "next";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";
const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(MyApp));
