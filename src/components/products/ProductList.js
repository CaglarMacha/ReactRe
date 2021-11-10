import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge ,Button} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productsActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from "reactstrap";
import alertify from "alertifyjs"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart= (product)=> {
    debugger
    this.props.actions.addToCart({quantity:1,product})

    alertify.success("sepete eklendi")
  }
  render() {
    return (
      <div>
        <Badge color="success">ProductList</Badge>
        <Badge color="warning">{this.props.currentCategory.categoryName}</Badge>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price Name</th>
              <th>Quantity per Unit</th>
              <th>Unit in Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>ß
                
                <td><Button onClick={()=>this.addToCart(product)} >AddToCart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
