import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinAPI } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valorTotal: 0,
    };
  }

  componentDidMount() {
    const { getCoin } = this.props;
    getCoin();
  }

  render() {
    const { valorTotal } = this.state;
    const { email, sig } = this.props;
    return (
      <div>
        <header>
          <h1>Wallet</h1>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{ valorTotal }</span>
        </header>
        <form>
          <input data-testid="value-input" type="value" />
          <input data-testid="description-input" type="text" />
          <label data-testid="currency-input" htmlFor="siglas">
            Moeda
            <select name="siglas" id="siglas">
              {sig.map((si) => (
                <option key={ si } value={ si }>{ si }</option>
              ))}
            </select>
          </label>
          <label data-testid="method-input" htmlFor="method">
            Metodo:
            <select name="method" id="method">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-credito">Cartão de crédito</option>
              <option value="cartao-debito">Cartão de débito</option>
            </select>
          </label>
          <label data-testid="tag-input" htmlFor="categories">
            Categoria:
            <select name="categories" id="categories">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  sig: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCoin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  sig: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoin: () => dispatch(getCoinAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
