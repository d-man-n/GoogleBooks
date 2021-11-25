import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 
import { App } from '../App';

window.addEventListener('load', ()=>{
    //вместо render используем hydrate, потому что render удаляет всю разметку до него (с сервера) и вставляет свою, hydrate прикрепляет к существующей, но не удаляет
    ReactDOM.hydrate(<App />, document.getElementById('react_root'))
})