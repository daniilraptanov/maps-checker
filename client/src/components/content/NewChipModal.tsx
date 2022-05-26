import React, { FC, useState } from 'react';
import { Button, Modal, TextInput } from 'react-materialize';
import { ChipServiceImpl } from '../../services/ChipServiceImpl';
import { ChipService } from '../../types/services/ChipService';
import useMessage from '../../tools/hooks/useMessage'
import { MapService } from '../../types/services/MapService';
import { MapServiceImpl } from '../../services/MapServiceImpl';

interface NewChipModalProps {
    mapId: string;
    minLevel: number;
    setIsCreateMap(value: boolean): void;
}

const NewChipModal: FC<NewChipModalProps> = (props) => {
    const chipService: ChipService = ChipServiceImpl.getInstance();
    const mapService: MapService = MapServiceImpl.getInstance();

    const message = useMessage();
    const [newChip, setNewChip] = useState<{name: string, level: number}>({
        name: "",
        level: props.minLevel + 1
    });

    const newChipHandelChange = (name: any, level: number) => {
        setNewChip({
            name: name.data ? newChip.name + name.data : newChip.name.substring(0, newChip.name.length - 1),
            level: level
        });
    }

    const createOrUpdateChip = async (name: string, level: number): Promise<void> => {
        const result = await chipService.createOrUpdateChip({
            name: name,
            level: level - 1,
            isComplete: false,
            mapId: props.mapId
        });

        mapService.notifyMapServiceImpl(await mapService.getCachedMaps());

        props.setIsCreateMap(false);
        message(result ? "Created!" : "Error!");
    }

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="light">BACK</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Create chip"
            id="Modal-10"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button 
                        node="button"
                        waves="light"
                        flat>ADD</Button>}
    >
        <TextInput
            data-length={15}
            label="Enter chip-name"
            onChange={(val) => newChipHandelChange(val.nativeEvent, newChip.level)}
        />

        Choice chip-level ({newChip.level})
        <input 
            type="range" 
            min={props.minLevel.toString()} 
            max={3} 
            onChange={(val) => newChipHandelChange(newChip.name, parseInt(val.target.value))}
        />

        <div className="row">
            <Button
                className="col s1"
                flat
                node="button"
                waves="light"
                onClick={() => createOrUpdateChip(newChip.name, newChip.level)}
            >SEND</Button> 
        </div>
    </Modal>
    );
};

export default NewChipModal;
