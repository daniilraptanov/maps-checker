import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { MapServiceImpl } from './services/MapServiceImpl';

const Root = () => {
    render(<App />, document.getElementById('app'));
}

MapServiceImpl.maps$.subscribe((_maps) => {
    Root();
});

Root();