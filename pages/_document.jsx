/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-danger */
/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="es">
        <Head>
          {/* <!-- Google fonts -Roboto --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          {/* <!-- Google fonts -Heebo --> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          />

          {/* iconScout  */}

          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
        </Head>
        <body>
          <div id="slide-root" />
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
