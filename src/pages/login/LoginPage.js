import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { login } from './redux/actions';

const mapSateToProps = (state) => ({
  user: state.user,
});

@withRouter
@connect(mapSateToProps, { login })
class LoginPage extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    username: '',
    password: '',
    error: false,
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password, this.props.history);
  }

  render() {
    const { user: { error } } = this.props;
    const isError = Boolean(error);

    return (
      <form style={{ padding: 8, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={this.handleSubmit}>
        <Grid container spacing={16} alignItems="center" justify="center" direction="column">
          <Grid item xs={12}>
            <Grid container>
              <TextField error={isError} placeholder="Username" name="username" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <TextField error={isError} placeholder="Password" type="password" name="password" onChange={this.handleChange} autoComplete="off" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Button variant="outlined" color="primary" type="submit">Login</Button>
            </Grid>
          </Grid>
          <Grid container justify="center">
            {error ? <div>{error}</div> : null}
          </Grid>
        </Grid>
      </form>
    );
  }
}

export { LoginPage };
