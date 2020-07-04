import PropTypes from 'prop-types';
import React from 'react';
import { isEmail, isEmpty, isLength } from 'validator';
import validate from '../../helpers/validate';
import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: {},
    };

    this.validator = {
      email: [
        [isEmpty, 'Please enter you email'],
        [(v) => !isEmail(v), 'Please enter a valid email']
      ],
      password: [
        [isEmpty, 'Please enter you password'],
        [(v) => !isLength(v, { min: 8 }), 'Password must be at least 8 characters']
      ],
      confirmPassword: [
        [isEmpty, 'Please enter you confirm password'],
        [(v) => {
          const { data } = this.state;

          const { password } = data;
          return password !== v;
        }, 'Please confirm your password'],
      ],
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { data } = this.state;

    const error = Object.keys(data)
      .reduce((pv, cv) => {
        const value = data[cv];
        const validators = this.validator[cv];

        const error = validate(validators, value);

        if (!error) {
          return pv;
        }

        return {
          ...pv,
          [cv]: error,
        }
      }, {});

    this.setState((s) => ({
      error,
    }));

    return !Object.keys(error).length;
  }

  handleValueChange = (name) => (event) => {
    const { value } = event.target;

    const validators = this.validator[name];
    const error = validate(validators, value)

    this.setState((s) => ({
      data: {
        ...s.data,
        [name]: value,
      },
      error: {
        ...s.error,
        [name]: error,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ 
      dirty: true,
    });

    const result = this.validate();

    if (!result) {
      return;
    }

    const { onSubmit } = this.props;
    const { data } = this.state;

    const { email, password, confirmPassword } = data;

    onSubmit({
      email,
      password,
      confirmPassword,
    });
  }

  render() {
    const { loading } = this.props;
    const { data, dirty, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Box mb="sm">
          <Input
            width="100%" 
            id="email"
            label="Email" 
            value={data.email}
            error={dirty ? error.email : ''}
            onChange={this.handleValueChange('email')}
          />
        </Box>
        <Box mb="sm">
          <Input
            width="100%" 
            type="password"
            id="password" 
            label="Password" 
            value={data.password}
            error={dirty ? error.password : ''}
            onChange={this.handleValueChange('password')}
          />
        </Box>
        <Box mb="lg">
          <Input
            width="100%" 
            type="password"
            id="confirmPassword" 
            label="Confirm password" 
            value={data.confirmPassword}
            error={dirty ? error.confirmPassword : ''}
            onChange={this.handleValueChange('confirmPassword')}
          />
        </Box>
        <Flex justifyContent="center">
          <Button 
            width="80%" 
            outline 
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? '...' : 'Sign Up'}
          </Button>
        </Flex>
      </form>
    );
  }
}

SignUpForm.defaultProps = {
  loading: false,
};

SignUpForm.propTypes =  {
  loading: PropTypes.bool,
};

export default SignUpForm;
