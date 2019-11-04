/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../page-main.js';

export default {
  title: 'PageMain|Playground',
  component: 'page-main',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <page-main></page-main>
`;

export const manualContent = () => html`
  <page-main>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </page-main>
`;
