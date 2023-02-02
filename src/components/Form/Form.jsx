//import PropTypes from 'prop-types';
//import css from './Form.module.css';

const Form = ({handleSubmit}) => {
    handleSubmit = evt => {
      evt.preventDefault();

      const form = evt.currentTarget;
      const name = form.elements.name.value;

      console.log(name);

      this.props.onSubmit({ name });

      form.reset();
    };


        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Name</h2>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        );
    

}

export default Form;