// @ts-ignore
import ReactUJS from 'react_ujs';

const context = require.context('../../components/home', true);

window.addEventListener('DOMContentLoaded', (): void => {
  ReactUJS.useContext(context);
  ReactUJS.mountComponents();
});
