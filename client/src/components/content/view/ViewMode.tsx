import React, { FC } from 'react';
import { Xwrapper } from "react-xarrows";
import { MapDTO } from '../../../types/dto/MapDTO';
import ViewLevel from './ViewLevel';

interface ViewModeProps {
    data: MapDTO;
}

const ViewMode: FC<ViewModeProps> = (props) => {
    return (
        <div className="row">
            <Xwrapper>
                <ViewLevel data={props.data} level={0} />
                <ViewLevel data={props.data} level={1} />
                <ViewLevel data={props.data} level={2} />
            </Xwrapper>
        </div>
    );
};

export default ViewMode;
