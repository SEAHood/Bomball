///<reference path="../typings/requirejs/require.d.ts"/>

require.config({
    baseUrl: "src",
    paths: {
		"main": "../main",
		"socket.io": "../socket.io/socket.io",
		"sizzle": "/src/sizzle/dist/sizzle",		
		"scene.class": "../scene.class",	
		"scenes-manager.class": "../scenes-manager.class"
    },
	shim: {
		'PIXI': {
			exports: 'PIXI'
		}
	},
    waitSeconds: 200
});


require(["PIXI"], function(PIXI) {
	require(["main"]);
});