import {useEffect, useState} from "react"
import { Form, Button, Container } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import { editProduct, getallProducts } from "../services/api";


function UpdateProduct() {
   const navigate =useNavigate(); 
   const idParam=useParams(); 
   const [product,setProuct]=useState({
    id:idParam,
    name:'', 
    price:'', 
    img:'', 
    like:'', 
    quantity:'', 
    description:''
});
 const { id, name, price, img, like, quantity, description } = product;
   getallProducts= async ()=>{ 
    const response =await getallProducts(idParam); 
    setProuct(response.data);
   }
   useEffect(()=>{ 
    getallProducts()
   },[])
   const onValueChange=(e)=>{ 
    setProuct({...product,[e.target.name]:e.target.value})
   } 
   const UpdateP=async()=>{
    const res =await editProduct(idParam,product); 
    if (res.status===200){ 
        navigate('/products')
    }
   }
    return ( 
        
        <> 
        <Container style={{ marginTop: "30px" }}>
        <h2>Modify Your {name} Product</h2>
        <Form>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
        onChange={(e) => onValueChange(e)}
        name="name"
        value={name}
        type="text"
        placeholder="Enter a Name"
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>

        <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter description "
        onChange={(e) => onValueChange(e)}
        name="description"
        value={description}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
        type="number"
        onChange={(e) => onValueChange(e)}
        name="price"
        value={price}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
        type="number"
        onChange={(e) => onValueChange(e)}
        name="quantity"
        value={quantity}
        />
        </Form.Group>
        {/* <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
        type="file"
        onChange={(e) => onFileHandle(e)}
        name="img"
        />
        </Form.Group> */}
        <Button variant="primary" onClick={() => UpdateP()}>
        Update Product
        </Button>
        <Button onClick={() => navigate("/products")} variant="secondary">
        Cancel
        </Button>
        </Form>
        </Container>
       </>
     );
}

export default UpdateProduct;