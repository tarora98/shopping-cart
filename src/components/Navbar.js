import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    state={
        counter:0
    }

    render() {

        this.props.cartUpdated();

        let total = 0;
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Movie List</NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">Added</span>
                                    ) : null
                                }
                                <i className="glyphicon glyphicon-shopping-cart"></i> My List</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};

export default connect(mapStateToProps)(Navbar);