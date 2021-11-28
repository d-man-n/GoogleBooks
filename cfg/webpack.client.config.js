const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
//плагин, который удаляет лишние бандленные файлы после генерации вебпаком
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()];
const COMMON_PLUGINS = [new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})];

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
            test: /\.css$/,
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
            ],
            exclude: GLOBAL_CSS_REGEXP
        },
        {
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader', 'css-loader']
        }
    ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
};