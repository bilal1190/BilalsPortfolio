import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bebas+Neue&display=swap"
        rel="stylesheet"/>

      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: "AOS.init({ offset: 200, delay:10 , duration: 1000 })",
          }}
        />
      </body>
    </Html>
  );
}
