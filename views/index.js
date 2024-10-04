function handleFormSubmit(event) {
    event.preventDefault();

    const hiddenID =  document.getElementById("hiddenId").value

    const expenses = {
        price : event.target.price.value,
        description : event.target.description.value,
        categories : event.target.categories.value,
        }

    if(hiddenID){

        console.log(hiddenID)
            axios.put("http://localhost:3000/edit/"+hiddenID,expenses).then(res => console.log(res)).catch(err=>console.log(err))
    }else{

        axios.post("http://localhost:3000/",expenses).then((res)=>{
            console.log(res)
        }).catch((err)=> console.log(err))
    }
    

    // window.location.reload();
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
    const edit_btn = document.createElement("button")

    edit_btn.innerText = "Edit"
    
    edit_btn.addEventListener("click",(event)=>{
        document.getElementById("price").value =  data.price
        document.getElementById("description").value =  data.description
        document.getElementById("catagories").value =  data.categories

        document.getElementById("hiddenId").value = data.id
    })

    li.appendChild(edit_btn)


    li.appendChild(delete_btn)
    ul.appendChild(li)
}