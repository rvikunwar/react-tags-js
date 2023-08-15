import React, {
    ChangeEvent,
    FC, KeyboardEvent,
    useEffect, useRef,
    useState
} from 'react';
import Tag from './Tag';
import { ReactInputTagsProps, TagOptions, tagValue } from './index';


export const ReactInputTags: FC<ReactInputTagsProps> = ({
    tags,
    onChange,
    options,
    creatable = true,
    style,
    renderInput = true,
    clearOnBackSpace = true
}) => {
    const [inputValue, setInputValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null);
    const optionContainerRef = useRef<HTMLDivElement>(null);

    const uniqueOptions = options ? options.filter((option, index, self) =>
        self.findIndex(item => item.label === option.label) === index
    ) : [];


    // function for handling any outside click
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setShowOptions(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // function for handling inside click on the component
    const handleClick = () => {
        toggleDropdown()
        if (inputRef.current) {
            const selection = window.getSelection();
            if (selection && selection.toString().length === 0) {
                inputRef.current.focus();
                setShowOptions(true)
            }
        }
    };

    // function for handling keyboard interaction (enter, backspace)
    const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        const findIndex = tags.findIndex((ele) => ele.value === inputValue);
        if (event.key === 'Enter' && inputValue && findIndex === -1 && creatable) {
            const tag = { value: inputValue, label: inputValue };
            const newTags = [...tags, tag];
            onChange(newTags, tag);
            setInputValue("");
        }

        if (clearOnBackSpace && event.key === 'Backspace' && inputValue === "") {
            event.preventDefault();

            let indexToRemove: number = -1;
            for (let i = tags.length - 1; i >= 0; i--) {
                if (!tags[i].readOnly || tags[i].readOnly === false) {
                    indexToRemove = i;
                    break;
                }
            }

            if (indexToRemove !== -1) {
                const tags_ = [...tags];
                tags_.splice(indexToRemove, 1);
                onChange(tags_);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const clearTagHandler = (value: tagValue) => {
        const newTags = tags.filter((ele) => ele.value !== value)
        onChange(newTags);
    }

    const toggleDropdown = (): void => {
        setShowOptions(true)
    };

    const handleSelectOption = ({ label, value }: TagOptions) => {
        const findIndex = tags.findIndex((ele) => ele.value === value);
        if (findIndex !== -1) return;
        const tag = { value, label };
        const newTags = [...tags, tag];
        onChange(newTags, tag);
        setInputValue("");
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [tags])

    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    // function for handling keyboard interaction with options
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (!filteredOptions || filteredOptions.length === 0) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (highlightedIndex < filteredOptions.length - 1) {
                setHighlightedIndex(highlightedIndex + 1);
                scrollOptionIntoView(highlightedIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (highlightedIndex > 0) {
                setHighlightedIndex(highlightedIndex - 1);
                scrollOptionIntoView(highlightedIndex - 1);
            }
        } else if (e.key === 'Enter') {
            if (showOptions && highlightedIndex !== -1 &&
                highlightedIndex < filteredOptions.length) {
                handleSelectOption({ ...filteredOptions[highlightedIndex] })
                setHighlightedIndex(-1)
            }
        }
    };

    const scrollOptionIntoView = (index: number) => {
        if (optionContainerRef.current) {
            const optionElement = optionContainerRef.current.querySelector(`.react-select-tags-select-container-option:nth-child(${index + 1})`);
            if (optionElement) {
                optionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }
    };

    const filteredOptions = options ? uniqueOptions.filter(({ label }) => {
        if (typeof label === 'string') {
            return label.toLowerCase().includes(inputValue.toLowerCase());
        } else {
            return label.toString().includes(inputValue);
        }
    }) : [];


    return (
        <div className="react-select-tags-main"
            ref={selectRef}
            onKeyDown={handleKeyDown}
            data-test="main-container">
            <div
                className={`react-select-tags ${style?.mainContainer}`}
                onClick={handleClick}
                data-test="react-select-tags">
                {
                    tags.map(({ label, value, tagColor, textColor, readOnly }, index) => (
                        <Tag
                            key={index}
                            style={style?.tag}
                            label={label}
                            value={value}
                            tagColor={tagColor}
                            textColor={textColor}
                            readOnly={readOnly}
                            clearTagHandler={clearTagHandler} />
                    ))
                }
                {renderInput &&
                    (<input
                        value={inputValue}
                        ref={inputRef}
                        className={`react-select-tags-input ${style?.input}`}
                        data-test='react-select-tags-input'
                        onChange={handleChange}
                        onKeyDown={handleEnter} />)
                }
            </div>
            {(showOptions && filteredOptions && filteredOptions?.length > 0) &&
                <div
                    className={`react-select-tags-select-container ${style?.optionContainer}`}
                    onKeyDown={handleKeyDown}
                    ref={optionContainerRef}
                    data-test='react-select-tags-select-container'>
                    {
                        filteredOptions?.map(({ label, value }, index) => (
                            <div
                                key={index}
                                className={`react-select-tags-select-container-option
                                    ${style?.option} 
                                    ${highlightedIndex === index ?
                                        `selected-option ${style?.selectedOption}` : ''}`}
                                onClick={() => handleSelectOption({ label, value })}
                                onMouseOver={() => setHighlightedIndex(index)}
                                data-test="react-select-tags-select-container-option">
                                {label}
                            </div>
                        ))
                    }
                </div>
            }
        </div>

    )
}