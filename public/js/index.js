
// Date 
let newdate = new Date()
let year = newdate.getFullYear()
let month = newdate.getMonth()
let date = newdate.getDate()

let newmonth = [
'January',
'Fabruary',
'March',
'April',
'May',
'June',
'July',
'August',
'Spetember',
'October',
'November',
'December',
]

// console.log(date,newmonth[month],year)

// html tags 

const search = document.getElementById('search')
const submit = document.getElementById('submitbtn')
const city = document.getElementById('City')
const country = document.getElementById('Country')
const temp = document.getElementById('temp')
let condition = document.getElementById('condition')
let displayshow = document.getElementById('displayshow')
let error = document.getElementById('error')
let SDate = document.getElementById('Date')
let SYear = document.getElementById('Year')


// Date And Timing Setting 
SDate.innerText = date +' '+newmonth[month]
SYear.innerText = year;


submit.addEventListener('click',()=>{
   
        let searchval = search.value
        if(searchval === ''){
        error.innerText = 'Please enter City Name'  
          
        }else{
            if(navigator.onLine){
                error.innerText = ''
                displayshow.style.display = 'block'
                try{
                    
                    const apidata = async() =>{
                        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchval}&appid=4ab8e216742ea287ea0b9de57039e6bb`
                    let data = await fetch(url)
                    let res = await data.json()
                    console.log(res.weather)
                    // res.weather[0].main
                    // res.main.temp
                    // res.sys.country
                    // res.name
                    // console.log(res.weather)
                    // condition.innerText = res.weather[0].main
                    temp.innerText = res.main.temp
                    city.innerText = res.name
                    country.innerText = res.sys.country
                    if(res.weather[0].main == 'Clouds'){
                        condition.innerHTML = '<i class="fa-solid fa-cloud-sun text-primary"></i>'
                    }else if(res.weather[0].main == 'smoke'){
                        condition.innerHTML = '<i class="fa-solid fa-smoke text-secondary"></i>'
                    }else if(res.weather[0].main == 'Rain'){
                        condition.innerHTML = '<i class="fa-sharp fa-solid fa-cloud-rain text-primary"></i>'
                    }else if(res.weather[0].main == 'Clear'){
                        condition.innerHTML = '<i class="fa-solid fa-sun text-warning"></i>'
                    }
                
                    
                }
                apidata()
            }catch{
                console.log('City Not Found')
            }
        }else{
            // alert('you are ofline')
            error.innerText = 'You are Offline! ☹'
        }
        }
            

})






