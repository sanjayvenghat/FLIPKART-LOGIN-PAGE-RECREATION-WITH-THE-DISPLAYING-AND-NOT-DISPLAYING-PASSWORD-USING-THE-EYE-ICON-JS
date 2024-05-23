/*let user_user = document.querySelector(".input_two");

function timeout_caller() {
    return setTimeout(() => {
        document.querySelector(".rewrite").textContent = "";
    }, 2000);
}

document.querySelector(".second_value").addEventListener("click", (event) => {
    event.preventDefault();

    let filter = new_array.filter((value) => {
        return value.email == user_input.value && value.password == user_user.value;
    });

    let new_ele = document.createElement("style");

    if (filter.length > 0) {
        document.querySelector(".rewrite").textContent = "login_success";
        new_ele.textContent = ".rewrite{color:green}";
        timeout_caller();
    } else {
        document.querySelector(".rewrite").textContent = "invalid_input";
        new_ele.textContent = ".rewrite{color:red;transform:translateX(120px)}";
        timeout_caller();
    }

    document.head.appendChild(new_ele);
});

function caller() {
    let pass_show = document.querySelector("#first_first");
    let currentType = user_user.getAttribute("type");

    if (currentType === "text") {
        user_user.setAttribute("type", "password");
        pass_show.classList.remove("fa-regular", "fa-eye-slash");
        pass_show.classList.add("fa-solid", "fa-eye");
    } else if (currentType === "password") {
        pass_show.classList.remove("fa-solid", "fa-eye");
        pass_show.classList.add("fa-regular", "fa-eye-slash");
        user_user.setAttribute("type", "text");
    }
}*/
/*let selector=document.querySelector(".first_value");
let new_array=[{
    email:"sanjayvenghat9@gmail.com",
    password:"sanjay0909"
},{email:"monkkiller25@gmail.com",password:"monker"}]
let user_input=document.querySelector(".input_one");
let user_user=document.querySelector(".input_two")
let timeout_caller=function()
{
    return setTimeout(()=>{
        document.querySelector(".rewrite").textContent=""
    },"2000")
}
selector.addEventListener("click",()=>{
    event.preventDefault();

   let filter= new_array.filter((value,index)=>{
          return value.email==user_input.value && value.password==user_user.value; 
    }) 
    let new_ele=document.createElement("style");
    
   
    if(filter.length>0)
    {
        document.querySelector(".rewrite").textContent="login_success"
        new_ele.textContent=".rewrite{color:green}"
        timeout_caller();
    }
    else
    {
        document.querySelector(".rewrite").textContent="invalid_input"
        new_ele.textContent=".rewrite{color:red;transform:translateX(120px)}"
        timeout_caller()
     } 
    
    document.head.appendChild(new_ele)

}) 

function caller()
{
    let pass_show = document.querySelector("#first_first");
    let currentType = user_user.getAttribute("type");
    console.log(currentType)

    if (currentType === "text") {
        user_user.setAttribute("type", "password");
        pass_show.classList.remove("fa-regular", "fa-eye-slash");
        pass_show.classList.add("fa-solid", "fa-eye");
    } else if (currentType === "password") {
        pass_show.classList.remove("fa-solid", "fa-eye");
        pass_show.classList.add("fa-regular", "fa-eye-slash");
        user_user.setAttribute("type", "text");
} 
}*/ 
let new_object=[{name:"sanjay",password:"sanjay09"},{name:"sanjay",password:"sanjay09"}];
let input_one=document.querySelector(".input_one");
let input_two=document.querySelector(".input_two");
let first_values=document.querySelector(".first_value") 
function timeout_caller()
{
    setTimeout(()=>{

    },2000)
}
function first_value(){
   
    first_values.addEventListener("click",(e)=>{
        e.preventDefault();
   let filter= new_object.filter((index)=>{
        return index.name==input_one.value && index.password==input_two.value

    }) 
    let new_element=document.createElement("style");
    filter.length > 0 ?(
        (document.querySelector(".rewrite").textContent = "login_success"),
        (new_element.textContent = ".rewrite{color:green}"),
        timeout_caller()
      ) : (
        (document.querySelector(".rewrite").textContent = "invalid_input"),
        (new_element.textContent = ".rewrite{color:red;transform:translateX(120px)}"),
        timeout_caller()
      );
    document.head.appendChild(new_element)

    })
   
} 
first_value();

function caller()
{ 
    (function(){
    let pass_show = document.querySelector("#first_first");
    let currentType = input_two.getAttribute("type");
    console.log(currentType)

    if (currentType === "text") {
        input_two.setAttribute("type", "password");
        pass_show.classList.remove("fa-regular", "fa-eye-slash");
        pass_show.classList.add("fa-solid", "fa-eye");
    } else if (currentType === "password") {
        pass_show.classList.remove("fa-solid", "fa-eye");
        pass_show.classList.add("fa-regular", "fa-eye-slash");
        input_two.setAttribute("type", "text");
} }())
}
