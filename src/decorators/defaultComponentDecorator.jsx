// @flow

import * as React from 'react';
import punycode from 'punycode';

export default (
    decoratedHref: string,
    decoratedText: string,
    key: number
): React.Node => {
    return (
        <a href={decoratedHref} key={key} target='_blank' rel='noopener'>
            {punycode.toASCII(decoratedText)}
        </a>
    );
};
