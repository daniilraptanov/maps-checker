import React, { FC } from 'react';
import  { useXarrow } from "react-xarrows";
import { CollapsibleItem, Icon, Switch } from 'react-materialize';
import { MapDTO } from '../../types/dto/MapDTO';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import { MapService } from '../../types/services/MapService';
import NewChipModal from './NewChipModal';
import EditMode from './edit/EditMode';
import ViewMode from './view/ViewMode';


interface MapProps {
    data: MapDTO;
    isViewMode: boolean;
    setIsViewMode(value: boolean): void;
    setIsCreateMap(value: boolean): void;
}

const Map: FC<MapProps> = (props) => {
    const mapService: MapService = MapServiceImpl.getInstance();
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
        
        { !props.isViewMode ? <EditMode data={props.data} /> : <ViewMode data={props.data} /> }

        <div className="row">
            <div className="col 21">
                { totalLevels < 3 && <NewChipModal mapId={props.data?.id || ""} minLevel={props.data ? 2 : 1} setIsCreateMap={props.setIsCreateMap} /> }
            </div>

            <div className="col s2" style={{marginTop : "5px"}}>
                <Switch
                    id="Switch-20"
                    offLabel="edit"
                    onChange={() => {
                        props.setIsViewMode(!props.isViewMode);
                        updateXarrow();
                    }}
                    onLabel="view"
                />
            </div>
        </div>
        </CollapsibleItem>
    );
};

export default Map;

