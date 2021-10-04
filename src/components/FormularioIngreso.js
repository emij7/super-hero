import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';
import UsuarioContext from '../context/UsuarioContext';
import validacionUsuario from './validacionUsuario'

const URL = 'http://challenge-react.alkemy.org/'

const validate = values => {
  /*
  Validamos que el campo no esté vacío ni contenga una dirección de correo erronea.
  */
  const errors = {};  //Manejar errores en los input

  if (!values.email) {
    errors.email = 'Campo obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de e-mail inválida';
  }
  if (!values.password) {
    errors.password = 'Campo obligatorio';
  }
  return errors;
};



const FormularioIngreso = () => {

  const [alert, setalert] = useState(false) //Estados para mostrar alerta
  const { setUsuario } = useContext(UsuarioContext) //Trae los valores de setState declarados en usuario context para poder cambiar un valor de forma global

  let history = useHistory() //Usehistory utilizado para redireccionar en caso de login aceptado.

  const redireccionLogin = () => history.push('/MiEquipo')

  const peticion = (mail, pass) => {
    //Llamado api para validar usuario y contraseña
    axios.post(URL, {
      email: mail,
      password: pass
    })
      .then(function (response) {
        setUsuario(mail)
        validacionUsuario(mail)
        localStorage.setItem('TOKEN', response.data.token)
        redireccionLogin() //Login aceptado
      })
      .catch(function (error) {
        console.log(error);
        setalert(true)
      });
  }

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

  if (!localStorage.TOKEN) {
    return (
      <div className='d-flex align-items-center flex-column'>
        <form onSubmit={formik.handleSubmit} className='w-75 d-flex flex-column'>
          <label htmlFor="email">Direccion de e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onClick={() => setalert(false)}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-danger fw-bold'>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onClick={() => setalert(false)}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='text-danger fw-bold'>{formik.errors.password}</div>
          ) : null}

          <button className='m-2 w-50 mx-auto btn btn-outline-success' type="submit">Enviar</button>
        </form>
        {alert ?    //En caso de que haya error en la petición se muestra un alerta
          <Alert />
          : null}
      </div>
    );
  }
  else {
    return <Redirect to='/MiEquipo' />
  }
};

export default FormularioIngreso