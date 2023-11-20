import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    release_date: Yup.number().required("Release Date is required"),
    movieURL: Yup.string().url("Enter a valid URL"),
    rating: Yup.number()
      .min(1, "Rating must be at least 1")
      .max(10, "Rating must be at most 10"),
  });

  return (
    <Formik
      initialValues={{
        title: initialMovieInfo?.title || "",
        release_date: initialMovieInfo?.release_date || "",
        movieURL: initialMovieInfo?.movieURL || "",
        rating: initialMovieInfo?.rating || "",
        genre: initialMovieInfo?.genre || "",
        runtime: initialMovieInfo?.runtime || "",
        overview: initialMovieInfo?.overview || "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        (/* { values, handleChange, handleSubmit } */) => (
          <Form className="movie-form">
            <div>
              <label htmlFor="title">Title:</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="release_date">Release Date:</label>
              <Field type="text" id="release_date" name="release_date" />
              <ErrorMessage name="release_date" component="div" />
            </div>
            <div>
              <label htmlFor="movieURL">Movie URL:</label>
              <Field type="text" id="movieURL" name="movieURL" />
              <ErrorMessage name="movieURL" component="div" />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <Field type="text" id="rating" name="rating" />
              <ErrorMessage name="rating" component="div" />
            </div>
            <div>
              <label htmlFor="genre">Genre:</label>
              <Field type="text" id="genre" name="genre" />
              <ErrorMessage name="genre" component="div" />
            </div>
            <div>
              <label htmlFor="runtime">Runtime:</label>
              <Field type="text" id="runtime" name="runtime" />
              <ErrorMessage name="runtime" component="div" />
            </div>
            <div>
              <label htmlFor="overview">Overview:</label>
              <Field type="text" id="overview" name="overview" />
              <ErrorMessage name="overview" component="div" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  );
};

export default MovieForm;
