// Required: utils.js, jQuery, A-Frame

// Register a component for initializing image markers which is attached on an a-scene
AFRAME.registerComponent("init-img-markers", {
    init: function () {
        initImgMarkers();
    },
});

/**
 * This method temporarily patches a known bug in Safari on iOS: the resources are not loaded correctly 
 * probably due to cache or the logistics of A-Frame. This method must be invoked at the initialization stage
 * of A-Frame.
 */
function initImgMarkers() {

    // Set up the marker url due to a bug in AR.js
    let cwd = window.location.pathname.split("/").slice(0, -1).join("/");  // get the root path
    let markersFolder = cwd + "/markers";  // link to the foler storing image markers
    // console.log("CWD", cwd, "markersFolder", markersFolder);  // debug message

    // Reset the urls on HTML
    $("#nft-marker1").attr("url", markersFolder + "/marker1");
    $("#nft-marker2").attr("url", markersFolder + "/marker2");
    $("#nft-marker3").attr("url", markersFolder + "/marker3");
    $("#nft-marker4").attr("url", markersFolder + "/marker4");
    $("#nft-marker5").attr("url", markersFolder + "/marker5");

    // Attach listeners to update the HUD info when a marker is detected or lost
    document.addEventListener("markerFound", (e) => {
        // Show the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), true);
        var quiz = document.getElementById("quiz");
        var info = document.getElementById("info");
        var qrcode = document.getElementById("qrcode");

        quiz.disabled = false;
        info.disabled = false;
        qrcode.disabled = false;

        if (e.target.getAttribute("id") == "nft-marker1") {
            quiz.onclick = function () {
                window.location.href="quiz/churchquiz.html";
            };
            info.onclick = function () { 
                window.location.href="info/churchinfo.html";
            };
        } else if (e.target.getAttribute("id") == "nft-marker2") {
            quiz.onclick = function () {
                window.location.href="quiz/museumquiz.html";
            };
            info.onclick = function () { 
                window.location.href="info/museuminfo.html";
            };
            
        } else if (e.target.getAttribute("id") == "nft-marker3") {
            quiz.onclick = function () {
                window.location.href="quiz/leaveyquiz.html";
            };
            info.onclick = function () { 
                window.location.href="info/leaveyinfo.html";
            };
            
        } else if (e.target.getAttribute("id") == "nft-marker4") {
            quiz.onclick = function () {
                window.location.href="quiz/theatrequiz.html";
            };
            info.onclick = function () { 
                window.location.href="info/theatreinfo.html";
            };
            
        } else if (e.target.getAttribute("id") == "nft-marker5") {
            quiz.onclick = function () {
                window.location.href="quiz/scdiquiz.html";
            };
            info.onclick = function () { 
                window.location.href="info/scdiinfo.html";
            };
            
        }
    });
    document.addEventListener("markerLost", (e) => {
        // Hide the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), false);
        var quiz = document.getElementById("quiz");
        var info = document.getElementById("info");
        var qrcode = document.getElementById("qrcode");
        quiz.disabled = true;
        info.disabled = true;
        qrcode.disabled = true;
    });
}
