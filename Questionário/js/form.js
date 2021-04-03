var lat, long

function getGeolocalization() {
    //localização
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      var crd = pos.coords;
      lat=crd.latitude
      long=crd.longitude
    };
    
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    
    navigator.geolocation.getCurrentPosition(success, error, options);  
}

function userName() {
    //recuperando os dados da session(nome do usuário)
    var username= document.getElementById('userName')
     username.innerHTML =  "Bem-Vindo(a), " + sessionStorage.getItem('user') + "!"
    return console.log(username)
}


function changeNamePage(){
    //mudando o título de acordo com o q o usuário escrever
    var newTitle =  document.getElementById("overwriteTitle").value
    document.getElementById("titleForm").innerHTML = newTitle
    document.getElementById('overwriteTitle').style.display ='none'
    document.getElementById('btnTitle').style.display ='none'
}


function addQuestion(){
        //lógica para realizar a adição dos campos dinâmicos
        var Questions,Answers = []
        var arrayQuestion,arrayAnswer=[0]

        var questions = document.createElement('input')
        questions.setAttribute('placeholder','insira a Pergunta')
        questions.setAttribute('id',arrayQuestion)        
        questions.setAttribute('name','valueDigited[]')
        document.querySelector('.newForm').appendChild(questions) 

        var getQuestions = document.getElementsByName('valueDigited[]')
        for(var i = 0; i < getQuestions.length; i++){
            Questions =getQuestions[i] 
        }
        
     
        var answer = document.createElement('input')
        answer.setAttribute('placeholder','insira a Resposta')
        answer.setAttribute('id',arrayAnswer)
        answer.setAttribute('name','valueDigitedAnswer[]')
        document.querySelector('.newForm').appendChild(answer) 
        
        var getAnswer= document.getElementsByName('valueDigitedAnswer[]')
        for(var i=0; i<getAnswer.length; i++){
            Answers = getAnswer[i]
            
        }

          
        var newBtn = document.createElement('button')
        newBtn.innerHTML= 'Finalizar formulario'
        newBtn.onclick=()=>saveAll()
        document.querySelector('.newForm').appendChild(newBtn) 

        function  saveAll(){
            
        var newBtn = document.createElement('button')
        newBtn.innerHTML= 'Confirmar'
        newBtn.onclick=()=>{

        //criação da lógica do LocalStorage
        var questionaryName = document.getElementById("overwriteTitle")
        var dateSub = document.getElementById('dataForm')
        var questionSave = Questions
        var answerSave = Answers
        
        var dataSave =JSON.parse(localStorage.getItem("Data"))
        
        if(dataSave ==null){
            localStorage.setItem("Data","[]")
            dataSave=[]
        }
        
        var auxRegister ={
           questionaryNameReg: questionaryName.value,
           dateReg: dateSub.value,
           questionReg : questionSave.value,
           answerReg : answerSave.value,
           geolocationLatReg: lat,
           geolocationLongReg: long
       }
       
       dataSave.push(auxRegister)
       localStorage.setItem("Data",JSON.stringify(dataSave))
       
    } 
    document.querySelector('.newForm').appendChild(newBtn)  

  }

      }
