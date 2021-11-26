import styles from "../styles/home.module.scss";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

import projectsImg from "../assets/projects.svg";
import blogImg from "../assets/blog.svg";
import resumeImg from "../assets/resume.svg";
import profileImg from "../assets/profile.png";
import linkedinImg from "../assets/socials/linkedin.svg";
import git2Img from "../assets/socials/git.svg";
import emailImg from "../assets/socials/email.svg";
import htmlImg from "../assets/technologies/html.svg";
import cssImg from "../assets/technologies/css.svg";
import javascriptImg from "../assets/technologies/javascript.svg";
import sassImg from "../assets/technologies/sass.svg";
import reactImg from "../assets/technologies/react.svg";
import nextjsImg from "../assets/technologies/nextjs.svg";
import gitImg from "../assets/technologies/git.svg";
import figmaImg from "../assets/technologies/figma.svg";
import windowsImg from "../assets/technologies/windows.svg";
import vscodeImg from "../assets/technologies/vscode.svg";

const Home: NextPage = () => {
  function AgeCalculator() {
    const dataNasc = "07/10/1996";
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoNascParts = dataNasc.split("/");
    let diaNasc = parseInt(anoNascParts[0]);
    let mesNasc = parseInt(anoNascParts[1]);
    let anoNasc = parseInt(anoNascParts[2]);
    let idade = anoAtual - anoNasc;
    let mesAtual = dataAtual.getMonth() + 1;

    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
      idade--;
    } else {
      //Se estiver no mes do nascimento, verificar o dia
      if (mesAtual == mesNasc) {
        if (new Date().getDate() < diaNasc) {
          //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
          idade--;
        }
      }
    }
    return idade;
  }

  return (
    <section id={styles.homepage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.navigationContainer}>
            <div
              className={`${styles.content__navigation} animate__animated animate__bounceInLeft`}
            >
              <h3>Menu</h3>
              <nav className={styles.navigation}>
                <a
                  href="https://github.com/rafaasimi?tab=repositories"
                  target="_new"
                  className={styles.projects}
                >
                  <div className={`${styles.nav__card}`}>
                    <span>See some</span>
                    <h2>Projects</h2>
                    <p>Personal or created during courses and bootcamps.</p>
                    <div className={styles.nav__icon}>
                      <Image src={projectsImg} alt="Projects" />
                    </div>
                  </div>
                </a>

                <Link href="/" passHref>
                  <div
                    className={`${styles.nav__card} ${styles.blog} ${styles.notAllowed}`}
                  >
                    <span>See some</span>
                    <h2>Blog</h2>
                    <p>Quick posts, tips and tricks, tools and more.</p>
                    <div className={styles.nav__icon}>
                      <Image src={blogImg} alt="Blog" />
                    </div>
                  </div>
                </Link>

                <Link href="/" passHref>
                  <div
                    className={`${styles.nav__card} ${styles.resume} ${styles.notAllowed}`}
                  >
                    <span>See some</span>
                    <h2>Resume</h2>
                    <p>My career, positions, companies and more. </p>
                    <div className={styles.nav__icon}>
                      <Image src={resumeImg} alt="Resume" />
                    </div>
                  </div>
                </Link>
              </nav>
            </div>

            <div
              className={`${styles.content__socials} animate__animated animate__bounceInUp`}
            >
              <div className={styles.socials__profile}>
                <Image src={profileImg} alt="Rafael Simionato" />
              </div>

              <a
                href="https://www.linkedin.com/in/rafaelzorzenon/"
                target="_new"
              >
                <div className={styles.socials__icons}>
                  <Image src={linkedinImg} alt="Linkedin" /> Linkedin
                </div>
              </a>

              <a href="https://github.com/rafaasimi" target="_new">
                <div className={styles.socials__icons}>
                  <Image src={git2Img} alt="GitHub" /> GitHub
                </div>
              </a>

              <a href="mailto:rafaasimi@hotmail.com">
                <div className={styles.socials__icons}>
                  <Image src={emailImg} alt="Email" /> Contato
                </div>
              </a>
            </div>
          </div>

          <div
            className={`${styles.content__description} animate__animated animate__bounceInRight`}
          >
            <h3>About me</h3>
            <h1>Hello, I’m Rafael Simionato</h1>
            <p>
              I’m passionate about front-end development and how everything can
              be I transformed through lines of code on amazing screens.
            </p>
            <p>
              I’m currently a Front-end Developer focusing on Web development.
              <br/>
              I am {AgeCalculator()} years old and living in Araras, São Paulo -
              Brazil. I currently work at <a href="https://compass.uol/" target="_new">Compass.uol</a>, a UOL Group company, focused on software and solutions
              development.
            </p>
            <div className={styles.technologies}>
              <Image src={htmlImg} alt="HTML5" />
              <Image src={cssImg} alt="CSS3" />
              <Image src={javascriptImg} alt="JavaScript" />
              <Image src={sassImg} alt="Sass" />
              <Image src={reactImg} alt="ReactJS" />
              <Image src={nextjsImg} alt="NextJS" />
              <Image src={gitImg} alt="Git" />
              <Image src={figmaImg} alt="Figma" />
              <Image src={windowsImg} alt="Windows" />
              <Image src={vscodeImg} alt="Visual Studio Code" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
