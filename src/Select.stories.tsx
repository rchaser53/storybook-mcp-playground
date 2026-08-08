import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { Select } from './Select';

const meta = {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Environment',
    children: (
      <>
        <option value="development">Development</option>
        <option value="staging">Staging</option>
        <option value="production">Production</option>
      </>
    ),
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', defaultValue: 'development' },
  play: async ({ canvas, args }) => {
    await userEvent.selectOptions(canvas.getByLabelText('Environment'), 'staging');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary', defaultValue: 'staging' },
};
