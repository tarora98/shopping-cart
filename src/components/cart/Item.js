import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.imdbID,
            btnVisible: false,
            checked: true
        };
    }
    handleChange = (e) => {

        if (this.state.imdbID != e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true,
            });
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.updateCartQuantity(this.props.item.product.imdbID, this.state.quantity);

        this.setState({
            btnVisible: false
        });
    }

    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.imdbID);
    }


    render() {

        const { item } = this.props;

        return (

            <div className="row">

                <Checkbox
                    checked={this.checked}
                />
                <div className="col-xs-2"><img className="img-responsive" src={item.product.Poster} />
                </div>
                <div className="col-xs-4">
                    <h4 className="product-name"><strong>{item.product.Title}</strong></h4>
                    <h4 className="product-name"><strong>{item.product.Year}</strong></h4>
                </div>
                <div className="col-xs-6">
                    <div className="col-xs-3 text-right">
                        <h6><strong>{item.product.price} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        {
                            this.state.btnVisible ? (
                                <div className="col-xs-2">
                                    <button type="submit" className="btn btn-info">Update</button>
                                </div>
                            ) : null
                        }

                        <div className="col-xs-2">
                            <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
                                REMOVE FROM MY LIST
                            </button>
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateCartQuantity: (imdbID, quantity) => dispatch(updateCartQuantity(imdbID, quantity)),
        removeFromCart: (imdbID) => dispatch(removeFromCart(imdbID))
    }
};

export default connect(null, mapDispatchToProps)(Item);