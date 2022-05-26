import React, { FC, useEffect, useState } from 'react';
import { Collapsible } from 'react-materialize';
import { MapServiceImpl } from '../../services/MapServiceImpl';
import { MapDTO } from '../../types/dto/MapDTO';
import Map from '../content/Map';
import Footer from './Footer';

const Container: FC = () => {
    const [maps, setMaps] = useState<MapDTO[]>(null);
    const [isCreateMap, setIsCreateMap] = useState<boolean>(false);
    const [isViewMode, setIsViewMode] = useState<boolean>(false);

    useEffect(() => {
        const setData = async () => {
            const mapService = MapServiceImpl.getInstance();

            const maps = await mapService.getCachedMaps();
            setMaps(maps);
        };

        setData();
    });

    return (
        <>
            <Collapsible
                accordion
                popout
            >
                {maps && maps.map(element => (
                    <Map data={element} isViewMode={isViewMode} setIsViewMode={setIsViewMode} setIsCreateMap={setIsCreateMap} />
                ))}

                {isCreateMap && <Map data={null} isViewMode={isViewMode} setIsViewMode={setIsViewMode} setIsCreateMap={setIsCreateMap} />}
            </Collapsible>

            <Footer setIsCreateMap={setIsCreateMap} />
        </>
    )
};

export default Container;
