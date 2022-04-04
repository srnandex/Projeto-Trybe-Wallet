import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      valiLog: false,
      valiPass: false,
    };
  }

  validaEmail = ({ target }) => {
    // Regex tirado do site https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (regex.test(target.value)) {
      this.setState({ email: target.value, valiLog: true });
    } else {
      this.setState({ valiLog: false });
    }
  }

  validaSenha = ({ target }) => {
    const magicNumbe = 6;
    if (target.value.length >= magicNumbe) {
      this.setState({ valiPass: true });
    } else {
      this.setState({ valiPass: false });
    }
  }

  redi = () => {
    const { history, savedLogin } = this.props;
    const { email } = this.state;
    savedLogin(email);
    history.push('/carteira');
  }

  render() {
    const { valiLog, valiPass } = this.state;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            data-testid="email-input"
            name="login"
            onChange={ this.validaEmail }
            required
            type="email"
          />
          <input
            data-testid="password-input"
            name="pass"
            onChange={ this.validaSenha }
            required
            type="password"
          />
          <button
            onClick={ this.redi }
            disabled={ !((valiLog && valiPass)) }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  savedLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  savedLogin: (input) => dispatch(saveUser(input)),
});

export default connect(null, mapDispatchToProps)(Login);
