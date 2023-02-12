import React, { useEffect, useState } from "react";
import Categories from '../components/CategoriesShop/Categories';
import itempic from '../assets/baby.png'
// const  ProductItem = () => {

//     let [productsData,setProductsData]=useState([])
//     // getAllData
//     async function getAllData(){
//         const API_URL="https://dummyjson.com/products";
//         let response= await fetch(API_URL);
//         let data = await response.json();
//         setProductsData(data.products)
//     }
//     // console.log(productsData)
//     useEffect(()=>{
//     getAllData()
//     },[])
   const data={
    productData:[
      {
        id:1,
        image:itempic,
        tittle:'kids',
        description:'Tropical Suit'
      },
      {
        id:2,
        image:itempic,
        tittle:'kids',
        description:'Tropical Suit'
      },
      {
        id:3,
        image:itempic,
        tittle:'men',
        description:'Tropical Suit',
      },
      {
        id:4,
        image:itempic,
        tittle:'ladies',
        description:'Tropical Suit',
      },
      {
        id:5,
        image:itempic,
        tittle:'babyborn',
        description:'Tropical Suit',
      },
      {
        id:6,
        image:itempic,
        tittle:'boys',
        description:'Tropical Suit',
      },
    ]

   }
    
 


export default data;
export const links=[
  {
    name:'Home',
    path:'/'
  },
  {
    name:'ProductDetails',
    path:'/pdosuctdetails'
  },
  {
    name:'Gallery',
    path:'/gallery'
  },
  {
    name:'Cart',
    path:'/cart'
  },
  {
    name:'Shop',
    path:'/shop'
  },

]