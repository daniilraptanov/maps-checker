import React, { FC } from 'react';
import { Xwrapper } from "react-xarrows";
import { MapDTO } from '../../types/dto/MapDTO';
import Level from './Level';

interface EditModeProps {
    data: MapDTO;
}

const EditMode: FC<EditModeProps> = (props) => {
    return (
        <div className="row">
            <Xwrapper>
                <Level data={props.data} level={0} />
                <Level data={props.data} level={1} />
                <Level data={props.data} level={2} />
            </Xwrapper>
        </div>
    );
};

export default EditMode;
