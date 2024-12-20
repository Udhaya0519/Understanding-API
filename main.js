
const display = document.querySelector(".ip-display")

// function displayIP(){
//     fetch("https://httpbin.org/ip")
//         .then(res =>  response = res.json() )
//         .then( data => { 
//             const ip = data.origin 
//             display.innerText = ip
//         })
//         .catch( error => console.error("something wrong",error))
// }

// displayIP();


        // another way of fetching data without chaining .then 



async function displayIP() {
    try {
        const fetchData = await fetch("https://httpbin.org/ip")  // here fetched data contains response object 
        const jsonData = await fetchData.json()    // the response object have headers and body .json parses the json data inside the body into JS 
                                                   //object
        display.innerText = jsonData.origin
        
    } catch(error){
        console.error("Something Went Wrong!",error);
        
    } 
}

displayIP();




