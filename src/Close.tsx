import React from 'react'
import { tagValue } from '.';

type onClear = (value: tagValue) => void;

interface CloseProps {
    value: tagValue;
    onClear: onClear;
}

const crossChar = String.fromCharCode(215);

function Close({
    value,
    onClear
}: CloseProps) {

    return (
        <button
            onClick={() => onClear(value)}
            className='react-select-tag-close-btn'
            type="button"
            data-test="react-select-tag-close-button"
            aria-label={"close"}>
            {crossChar}
        </button>
    );
}

export default Close;