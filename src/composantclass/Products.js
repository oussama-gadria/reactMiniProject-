import { Component } from "react";
import Product from "./Product";
import Alert from 'react-bootstrap/Alert';
import { deleteProduct, getallProducts } from "../services/api";
import React, { useEffect, useState } from 'react';
class Products extends Component {
    state = { 
        showMessage:true,
        etat:true,
         products:[]
     };
     buy=(product)=>{ 
      if(product.quantity>0){
        product.quantity--; 
      }
      this.setState({ 
        etat:false
      })
      
     }
     componentDidUpdate(){ 
      this.getProducts() ; 
      console.log(this.state.products);

     }
     //atelier axios: 
     getProducts=async()=>{ 
          const response = await getallProducts();
          console.log(response); 
          this.setState({ 
            products:response.data
          })
     }
    componentDidMount(){ 
        const timeoutId = setTimeout(() => {
             this.setState({ 
                showMessage:false
             }) 

             
          }, 3000);
    }
    deleteProd = async (id) => {
       const result = window.confirm("Are you sure you want to delete?");
      if (result) {
       await deleteProduct(id);
      }
      }
    render() { 
        return ( 
        <>
        <>
          {this.state.showMessage && <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
             Aww yeah, you successfully read this important alert message. 
            </p>
            </Alert> 
          } 
        </>
        {
        this.state.products.map((p)=>{ 
            return(   
            <Product product={p} parentBuy={this.buy}  key={p.id} deleteProd={this.deleteProd}/>
            )
        })
        }
        </> 
        );
    }
}
 
export default Products;