message = document.getElementById("message");
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";

message.textContent = "Press n";
document.addEventListener("keydown", (event) => {
  if (event.key === "n") {
    document.body.style.backgroundImage = `url(images/narutoSasuke.png)`;
    // document.body.style.backgroundPosition = "center";
    console.log(event.key);
    message.textContent = "press t";
  } else if (event.key === "t") {
    document.body.style.backgroundImage = `url(images/Thorfin.png)`;
    message.textContent = "press l";
  } else if (event.key == "l") {
    document.body.style.backgroundImage = `url(images/luffy.jpeg)`;
  }
});
video = document.createElement("video");
video.controls = true;
video.height = "250";
video.loop = true;
// video.parent.height = "250px"
videosrc = document.createElement("source");
videosrc.src = "images/bdayvideo.mp4";
video.append(videosrc);
message.append(video);
// document.body.innerHTML = "<video controls><source src="images/bdayvideo.mp4"></video>";
