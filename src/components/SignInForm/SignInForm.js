import PropTypes from 'prop-types';
import React from 'react';
import { isEmail, isEmpty } from 'validator';
import validate from '../../helpers/validate';
import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      data: {
        email: '',
        password: '',
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

    const { email, password } = data;

    onSubmit({
      email,
      password,
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
        <Box mb="lg">
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
        <Flex justifyContent="center">
          <Button 
            width="80%" 
            outline 
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? '...' : 'Sign In'}
          </Button>
        </Flex>
      </form>
    );
  }
}

SignInForm.defaultProps = {
  loading: false,
};

SignInForm.propTypes =  {
  loading: PropTypes.bool,
};

export default SignInForm;
