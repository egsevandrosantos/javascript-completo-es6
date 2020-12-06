import SlideNav from "./slide-nav.js";

const slideNav = new SlideNav(".slide", ".wrapper");
slideNav.changeSlide(0);
slideNav.addArrow(".arrow-previous", ".arrow-next");
slideNav.addControl();
