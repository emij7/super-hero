import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import TokenContext from '../context/TokenContext';

const URL = 'http://challenge-react.alkemy.org/'

const validate = values => {
  /*
  Validamos que el campo no esté vacío ni contenga una dirección de correo erronea.
  */
  const errors = {};  //Manejar errores en los input

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};



const FormularioSuscripcion = () => {
  const { token, setToken } = useContext(TokenContext)

  let history = useHistory()

  const redireccionLogin = () => history.push('/MiEquipo')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      peticion(values.email, values.password)
    }
  });

  const peticion = async (mail, pass) => {
    //Llamado api para validar usuario y contraseña
    await axios.post(URL, {
      email: mail,
      password: pass
    })
      .then(function (response) {
        setToken(response.data.token)
        localStorage.setItem('TOKEN', response.data.token)
        redireccionLogin()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (!localStorage.TOKEN) {
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button type="submit">Enviar</button>
        </form>
        <p>{token}</p>
      </div>
    );
  }
  else {
    return <Redirect to='/MiEquipo' />
  }
};

export default FormularioSuscripcion