
// ADD button fuction
function addMore(){
    document.getElementById('error').innerHTML="";
    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="please enter value";
    }else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=name;
        
        // delete button
        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

        //data insert on top 
        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
          }
        else{
            box.insertBefore(li,pos);
        }
        
    }
    //clear input box
    document.getElementById('name').value="";
}
let btn = document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');
    // console.log(e.target);
    let li=e.target.parentNode;
    box.removeChild(li);
});