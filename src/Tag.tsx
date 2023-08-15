import React from "react";
import { TagInterface, tagValue } from ".";
import Close from "./Close";

interface TagProps extends TagInterface {
    clearTagHandler: (val: tagValue) => void;
    style: string | undefined;
}

export default function Tag({ label, value, tagColor, textColor, readOnly, clearTagHandler, style }: TagProps) {
    return (
        <div className={`react-select-tag ${style}`}
            data-test="react-select-tag"
            key={value}
            style={{ backgroundColor: tagColor, color: textColor }}>
            <span className='react-select-tag-label'>
                {label}
            </span>
            {
                !readOnly && (
                    <Close
                        value={value}
                        onClear={clearTagHandler} />
                )
            }
        </div>
    )
}