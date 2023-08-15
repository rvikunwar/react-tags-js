import React from 'react';
import type { StoryObj } from '@storybook/react';
import ReactSelectTag from '../index'
import { BasicHandler, CustomTagContainerHandler, 
    ReadOnlyAndCreatableHandler, ReadOnlyHandler, 
    WithColorHandler, WithOptionHandler } from './hooks';


const meta = {
    component: ReactSelectTag,
    parameters: {
        layout: 'top',
    },
};

export default meta;
type Story = StoryObj<typeof ReactSelectTag>;



export const Basic: Story = {
    render: () => <BasicHandler />,
};

export const ReadOnly: Story = {
    render: () => <ReadOnlyHandler />,
};

export const ReadOnlyAndCreatable: Story = {
    render: () => < ReadOnlyAndCreatableHandler />,
};

export const ColorVariant: Story = {
    render: () => <WithColorHandler />
}

export const WithOptions: Story = {
    render: () => <WithOptionHandler />
}

export const CustomComponent: Story = {
    render: () => <CustomTagContainerHandler />
}