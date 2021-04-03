function getName(){
        
        var username= document.getElementById('nameCad').value
        sessionStorage.setItem('user', username);
        console.log( username)
}

function cadSave(){

     
        document.formCad.onsubmit = async e=>{
                e.preventDefault()
    
                const form = e.target
                const data = new FormData(form)
    
                const options ={
                  method: form.method,
                  body: new URLSearchParams(data)
                }
                fetch(form.action,options)
                .then(resp=>resp.json())
                .then(json=> console.log(JSON.stringify(json)))
               
        }    

}