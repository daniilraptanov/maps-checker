import React, { FC } from 'react';
import { Chip as MChip, Icon } from 'react-materialize';
import { ChipServiceImpl } from '../../services/ChipServiceImpl';
import useMessage from '../../tools/hooks/useMessage';
import { ChipDTO } from '../../types/dto/ChipDTO';
import { ChipService } from '../../types/services/ChipService';

interface ChipProps {
  data: ChipDTO;
}

const Chip: FC<ChipProps> = (props) => {
    const chipService: ChipService = ChipServiceImpl.getInstance();
    const message = useMessage();

    const removeChip = async (chipId: string): Promise<void> => {
        const result = await chipService.removeChipById(chipId);

        message(result ? "Deleted!" : "Error!");
    }

    const createOrUpdateChip = async (name: string): Promise<void> => {
      const result = await chipService.createOrUpdateChip({
          name: name,
          level: props.data.level,
          isComplete: false,
          mapId: props.data.mapId
      });

      message(result ? "Created!" : "Error!");
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
            onChipAdd: async (val) => await createOrUpdateChip(val[0].M_Chips.chipsData[1].tag),
            onChipSelect: () => {console.log("select!")},
            onChipDelete: async () => await removeChip(props.data.id)
          }}
      >
        {props.data ? props.data.name : ""}
      </MChip>
    );
  };

export default Chip;
