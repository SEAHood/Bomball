///<reference path="../typings/requirejs/require.d.ts"/>
require.config({
    baseUrl: "src",
    paths: {
        "main": "../main",
        "socket.io": "../socket.io/socket.io"
    },
    shim: {},
    waitSeconds: 200
});
//Include three from the start
//require(["three"], function(THREE) {
require(["main"]);
//}); 
