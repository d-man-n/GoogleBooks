//Файл - шаблон html-страницы, который будет запускаться с серверной части - сделан в виде функциии литеральных шаблонных строк, принимающий аргумент content 

export const indexTemplate = (content) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>App</title>
        <script src='/static/client.js' type='application/javascript'></script>
    </head>
    <body>
        <div id='react_root'>${content}</div>
    </body>
    </html>
`