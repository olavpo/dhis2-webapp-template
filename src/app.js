"use strict";

//JS
import { d2Get } from "./js/d2api.js";
import { renderHeaderBar } from "./js/headerBar.js";


//CSS
import "./css/header.css";
import "./css/style.css";

// Initializing HeaderBar
window.initHeaderBar = renderHeaderBar;

// Example of calling initHeaderBar to initialize the HeaderBar
window.addEventListener("DOMContentLoaded", () => {
    window.initHeaderBar();
});


//Test setup by calling API
async function testApi() {
    var sysInfo = await d2Get("/api/system/info.json");
    console.log(sysInfo.version);
}


window.helloWorld = async function () {
    await testApi();
    alert("Hello world...");

};
