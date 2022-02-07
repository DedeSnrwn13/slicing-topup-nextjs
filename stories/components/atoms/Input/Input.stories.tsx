import { ComponentMeta, Story } from '@storybook/react';
import Input, { InputProps } from './../../../../components/atoms/Input/Index';

export default {
  title: 'Components/Atoms/Input',
  Component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
