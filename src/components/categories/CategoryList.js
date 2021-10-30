import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from 'reactstrap';
import * as productsActions from "../../redux/actions/productActions"
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category)=> {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  }

  render() {
    debugger;
    return (
      <div>
        <Badge color="success" >Categories</Badge>

        <h3> {this.props.categories.length} </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          <Button>Tıkla </Button>
        </ListGroup>
        <h5>Seçili Kategori : {this.props.currentCategory.categoryName}</h5>
        {/* <h2>{this.props.actions.getCategories().length}</h2> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
