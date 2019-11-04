/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../my-first-application.js';

export default {
  title: 'MyFirstApplication|Playground',
  component: 'my-first-application',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <my-first-application></my-first-application>
`;

export const manualContent = () => html`
  <my-first-application>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </my-first-application>
`;
