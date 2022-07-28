import { useFormik } from "formik";
import * as Yup from 'yup';
import {Md5} from "md5-typescript";
import React, { useEffect, useState } from 'react'
import { control } from './Util'
import { profileUpdate } from "./Service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "./useRedux/Store";
import { Helmet } from "react-helmet";

function Profile() {
  
  const noteArr = useSelector( ( item: StateType ) => item.noteReducer )

  const navigate = useNavigate()
  const user = control()
  const md5Url = Md5.init(user!.userEmail)
  const [sendForm, setSendForm] = useState(false)

  const validationSchema = Yup.object({
    userName: Yup.string().required("Name Empty!").min(3, "Name Min 3 char"),
    userSurname: Yup.string().required("Surname Empty!"),
    userPhone: Yup.string().required("Phone Empty!").min(10, "Phone min 10"),
    userEmail: Yup.string().required("E-Mail Empty!").email("E-Mail Format Fail"),
    password: Yup.string().required("Password Empty!").min(3, "Password Min 3").max(10, "Password Max 10")
  })

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      userName: user?.userName,
      userSurname: user?.userSurname,
      userPhone: user?.userPhone,
      userEmail: user?.userEmail,
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      profileUpdate( 
        values.userName!,
        values.userSurname!, 
        values.userEmail!, 
        values.userPhone!, 
        values.password!,
        user?.userId!
      ).then( res => {
         const user = res.data.user[0]
         const durum = user.durum
         const message = user.mesaj
         if ( durum === true ) {
          toast.success( message + " Lütfen login olunuz!" )
          setTimeout(() => {
            sessionStorage.removeItem('user')
            localStorage.removeItem('user')
            navigate('/')
          }, 2000);
         }else {
          toast.error( message )
         }
      })
    }
  })
  

  return (
    <>
    <Helmet>
      <title>Profile Page</title>
      <meta name="description" content="Profile App" />
    </Helmet>
      { user &&
        <>
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
            <div className='mb-3 mt-3 text-center'>
              <img src={'https://www.gravatar.com/avatar/'+md5Url+'?s=150'} className="img-thumbnail" />
            </div>
            <div className="mb-3 text-center">
              Total Note: { noteArr.length }
            </div>

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input onChange={handleChange} name="userName"  className="form-control"  value={values.userName} placeholder="Name" />
              { (sendForm === true && errors.userName) && <div className="text-danger"> { errors.userName } </div>}
            </div>
            <div className="mb-3">
              <input onChange={handleChange} name="userSurname" className="form-control" value={values.userSurname} placeholder="Surname" />
              { (sendForm === true && errors.userSurname) && <div className="text-danger"> { errors.userSurname } </div>}
            </div>
            <div className="mb-3">
              <input type='tel' className="form-control" onChange={handleChange} name="userPhone"  value={values.userPhone} placeholder="Phone" />
              { (sendForm === true && errors.userPhone) && <div className="text-danger"> { errors.userPhone } </div>}
            </div>
            <div className="mb-3">
              <input type='email' className="form-control" onChange={handleChange} name="userEmail" value={values.userEmail} placeholder="E-Mail" />
              { (sendForm === true && errors.userEmail) && <div className="text-danger"> { errors.userEmail } </div>}
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" onChange={handleChange} name="password"  value={values.password} placeholder="Password" />
              { (sendForm === true && errors.password) && <div className="text-danger"> { errors.password } </div>}
            </div>
            <button type="submit" onClick={ (evt) => setSendForm(true) } className="btn btn-danger">Update</button>
            </form>

          </div>
          <div className='col-sm-4'></div>
        </div>

        </>
      }
    </>
  )
}

export default Profile