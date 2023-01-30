// overrides default Document in Nextjs

import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html
            // className="dark"
        >
            <Head>
                {/*Fonts*/}
                <link
                    rel="stylesheet preload"
                    href="/fonts/Hahmlet/Hahmlet-VariableFont_wght.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet preload"
                    href="/fonts/Rubik/Rubik-VariableFont_wght.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                {/*Favicons*/}
                <link rel="shortcut icon" href="/favicons/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>

            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

