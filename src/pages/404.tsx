import Image from "next/image";
import Link from "next/link";

import styles from "../styles/404.module.scss";

import astronautImg from "../assets/astronaut.svg";

export default function Custom404() {
  type ComponentProps = React.PropsWithChildren<{
    index: any;
    value: any;
  }> &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;

  return (
    <section id={styles.page404}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>404</h1>
          <p>
            Hey, stop! Looks like what you were looking for is no longer here.
          </p>
          <Link href="/" passHref>
            <a className="button primary-button">Return</a>
          </Link>
        </div>
        <div className={styles.image}>
          <Image src={astronautImg} alt="Astronaut" />
        </div>
      </div>
    </section>
  );
}
