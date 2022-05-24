import React, { FC } from 'react';
import { Chip as MChip, Icon } from 'react-materialize';

const Chip: FC = () => {
  return (
    <MChip
        close
        closeIcon={<Icon className="close">close</Icon>}
        options={null}
    >
      Chip
    </MChip>
  );
};

export default Chip;
