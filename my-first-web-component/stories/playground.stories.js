/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../my-first-web-component.js';

export default {
  title: 'MyFirstWebComponent|Playground',
  component: 'my-first-web-component',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <my-first-web-component></my-first-web-component>
`;

export const manualContent = () => html`
  <my-first-web-component>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </my-first-web-component>
`;
