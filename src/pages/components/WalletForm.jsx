import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses } from '../../actions';
import api from '../../services/api';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

resetState = () => {
  const { id } = this.state;
  const newId = id + 1;
  const ali = 'Alimentaçaõ';
  this.setState({
    id: newId,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: ali,
    exchangeRates: {},
  });
};

  saveExpense = async () => {
    const { updateInicialValue, saveEx } = this.props;
    const { value, currency } = this.state;
    const exchangeRates = await api();
    const { ask } = exchangeRates[currency];
    const conversao = Number(value) * Number(ask);
    // const fixConver = conversao.toFixed(2);
    updateInicialValue(conversao);
    this.setState({ exchangeRates }, () => saveEx(this.state));
    this.resetState();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { sig } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <input
          onChange={ this.handleChange }
          value={ value }
          name="value"
          data-testid="value-input"
          type="number"
        />
        <input
          onChange={ this.handleChange }
          value={ description }
          name="description"
          data-testid="description-input"
          type="text"
        />
        <label htmlFor="currency">
          Moeda
          <select
            data-testid="currency-input"
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
            id="currency"
          >
            {sig.map((si) => (
              <option key={ si } value={ si }>{ si }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Metodo:
          <select
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
            name="method"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.saveExpense } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  sig: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateInicialValue: PropTypes.func.isRequired,
  saveEx: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  sig: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveEx: (expe) => dispatch(saveExpenses(expe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
