import React from 'react';
import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import Link from '../Link';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange = (name) => (event) => {
    const { value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { email, password } = this.state;

    onSubmit({
      email,
      password,
    });
  }

  render() {
    const { loading } = this.props;
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Box mb="md">
          <Input
            width="100%" 
            id="email"
            label="Email" 
            value={email}
            onChange={this.handleValueChange('email')}
          />
        </Box>
        <Box mb="sm">
          <Input
            width="100%" 
            type="password"
            id="password" 
            label="Password" 
            value={password}
            onChange={this.handleValueChange('password')}
          />
        </Box>
        <Flex justifyContent="center" mb="lg">
          <Link fontSize="sm" to="/" color="grey">
            Forget your password?
          </Link>
        </Flex>
        <Flex justifyContent="center">
          <Button 
            width="80%" 
            outline 
            variant="primary"
            type="submit"
            disabled={loading}
          >
            Sign In
          </Button>
        </Flex>
      </form>
    );
  }
}



export default SignInForm;
