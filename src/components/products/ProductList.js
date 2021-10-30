import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productsActions from "../../redux/actions/productActions";
import { Table } from "reactstrap";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
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
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((products) => (
              <tr key={products.id}>
                <th scope="row">{products.id}</th>
                <td>{products.productName}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.unitPrice}</td>
                <td>{products.unitsInStock}</td>
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
