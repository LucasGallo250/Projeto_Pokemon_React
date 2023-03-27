import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { MdAddShoppingCart } from "react-icons/md";
import * as CartActions from "../../store/modules/cart/actions";

import { ProductList, Product } from "./styles";




function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    var endpoints = [];
    for (var i= 1; i<100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setProducts(res))
    .catch((e) => setProducts(e))

    

    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = (productId) => {
    addToCartRequest(productId);
  };

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.data.id}>
          <strong>{product.data.name}</strong>
          <img src={product.data.sprites.front_default} alt={product.data.name} />
          <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format( product.data.id +2 )}</span>

          <button type='button' onClick={() => handleAddProduct(product.data.id)}>
            <div>
              <MdAddShoppingCart size={16} color='#FFF' />
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.data.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
