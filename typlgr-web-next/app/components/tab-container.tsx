"use client";

import { useState } from 'react';
import TextEditor from './text-editor';
import MapViewer from './map-viewer';

import './tab-container.css';

export default function TabContainer() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div id='tabContainer'>
            <div style={{display: 'flex'}}>
                <div onClick={() => setTabIndex(0)} className={`tab ${tabIndex === 0 && "selected"}`}>TextEditor</div>
                <div onClick={() => setTabIndex(1)} className={`tab ${tabIndex === 1 && "selected"}`}>MapViewer</div>
            </div>
            <div>
                {tabIndex === 0 && <TextEditor />}
                {tabIndex === 1 && <MapViewer />}
            </div>
        </div>
    );
}