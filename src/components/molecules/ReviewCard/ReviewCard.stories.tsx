import type { Meta, StoryObj } from '@storybook/react';

import { ReviewCard } from './ReviewCard';

const meta = {
  title: 'Molecules/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    author: { control: 'text' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    content: { control: 'text' },
    date: { control: 'text' },
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: 'John Doe',
    rating: 4.5,
    content: 'This is a great product! I really enjoyed using it and would recommend it to others.',
    date: 'December 18, 2025',
  },
};
