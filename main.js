//https://teachablemachine.withgoogle.com/models/ch-ShiggX/
var dog=0;
var cat=0;
function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ch-ShiggX/model.json",modelloaded);
}
function modelloaded()
{
    classifier.classify(gotresult);
}

function gotresult(error,results)
{
    
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255+1);
        g=Math.floor(Math.random()*255+1);
        b=Math.floor(Math.random()*255+1);

        document.getElementById("name").innerHTML="Detected voice is of: "+results[0].label;
        document.getElementById("count").innerHTML="Detected Dog: "+dog+" Detected Cat: "+cat;
        document.getElementById("count").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("name").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("animal");
    

        if(results[0].label=="dog barking")
        {
            img1.src="dog.gif";
            dog=dog+1;
        }
        else if(results[0].label=="meowing")
        {
            
            img1.src="cat.gif";
            cat=cat+1;
        }        
        else
        {
            img1.src="giphy.gif";
        }
    }
}
