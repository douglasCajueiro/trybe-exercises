import React from 'react';
import EmailInput from './EmailInput';

class EmployeeForm extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      home: '',
      summary: '',
      role: '',
      roleDescription: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return(

      <>
        <form>
          <fieldset>
            <legend>Sobre Você</legend>
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
          </fieldset>
          
          <fieldset>
            <legend>Sobre sua Carreira</legend>
            <label>
              Resumo do Currículo
              <input
                type="fieldset"
                maxLength="1000"
                name="summary"
                required
              />
            </label>

            <label>
              Cargo
              <input
                type="text-area"
                maxLength="40"
                name="role"
                required
              />
            </label>
            
            <label>
              Descrição do Cargo
              <input
                type="text"
                maxLength="500"
                name="roleDescription"
                required
              />
            </label>
          </fieldset>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default EmployeeForm;