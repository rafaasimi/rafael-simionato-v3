/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Rafael Simionato - Front-end Developer" />
          <meta name="description" content="I’m passionate about front-end development and how everything can be I transformed through lines of code on amazing screens." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rafaelsimionato.dev/" />
          <meta property="og:title" content="Rafael Simionato - Front-end Developer" />
          <meta property="og:description" content="I’m passionate about front-end development and how everything can be I transformed through lines of code on amazing screens." />
          <meta property="og:image" content="/og-image.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rafaelsimionato.dev/" />
          <meta property="twitter:title" content="Rafael Simionato - Front-end Developer" />
          <meta property="twitter:description" content="I’m passionate about front-end development and how everything can be I transformed through lines of code on amazing screens." />
          <meta property="twitter:image" content="/og-image.jpg" />
          
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
