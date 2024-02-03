import React, { useState } from 'react'
import { useFormik } from 'formik';
import {useNavigate} from "react-router"
import Swal from "sweetalert2";

const AddRecipe = () => {
    const navigate = useNavigate();
    const [setImage, setSetImage] = useState('');

    const recipeForm = useFormik({
        initialValues: {
            title: "",
            category: "",
            ingredients: "",
            method: "",
            image: ""
        },

        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            values.image = setImage;
            const res = await fetch('http://localhost:5000/recipe/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Recipe Added Successfully!'
                })

                // Reset the form values after a successful submission
                navigate('/Browse')
            } else if (res.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: "Invalid Credentials!",
                    text: 'Plz Try Again'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            }


        },
    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSetImage(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        });

        console.log(res.status);
    };

    return (
        <section
            className="recipe"
            >
            <div className="container-fluid">
                <div className=" recipe-card ">
                    <div className="col-12 col-md-4 col-lg-3 h-50 w-auto">
                        <div className="card shadow">
                            <div className="recipe-card-body mx-auto w-100">
                                <h4 className="card-title mt-1 mb-4 text-center fw-bold fs-2">Add Recipe</h4>
                                <form className='' onSubmit={recipeForm.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-bold fs-5">
                                            <h4 className='addrecipe-h4'>Food Title</h4>
                                        </label>
                                        <input
                                            placeholder='Recipe Name'
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name='title' onChange={recipeForm.handleChange} value={recipeForm.values.title}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label fw-bold fs-5">
                                        <h4 className='addrecipe-h4'>Category</h4>
                                        </label>
                                        <input
                                            placeholder='Veg - Non-Veg - Vegan'
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name='category' onChange={recipeForm.handleChange} value={recipeForm.values.category}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ingredients" className="form-label fw-bold fs-5">
                                        <h4 className='addrecipe-h4'> Ingredients</h4>
                                        </label>
                                        <textarea
                                            placeholder='Ingredients'
                                            className="form-control"
                                            id="ingredients"
                                            name="ingredients" onChange={recipeForm.handleChange} value={recipeForm.values.ingredients}
                                            rows={4}
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="method" className="form-label fw-bold fs-5">
                                        <h4 className='addrecipe-h4'>Method</h4>
                                        </label>
                                        <textarea
                                            placeholder='Process...'
                                            className="form-control"
                                            id="method"
                                            name='method' onChange={recipeForm.handleChange} value={recipeForm.values.method}
                                            rows={6}
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="title" className="form-label fw-bold fs-5">
                                        <h4 className='addrecipe-h4'> Upload Photo</h4>
                                        </label>
                                        <input
                                            type="file"
                                            className=" upload form-control"
                                            id="image"
                                            name='image'
                                            onChange={uploadFile}
                                            required=""
                                        />
                                    </div>
                                    <button type="submit" className="addrecipe-h4 btn btn-light">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AddRecipe