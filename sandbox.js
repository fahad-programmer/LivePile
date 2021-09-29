window.addEventListener("load", function () {
    init();
});
function init() {
    var toolTimeline = new TimelineMax();
    var duration = 0.9;
    toolTimeline.staggerTo("li", duration, {
        top: 0,
        ease: Back.easeOut
    }, 0.1, 0.9);
}
