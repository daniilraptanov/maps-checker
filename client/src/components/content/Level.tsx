import React, { FC } from 'react';
import Chip from './Chip';

const Level: FC = () => {
  return (
    <div className="col s2">
        <div className="row">
            <Chip />
        </div>

        {/* <VerticalLine /> */}

        <div className="row">
            <Chip />
        </div>
    </div>
  );
};

export default Level;
