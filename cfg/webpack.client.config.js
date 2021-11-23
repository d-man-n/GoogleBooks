const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
//плагин, который удаляет лишние бандленные файлы после генерации вебпаком
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool () {
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}

module.exports = {
    resolve: {
        //расширение, которое показывает какие форматы файлов вебпак может бандлить
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        //расширение нужно для обновления react-dom
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
        }
    },
    //сборка на клиенте
    mode: NODE_ENV ? NODE_ENV : 'development',
    //точка входа на клиенте - с какого файла начинать - здесь идет настройка запроса к серверу, которые будут отдавать данные с hmr   
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    //в какой папке хранить обработанный вебпаком файл и как он будет называться
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        //указывает webpack, где будут находиться статические ассеты
        publicPath: '/static/'
    },
    //модуль с загрузкой обработки ts/tsx файлов (позже заменить на babel)
    module: {
        rules: [
        {
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        },
        {    
            test: /\.less$/,
            use: 
            ['style-loader', 
                {
                    loader: 'css-loader',
                    options: { 
                        //включим настройки модуля лоадера
                        modules: {
                            //включит локальные селекторы
                            mode: 'local',
                            //как будет называться новый селектор
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                },
                'less-loader',
            ]
        }
    ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV ? [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ] : []
};