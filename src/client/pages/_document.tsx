import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

export  default function Document() {
    return (
        <Html lang="ja">
            <Head>
                {CssBaseline.flush()}
                <link rel="icon" href="favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}