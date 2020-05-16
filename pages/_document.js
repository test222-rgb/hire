import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import sprite from 'svg-sprite-loader/runtime/sprite.build'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body className="Body">
          <div dangerouslySetInnerHTML={{ __html: sprite.stringify() }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
