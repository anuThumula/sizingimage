let imageElement = document.getElementById("image");

let originalImageWidth = 200;

imageElement.style.width = originalImageWidth + "px";
imageElement.textContent = originalImageWidth + "px";

let warningMessageEle = document.getElementById("warningMessage");
let decrementButtonEle = document.getElementById("decrementButton");
let incrementButtonEle = document.getElementById("incrementButton");
let imageWidthEle = document.getElementById("imageWidth");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let maxWarningMess = "Too big. Decrease the size of the Image.";
let minWarningMess = "Can't Visible. Increase the size of the Image.";

function onDecrement() {

    if (originalImageWidth <= imageMinWidth) {
        warningMessageEle.textContent = minWarningMess;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImage = originalImageWidth + "px";

        warningMessageEle.textContent = "";
        imageElement.style.width = updatedImage;
        imageWidthEle.textContent = updatedImage;
    }

}

function onIncrement() {

    if (originalImageWidth >= imageMaxWidth) {
        warningMessageEle.textContent = maxWarningMess;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImage = originalImageWidth + "px";

        warningMessageEle.textContent = "";
        imageElement.style.width = updatedImage;
        imageWidthEle.textContent = updatedImage;
    }
}