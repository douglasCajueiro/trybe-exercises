import React from 'react';

class LastJobForm extends React.Component {
  render() {
    return(
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
    );
  }
}

export default LastJobForm;