// import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// /**
//  * @customElement
//  * @polymer
//  */
// class MyApp extends PolymerElement {
//   static get template() {
//     return html`
//       <style>
//         :host {
//           display: block;
//         }
//       </style>
//       <h2>Hello [[prop1]]!</h2>
//     `;
//   }
//   static get properties() {
//     return {
//       prop1: {
//         type: String,
//         value: 'my-app'
//       }
//     };
//   }
// }
// window.customElements.define('my-app', MyApp);


import { LitElement, html, css } from 'lit-element';

class MyApp extends LitElement {
  render() {
   const articleElemnt = html`<my-element></my-element>`;

    return html`<p>Hello world!</p> ${articleElemnt}`;
  }
}

window.customElements.define('my-app', MyApp);