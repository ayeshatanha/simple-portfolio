let MenuBtn= document.querySelector('.MenuBtn');
let MenuList = document.querySelector('.menu');
let p = document.querySelector('.result')

let count = true
MenuBtn.addEventListener("click" ,function () {
    
    if (count == true) {
        MenuList.style.visibility='visible';
        count=false;
    }else if (count==false) {
        MenuList.style.visibility='hidden';
        count=true;
    }
});
// window.addEventListener("click",function (e) {
//     if (e.target==MenuList) {
//         MenuList.style.display= "none";
//     }
// })

function btn() {
    let btn = parseFloat(document.getElementById('text-age').value);
     if (btn >0 && btn < 18) {
        p.innerHTML = "<h1>You are a child</h1><hr/>";
        console.log(btn);
    } else if (btn >= 18 && btn <= 70) {
        p.innerHTML = " <h1>You are an adult</h1>"
    } else if (btn >= 71) {
        p.innerHTML = "<h1>You are an old</h1>"
    }else if (btn <= 1) {
        p.innerHTML = "<h1>Enter the  correct age</h1>"
    }


}

