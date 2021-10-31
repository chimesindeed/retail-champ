import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css';
import {App} from './App';
import {ProvideContextForHeaders} from './Components/DiscountsModule/Context/ProvideContextForHeaders'
import {ProvideContextForPrices} from './Components/DiscountsModule/Context/ProvideContextForPrices'
import {FetchPrices} from './Components/DiscountsModule/FetchComponents/FetchPrices'

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
