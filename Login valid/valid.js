function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){

    var username = document.getElementById("Username");
    var password = document.getElementById("password");

    if(password.value == "m@hii0943"){
        alert("Your Welcome ");
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("1 Baar Me Samjh Me Nhi Aata Baar Likha Hua Hai Only Mahi Can See This Fir Bhi Yha Tak Mo Utha K Chale Kese Aaye? Ho Gaya Jaleel Ab Chal Pehli Fursat Me Nikal");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}
