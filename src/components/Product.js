import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
class Product extends Component {
    state = {
        inCart: this.props.inCart,
        checked: true
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive" src={product.image} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.title}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">

                        {
                            this.state.inCart ? (
                                <span className="btn btn-success">Added</span>
                            ) : (
                                    <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Wish list </a>
                                )
                        }
                        {" "}
                        {
                            this.state.inCart ? (
                                <a href="#" className="btn btn-sm btn-primary float-right" checked={this.checked} >Watch list </a>
                            ) : (
                                    <a href="#" className="btn btn-sm btn-primary float-right">Watch list </a>
                                )
                        }
                        <div className="price-wrap h5">
                            <span className="price-new">${product.price}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;