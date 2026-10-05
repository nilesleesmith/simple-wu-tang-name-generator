'use strict';

const wutangOneSoundingAnswers = document.querySelectorAll('.wutangOneSoundingAnswers');
const wutangTwoSoundingAnswers = document.querySelectorAll('.wutangTwoSoundingAnswers');
const wutangTitle = document.querySelector('.wutangTitle')
const wutangSoundingName = document.querySelector('.wutangSoundingName');

console.log(wutangOneSoundingAnswers);
console.log(wutangTwoSoundingAnswers);
console.log(wutangTitle);
console.log(wutangSoundingName);

document.querySelector('button').addEventListener('click', getWuTangSoundingName)

function getWuTangSoundingName() {
    const userAnswers = [];

    let checkAnswers = 0;

    for (let i = 0; i < wutangOneSoundingAnswers.length; i++) {
        if (wutangOneSoundingAnswers[i].checked == true) {
            userAnswers.push(wutangOneSoundingAnswers[i].value);
            checkAnswers += 1;
        }
    }
    console.log(userAnswers);
    console.log(checkAnswers);

    if (checkAnswers < 3) {
        return alert('You have to answer all the questions!')
    }

    for (let i = 0; i < wutangTwoSoundingAnswers.length; i++) {
        if (wutangTwoSoundingAnswers[i].checked == true) {
            userAnswers.push(wutangTwoSoundingAnswers[i].value);
            checkAnswers += 1;
        }
    }
    console.log(userAnswers);
    console.log(checkAnswers);

    if (checkAnswers < 6) {
        return alert('You have to answer all the questions!')
    }

    fetch('/api?userAnswers=' + userAnswers)
        .then(function (response) {
            console.log(response);

            return response.json();
        })
        .then(function (data) {
            console.log(data);

            wutangTitle.innerText = 'You are here by Wu-Tang:';
            console.log(wutangTitle);

            wutangSoundingName.innerText = data.result;
            console.log(wutangSoundingName);
        })
        .catch(function (error) {
            console.log(error);

            wutangTitle.innerText = 'WaWu-Tang:';

            wutangSoundingName.innerText = 'Something went wrong.';
        });

};