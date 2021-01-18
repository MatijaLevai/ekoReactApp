import React from 'react';
import * as Yup from "yup";
import { Paper,withStyles } from '@material-ui/core';
import OrderForm from './OrderForm'

const styles = theme => ({
    root: {
        width: 'auto',
        height: 'auto',
        padding: theme.spacing(2),
        paddingRight: theme.spacing(6),
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: 0,
            paddingRight: 0,
        }
    }
       
});

const OrderCreate = props => {
    const {    classes} = props;


    const handleSubmit = async data => {
        console.log(data)
       };



    let initialValues = {Email:"",paymentTypeID:"1",deliveryTypeID:"1",EndAddress:"",EndPhone:"", StartName: "" ,EndName : '',StartPhone:"", StartAddress:""};
    let formSettings = {
        Validation: {
            
            paymentTypeID:Yup.string().required("Required"),
            deliveryTypeID:Yup.string().required("Required"),
            EndAddress:Yup.string().required("Required"),
            EndPhone:Yup.string().required("Required"), 
            StartName: Yup.string().required("Required"),
            EndName :Yup.string().required("Required"),
            StartPhone:Yup.string().required("Required"),
            StartAddress:Yup.string().required("Required"),
            Email:Yup.string().email().required("Required")
  
        },
        FormTitle: 'Order delivery',
        ButtonSubmit: {
            Color: 'primary'
        }
    };
    return (
        <Paper style={{padding: '100px' , margin: 10}}  >
            <OrderForm
                formSettings={formSettings}
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                translations={{}}
            ></OrderForm>
        </Paper>
    )
}

  
  export default OrderCreate;