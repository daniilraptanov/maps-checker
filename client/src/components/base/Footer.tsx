import React, { FC } from 'react';
import { Button, Icon } from 'react-materialize';

interface FooterProps {
  setIsCreateMap(value: boolean): void;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <Button
        className="blue"
        style={{marginLeft : "30px"}}
        floating
        icon={<Icon>add</Icon>}
        large
        node="button"
        waves="blue"

        onClick={() => props.setIsCreateMap(true)}
    />
  );
};

export default Footer;
