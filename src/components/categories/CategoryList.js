import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import {Button, ListGroup,ListGroupItem} from "reactstrap"

class CategoryList extends Component {
  componentDidMount()
  {
    this.props.actions.getCategories()
  }
  render() {
    debugger
    return (
      <div>
        <h3>CategoryList {this.props.categories.length} </h3>
        <ListGroup >
          {this.props.categories.map((category) => (
            <ListGroupItem active={category.id===this.props.currentCategory.id} onClick={()=>this.props.actions.changeCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem> 
            
            
          ))}
          <Button >Tıkla </Button>
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
      changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
