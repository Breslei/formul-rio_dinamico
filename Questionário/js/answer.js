function searchData(){
    var questionShow,questionReturned, answerShow, answerReturned,
    dateShow,dateShowReturned,latShow, latShowReturned,
    longShow, longShowReturned
    var titleSearch = document.getElementById("fieldSearch").value

    var resultSearch =JSON.parse(localStorage.getItem('Data'))

    resultSearch.forEach(element => {
        if(titleSearch==element.questionaryNameReg)
            questionReturned =element.questionReg
            answerReturned = element.answerReg
            dateShowReturned = element.dateReg
            latShowReturned = element.geolocationLatReg
            longShowReturned = element.geolocationLongReg
            
        })
           document.querySelector('.formReturned').style.display ='block'


           questionShow = document.createElement('h2'),
           questionShow.textContent ="P:" + questionReturned,
           document.querySelector('.formReturned').appendChild(questionShow),

           answerShow = document.createElement('h4'),
           answerShow.textContent="R: " + answerReturned,                       
           document.querySelector('.formReturned').appendChild(answerShow),

           latShow = document.createElement('h4'),
           latShow.textContent = "latitude: " + latShowReturned,
           document.querySelector('.formReturned').appendChild(latShow),

           longShow = document.createElement('h4'),
           longShow.textContent ="longitude: " + longShowReturned,
           document.querySelector('.formReturned').appendChild(longShow),

           dateShow = document.createElement('h4'),
           dateShow.textContent="Data: " + dateShowReturned,                       
           document.querySelector('.formReturned').appendChild(dateShow)


     
     

   

}