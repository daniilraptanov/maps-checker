import React, { FC } from 'react';
import { Chip as MChip, Icon } from 'react-materialize';
import { ChipDTO } from '../../types/dto/ChipDTO';

interface ChipProps {
  data: ChipDTO;
}

const Chip: FC<ChipProps> = (props) => {
  return (
    <MChip
        close
        closeIcon={<Icon className="close">close</Icon>}
        options={null}
    >
      {props.data ? props.data.name : ""}
    </MChip>
  );
};

export default Chip;
