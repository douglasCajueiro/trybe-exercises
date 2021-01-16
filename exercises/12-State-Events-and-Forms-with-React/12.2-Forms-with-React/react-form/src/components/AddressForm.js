import React from 'react';
import EmailInput from './EmailInput';

class AddressForm extends React.Component {
  render () {
    return (
      <fieldset>
        <legend>Sobre Você</legend>
        <form>        
          <label>
            Nome
            <input 
              type="text" 
              name="name" 
              maxLength="50" 
              placeholder="Seu nome aqui" 
              autoCapitalize={'characters'} 
              required
            />
          </label>

          <label>
            Email
            <EmailInput />
          </label>

          <label>
            CPF
            <input 
              type="text"
              name="cpf"
              maxLength="11"
              placeholder="Digite seu CPF"
              required
            />
          </label>

          <label>
            Endereço
            <input
              type="text"
              name="address"
              maxLength="200"
              required
            />
          </label>

          <label>
            Cidade
            <input
              type="text"
              name="city"
              maxLength="28"
              required
            />
          </label>

          <label>
            Estado
            <select name="state" id="state" required>
              <option></option>
              <option>Rio de Janeiro</option>
            </select>
          </label>
          <label>
            <input
              type="radio"
              checked="true"
              name="home"
              value="house"
            />
            Casa
          </label>
          <label>
            Apartamento
            <input
              type="radio"
              name="home"
              value="apartment"
            />
          </label>
        </form>
      </fieldset>
    );
  }
}

export default AddressForm;