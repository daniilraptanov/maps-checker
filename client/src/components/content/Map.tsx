import React, { FC } from 'react';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { CollapsibleItem, Icon } from 'react-materialize';
import { MapDTO } from '../../types/dto/MapDTO';
import Level from './Level';
import { MapServiceImpl } from '../../services/MapServiceImpl';


interface MapProps {
    data: MapDTO;
}

const Map: FC<MapProps> = (props) => {
    const updateXarrow = useXarrow();
    const mapService = MapServiceImpl.getInstance();
    const arrowPoints = mapService.defineArrowsPoints(props.data.id, 0);

    return (
        <CollapsibleItem
            expanded={false}
            header={props.data ? props.data.name : "New Map"}
            icon={<Icon>map</Icon>}
            node="div"
            onSelect={() => updateXarrow()}
        >
        <div className="row">
            <Xwrapper>
                <Level data={props.data} level={0} />
                <Level data={props.data} level={1} />

                <Xarrow
                    start={arrowPoints.start}
                    end={arrowPoints.end}
                />
            </Xwrapper>
        </div>
        </CollapsibleItem>
    );
};

export default Map;
