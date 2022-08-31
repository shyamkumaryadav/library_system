import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import { useEffect, useState } from 'react';

export type BookType = {
  uid: string;
  name: string;
  author: string;
  publisher: string;
  genre: string;
  price: number;
};
interface Props {
  onSubmit: (
    value: BookType,
    formikHelpers: FormikHelpers<BookType>
  ) => Promise<any>;
}

const initialValues = {
  uid: '',
  name: '',
  author: '',
  publisher: '',
  genre: '',
  price: 0,
};

const validate = (values: BookType) => {
  const errors: FormikErrors<BookType> = {};
  if (!values.uid) {
    errors.uid = 'required';
  } else if (values.uid.split(' ').length !== 1) {
    errors.uid = 'Enter a valid uid';
  }

  if (!values.name.trim()) {
    errors.name = 'required';
  }

  if (!values.author.trim()) {
    errors.author = 'required';
  }

  if (!values.publisher.trim()) {
    errors.publisher = 'required';
  }

  if (!values.genre.trim()) {
    errors.genre = 'required';
  }

  if (!values.price) {
    errors.price = 'required';
  } else if (!(values.price > 49 && values.price < 100000)) {
    errors.price = 'Please enter the valid value';
  }

  return errors;
};

const Book = ({ onSubmit }: Props) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const abc = error ? setTimeout(() => setError(''), 2500) : null;

    return () => {
      if (abc) clearTimeout(abc);
    };
  }, [error]);

  const formik = useFormik<BookType>({
    initialValues,
    onSubmit: (values, helper) => {
      return onSubmit(values, helper).then((res) => {
        setError('Book Add');
        return res;
      });
    },
    validate,
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
    isSubmitting,
  } = formik;
  return (
    <div className="col">
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary m-1"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          add Book +
        </button>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Book
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => resetForm()}
              />
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="modal-body needs-validation">
                {error && (
                  <div
                    className="alert alert-info alert-dismissible fade show m-2"
                    role="alert"
                  >
                    {error}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setError('')}
                    />
                  </div>
                )}
                <div className="row mb-3">
                  <label htmlFor="uid" className="col-form-label">
                    uid:
                    <input
                      type="text"
                      className={`form-control${
                        touched.uid && errors.uid ? ' is-invalid' : ''
                      }`}
                      name="uid"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.uid}
                    />
                    <div className="invalid-feedback">{errors.uid}</div>
                  </label>
                  <label htmlFor="name" className="col-form-label">
                    name:
                    <input
                      type="text"
                      className={`form-control${
                        touched.name && errors.name ? ' is-invalid' : ''
                      }`}
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </label>
                  <label htmlFor="author" className="col-form-label col-6">
                    Author:
                    <input
                      type="text"
                      className={`form-control${
                        touched.author && errors.author ? ' is-invalid' : ''
                      }`}
                      name="author"
                      onChange={handleChange}
                      value={values.author}
                      onBlur={handleBlur}
                    />
                    <div className="invalid-feedback">{errors.author}</div>
                  </label>
                  <label htmlFor="publisher" className="col-form-label col-6">
                    Publisher:
                    <input
                      type="text"
                      className={`form-control${
                        touched.publisher && errors.publisher
                          ? ' is-invalid'
                          : ''
                      }`}
                      name="publisher"
                      onChange={handleChange}
                      value={values.publisher}
                      onBlur={handleBlur}
                    />
                    <div className="invalid-feedback">{errors.publisher}</div>
                  </label>
                  <label htmlFor="genre" className="col-form-label col-6">
                    Genre:
                    <input
                      type="text"
                      className={`form-control${
                        touched.genre && errors.genre ? ' is-invalid' : ''
                      }`}
                      name="genre"
                      onChange={handleChange}
                      value={values.genre}
                      onBlur={handleBlur}
                    />
                    <div className="invalid-feedback">{errors.genre}</div>
                  </label>
                  <label htmlFor="price" className="col-form-label col-6">
                    Price:
                    <input
                      type="number"
                      min={50}
                      className={`form-control${
                        touched.price && errors.price ? ' is-invalid' : ''
                      }`}
                      name="price"
                      onChange={handleChange}
                      value={values.price}
                      onBlur={handleBlur}
                    />
                    <div className="invalid-feedback">{errors.price}</div>
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => resetForm()}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Submit{formik.isSubmitting && 'ting...'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
