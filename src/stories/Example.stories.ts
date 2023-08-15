import type { Meta, StoryObj } from '@storybook/react';
import Example from '../../example'



const meta = {
    title: 'Example',
    component: Example,
    parameters: {
        layout: 'top',
    },
} satisfies Meta<typeof Example >;

export default meta;
type Story = StoryObj<typeof meta>;


export const ExampleVariant: Story = {

};