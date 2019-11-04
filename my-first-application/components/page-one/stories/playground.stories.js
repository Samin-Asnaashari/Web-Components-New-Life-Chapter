/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../page-one.js';

export default {
  title: 'PageOne|Playground',
  component: 'page-one',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <page-one></page-one>
`;

export const manualContent = () => html`
  <page-one>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </page-one>
`;
