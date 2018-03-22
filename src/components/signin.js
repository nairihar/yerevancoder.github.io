import React from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../utils/db';
import { updateByPropertyName } from '../utils/funcs';
import { TRIPLE_COLOR_TOP_BORDER, FANCY_INPUT_BOXES } from '../utils/constants';
import { LOGIN_ENTRY_BOX_PROMPT_S, WIDTH_WITH_MARGIN, BAR, SPACE } from './common-styles';

import WithEffectInput from './with-effect-input';

// const INITIAL_STATE = { email: '', password: '', error: null, remember_me_checked: false };
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  remember_me_checked: false,
};

const login_entry_box_signin_s = { ...WIDTH_WITH_MARGIN };

const remember_forget_row_s = {
  ...WIDTH_WITH_MARGIN,
  paddingTop: '10px',
  paddingBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

export default withRouter(
  class SignInForm extends React.Component {
    state = { ...INITIAL_STATE };

    onSubmit = event => {
      const { email, password, remember_me_checked } = this.state;
      const { user_did_sign_in, sign_user_in } = this.props;
      event.preventDefault();
      sign_user_in(email, password, remember_me_checked)
        .then(() => this.setState(() => ({ ...INITIAL_STATE }), user_did_sign_in))
        .catch(error => this.setState(updateByPropertyName('error', error)));
    };

    make_remember_forget_row() {
      const remember_me_update = event =>
        this.setState(updateByPropertyName('remember_me_checked', event.target.value));
      return (
        <div style={remember_forget_row_s}>
          <div className={'PlainFlexColumn OnePaddingLeft PlainFlexCentered'}>
            <input
              type={'checkbox'}
              style={{ height: '20px' }}
              onChange={remember_me_update}
              value={this.state.remember_me_checked}
            />
            <label style={{ color: '#7d8487', paddingLeft: '10px', fontWeight: 700 }}>
              Remember me
            </label>
          </div>
          <p>Forgot Password</p>
        </div>
      );
    }
    render() {
      const { email, password, error } = this.state;
      const is_invalid = password === '' || email === '';
      const top_message = (
        <p style={LOGIN_ENTRY_BOX_PROMPT_S}>{error ? error.message : this.props.login_message}</p>
      );

      return (
        <form
          onSubmit={this.onSubmit}
          style={TRIPLE_COLOR_TOP_BORDER}
          className={'ReactModal__Content--after-open Profile__Container'}>
          <fieldset>
            {top_message}
            {BAR}
            {SPACE}
            <WithEffectInput
              box_name={FANCY_INPUT_BOXES.SIGNIN_EMAIL}
              query_field={() => this.state.email}
              on_change={event => this.setState(updateByPropertyName('email', event.target.value))}
              label={'Email'}
              input_type={'email'}
            />
            <WithEffectInput
              box_name={FANCY_INPUT_BOXES.SIGNIN_PASSWORD}
              query_field={() => this.state.password}
              on_change={event =>
                this.setState(updateByPropertyName('password', event.target.value))
              }
              label={'Password'}
              input_type={'password'}
            />
            {this.make_remember_forget_row()}
            <input value={'Sign In'} disabled={is_invalid} type={'submit'} />
          </fieldset>
        </form>
      );
    }
  }
);
