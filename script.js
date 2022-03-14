var arr = [
    {title: "Action<br>&<br>Adventure", img: "a",index: "one"},
    {title: "Cartoon", img: "b",index: "two"},
    {title: "Sci-Fi<br>&<br>Fantasy", img: "c",index: "three"},
    {title: "Thriller", img: "d",index: "one"},
    {title: "Dramas", img: "e",index: "two"},
    {title: "Crime", img: "f",index: "three",},
    {title: "Horror", img: "g",index: "one"},
    {title: "History", img: "h",index: "two"}
];

var clutter = "";

arr.forEach(function(elm){
    clutter += `<div id="${elm.img}" class="card ${elm.index}">
                    <h3>${elm.title}</h3>
                </div>`;
});

document.querySelector("#heror").innerHTML= clutter;


var btn = document.getElementById("vid");
btn.addEventListener("click", playPause);

myVideo = document.getElementById("myVideo");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        btn.innerHTML = "Pause";
        }
    else{
        myVideo.pause(); 
        btn.innerHTML = "Play";
    }
}
