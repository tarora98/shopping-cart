import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import axios from 'axios';
import { pList, addToCart } from '../store/actions/cartActions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Year from './Year';
import ReactDOM from "react-dom";
class ProductList extends Component {


    addToCart = (product) => {
        this.props.addToCart(product);
    }
    componentDidMount() {
        // console.log
        console.log(this.state.message + "STATE");
        const year = "2020"; // put year
        axios
            .get(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${year}`)
            .then((response) => {
                console.log('okkk', response);
                this.props.pList(response.data.Search);
            });
    }
    state = {
        message: Nothing
    }
    handleChange = e => {
        const c = data[e.target.value]
        this.setState({ message: c || Nothing })
    }
    render() {
        console.log(Red()+"JDJEO");
        return (

            <div className="container">
                <br />
                <div className="App">
                    <Status>{this.state.message()}</Status>
                    <select onChange={this.handleChange}>
                        <option>---</option>
                        <option value="2000" >2000</option>
                        <option value="2001" >2001</option>
                        <option value="2002" >2002</option>
                        <option value="2003" >2003</option>
                        <option value="2004" >2004</option>
                        <option value="2005" >2005</option>
                        <option value="2006" >2006</option>
                        <option value="2007" >2007</option>
                        <option value="2008" >2008</option>
                        <option value="2009" >2009</option>
                        <option value="2010" >2010</option>
                        <option value="2011" >2011</option>
                        <option value="2012" >2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>

                    </select>
                    {" "}
                    <br />
                    <br />

                    <div className='row'>
                        {this.props.products
                            ? this.props.products.map((product) => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.imdbID === product.imdbID).length > 0} key={product.imdbID} />)
                            : null}
                    </div>
                </div>
            </div>

        )
    }
}
const Status = ({ children }) => <div>{children}</div>
const Nothing = () => <h2>Select Year</h2>
const Red = () => <h2 style={{
    fontWeight: 'bold',
}}>value</h2>

const data = {
    2000: Red
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};



export default connect(mapStateToProps, { pList, addToCart })(ProductList)