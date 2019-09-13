import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class CreateProject extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('Title is required'),
                    content: Yup.string()
                        .required('Content is required'),
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <Field name="content" type="text" className={'form-control' + (errors.content && touched.content ? ' is-invalid' : '')} />
                            <ErrorMessage name="content" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Enter</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default CreateProject