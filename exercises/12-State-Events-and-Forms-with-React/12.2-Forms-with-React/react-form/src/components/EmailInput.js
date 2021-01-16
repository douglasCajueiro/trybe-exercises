import React from 'react';

class EmailInput extends React.Component {
  render() {
    return(
      <input type="email" placeholder="exemplo@email.com" required/>
    );
  }
}

export default EmailInput;