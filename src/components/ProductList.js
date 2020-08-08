import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { addToCart } from "../store/actions/cartActions";
import axios from 'axios';
import { pList } from '../store/actions/cartActions';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    addToCart = (product) => {
        this.props.addToCart(product);
    }

    componentDidMount() {
        const year = "2000";
        axios
            .get(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${year}`)
            .then((response) => {
                console.log('okkk', response);
                this.props.pList(response.data.Search);
            });
    }
    render() {
        return (
            <div className="container">
                <br />
                {/* <div className="row">
                    {
                        this.props.products.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.id === product.id).length > 0} key={product.id} />)
                    }
                </div> */}
                <div className='row'>
                    {this.props.products
                        ? this.props.products.map((product) => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.Year === product.Year).length > 0} key={product.Year} />)
                        : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};


export default connect(mapStateToProps, { pList })(ProductList)