const first=document.getElementById('First');
const last=document.getElementById('Last');
const email=document.getElementById('email');
const mob=document.getElementById('mob');

// event listeners

first.addEventListener('blur',()=>{
  let reg=/(^[A-Za-z]+$){1,15}/g;
  if(!reg.test(first.value)){
   first.classList.add("error");
  }
  else{
    first.classList.remove("error");
  }

});

last.addEventListener('blur',()=>{
  let reg=/(^[A-Za-z]+$){1,15}/g;
  if(!reg.test(last.value)){
    last.classList.add("error");
  }
  else{
    last.classList.remove("error");
  }
});

email.addEventListener('blur',()=>{
  let reg=/[A-Za-z0-9]@[a-z].[a-z]/;
  if(!reg.test(email.value)){
    email.classList.add("error");
  }
  else{
    email.classList.remove("error");
  }
});
mob.addEventListener('blur',()=>{
  let reg=/^91([0-9]){10}/;
  if(!reg.test(mob.value)){
    mob.classList.add("error");
  }
  else{
    mob.classList.remove("error");
  }
});
const btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
  let reg_first=/(^[A-Za-z]+$){1,15}/g;
  let reg_last=/(^[A-Za-z]+$){1,15}/g;
  let reg_email=/[A-Za-z0-9]@[a-z].[a-z]/;
  let reg_mob=/([0-9]){10}/;
  if(reg_first.test(first.value)&&reg_last.test(last.value)&&reg_email.test(email.value)&&reg_mob.test(mob.value)){
    document.getElementById("form").setAttribute("action","success.html");
  }
  else{
    alert("the form filled is wrong")
  }
})
