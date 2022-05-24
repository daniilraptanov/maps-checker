import React, { FC } from 'react';
import { Button, Icon } from 'react-materialize';

const Footer: FC = () => {
  return (
    <Button
        className="blue"
        style={{marginLeft : "30px"}}
        floating
        icon={<Icon>add</Icon>}
        large
        node="button"
        waves="light"
    />
  );
};

export default Footer;
