// overrides default Document in Nextjs

import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Hahmlet/Hahmlet-VariableFont_wght.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Rubik/Rubik-VariableFont_wght.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

