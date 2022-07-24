import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;