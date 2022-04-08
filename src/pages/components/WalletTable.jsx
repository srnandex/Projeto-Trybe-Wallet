import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  render() {
    const { infoTable } = this.props;
    return (
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
        <tbody>
          { infoTable.map((expen, ind) => {
            const { name, ask } = expen.exchangeRates[expen.currency];
            const fixAsk = Number(ask).toFixed(2);
            const conver = Number(expen.value) * Number(ask);
            const fixConver = conver.toFixed(2);
            const fixValue = Number(expen.value).toFixed(2);
            return (
              <tr key={ ind }>
                <td>{ expen.description }</td>
                <td>{ expen.tag }</td>
                <td>{ expen.method }</td>
                <td>{ fixValue }</td>
                <td>{ name }</td>
                <td>{ fixAsk }</td>
                <td>{ fixConver }</td>
                <td>Real</td>
                <td>
                  <button data-testid="edit-btn" type="button">Editar</button>
                  <button
                    onClick={ this.deletExpense }
                    data-testid="delete-btn"
                    type="button"
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  infoTable: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  infoTable: wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
