import "styles/globals.scss";
import wrapper from "store/configureStore";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
