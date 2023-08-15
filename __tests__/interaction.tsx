import React from 'react';
import { mount, shallow } from 'enzyme';
import { ReactInputTagsProps, TagInterface, TagOptions } from '../src/index';
import ReactInputTags from '../src/index'
import 'jsdom-global/register'

interface MockProps {
    tags?: TagInterface[];
    options?: TagOptions[];
    creatable?: boolean;
    clearOnBackSpace?: boolean;
    renderInput?: boolean;
}

describe('ReactInputTags', () => {

    let mockOnChange: jest.Mock;
    window.HTMLElement.prototype.scrollIntoView = function () { };

    beforeEach(() => {
        mockOnChange = jest.fn();
    });

    afterEach(() => {
        mockOnChange.mockReset();
    });

    const mockTags: TagInterface[] = [
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag2', label: 'Tag 2' },
    ];

    const mockOptions: TagOptions[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ]

    function mockTagComponent(props?: MockProps) {

        const defaultProps: ReactInputTagsProps = {
            tags: props?.tags ? props.tags : mockTags,
            onChange: mockOnChange,
            options: props?.options ? props?.options : mockOptions,
            creatable: props?.creatable ?? true,
            clearOnBackSpace: props?.clearOnBackSpace ?? true,
            renderInput: props?.renderInput ?? true
        };

        return (<ReactInputTags {...defaultProps} />)
    }


    it('renders without crashing', () => {
        const wrapper = shallow(mockTagComponent());
        expect(wrapper.exists()).toBeTruthy();
    });


    it('renders tags with correct label', () => {

        const wrapper = mount(mockTagComponent());

        const tagElements = wrapper.find('[data-test="react-select-tag"]');
        expect(tagElements).toHaveLength(mockTags.length);

        tagElements.forEach((tag, index) => {
            expect(tag.text()).toContain(mockTags[index].label);
        });
    });


    it('clears a tag on close button click', () => {

        const wrapper = mount(mockTagComponent());

        const closeButton = wrapper.find('[data-test="react-select-tag-close-button"]').first();
        closeButton.simulate('click');

        expect(mockOnChange).toHaveBeenCalledWith(mockTags.slice(1));
    });


    it('adds a new tag on Enter key press', () => {
        const wrapper = mount(mockTagComponent({ tags: [] }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('change', { target: { value: 'newTag' } });
        input.simulate('keyDown', { key: 'Enter' });

        expect(mockOnChange).toHaveBeenCalledWith(
            [{ value: 'newTag', label: 'newTag' }],
            { value: 'newTag', label: 'newTag' }
        );
    });


    it('removes a tag on Backspace key press', () => {

        const wrapper = mount(mockTagComponent());

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('change', { target: { value: '' } });
        input.simulate('keyDown', { key: 'Backspace' });

        expect(mockOnChange).toHaveBeenCalledWith([mockTags[0]]);
    });


    it('clears input value after adding a new tag', () => {

        const wrapper = mount(mockTagComponent());

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('change', { target: { value: 'newTag' } });
        input.simulate('keyDown', { key: 'Enter' });

        expect(input.prop('value')).toBe('');
    });


    it('does not add tag on Enter key press when creatable is false', () => {

        const wrapper = mount(mockTagComponent({ tags: [], creatable: false }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('change', { target: { value: 'newTag' } });
        input.simulate('keyDown', { key: 'Enter' });

        expect(mockOnChange).not.toHaveBeenCalled();
    });


    it('does not remove tags on Backspace key press when all are readOnly', () => {
        const mockTags: TagInterface[] = [
            { value: 'tag1', label: 'Tag 1', readOnly: true },
            { value: 'tag2', label: 'Tag 2', readOnly: true },
        ];

        const wrapper = mount(mockTagComponent({ tags: mockTags }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('change', { target: { value: '' } });
        input.simulate('keyDown', { key: 'Backspace' });

        expect(mockOnChange).not.toHaveBeenCalled();
    });


    it('applies tag colors and text colors', () => {
        const mockTags: TagInterface[] = [
            { value: 'tag1', label: 'Tag 1', tagColor: 'red', textColor: 'white' },
            { value: 'tag2', label: 'Tag 2', tagColor: 'blue', textColor: 'yellow' },
        ];

        const wrapper = mount(mockTagComponent({ tags: mockTags }));

        const tags = wrapper.find('[data-test="react-select-tag"]');
        const tag1 = tags.at(0);
        const tag2 = tags.at(1);

        expect(tag1.prop('style')).toEqual(expect.objectContaining({ backgroundColor: 'red', color: 'white' }));
        expect(tag2.prop('style')).toEqual(expect.objectContaining({ backgroundColor: 'blue', color: 'yellow' }));
    });


    it('opens options on input click', () => {
        const wrapper = mount(mockTagComponent());

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('click');

        const optionsContainer = wrapper.find('[data-test="react-select-tags-select-container"]');
        expect(optionsContainer.exists()).toBeTruthy();
    });


    it('navigates through options using ArrowDown and ArrowUp keys', () => {
        const mockOptions = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
        ];

        const wrapper = mount(mockTagComponent({ tags: [] }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('click');

        input.simulate('keyDown', { key: 'ArrowDown' });
        expect(wrapper.find('.selected-option').text()).toBe(mockOptions[0].label);

        input.simulate('keyDown', { key: 'ArrowDown' });
        expect(wrapper.find('.selected-option').text()).toBe(mockOptions[1].label);

        input.simulate('keyDown', { key: 'ArrowUp' });
        expect(wrapper.find('.selected-option').text()).toBe(mockOptions[0].label);
    });


    it('selects option on Enter key press when options are visible and nothing selected', () => {

        const wrapper = mount(mockTagComponent({ tags: [] }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('click');

        input.simulate('keyDown', { key: 'ArrowDown' });

        input.simulate('keyDown', { key: 'Enter' });

        expect(mockOnChange).toHaveBeenCalledWith(
            [{ value: 'option1', label: 'Option 1' }],
            { value: 'option1', label: 'Option 1' }
        );
    });


    it('handles no options provided', () => {
        const wrapper = mount(mockTagComponent({ tags: [], options: [] }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('click');

        expect(wrapper.find('[data-test="react-select-tags-select-container-option"]')).toHaveLength(0);
    });


    // it('displays and selects options on typing', () => {

    //     const wrapper = mount(mockTagComponent());

    //     const input = wrapper.find('[data-test="react-select-tags-input"]');
    //     input.simulate('change', { target: { value: 'Opt' } });

    //     const option1 = wrapper.find('[data-test="react-select-tags-select-container-option"]').at(0);
    //     const option2 = wrapper.find('[data-test="react-select-tags-select-container-option"]').at(1);
    //     expect(option1.text()).toBe('Option 1');
    //     expect(option2.text()).toBe('Option 2');

    //     option1.simulate('click');
    //     expect(mockOnChange).toHaveBeenCalledWith(
    //         [{ value: 'option1', label: 'Option 1' }],
    //         { value: 'option1', label: 'Option 1' }
    //     );
    // });


    // it('displays unique options and selects option on Enter key press', () => {
    //     const mockOptions = [
    //         { value: 'option1', label: 'Option 1' },
    //         { value: 'option2', label: 'Option 2' },
    //         { value: 'option1', label: 'Option 1' }, // duplicate option
    //     ];

    //     const wrapper = mount(mockTagComponent({ tags: [], options: mockOptions }));

    //     const input = wrapper.find('[data-test="react-select-tags-input"]');
    //     input.simulate('change', { target: { value: 'Opt' } });

    //     input.simulate('keyDown', { key: 'ArrowDown' });
    //     input.simulate('keyDown', { key: 'Enter' });

    //     expect(mockOnChange).toHaveBeenCalledWith(
    //         [{ value: 'option1', label: 'Option 1' }],
    //         { value: 'option1', label: 'Option 1' }
    //     );

    //     const uniqueOptions = wrapper.find('[data-test="react-select-tags-select-container-option"]');
    //     expect(uniqueOptions.length).toBe(2);
    // });


    it('clears the last tag on Backspace key press when clearOnBackSpace prop is true', () => {

        const wrapper = mount(mockTagComponent({ clearOnBackSpace: true }))

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('keyDown', { key: 'Backspace' });

        expect(mockOnChange).toHaveBeenCalledWith([{ value: 'tag1', label: 'Tag 1' }]);
    });


    it('does not clear the last tag on Backspace key press when clearOnBackSpace prop is false', () => {

        const wrapper = mount(mockTagComponent({ clearOnBackSpace: false }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        input.simulate('keyDown', { key: 'Backspace' });

        expect(mockOnChange).not.toHaveBeenCalled();
    });

    
    it('renders input field when renderInput prop is true', () => {
        const wrapper = mount(mockTagComponent({ tags: [], renderInput: true }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        expect(input.exists()).toBeTruthy();
    });


    it('does not render input field when renderInput prop is false', () => {
        const wrapper = mount(mockTagComponent({ tags: [], renderInput: false }));

        const input = wrapper.find('[data-test="react-select-tags-input"]');
        expect(input.exists()).toBeFalsy();
    });

    // it('closes options dropdown on outside click', () => {
    //     const wrapper = mount(mockTagComponent());

    //     const input = wrapper.find('[data-test="react-select-tags-input"]');
    //     input.simulate('click');

    //     document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    //     wrapper.update();

    //     const optionsContainer = wrapper.find('[data-test="react-select-tags-select-container"]');
    //     expect(optionsContainer.exists()).toBeFalsy();
    // });

});