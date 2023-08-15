import React, { useState } from "react"
import ReactInputTags from '../src'
import { TagInterface } from "../src/ReactInputTags"
import './index.css'

function addReadOnlyToTags(tag: TagInterface): Boolean{
    if (typeof tag.value === "string" && tag.value.startsWith("t")) {
        return true;
    }
    return false;
}

export default function () {

    const [tags, setTags] = useState<TagInterface[]>([])
    const onChange = (newTags: TagInterface[], newTag?: TagInterface) => {
        console.log(newTags)
        if(newTag){
            const isTrue = addReadOnlyToTags(newTag);
            if(isTrue){
                const tagIndex = newTags.findIndex((tag_) =>  tag_.value === newTag.value)
                newTags[tagIndex].readOnly = true;
            }
        }
        setTags(newTags)
    }
    
    const options = [
        {
            label: "Happy",
            value: "happy"
        },
        {
            label: "Sad",
            value: "sad"
        },        
        {
            label: "Negative",
            value: "negative"
        },
        {
            label: "Happy",
            value: "happy"
        },
        {
            label: "Sad",
            value: "sad"
        },        
        {
            label: "Negative",
            value: "negative"
        },
        {
            label: "Happy",
            value: "happy"
        },
        {
            label: "Sad",
            value: "sad"
        },        
        {
            label: "Negative",
            value: "negative"
        },
        {
            label: "Happy",
            value: "happy"
        },
        {
            label: "Sad",
            value: "sad"
        },        
        {
            label: "Negative",
            value: "negative"
        },
        {
            label: "Happy",
            value: "happy"
        },
        {
            label: "Sad",
            value: "sad"
        },        
        {
            label: "Negative",
            value: "negative"
        },
    ]

    return (
        <div className="example-container">
            <ReactInputTags
                tags={tags}
                onChange={onChange}
                options={options}
                creatable={true}
                style={{
                    mainContainer: 'main-container',
                    tag: 'tag',
                    input: 'input',
                    optionContainer: 'option-container',
                    option: 'option',
                    selectedOption: 'selected-option'
                }} />
        </div>
    )
} 