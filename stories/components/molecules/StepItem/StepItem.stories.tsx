import { ComponentMeta } from '@storybook/react';
import StepItem, {
  StepItemProps,
} from './../../../../components/molecules/StepItem/Index';

export default {
  title: 'Components/Molecules/StepItem',
  Component: StepItem,
} as ComponentMeta<typeof StepItem>;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
