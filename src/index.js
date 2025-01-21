import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redax/storeRedux';
import { Provider } from 'react-redux';
import {QueryClientProvider, QueryClient} from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

const renderDOM = () =>{
    root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Provider store={store}>
                <App store = {store}/>
            </Provider>
        </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
    );
}

renderDOM(store.getState())

store.subscribe(renderDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();