import React, { FC } from 'react';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { CollapsibleItem, Icon, Switch } from 'react-materialize';
import { MapDTO } from '../../types/dto/MapDTO';
import Level from './Level';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import { MapService } from '../../types/services/MapService';
import NewChipModal from './NewChipModal';
import EditMode from './EditMode';


interface MapProps {
    data: MapDTO;
    isViewMode: boolean;
    setIsViewMode(value: boolean): void;
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
        
        { !props.isViewMode ? <EditMode data={props.data} /> : <></> }

        <div className="row">
            <div className="col 21">
                { totalLevels < 3 && <NewChipModal mapId={props.data.id} minLevel={2} /> }
            </div>

            <div className="col s2" style={{marginTop : "5px"}}>
                <Switch
                    id="Switch-20"
                    offLabel="edit"
                    onChange={() => [props.setIsViewMode(!props.isViewMode)]}
                    onLabel="view"
                />
            </div>
        </div>
        </CollapsibleItem>
    );
};

export default Map;


// {/* {arrowPoints && <Xarrow
//                     start={arrowPoints.start}
//                     end={arrowPoints.end}
//                 /> } */}