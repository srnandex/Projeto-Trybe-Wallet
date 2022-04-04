import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valorTotal: 0,
    };
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

export default connect(mapStateToProps)(Wallet);
