import React from "react";
import { Formik } from "formik";
import {
    TextField,
    withStyles,
    Button,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    CircularProgress,
    Select
} from "@material-ui/core";
import * as Yup from "yup";
import {Send} from '@material-ui/icons';
const classes = theme => ({
    root: {
        width: "auto",
        height: "auto",

    },
    rootEdit: {
        flexGrow: 1,
    },
    submit: {
        textTransform: 'none',
        width: "120px",
        marginTop: "10px"
    },
    submitEdit: {
        textTransform: 'none',

        width: "100%",
    },
    cancel: {
        width: "120px",
        marginTop: "10px",
        marginRight: "10px",
    },
    formControl: {
        width: "100%"
    },
    formControlInfo: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row'

    },
    namespace: {
        width: "98%"
    },
    input: {
        display: 'none'
    },
    buttons: {
        textAlign: "right"
    },
    info: {
        position: 'relative',
        marginTop: "38px",
        marginLeft: "15px"
    },
    infoControl: {
        position: 'relative',
        marginTop: "38px",
        marginLeft: "15px"
    },
    imgDiv: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        maxWidth: window.innerWidth - 100,
        maxHeight: window.innerHeight - 100
    },

    buttonChoose: {
        marginTop: 20,
        width: '100%'
    }
});


const OrderForm = props => {
    const {  formSettings, initialValues, loading, handleSubmit, translations, handleNext, handleUpload, backValid, backendError, setBackendError } = props;
    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={async (values, { setSubmitting }) => {

                    setSubmitting(true);
                    await handleSubmit(values);

                    setSubmitting(false);

                }}
                validationSchema={Yup.object().shape(formSettings.Validation)}
            >

                {formikProps => {
                    const { values, touched, errors, isValid, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = formikProps;

                    return (
                        <form onSubmit={handleSubmit}>
                            <Typography variant={"h6"}>{formSettings.FormTitle ? formSettings.FormTitle : null}</Typography>
                            <TextField
                                name="Email"
                                value={values.Email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.Email && touched.Email)}
                                placeholder={"sender@eko.com"}
                                label={"Delivery confirmation email"}
                                margin={"dense"}
                                fullWidth={true}
                            />
                            <TextField
                                name="StartName"
                                value={values.StartName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.StartName && touched.StartName)}
                                placeholder={"Name of sender"}
                                label={"Name of sender"}
                                margin={"dense"}
                                fullWidth={true}
                            />
                            <TextField
                                    name="StartPhone"
                                    value={values.StartPhone}
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                    disabled={props.edit}
                                    error={!!(errors.StartPhone && touched.StartPhone)}
                                    placeholder={"0623333121"}
                                    label={"Phone Number of sender"}
                                    margin={"dense"}
                                    fullWidth={true}
                                />
                            <TextField
                                name="StartAddress"
                                value={values.StartAddress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.StartAddress && touched.StartAddress)}
                                placeholder={"Bulevar Mihajla Pupina 32/stan 33/sprat 4"}
                                label={"Street Address of sender"}
                                margin={"dense"}
                                fullWidth={true}
                            />

                            <TextField
                                name="EndName"
                                value={values.EndName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.EndName && touched.EndName)}
                                placeholder={"Name of reciver"}
                                label={"Name of reciver"}
                                margin={"dense"}
                                fullWidth={true}
                            />

                            <TextField
                                name="EndPhone"
                                value={values.EndPhone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.EndPhone && touched.EndPhone)}
                                placeholder={"066773342"}
                                label={"Phone number of reciver"}
                                margin={"dense"}
                                fullWidth={true}
                            />

                            <TextField
                                name="EndAddress"
                                value={values.EndAddress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.EndAddress && touched.EndAddress)}
                                label={"Street address of reciver"}
                                placeholder={"Kisačka 25/stan 32/sprat 3"}
                                margin={"dense"}
                                fullWidth={true}
                            />

                            <FormControl className={classes.formControl} margin={"dense"}>
                                <InputLabel shrink>{"Please select delivery type"}</InputLabel>
                                <Select
                                    name="deliveryTypeID"
                                    label={"Type of delivery"}
                                    margin={"dense"}
                                    value={values.deliveryTypeID}
                                    onChange={handleChange}
                                >
                                    <MenuItem key={'key0'} value={'1'}>
                                        {`Regular`}
                                    </MenuItem>
                                    <MenuItem key={'key1'} value={'2'}>
                                        {'Returnshiping'}
                                    </MenuItem>
                                    <MenuItem key={'key2'} value={'3'}>
                                        {`Shoping`}
                                    </MenuItem>
                                    <MenuItem key={'key3'} value={'4'}>
                                        {'Post'}
                                    </MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl} margin={"dense"}>
                                <InputLabel shrink>{"Please select payment type"}</InputLabel>
                                <Select
                                    name="paymentTypeID"
                                    label={"Payment Type of delivery"}
                                    margin={"dense"}
                                    value={values.deliveryTypeID}
                                    onChange={handleChange}
                                >
                                    <MenuItem key={'key0'} value={'1'}>
                                        {`Cash`}
                                    </MenuItem>
                                    <MenuItem key={'key1'} value={'2'}>
                                        {'Bank'}
                                    </MenuItem>
                                    <MenuItem key={'key2'} value={'3'}>
                                        {'Cupon'}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                name="Description"
                                value={values.Description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!(errors.Description && touched.Description)}
                                label={"Description"}
                                placeholder={"Bara Bara"}
                                margin={"dense"}
                                fullWidth={true}
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                variant="outlined"
                            />

                            <div className={classes.buttons}>
                                {formSettings.ButtonCancel ? (
                                    <Button
                                        className={classes.cancel}
                                        variant="contained"
                                        color={formSettings.ButtonCancel.Color}
                                        onClick={formSettings.ButtonCancel.handleCancel}
                                        disabled={loading}
                                    >
                                        {formSettings.ButtonCancel.Title}
                                    </Button>
                                ) : null
                                }
                                {formSettings.ButtonSubmit ? (
                                    <Button
                                        className={props.edit ? classes.submitEdit : classes.submit}
                                        variant="contained"
                                        color={formSettings.ButtonSubmit.Color}
                                        type="submit"
                                        disabled={!(isValid && dirty) || isSubmitting}
                                        endIcon={<Send></Send>}
                                    >
                                        {loading || isSubmitting ? <CircularProgress size={24} /> : formSettings.ButtonSubmit.Title}
                                    </Button>
                                ) : null}
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default withStyles(classes, { withTheme: true })(OrderForm);