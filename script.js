'use strict';

const inputHrn = document.querySelector('#hrn'),
    inputUsd = document.querySelector('#usd');

inputHrn.addEventListener('input', function () {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', function () {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputHrn.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Server Error';
        }
    });
});