import React, { FC } from 'react';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { CollapsibleItem, Icon } from 'react-materialize';
import { MapDTO } from '../../types/dto/MapDTO';
import Level from './Level';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import { MapService } from '../../types/services/MapService';
import NewChipModal from './NewChipModal';


interface MapProps {
    data: MapDTO;
}

const Map: FC<MapProps> = (props) => {
    const mapService: MapService = MapServiceImpl.getInstance();

    const arrowPoints = mapService.defineArrowsPoints(props.data?.id || "", 0);
    const totalLevels = mapService.getTotalLevels(props.data?.id || "");

    const updateXarrow = useXarrow();

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
                <Level data={props.data} level={2} />

                {arrowPoints && <Xarrow
                    start={arrowPoints.start}
                    end={arrowPoints.end}
                /> }
            </Xwrapper>
        </div>
        { totalLevels < 3 && <NewChipModal mapId={props.data.id} minLevel={2} /> }
        </CollapsibleItem>
    );
};

export default Map;
