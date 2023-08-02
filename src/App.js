import React,{useState} from 'react'
import axios from 'axios'

// if we have an api endpoint that we want to use, we can initialize axios
const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';
const api = axios.create({baseURL: BASE_URL})

const App = () => {

  let [data, setData] = useState([{}])

  function getData(){
    
    api.get('/product').then(response =>{
    console.log(response.data)
    console.log(response.status)
    // console.log(typeof response)
    setData(response.data)

  }).catch( error =>{
    console.log(error)
  })

}

function postData(){
    
  api.post('/product',{
    name:'OTHER NEW PRODUCT',
    quantity:8,
    price: '88.88'
  }).then(response =>{
  console.log(response.data)
  console.log(response.status)

}).catch( error =>{
  console.log(error)
})

}

function putData(){
  let id = 29
  api.put(`/product/${id}`, {
    name:'ADDED NEW PRODUCT',
    quantity:8,
    price: '88.88'
  })
  .then((response)=>{
    console.log(response.data)
  })
  .catch( error =>{
    console.log(error.message)
  })
}

async function getData2(){
  
  try{
    let response = await api('/product')
    console.log(response.data)
  } catch (error){
    console.log(error.message)
  }
 

}

async function postData2(){
  
  try{
    let response = await api({url:'/product', method:'POST', data:{
      name:'OTHER NEW PRODUCT',
      quantity:8,
      price: '88.88'
    }})
    console.log(response.data)
  } catch (error){
    console.log(error.message)
  }
 

}


  return (
    <>    
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Send Data</button>
      <button onClick={putData}>Put Data</button>
      <button onClick={getData2}>Get Data</button>
      <button onClick={postData2}>Send Data</button>

      {data.map(product =>{

        return (
          <>
          <h3>Name: {product.name}</h3>
          <h4>ID: {product.id}</h4>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <hr/>
          
          </>
        )
      })}
    </>
  )
}

export default App