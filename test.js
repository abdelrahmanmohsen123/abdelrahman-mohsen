// const myhome =(city)=>{
//     let pr =new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(city=='giza'){
//             resolve('you live in egypt')
//         }else{
//             reject('i dont know')
//         }
//     },1500)
// })
// return pr
// }

// handleCity =async(city)=>{
//     try{
//         x= await myhome(city)
//         console.log(x)
//     }catch(e){
//         console.log(e)
//     }
// }

// handleCity('cairo')

const getDataJson =async(cp)=>{
    try{
        let data =await fetch('https://api.covid19api.com/summary')
        let y= await((data.json()))
        
        cp(y,false)
    }catch(e){
        cp(false,e)
    }
}

getDataJson((y,error)=>{
    if(y){
        Countries =y.Countries
        console.log(Countries)
        Countries.forEach(element => {
          if(element.Country=='Australia') {
              id =document.querySelector('#p1')
              id2 =document.querySelector('#p2')
              id3 =document.querySelector('#p3')
              id.textContent='id :'+element.ID
              id2.textContent='country is :' +element.Country
              id3.textContent='total death :' +element.TotalDeaths
            // console.log('id :'+element.ID)
            // console.log('country is :' +element.Country)
            // console.log( 'total death' +element.TotalDeaths)
          
          }
           
        //    console.log(element.Country)
        //    console.log(element.Country)

        });
    }
    
   
    else console.log(error)
})