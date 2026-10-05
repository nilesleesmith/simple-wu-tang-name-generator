'use strict';

const http = require('http');
const fileSystem = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (request, response) {

    const page = url.parse(request.url).pathname;
    const parameters = querystring.parse(url.parse(request.url).query);

    console.log(page);
    console.log(parameters);

    if (page == '/') {

        fileSystem.readFile('index.html', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/css/modern-normalize.css') {

        fileSystem.readFile('css/modern-normalize.css', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/css'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/css/styles.css') {

        fileSystem.readFile('css/styles.css', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/css'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/js/main.js') {

        fileSystem.readFile('js/main.js', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/javascript'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/api') {

        console.log(parameters);

        const userAnswers = parameters.userAnswers.split(',');
        console.log(userAnswers);

        const userAnswersOne = userAnswers.slice(0, 3);
        console.log(userAnswersOne);

        const userNameOne =
            Number(userAnswersOne[0]) * 4 +
            Number(userAnswersOne[1]) * 2 +
            Number(userAnswersOne[2]);
        console.log(userNameOne);

        const userAnswersTwo = userAnswers.slice(3, 6);
        console.log(userAnswersTwo);

        const userNameTwo =
            Number(userAnswersTwo[0]) * 4 +
            Number(userAnswersTwo[1]) * 2 +
            Number(userAnswersTwo[2]);
        console.log(userNameTwo);

        const wutangOneSoundingNames = [
            'Shadow',
            'Venom',
            'Iron',
            'Dragon',
            'Blaze',
            'Fang',
            'Rogue',
            'Reaper'
        ];
        console.log(wutangOneSoundingNames);

        const wutangTwoSoundingNames = [
            'Ghost',
            'Razor',
            'Phantom',
            'Viper',
            'Wraith',
            'Dagger',
            'Shogun',
            'Warlord'
        ];
        console.log(wutangTwoSoundingNames);

        const wutangNameResult = wutangOneSoundingNames[userNameOne] + ' ' + wutangTwoSoundingNames[userNameTwo];

        const responseData = {
            result: wutangNameResult
        };

        console.log(responseData);

        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        response.end(JSON.stringify(responseData));
    }
    else {

        console.log(page);

        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        response.write('Page not found');
        response.end();
    };
});

server.listen(8000);