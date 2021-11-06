import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css';
import {App} from './App';
import {ProvideContextForHeaders} from './Components/DiscountsModule/Context/ProvideContextForHeaders'
import {ProvideContextForPrices} from './Components/DiscountsModule/Context/ProvideContextForPrices'
import {FetchHeaders} from './Components/DiscountsModule/FetchComponents/FetchHeaders'
import {FetchPrices} from './Components/DiscountsModule/FetchComponents/FetchPrices'

ReactDOM.render(
    <ProvideContextForHeaders>
    <ProvideContextForPrices>
    <FetchHeaders>
    <FetchPrices>
        <App />
    </FetchPrices>
    </FetchHeaders>
    </ProvideContextForPrices>
    </ProvideContextForHeaders>,
  document.getElementById('root')
);
