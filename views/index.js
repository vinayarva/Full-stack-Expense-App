function handleFormSubmit(event) {
    event.preventDefault();

    // console.log(event.target.price.target.value)
const expenses = {
    price : event.target.price.value,
    description : event.target.description.value,
    categories : event.target.categories.value,
    }

    axios.post("http://localhost:3000/",expenses).then((res)=>{
        console.log(res)
    }).catch((err)=> console.log(err))

    
    window.location.reload();
}

document.addEventListener("DOMContentLoaded",()=>{

    axios.get("http://localhost:3000/").then((res)=>{
        const result =  res.data
        for(let i = 0 ; i < result.length ; i++){
            displayUser(result[i])
        }

    }).catch(err => console.log(err))
})

function displayUser(data){
    const ul =  document.querySelector("ul")

    const li =  document.createElement("li")
    li.innerText = `Price:${data.price}.00₹ Description:${data.description} Category:${data.categories}`
    li.style.wordSpacing = "10px"

    const delete_btn = document.createElement("button")
    delete_btn.innerText = "Delete"
    
    delete_btn.addEventListener("click",(event)=>{
        const element = event.target.parentElement
        ul.removeChild(element)
         axios.delete("http://localhost:3000/delete/"+data.id).then(res => console.log(res)).catch(err=> console.log(err))
    })

    li.appendChild(delete_btn)
    ul.appendChild(li)
}