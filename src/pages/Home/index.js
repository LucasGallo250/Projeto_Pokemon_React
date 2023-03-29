import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { MdAddShoppingCart } from "react-icons/md";
import * as CartActions from "../../store/modules/cart/actions";

import { ProductList, Product, Paginate } from "./styles";

function Home({ amount, addToCartRequest }) {
  const [ products, setProducts ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ info, setInfo ] = useState({});

  const fetchData = async () => {
    var endpoints = [];
    for (var i= 1; i<29; i++) {
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

  const handleIncrementPage = () => {
    if (page >= info.pages) {
        return
    } else {
        setPage(page + 1);
        window.scrollTo(0, 0)
    }
}

const handleDecrementPage = () => {
    if (page <= 0) {
        return
    } else {
        setPage(page - 1);
        window.scrollTo(0, 0)
    }
}

  return (
    <ProductList>
      
      {products.map(product => (
        <Product key={product.data.id}>
          <strong>{product.data.name}</strong>
          <img src={product.data.sprites.front_default} alt={product.data.name} />
          
          <span className="preco_centralizar" >{Intl.NumberFormat('pt-BR', 
          { style: 'currency', currency: 'BRL'})
          .format( product.data.id +2 )}
          </span>

          <button type='button' onClick={() => handleAddProduct(product.data.id)}>
            <div>
              <MdAddShoppingCart size={20} color='#FFF' />
              {amount[product.data.id] || 0}
            </div>

            <span className="adicionar" >Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}

      <div>
        <Paginate className="paginate">
          <button className="paginate_ant" onClick={handleDecrementPage}>Página anterior</button>
          <p className="paragrafo" >{page} de {info?.pages} Páginas</p>
          <button className="paginate_ant" onClick={handleIncrementPage} disable={page === info.pages}>Próxima Página</button>
          </Paginate>
      </div>

    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.data.id] = product.data.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
