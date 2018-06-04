require("./content/css/ui.css");
require("./content/css/atala.css");
require("./content/css/component.css");

require('jquery-ui');
require('jquery-easing');
require('jquery-fileupload');
require('bootstrap');
require('respond');
require('raphael');

require('./atala.js');

const html = require("./content/html/component.html");

$("#comp1").html(html);
$("#comp1").find(".button4").css("background-image", "url(../images/button4.jpeg)")
$("#comp1").find(".img1").attr("src", "../images/button6.jpeg");

delete window.eve;
delete window.Raphael;
delete window.respond;
