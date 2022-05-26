import React, { FC } from 'react';
import { Chip as MChip, Icon } from 'react-materialize';
import { ChipServiceImpl } from '../../services/ChipServiceImpl';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import useMessage from '../../tools/hooks/useMessage';
import { ChipDTO } from '../../types/dto/ChipDTO';
import { ChipService } from '../../types/services/ChipService';
import { MapService } from '../../types/services/MapService';

interface ChipProps {
  data: ChipDTO;
}

const Chip: FC<ChipProps> = (props) => {
    const chipService: ChipService = ChipServiceImpl.getInstance();
    const mapService: MapService = MapServiceImpl.getInstance();
    const message = useMessage();

    const removeChip = async (data: ChipDTO): Promise<void> => {
        const result = await chipService.removeChipById(data);

        mapService.notifyMapServiceImpl(await mapService.getCachedMaps());

        message(result ? "Deleted!" : "Error!");
    }

    const createOrUpdateChip = async (name: string, isComplete: boolean): Promise<any> => {
        const result = await chipService.createOrUpdateChip({
            id: isComplete ? props.data.id : "",
            name: name,
            level: props.data.level,
            isComplete: isComplete,
            mapId: props.data.mapId
        });

        mapService.notifyMapServiceImpl(await mapService.getCachedMaps());

        if (!isComplete) {
            return message(result ? "Created!" : "Error!");
        }
        message(result ? "Updated!" : "Error");
        
    }

    return (
      <MChip
          close
          closeIcon={<Icon className="close">close</Icon>}
          options={{
            data: [
              {tag: props.data ? props.data.name : ""}
            ],
            limit: props.data.level === 0 ? 1 : 2,
            onChipAdd: async (val) => await createOrUpdateChip(val[0].M_Chips.chipsData[1].tag, false),
            onChipSelect: async () => await createOrUpdateChip(props.data.name, true),
            onChipDelete: async () => await removeChip(props.data)
          }}
      />
    );
  };

export default Chip;
