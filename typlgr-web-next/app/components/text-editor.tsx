"use client";

import { toPolytonic, toTokenList } from 'typlgr-core';
import './text-editor.css';

function toPolytonicOnClick() {
    const rawTextArea = document.getElementById('rawText') as HTMLTextAreaElement;
    const rawText = rawTextArea.value;

    const convertedText =
        rawText.split(/\r?\n/)
            .filter(line => !/^%.*$/.test(line))
            .map(line => toPolytonic(line))
            .join('\n');

    const convertedTextArea = document.getElementById('convertedText') as HTMLTextAreaElement;
    convertedTextArea.value = convertedText;
}

function toTokenSetOnClick() {
    const convertedTextArea = document.getElementById('convertedText') as HTMLTextAreaElement;
    const convertedText = convertedTextArea.value;

    const tokenSet = new Set<string>();
    convertedText.split(/\r?\n/).forEach((line) => {
        toTokenList(line).forEach((token) => tokenSet.add(token));
    });

    const extractedTokens = [...tokenSet].join('\n');
    const extractedTokensArea = document.getElementById('extractedTokens') as HTMLTextAreaElement;
    extractedTokensArea.value = extractedTokens;
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
                <button onClick={toTokenSetOnClick}>▼</button>
            </div>
            <div>
                <textarea id="extractedTokens" readOnly></textarea>
            </div>
        </div>
    )
}