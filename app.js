 document.querySelector('.numjokes').addEventListener('click', getJokes);
function getJokes(e)
{
    const number = document.querySelector(".abc").value;
    console.log(number);
 const xhr=new XMLHttpRequest;
 xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
xhr.onload=function(){
    console.log(this.status);

    if(this.status===200)
    {
        const response=JSON.parse(this.responseText);
        console.log(response);
let out='';
        if(response.type==='success')
        {
            response.value.forEach(element => {
                out +=` <li>${element.joke}</li>`
            });
        }
        document.querySelector('.result').innerHTML=out;
    }
}


 xhr.send();
 e.preventDefault();
    
}
