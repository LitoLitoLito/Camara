navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
    console.log(stream)
    
    let video = document.getElementById('video');
    let muteButton = document.getElementById('muteButton');
    let stopButton = document.getElementById('stopButton');

    video.srcObject = stream;

    muteButton.addEventListener('click', function() {
        stream.getAudioTracks().forEach(track => {
            track.enabled = !track.enabled;
        });
        muteButton.innerText = stream.getAudioTracks()[0].enabled ? "Silenciar" : "Microfono Silenciado";
    });

    stopButton.addEventListener('click', function() {
        stream.getVideoTracks().forEach(track => {
            track.enabled = !track.enabled;
        });
        stopButton.innerText = stream.getVideoTracks()[0].enabled ? "Detener Cámara" : "Cámara Apagada";
    });

}).catch((err) => {
    console.log(err);
});
