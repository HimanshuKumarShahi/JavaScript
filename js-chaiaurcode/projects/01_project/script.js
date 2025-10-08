 const button=document.querySelectorAll(".button");
        const body=document.querySelector("body");
        
        button.forEach((btn)=>{
            btn.addEventListener("click",(e)=>{
                if(e.target.id === "grey")
            {
                body.style.backgroundColor='grey';
            }
            else if(e.target.id === 'white'){
                body.style.backgroundColor='white';
            }
            else if(e.target.id === 'orange'){
                body.style.backgroundColor='orange';
            }
            else if(e.target.id === 'yellow'){
                body.style.backgroundColor='yellow';
            }
            else if(e.target.id === 'green'){
                body.style.backgroundColor='green';
            }
            else if(e.target.id === 'cyan'){
                body.style.backgroundColor='cyan';
            }
            
            })  
        })