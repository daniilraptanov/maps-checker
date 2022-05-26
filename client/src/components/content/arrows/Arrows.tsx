import React, { FC } from 'react';
import { MapServiceImpl } from '../../../services/MapServiceImpl';
import { MapDTO } from '../../../types/dto/MapDTO';
import { MapService } from '../../../types/services/MapService';
import Arrow from './Arrow';

interface ArrowsProps {
  level: number;
  data: MapDTO;
}

const Arrows: FC<ArrowsProps> = (props) => {
    const mapService: MapService = MapServiceImpl.getInstance();

    return (
        <>
            {
                props.data.chips.map(chip => (
                chip.level === props.level &&
                    <Arrow 
                        startPoint={mapService.defineArrowsPoints(props.data?.id || "", chip.level).start} 
                        endPoints={mapService.defineArrowsPoints(props.data?.id || "", chip.level).end}
                    />
                ))
            }
        </>
    )
};

export default Arrows;
