import React, { useEffect } from 'react'
// import Layout from './Layout'
import FormEditUser from '../../components/Dash/FormEditUser'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate.push("/Login");
    }
  }, [isError, navigate]);

  return (
      <FormEditUser/>
  )
}

export default EditUser