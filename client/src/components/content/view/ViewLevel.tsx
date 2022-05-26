import React, { FC } from 'react';
import { MapDTO } from '../../../types/dto/MapDTO';
import Arrows from '../arrows/Arrows';

interface ViewLevelProps {
  level: number;
  data: MapDTO;
}

const ViewLevel: FC<ViewLevelProps> = (props) => {
    return (
        <div className="col s4">
            {props.data && props.data.chips.map(item => (
                item.level === props.level && (
                <div className="row">
                    <span id={item.id}>
                        {item.name}
                    </span>
                </div>
                )
            ))}

            <Arrows data={props.data} level={props.level} />
        </div>
    );
};

export default ViewLevel;
