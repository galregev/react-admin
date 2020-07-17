import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faSitemap, faSyncAlt, faPowerOff, faStore, faSearch, faLayerGroup, faArrowDown, faTachometerAlt, faBoxes, faChartLine, faFireAlt, faUser, faShoppingCart, faCoins, faWallet, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faSitemap, faSyncAlt, faPowerOff, faStore, faSearch, faLayerGroup, faArrowDown, faTachometerAlt, faBoxes, faChartLine, faFireAlt, faUser, faShoppingCart, faCoins, faWallet, faHome);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

