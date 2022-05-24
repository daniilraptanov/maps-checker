import React, { FC } from 'react';
import { Collapsible } from 'react-materialize';
import Map from '../content/Map';

const Container: FC = () => {
return (
    <Collapsible
        accordion
        popout
    >
        <Map />
        {/* <Map />
        <Map /> */}
    </Collapsible>
)
};

export default Container;
