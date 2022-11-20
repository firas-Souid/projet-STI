function valide()
{
    a=String(document.getElementById("mail").value);
    b=String(document.getElementById("mdp").value);
    c=indexOf("@");
    d=substring(length(a)-4,length(a))
      if ((c!=-1) &&(d=(".com"))&&(length(b)=6 )&&("A"<=substring(0,1)<="Z")&&((indexOf("1"!=-1))||(indexOf("0"!=-1))||(indexOf("2"!=-1))||(indexOf("3"!=-1))||(indexOf("4"!=-1))||(indexOf("5"!=-1))||(indexOf("6"!=-1))||(indexOf("7"!=-1))||(indexOf("8"!=-1))||(indexOf("9"!=-1)))){
        alert("cbon")
    
    }
    else if ((c!=-1) &&(d!=(".com"))&&(length(b)!=6 )&&("A"<=substring(0,1)<="Z")){alert ("Vérifier la saisie");}
}