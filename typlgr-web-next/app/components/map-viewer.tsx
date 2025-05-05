"use client";

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map-viewer.css';

export default function MapViewer() {

    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // style URL
            center: [23.727539,  37.983810], // starting position [lng, lat]
            zoom: 4 // starting zoom
        });
    }, []);

    return (
        <div id="mapViewer">
            <div
                ref={mapContainer}
                style={{
                    height: 640,
                    width: 1280,
                }}
            ></div>
       </div>
    )
}