import React from 'react';

class EmailInput extends React.Component {
  validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || email.length === 0) {
      return 'Invalid email'
    }
    return '';
  }

  render() {
    return(
      <>
        <input type="email" placeholder="exemplo@email.com" required/>
        <span></span>
      </>
    );
  }
}

export default EmailInput;