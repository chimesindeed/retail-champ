import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css';
import {App} from './app-entry/App';
import {ProvideContextForHeaders} from './DiscountsModule/Context/ProvideContextForHeaders'
import {ProvideContextForPrices} from './DiscountsModule/Context/ProvideContextForPrices'
import {FetchPrices} from './DiscountsModule/FetchComponents/FetchPrices'

ReactDOM.render(
    <ProvideContextForHeaders>
    <ProvideContextForPrices>
    <FetchPrices>
        <App />
    </FetchPrices>
    </ProvideContextForPrices>
    </ProvideContextForHeaders>,
  document.getElementById('root')
);
