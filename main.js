https://teachablemachine.withgoogle.com/models/Hx4L_Yz__/

Webcam.attach("#camara")
var camaraWeb = document.getElementById("camara")
Webcam.set({
    width:200, height:200, image_format:"png", png_quality:90
})

function tomar_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = "<img id='fotografia' src="+ data_uri +">"
    })
}
var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PNTUwfnht/model.json", modelocargado)

function modelocargado(){
    console.log("El modelo ha sido activado")
}

function identificar_selfie(){
var foto = document.getElementById("fotografia")
modelo.classify(foto, gotResult)
}
function gotResult(error, results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("lectura_etiqueta").innerHTML = "La expresion reconocida es: " +  results[0].label
    document.getElementById("Precision_objeto").innerHTML = (results[0].confidence.toFixed(2))*100 + "%"

    
}
}