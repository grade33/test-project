import 'normalize.css';
import { updateHeaderOnScroll } from './vendor/headerBehavior';
import { Select } from './vendor/select/Select';
import { classNames } from './utils/classNames';
import { initSelectPrecentage } from './modules/selectPercentage';

updateHeaderOnScroll();
initSelectPrecentage();
new Select(`.${classNames.select}`); // eslint-disable-line
