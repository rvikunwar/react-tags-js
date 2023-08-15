import React, { useState } from 'react';
import ReactInputTags from '../index'
import { TagInterface } from '../ReactInputTags';
import { mockTagsForCustom, options, tagExamplesForColor, tagExamplesForOption, tagExamplesForReadOnly } from './utils';
import './utils/index.css'


const BasicHandler = () => {
    const [tags, setTags] = useState<TagInterface[]>([])

    const onChange = (newTags: TagInterface[],) => {
        setTags(newTags)
    }

    return <ReactInputTags tags={tags} onChange={onChange} />
};


const ReadOnlyHandler = () => {

    const [tags, setTags] = useState<TagInterface[]>([...tagExamplesForReadOnly])

    const onChange = (newTags: TagInterface[], newTag?: TagInterface) => {
        console.log(newTags)
        setTags((e) => [...e, ...(newTag ? [{ ...newTag, readOnly: true }] : [])])
    }

    return <ReactInputTags tags={tags} onChange={onChange} renderInput={false} />
};


const ReadOnlyAndCreatableHandler = () => {

    const [tags, setTags] = useState<TagInterface[]>([...tagExamplesForReadOnly])

    const onChange = (newTags: TagInterface[], newTag?: TagInterface) => {
        console.log(newTags)
        setTags((e) => [...e, ...(newTag ? [{ ...newTag, readOnly: true }] : [])])
    }

    return <ReactInputTags tags={tags} onChange={onChange} />
};


const WithColorHandler = () => {

    const [tags, setTags] = useState<TagInterface[]>(tagExamplesForColor)

    const onChange = (newTags: TagInterface[]) => {
        console.log(newTags)
        setTags(newTags)
    }

    return <ReactInputTags tags={tags} onChange={onChange} />
};


const WithOptionHandler = () => {

    const [tags, setTags] = useState<TagInterface[]>([...tagExamplesForOption])

    const onChange = (newTags: TagInterface[]) => {
        setTags(newTags)
    }

    return <ReactInputTags tags={tags} onChange={onChange} options={options} />
};


const CustomTagContainerHandler = () => {

    const [tags, setTags] = useState<TagInterface[]>([...mockTagsForCustom])

    const onChange = (newTags: TagInterface[]) => {
        setTags(newTags)
    }

    return <ReactInputTags
        tags={tags}
        onChange={onChange}
        options={options}
        style={{
            mainContainer: 'main-container',
            tag: 'tag',
            input: 'input',
            optionContainer: 'option-container',
            option: 'option',
            selectedOption: 'selected-option'
        }} />
};


export { BasicHandler, ReadOnlyHandler, ReadOnlyAndCreatableHandler,
    WithColorHandler, WithOptionHandler, CustomTagContainerHandler }