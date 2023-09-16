import React from 'react';
import lazy from 'next/dynamic';

const NoSsr = props => <>{props.children}</>


export default dynamic(() => Promise.resolve(NoSsr),
    { ssr: false })
