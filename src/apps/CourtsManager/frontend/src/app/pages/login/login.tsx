import React from 'react';
import './login.scss';
import LoginImage from '../../../assets/images/login.svg';

export class LoginPage extends React.Component {

  render() {
    return (
      <div className="login-page">
        <div className="login-page__left-panel">
          {/* <header className="login-page__header">Nombre Marca</header> */}
          <main className="login-page__main">
            <header className="login-page__title">
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details.</p>
            </header>

            <form className="login-page__form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" name="password" id="password" placeholder="******" className="form-control" />
              </div>

              <div className="login-page__form-option">
                <div className="form-group--checkbox">
                  <input type="checkbox" name="remember" id="remember" className="form-control" />
                  <label htmlFor="remember" className="form-label">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <div className="login-page__form-submit">
                <button type="submit" className="btn btn--primary">
                  Sign in
                </button>

                <button type="button" className="btn google-btn">
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                  Sign in with Google
                </button>
              </div>

              <div className="login-page__form-register">
                <p>Don't have an account?</p>
                <a href="#">Sign up</a>
              </div>
            </form>
          </main>
        </div>
        <div className="login-page__right-panel">
          <img src={LoginImage} />
        </div>
      </div>
    );
  }
}
