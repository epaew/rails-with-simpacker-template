import '../sass/application.scss';

// @ts-ignore
import Rails from '@rails/ujs';

window.addEventListener('DOMContentLoaded', (): void => {
  Rails.start();
});
