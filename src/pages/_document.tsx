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

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rafaelsimionato.dev/" />
          <meta property="og:title" content="Rafael Simionato - Front-end Developer" />
          <meta property="og:description" content="I’m passionate about front-end development and how everything can be I transformed through lines of code on amazing screens." />
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rafaelsimionato.dev/" />
          <meta property="twitter:title" content="Rafael Simionato - Front-end Developer" />
          <meta property="twitter:description" content="I’m passionate about front-end development and how everything can be I transformed through lines of code on amazing screens." />
          <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
          
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
