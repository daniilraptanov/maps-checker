import React, { FC } from 'react';
import { Xwrapper } from "react-xarrows";
import { MapDTO } from '../../types/dto/MapDTO';
import EditLevel from './EditLevel';

interface EditModeProps {
    data: MapDTO;
}

const EditMode: FC<EditModeProps> = (props) => {
    return (
        <div className="row">
            <Xwrapper>
                <EditLevel data={props.data} level={0} />
                <EditLevel data={props.data} level={1} />
                <EditLevel data={props.data} level={2} />
            </Xwrapper>
        </div>
    );
};

export default EditMode;
