"use client";

import { toPolytonic, toWordsList } from 'typlgr-core';
import './text-editor.css';

function toPolytonicOnClick() {
    let rawTextArea = document.getElementById('rawText') as HTMLTextAreaElement;
    let rawText = rawTextArea.value;

    let convertedText = rawText.split(/\r?\n/).map(line => toPolytonic(line)).join('\n');
    let convertedTextArea = document.getElementById('convertedText') as HTMLTextAreaElement;
    convertedTextArea.value = convertedText;
}

function toWordsSetOnClick() {
    let convertedTextArea = document.getElementById('convertedText') as HTMLTextAreaElement;
    let convertedText = convertedTextArea.value;

    let wordsSet = new Set<string>();
    convertedText.split(/\r?\n/).forEach((line) => {
        toWordsList(line).forEach((word) => wordsSet.add(word));
    });

    let collectedWords = [...wordsSet].join('\n');
    let collectedWordsArea = document.getElementById('collectedWords') as HTMLTextAreaElement;
    collectedWordsArea.value = collectedWords;
}

export default function TextEditor() {
    return (
        <div id="textEditor">
            <div>
                <textarea id="rawText"></textarea>
            </div>
            <div>
                <button onClick={toPolytonicOnClick}>▼</button>
            </div>
            <div>
                <textarea id="convertedText" readOnly></textarea>
            </div>
            <div>
                <button onClick={toWordsSetOnClick}>▼</button>
            </div>
            <div>
                <textarea id="collectedWords" readOnly></textarea>
            </div>
        </div>
    )
}