import "./Products.css";
import Imagem1 from "./img/sapato-esportivo.jpeg";
import Imagem2 from "./img/bota-casual.jpeg";
import Imagem3 from "./img/sapato-casual.jpeg";
import Cart from "./Cart";


function Products() {
    return(
        <div className="Products">
            <h2>Nossos Produtos:</h2>
            <div className="productList">
                <div className="Product">
                <img src={Imagem1} alt="Tênis Esportivo"/>
                                <h3>Tênis Esportivo</h3>
                                <p>R$ 150.00</p>
                                <button>Adicionar ao Carrinho</button>
                </div>
            <div className="Product">
                <img src={Imagem2} alt="Bota Casual"/>
                                    <h3>Bota Casual</h3>
                                    <p>R$ 200.00</p>
                                    <button>Adicionar ao Carrinho</button>

            </div>
            <div className="Product">
                <img src={Imagem3} alt="Sapato Casual" />
                                    <h3>Sapato Casual</h3>
                                    <p>R$ 180.00</p>
                                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>
            <div>
               
            </div>
        </div>
    )

}

export default Products;