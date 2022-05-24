import React, { FC } from 'react';
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import { CollapsibleItem, Icon } from 'react-materialize';
import Chip from './Chip';


const Map: FC = () => {
  const updateXarrow = useXarrow();

  return (
    <CollapsibleItem
        expanded={false}
        header="Map-1"
        icon={<Icon>map</Icon>}
        node="div"
    >
      <div className="row">
          <Xwrapper>
              <div className="col s2">
                  <div className="row">
                      <span id="0">
                          <Chip />
                      </span>
                  </div>

                  <div className="row">
                      <span id="3">
                          <Chip />
                      </span>
                  </div>
              </div>

              <div className="col s2" id="1">
                  <span id="1">
                      <Chip />
                  </span>
              </div>

              <Xarrow
                start="0"
                end="1"
              />
          </Xwrapper>
      </div>
    </CollapsibleItem>
  );
};

export default Map;
