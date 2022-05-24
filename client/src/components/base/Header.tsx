import React, { FC } from 'react';
import { Icon, Navbar } from 'react-materialize';

const Header: FC = () => {
return (
    <Navbar
        className="blue"
        alignLinks="left"
        brand={<a href="/">Road-Map checker</a>}
        centerLogo
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>
    }
    >
    </Navbar>
);
};

export default Header;
