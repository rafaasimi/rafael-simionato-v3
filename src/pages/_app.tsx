import type { AppProps } from "next/app";
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="particles-js" className={styles.wrapper}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default MyApp;
