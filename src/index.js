' use strict';

//import './styles/style.css';
import './styles/style.scss';

import { drawGalleryItem } from './item';
import items from './items';

const galleryRootElement = document.querySelector('#galleryRoot');

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)));

