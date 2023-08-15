let imgBox = document.getElementById("imgBox")
let qrImg = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
const API_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function generateQR(){

    qrImg.src = API_URL + qrText.value;
    console.log(qrImg.src)
    imgBox.classList.add("show-img")
    
}