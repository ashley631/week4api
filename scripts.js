"use strict";

$(document).ready(() => {

    $.get("data.json").then((data) => {
        console.log(data);


    });
});