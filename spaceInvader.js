"use strict";

//alert("Draw your space invader here");

drawBox();

function drawBox(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //black box
    context.fillStyle = "black";
    context.fillRect(50, 50, 300, 300);

    //cubes line 1
    context.fillStyle = "#66FF00"
    context.fillRect(125, 75, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(175, 75, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(225, 75, 50, 50);

    //cubes line 2
    context.fillStyle = "#66FF00";
    context.fillRect(75, 125, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(125, 125, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(225, 125, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(275, 125, 50, 50);

    //cube line 3
    context.fillStyle = "#66FF00";
    context.fillRect(125, 175, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(175, 175, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(225, 175, 50, 50);

    //cube line 4
    context.fillStyle = "#66FF00";
    context.fillRect(75, 225, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(175, 225, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(275, 225, 50, 50);

    //cube line 5
    context.fillStyle = "#66FF00";
    context.fillRect(75, 275, 50, 50);

    context.fillStyle = "#66FF00";
    context.fillRect(275, 275, 50, 50);


}