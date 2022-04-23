function sstartclassifier()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lUj91Zce6/model.json',modelReady);
}
function modelReady()
{
classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
    console.error(results);
    }else
    {
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    document.getElementById("result_lable").innerHTML="Detected sound of-";
    results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-"+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_lable").innerHTML=style.color="rbg("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").innerHTML=style.color="rbg("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById('Bird');
    img1=document.getElementById('Dog');
    img2=document.getElementById('Cat');
    if(result[0].label=="Dog")
    {
    img.src='dog 2.png';
    img1.src='';
    img2.src='';
    }else if(result[0].label=="Bird")
    {
    img.src='';
    img1.src='Bird.png';
    img2.src='';
    }else
    {
    img.src='';
    img1.src='';
    img2.src='Cat.png';
    }
    
    }
    }