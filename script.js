var show=()=>{
    let name=document.getElementById("name").value;
    document.getElementById("display").innerHTML="Wish you a very happy new year "+name;
    document.getElementById("display3").src="images/2025.gif";
    document.getElementById("display2").innerHTML="New year, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and usher in the new year. It's such a celebratory, positive time which keeps everyone in good spirits!";

}
document.getElementById("btn").addEventListener("click",show);