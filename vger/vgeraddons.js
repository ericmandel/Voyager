// $(document).on("JS9:ready", function(){
//     // object containing new tools to add to toolbar
//     var tools = [
// 	{
// 	    "name": "foo1",
// 	    "tip": "linear scale",
// 	    // "image": "images/toolbar/dax_images/lin.png",
// 	    "cmd": "SetScale",
// 	    "args": ["linear"]
// 	},
// 	{
// 	    "name": "foo2",
// 	    "tip": "loggy scale",
// 	    "cmd": "SetScale",
// 	    "args": ["log"]
// 	}
//     ];
//     // first add foo1 but not foo2 to beginning of primary list
//     JS9.globalOpts.toolBar.unshift("foo1");
//     // then add the tools
//     JS9.SetToolbar(tools);
// });


// JS9.mkPublic("SetAllOptical", function(){
//     var im = JS9.getImage(obj.display);
//     if( im  ){
//         im.setScale("linear");
//         im.setColormap("grey");
//         im.setColormap("invert");
//         im.setZoom("tofit");
//     }
// });

// extra color maps:
// JS9.LoadColormap("cmaps/sunset.cmap", {fixpath: false});

// for global defaults, see keyboardActions in js9.js
// also look in keyboard.js for how to define new actions
// e.g. copy wcs position to clipboard
JS9.globalOpts.keyboardActions["x"] = "paste regions to current position";
delete JS9.globalOpts.keyboardActions["p"];

JS9.mkPublic("ResizeDesktop", function(){
    let width, height;
    const obj = JS9.ResizeDisplay();
    const wused = $(".JS9Panner").width() + 40;
    const hused = $(".JS9MenubarContainer").height() + $(".JS9StatusbarContainer").height() + 45;
    if( window.electron && window.electron.resize ){
	if( window.electron.resize.width ){
	    width = window.electron.resize.width - wused;
	} else {
	    width = obj.width;
	}
	if( window.electron.resize.height ){
	    height = window.electron.resize.height - hused;
	} else {
	    height = obj.height;
	}
	width = Math.max(Math.min(width, 2048), 256);
	height = Math.max(Math.min(height, 2048), 256);
	JS9.ResizeDisplay(width, height);
    }
});

// credit where credit is due
JS9.ABOUT = `Voyager ${JS9.VERSION}: image display powered by JS9\nA. Vikhlinin, G. Tremblay, E. Mandel\ncontact: emandel@cfa.harvard.edu\n${JS9.COPYRIGHT}`;

// JS9 is ready, resize the JS9 display if necessary
$(document).on("JS9:ready", function(){
    JS9.ResizeDesktop();
});
