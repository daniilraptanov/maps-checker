import React, { FC } from 'react';
import { MapDTO } from '../../types/dto/MapDTO';
import Chip from './Chip';

interface LevelProps {
  level: number;
  data: MapDTO;
}

const Level: FC<LevelProps> = (props) => {
  return (
    <div className="col s4">
    {props.data && props.data.chips.map(item => (
        item.level === props.level && (
          <div className="row">
              <span id={item.id}>
                  <Chip data={item} />
              </span>
          </div>
        )
    ))}
  </div>
  );
};

export default Level;
