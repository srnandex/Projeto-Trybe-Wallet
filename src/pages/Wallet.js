import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinAPI } from '../actions/index';
import WalletHeader from './components/WalletHeader';
import WalletForm from './components/WalletForm';
import WalletTable from './components/WalletTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valorTotal: 0,
    };
  }

  componentDidMount() {
    const { getSig } = this.props;
    getSig();
  }

  updateInicialValue = (value) => {
    const { valorTotal } = this.state;
    const sumValue = valorTotal + value;
    const upValue = Number(sumValue.toFixed(2));
    this.setState({ valorTotal: upValue });
  };

  render() {
    const { valorTotal } = this.state;
    return (
      <div>
        <WalletHeader valorTotal={ valorTotal } />
        <WalletForm updateInicialValue={ this.updateInicialValue } />
        <WalletTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  getSig: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getSig: () => dispatch(getCoinAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
