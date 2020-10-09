/*
 * js9usermenus.js -- an example of how to define user menus in JS9.
 *
 * An array of four user menus objects (zooms, scales, colormaps, and regions)
 * that gets assigned to the JS9.globalOpts.userMenuBar property.
 *
 * Each user menu must have the following properties:
 * "name", "title" (menu title), "options" (array of option, see below).
 * Optional: "updateTitle" to update the menu title as it is changed:
 * "text" sets name, "image" sets image, "both" sets both.
 *
 * Each option should have a name, a public API command, and an array of
 * arguments to pass to that command.
 * Optional: image path of an image to display as a menu option.
 *
 * Note that, while these examples are subsets of top-level menus, a user menu
 * can contain any set of public API calls, e.g. a menu of most-used commands.
 *
 * Once you have created a file containing a JS9.globalOpts.userMenubar array,
 * you need to load it explicitly into your web page:
 *
 * <script type="text/javascript" src="js9usermenus.js"></script>
 *
 * and then either:
 *
 * set JS9.globalOpts.userMenus to true (to add user menus to all menubars)
 *
 * or:
 *
 * set the data-usermenus attribute to "true" on a specific menubar element:
 *
 * <div class="JS9Menubar" data-style="mac" data-usermenus="true"></div>
 *
 */

JS9.globalOpts.menuPosition="left bottom"

