import React, { Component } from 'react';

class Product extends Component {
    state = {
        inCart: this.props.inCart
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
                        <img className="img-responsive" src={product.Poster} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">Title:{" "}{product.Title}</h4>
                        <p className="desc">Year:{" "}{product.Year}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                        {
                            this.state.inCart ? (
                                <span className="btn btn-success">Added</span>
                            ) : (
                                    <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Wish list </a>
                                )
                        }
                        {"  "}
                        {
                            this.state.inCart ? (
                                <a href="#" className="btn btn-sm btn-primary float-right" >Watch list </a>
                            ) : (
                                    <a href="#" className="btn btn-sm btn-primary float-right">Watch list </a>
                                )
                        }

                    </div>
                </figure>
            </div>


        )
    }
}

export default Product;