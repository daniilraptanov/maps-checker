import React, { FC, useState } from 'react';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { Button, CollapsibleItem, Icon, TextInput } from 'react-materialize';
import { MapDTO } from '../../types/dto/MapDTO';
import Level from './Level';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import { ChipServiceImpl } from '../../services/ChipServiceImpl';
import { ChipService } from '../../types/services/ChipService';
import { MapService } from '../../types/services/MapService';


interface MapProps {
    data: MapDTO;
}

const Map: FC<MapProps> = (props) => {
    const mapService: MapService = MapServiceImpl.getInstance();
    const chipService: ChipService = ChipServiceImpl.getInstance();

    const arrowPoints = mapService.defineArrowsPoints(props.data?.id || "", 0);
    const totalLevels = mapService.getTotalLevels(props.data?.id || "");

    const updateXarrow = useXarrow();
    const [newChip, setNewChip] = useState<{name: string, level: number}>({
        name: "",
        level: null
    });

    const newChipHandelChange = (name: any, level: number) => {
        setNewChip({
            name: name.data ? newChip.name + name.data : newChip.name.substring(0, newChip.name.length - 1),
            level: level
        });
    }

    const createOrUpdateChip = (name: string, level: number): void => {
        chipService.createOrUpdateChip({
            name: name,
            level: level,
            isComplete: false,
            mapId: props.data.id
        });
    }

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

                {totalLevels < 3 && 
                    <>
                        <TextInput
                            data-length={15}
                            label="Add new chip"
                            onChange={(val) => newChipHandelChange(val.nativeEvent, totalLevels + 1)}
                        />

                        <Button
                            className="green"
                            floating
                            icon={<Icon>add</Icon>}
                            small
                            node="button"
                            waves="light"
                            onClick={() => createOrUpdateChip(newChip.name, newChip.level)}
                        />
                    </>
                }

                {arrowPoints && <Xarrow
                    start={arrowPoints.start}
                    end={arrowPoints.end}
                /> }
            </Xwrapper>
        </div>
        </CollapsibleItem>
    );
};

export default Map;
