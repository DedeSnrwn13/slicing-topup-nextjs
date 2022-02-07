import { ComponentMeta } from '@storybook/react';
import GameItem, {
  GameItemProps,
} from './../../../../components/molecules/GameItem/Index';

export default {
  title: 'Components/Molecules/GameItem',
  Component: GameItem,
} as ComponentMeta<typeof GameItem>;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
