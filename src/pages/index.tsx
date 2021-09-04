import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/home.module.scss";

import htmlImg from '../assets/technologies/html.svg'
import cssImg from '../assets/technologies/css.svg'
import javascriptImg from '../assets/technologies/javascript.svg'
import sassImg from '../assets/technologies/sass.svg'
import reactImg from '../assets/technologies/react.svg'
import nextjsImg from '../assets/technologies/nextjs.svg'
import gitImg from '../assets/technologies/git.svg'
import figmaImg from '../assets/technologies/figma.svg'
import windowsImg from '../assets/technologies/windows.svg'
import vscodeImg from '../assets/technologies/vscode.svg'

const Home: NextPage = () => {
  return (
    <section id={styles.homepage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__navigation}>
            <h3>Menu</h3>
            <nav className={styles.navigation}>
              <div className={`${styles.nav__card} ${styles.projects}`}>
                <span>See some</span>
                <h2>Projects</h2>
                <p>Personal or created during courses and bootcamps.</p>
              </div>
              <div className={`${styles.nav__card} ${styles.blog}`}>
                <span>See some</span>
                <h2>Blog</h2>
                <p>Quick posts, tips and tricks, tools and more.</p>
              </div>
              <div className={`${styles.nav__card} ${styles.resume}`}>
                <span>See some</span>
                <h2>Resume</h2>
                <p>My career, positions, companies and more. </p>
              </div>
            </nav>
          </div>

          <div className={styles.content__description}>
            <h3>About me</h3>
            <h1>Hello, I’m Rafael Simionato</h1>
            <p>
              I’m passionate about front-end development and how everything can
              be I transformed through lines of code on amazing screens.
            </p>
            <p>
              I’m currently a Front-end Developer focusing on Web development. I
              am 24 years old and living in Araras, São Paulo - Brazil. I
              currently work at{" "}
              <a href="https://compassouol.com/" target="_new">
                Compasso UOL
              </a>
              , a UOL Group company, focused on software and solutions
              development.
            </p>
            <div className={styles.technologies}>
              <Image src={htmlImg} alt="HTML5"/>
              <Image src={cssImg} alt="CSS3"/>
              <Image src={javascriptImg} alt="JavaScript"/>
              <Image src={sassImg} alt="Sass"/>
              <Image src={reactImg} alt="ReactJS"/>
              <Image src={nextjsImg} alt="NextJS"/>
              <Image src={gitImg} alt="Git"/>
              <Image src={figmaImg} alt="Figma"/>
              <Image src={windowsImg} alt="Windows"/>
              <Image src={vscodeImg} alt="Visual Studio Code"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
