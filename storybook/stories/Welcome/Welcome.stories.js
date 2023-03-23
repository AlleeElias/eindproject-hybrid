import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';

storiesOf('Welcome', module).add('to Polar Wiki', () => <Welcome showApp={linkTo('Button')} />);
