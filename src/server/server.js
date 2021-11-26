import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import {indexTemplate} from './indexTemplate';

const app = express();
//Определяем, что по урл static доступны все файлы в папке dist/client
app.use('/static', express.static('./dist/client'))

app.get('*', (req,res)=>{
    res.send(
        //в корень шаблон указываем рендер react-компонентов
        indexTemplate(ReactDOM.renderToString(App()))
    )
})

app.listen(3000, ()=>{
    console.log('server started on 3000 http://localhost:3000')
})