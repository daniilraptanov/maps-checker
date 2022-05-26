import React, { FC } from 'react';
import Xarrow from 'react-xarrows';

interface ArrowProps {
  startPoint: string;
  endPoints: string[];
}

const Arrow: FC<ArrowProps> = (props) => {
    return (
        <>
            {
                props.endPoints.map((endPoint) => (
                    <Xarrow
                    start={props.startPoint}
                    end={endPoint}
                />
                ))
            }
        </>
    )
}


export default Arrow;
