function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../Asset/Images/vis.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","../Asset/Images/hide.jpg")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="rama@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","https://accounts.google.com/")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=" "
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="blue"
        document.getElementById("result").innerHTML="Entered The Wrong Email"
        document.getElementById("bg").style.backgroundImage='linear-gradient(90deg,rgba(228, 5, 5, 0.838),rgb(24, 24, 156))'
        }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("email").style.borderColor="blue"
        document.getElementById("result").innerHTML="Entered The Wrong Password"
        document.getElementById("bg").style.backgroundImage='linear-gradient(90deg,rgb(24, 24, 156),rgba(228, 5, 5, 0.838))'

    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered The Wrong Email and Password"
         document.getElementById("bg").style.backgroundColor="red"
    }
}