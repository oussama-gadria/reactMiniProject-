import  { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Product extends Component {
    state = { 
      like:0,
      message:"",
      variant:null,
      style:null
     }
    incrementLike=()=>{ 
      this.setState({  
        like:this.state.like + 1
      })
    }
    bestProduct=()=>{ 
      if (this.state.like>5){ 

      }
    }
    
    render() { 
        return (  
          
        <Card className={this.state.style} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"../assets/images/"+ this.props.product.img } />
        <Card.Body>
          <Card.Title><NavLink to={`/products/${this.props.product.id}`}>{this.props.product.name}</NavLink></Card.Title>
          <Card.Text>Price :{this.props.product.price}</Card.Text>
          <Card.Text>Like :{this.state.like}</Card.Text>
          <Card.Text>quantity :{this.props.product.quantity}</Card.Text>
          <Card.Text>{this.props.product.description}</Card.Text>
          <Alert key={this.state.variant} variant={this.state.variant}> {this.state.message}
          </Alert>
          
          <Link to={`/products/update/${this.props.product.id}`}> 
          <Button variant="secondary" style={{marginRight:'9rem'}} >update</Button>
          </Link>
           <Button variant="danger" onClick={() => this.props.deleteProd(this.props.product.id)}>Delete Product</Button>
          <Button variant="primary" style={{marginRight:'9rem'}} onClick={this.incrementLike}>Like</Button>
          <Button disabled={this.props.product.quantity===0} variant="primary" onClick={() => this.props.parentBuy(this.props.product)}>Buy</Button>
        </Card.Body>
      </Card> );
    }
}
 
export default Product;