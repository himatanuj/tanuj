let users=[]

function loginNow() { 
 let name= document.getElementById('username').value;
 let Email= document.getElementById('Email').value;

 let userCount=users.filter((x)=>{

    return x.Email==Email;



 })
 
if(userCount.length==0) {
let user={
    name: name,
    pass: Email,

}
users.push(user);

}

else{
    console.log('user already exists')
}
    console.log(users)
}










