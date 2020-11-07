import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products : storeProducts,
        detailProduct : detailProduct
    }

    tester = () => {
        console.log('State products : ', this.state.products[0].inCart);
        console.log('Data products : ', storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(()=>{
            return {products: tempProducts}
        } , ()=> {
            console.log('State products : ', this.state.products[0].inCart);
            console.log('Data products : ', storeProducts[0].inCart);
        })
    }

    handleDetail = () => {
        console.log("hello in details");
    }

    addToCart = () => {
        console.log("hello in add To Cart");
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail : this.handleDetail,
                addToCart : this.addToCart
            }}>
                <button onClick={this.tester} > test ME</button>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
