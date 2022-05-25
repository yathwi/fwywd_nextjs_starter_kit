import { ComponentMeta, Story } from '@storybook/react';
import { Text, TextProps }, from './Text';
import { propObj } from './Text.props';

export default {
  title: 'part/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
