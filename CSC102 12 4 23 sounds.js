function startSound()
{
  mySound = new sound("owl.mp3");
  mySound.play();

document.getElementById("stopButton").disabled = false;
document.getElementById("startButton").disabled = true;
}



function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play()
    }

}

function stopSound()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    window.location.reload();

}