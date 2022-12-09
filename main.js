function setup() {
  //Crie um canva no javascript com 300 de largura e altura
    ????
  //Coloque o canva no centro
    canvas.????();
    //Utilize o código 'VIDEO' para colocar uma tela de vídeo no site
    video = createCapture(???);
    video.hide();
    //Utilize o código 'classifier = ml5.imageClassifier('MobileNet',modelLoaded);' para conectar o ml5 ao javascript
  }
  
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    //Coloque o código 'video' e 'gotResult' para classificar o vídeo por meio da função gotResult
    classifier.classify(???, ???);
  }
  var previousResult = '';
  
  function gotResult(error, results) {
    //Se um erro acontecer, mostre esse erro no console
    if (???) {
      console.error(error);

    //Use o código 'senão' em javascript
    } ???? {

      if((results[0].confidence > 0.5) && (previousResult != results[0].label)){
        
        previousResult = results[0].label;
        var synth = window.speechSynthesis;

        speakData = 'O objeto detectado é - '+results[0].label;
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
  //Utilize o código 'innerHTML' para alterar o conteúdo HTML
        document.getElementById("resultObjectName").??? = results[0].label;
        document.getElementById("resultObjectAccuracy").??? = results[0].confidence.toFixed(3);
      }
    }
  }
  