import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)

      return { ...initialProps }
   }

   render() {
      return (
         <Html lang={this.props.locale}>
            <Head>
               <link rel='shortcut icon' href='/favicon-192x192.png' />
            </Head>
            <body>
               <Main />
               <div id='portal' />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
