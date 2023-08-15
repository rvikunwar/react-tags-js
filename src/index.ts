import { ReactInputTags } from './ReactInputTags';
import './style/index.css'


export type tagValue = string | number;
export type onChange = (tags: TagInterface[], tag?: TagInterface) => void;

export interface TagOptions {
    value: tagValue
    label: tagValue
}

export interface TagInterface {
    value: tagValue
    label: tagValue
    tagColor?: string;
    textColor?: string;
    readOnly?: boolean;
}

export interface StyleInterface {
    mainContainer?: string;
    tag?: string;
    input?: string;
    optionContainer?: string;
    option?: string;
    selectedOption?: string;
}

export interface ReactInputTagsProps {
    tags: TagInterface[];
    onChange: onChange;
    options?: TagOptions[];
    creatable?: boolean;
    style?: StyleInterface;
    renderInput?: boolean;
    clearOnBackSpace? : boolean
}

export default ReactInputTags;
