import Rails from '@rails/ujs';

import { hello } from '../components/greeter';
import '../sass/application.scss';

window.addEventListener('DOMContentLoaded', () => {
  Rails.start();
  console.log(hello('Simpacker'));
});
