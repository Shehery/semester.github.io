//const search=document.querySelector(".user .search input");
//const searchButton=document.querySelector(".user .search button");

//searchButton.onclick=()=>{
    //search.classList.toggle("active");
    //search.focus();
    //searchButton.classList.toggle("active");
//}


(function(){
   const app=document.querySelector(".app");
   const socket = io('http://localhost:4000');
   let uname;
    app.querySelector(".join #join-user").addEventListener("click",function(){
      let name=app.querySelector(".join #name").value;
       if(name.length==0){
          return;
       }
       socket.emit('new-user-joined',name);
       uname=name;
       app.querySelector(".join").classList.remove("active");
       app.querySelector(".chat").classList.add("active");
    });
     
    app.querySelector(".chat #send").addEventListener("click", function(){
        let message=app.querySelector(".chat #input").value;
        if(message.length==0){
           return;
        }
        renderMessage("my",{
            name: uname,
            text: message
        });
        socket.emit("chat",{
            name: uname,
           text: message
        });
        app.querySelector(".chat #input").value="";
    });
    app.querySelector(".chat #exit").addEventListener("click",function(){
       socket.emit("exituser",uname);
       window.location.href=window.location.href;
    });
      socket.on("update", function(update){
          renderMessage("update", update);
      });
      socket.on("chat", function(message){
        renderMessage("other", message);
    });
    function renderMessage(type,message){
        let container=app.querySelector(".chat .messages");
       if(type=="my"){
          let element=document.createElement("div");
          element.setAttribute("class","message my-message");
           element.innerHTML=
          `<div>
              <div class="name">You</div>
             <div class="text">${message.text}</div>
          </div>`
          ;
          container.appendChild(element);
        }else if(type=="other"){
            let element=document.createElement("div");
            element.setAttribute("class","message other-message");
            element.innerHTML=`
            <div>
               <div class="name">${message.name}</div>
               <div class="text">${message.text}</div>
            </div>
            `;
            container.appendChild(element);

        }else if(type=="update"){
           let element=document.createElement("div");
            element.setAttribute("class","update");
            element.innerText=message;
            container.appendChild(element);
        }
        
        container.scrollTop=container.scrollHeight - container.clientHeight;
    }
})();
//const socket = io('http://localhost:4000')
//const form = document.getElementById('send-container')
//const messageInput = document.getElementById('messageInp')
//const container = document.querySelector(".container")

//const uname=prompt("Enter your name to join");
//socket.emit('new-user-joined', uname);
