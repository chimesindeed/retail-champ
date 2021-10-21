import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css';
import {App} from './app-entry/App';
import {ProvideContextForHeaders} from './discounts-module/Context/ProvideContextForHeaders'
import {ProvideContextForPrices} from './discounts-module/Context/ProvideContextForPrices'

ReactDOM.render(
    <ProvideContextForHeaders>
    <ProvideContextForPrices>

        <App />

    </ProvideContextForPrices>
    </ProvideContextForHeaders>
    ,
  document.getElementById('root')
);
