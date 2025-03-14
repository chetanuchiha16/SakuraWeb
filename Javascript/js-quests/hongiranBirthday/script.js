message = document.getElementById("message");
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";

message.textContent = "Press b";
document.addEventListener("keydown", (event) => {
  if (event.key === "b") {
    document.body.style.backgroundImage = `url(images/welcome.jpg)`;
    audio = document.createElement("audio");
    audiosrc = document.createElement("source");
    audiosrc.src = "images/Aizen.mp3";
    audio.appendChild(audiosrc);
    audio.autoplay = true;
    audio.volume = 0.45;
    document.body.appendChild(audio);
    // audio.controls = true;
    async function text() {
      message.textContent = "Yokoso Watashi no Website ye";
      await new Promise((resolve) => setTimeout(resolve, 4000));
      message.textContent = "Press n";
    }
    text();
  } else if (event.key === "n") {
    document.body.style.backgroundImage = `url(images/narutoSasuke.png)`;
    // document.body.style.backgroundPosition = "center";
    console.log(event.key);
    message.textContent = "press t";
  } else if (event.key === "t") {
    document.body.style.backgroundImage = `url(images/Thorfin.png)`;
    message.textContent = "press l";
  } else if (event.key === "l") {
    document.body.style.backgroundImage = `url(images/luffy.jpeg)`;
    message.textContent = "press g";
  } else if (event.key === "g") {
    document.body.style.backgroundImage = `url(images/garp.png)`;
    message.textContent = "press v";
  } else if (event.key === "v") {
    message.textContent = "";
    document.body.style.backgroundImage = `url(images/hbd.jpeg)`;
    video = document.createElement("video");
    video.controls = true;
    video.height = "250";
    video.loop = true;
    video.autoplay = true;
    // video.muted = true;
    video.volume = 0.45;
    // video.parent.height = "250px";
    videosrc = document.createElement("source");
    videosrc.src = "images/bdayvideo.mp4";
    video.append(videosrc);
    message.append(video);
    // document.body.innerHTML = "<video controls><source src="images/bdayvideo.mp4"></video>";
  }
});
