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

  async componentDidMount() {
    const { getCoin } = this.props;
    const siglas = await getCoin();
  }

  render() {
    const { valorTotal } = this.state;
    const { email } = this.props;
    return (
      <div>
        <h1>Wallet</h1>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="total-field">{ valorTotal }</span>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCoin: () => dispatch(getCoinAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