JS9.globalOpts.userMenuBar = [
    {
	"name": "zoom",
        "title": "zoom/bin/pan",
	"imageTitle": "images/voyager/zoom_mag.svg",
	"updateTitle": false,
	"options": [
	    {
		"name": "zoom ×2",
		"shortcut": "zoom in",
		"image": "images/voyager/zoom_in.svg",
		"cmd": "SetZoom",
		"args": ["in"]
	    },
	    {
		"name": "zoom ×1/2",
		"shortcut": "zoom out",
		"image": "images/voyager/zoom_out.svg",
		"cmd": "SetZoom",
		"args": ["out"]
	    },
	    {
		"name": "to fit",
		"image": "images/voyager/zoom_tofit.svg",
		"cmd": "SetZoom",
		"args": ["tofit"]
	    },
	    {
		"name": "zoom 1",
		"shortcut": "zoom 1",
		"image": "images/voyager/zoom_1.svg",
		"cmd": "SetZoom",
		"args": [1]
	    },
	    {
		"name": "bin ×2",
		"image": "images/voyager/binning_bin2.svg",
		"cmd": "DisplaySection",
		"args": [{bin: "x2"}]
	    },
	    {
		"name": "bin ×1/2",
		"image": "images/voyager/binning_bin12.svg",
		"cmd": "DisplaySection",
		"args": [{bin: "/2"}]
	    },
	    {
		"name": "bin 1",
		"image": "images/voyager/binning_bin1.svg",
		"cmd": "DisplaySection",
		"args": [{bin: 1}]
	    },
	    {
		"name": "Load full image",
		"cmd": "DisplaySection",
		"args": ["full"]
	    },
	    {
		"name": "Bin/Filter...",
		"requireImage": false,
		"cmd": "DisplayPlugin",
		"args": ["FITSBinning"]
	    }
	]
    },
    {
	"name": "scale",
	"title": "scale",
	"updateTitle": (im, menuName, optionName) => {
	    let obj;
	    // if no image is loaded, just return main name
	    if( !im ){ return menuName; }
	    // get scale parameters for this image into an object
	    obj = JS9.GetScale({display: im});
	    // shorten the clipping string, if necessary
	    if( obj.scaleclipping === "dataminmax" ){
		obj.scaleclipping = "data";
	    }
	    // return title using backquotes to expand the variables
	    return `${obj.scale}(${obj.scaleclipping})`;
	},
	"options": [
	    {
		"name": "lin",
		"cmd": "SetScale",
		"args": ["linear"]
	    },
	    {
		"name": "log",
		"cmd": "SetScale",
		"args": ["log"]
	    },
	    {
		"name": "sqrt",
		"cmd": "SetScale",
		"args": ["sqrt"]
	    },
	    {
		"name": "min/max",
		"name2": "min-max",
		"cmd": "SetScale",
		"args": ["dataminmax"]
	    },
	    {
		"name": "zscale",
		"name2": "zscl",
		"cmd": "SetScale",
		"args": ["zscale"]
	    },
	    {
		"name": "zmax",
		"name2": "zmax",
		"cmd": "SetScale",
		"args": ["zmax"]
	    },
	    {
		"name": "Scales...",
		"updateTitle": false,
		"requireImage": false,
		"cmd": "DisplayPlugin",
		"args": ["JS9Scale"]
	    }
	]
    },
    {
	"name": "colormap",
	"title": "color",
	"imageTitle": "images/voyager/color_grey.png",
	"updateTitle": "image",
	"options": [
	    {
		"name": "grey",
		"image": "images/voyager/color_grey.png",
		"cmd": "SetColormap",
		"args": ["grey"]
	    },
	    {
		"name": "cool",
		"image": "images/voyager/color_cool.png",
		"cmd": "SetColormap",
		"args": ["cool"]
	    },
	    {
		"name": "heat",
		"image": "images/voyager/color_heat.png",
		"cmd": "SetColormap",
		"args": ["heat"]
	    },
	    {
		"name": "viridis",
		"image": "images/voyager/color_viridis.png",
		"cmd": "SetColormap",
		"args": ["viridis"]
	    },
	    {
		"name": "magma",
		"image": "images/voyager/color_magma.png",
		"cmd": "SetColormap",
		"args": ["magma"]
	    },
	    {
		"name": "sls",
		"image": "images/voyager/color_sls.png",
		"cmd": "SetColormap",
		"args": ["sls"]
	    },
	    {
		"name": "red",
		"image": "images/voyager/color_red.png",
		"cmd": "SetColormap",
		"args": ["red"]
	    },
	    {
		"name": "green",
		"image": "images/voyager/color_green.png",
		"cmd": "SetColormap",
		"args": ["green"]
	    },
	    {
		"name": "blue",
		"image": "images/voyager/color_blue.png",
		"cmd": "SetColormap",
		"args": ["blue"]
	    },
	    {
		"name": "invert",
		// "image": "images/voyager/color_blue.png",
		"updateTitle": false,
		"cmd": "SetColormap",
		"args": ["invert"]
	    },
	    {
		"name": "Generate colormaps ...",
		// "image": "images/voyager/color_blue.png",
		"updateTitle": false,
		"requireImage": false,
		"cmd": "DisplayPlugin",
		"args": ["JS9Cmaps"]
	    },
	    {
		"name": "Image filters ...",
		// "image": "images/voyager/color_blue.png",
		"updateTitle": false,
		"requireImage": false,
		"cmd": "DisplayPlugin",
		"args": ["JS9Filters"]
	    }
	]
    },
    {
	"name": "regions",
	"title": "reg",
	"imageTitle": "images/voyager/regions_circle.svg",
	"updateTitle": "image",
	"options": [
	    {
		"name": "annulus",
		"cmd": "AddRegions",
		"image": "images/voyager/regions_annulus.svg",
		"args": ["annulus"]
	    },
	    {
		"name": "box",
		"cmd": "AddRegions",
		"image": "images/voyager/regions_box.svg",
		"args": ["box"]
	    },
	    {
		"name": "circle",
		"cmd": "AddRegions",
		"image": "images/voyager/regions_circle.svg",
		"args": ["circle"]
	    },
	    {
		"name": "ellipse",
		"image": "images/voyager/regions_ellipse.svg",
		"cmd": "AddRegions",
		"args": ["ellipse"]
	    },
	    {
		"name": "line",
		"image": "images/voyager/regions_line.svg",
		"cmd": "AddRegions",
		"args": ["line"]
	    },
	    {
		"name": "point",
		"image": "images/voyager/regions_point.svg",
		"cmd": "AddRegions",
		"args": ["point"]
	    },
	    {
		"name": "polygon ",
		"image": "images/voyager/regions_polygon.svg",
		"cmd": "AddRegions",
		"args": ["polygon"]
	    },
	    {
		"name": "text",
		"image": "images/voyager/regions_text.svg",
		"cmd": "AddRegions",
		"args": ["text"]
	    },
            {
                "name": "Save ...",
                "cmd": "SaveRegions",
                "updateTitle": false,
                "args": ["dialogbox"]
            }
	]
    }
];
