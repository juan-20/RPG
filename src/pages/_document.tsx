import Document, { Html, Head, Main, NextScript } from "next/document"
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head>
                    <link rel="shortcut icon" href="../../assets/favicon.png" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

