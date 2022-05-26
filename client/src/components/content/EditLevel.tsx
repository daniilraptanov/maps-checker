import React, { FC } from 'react';
import { MapDTO } from '../../types/dto/MapDTO';
import Chip from './Chip';

interface EditLevelProps {
  level: number;
  data: MapDTO;
}

const EditLevel: FC<EditLevelProps> = (props) => {
  return (
    <div className="col s4">
    {props.data && props.data.chips.map(item => (
        item.level === props.level && (
          <div className="row">
              <span>
                  <Chip data={item} />
              </span>
          </div>
        )
    ))}
  </div>
  );
};

export default EditLevel;
