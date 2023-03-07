import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getallProducts } from '../services/api';

function ProductDetails() {
  const [product,setProduct]=useState({}); 
  var [products,setProducts]=useState({}); 
  var [exit,setExit]=useState(false); 
  const [state,setState]=useState(true); 
  const {id} = useParams();
  
  useEffect(()=>{  
    getproduct();
  },[])
  
  const getproduct=async()=>{ 
  // products=getallProducts();
  // console.log(products.data)
  //       products.map(p=>{ 
  //         if ((p.id===id)&&(!exit)){ 
  //           setState(false);
  //           setExit(true);
  //         }
  //       })
        const response =await getallProducts(id);
        console.log(response); 
        setProduct(response.data); 
        console.log(response.error);
      
 
    }
  return (
    <>
      {/* {  <h1>Product doesn't exist</h1> } */}
     {<Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={"../assets/images/" + product.img}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>}
    </>
    
  )
}

export default ProductDetails