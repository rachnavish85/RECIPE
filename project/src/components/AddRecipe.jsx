import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Swal from 'sweetalert2'
// const addRecipeScema =Yup.object.shape({});

const AddRecipe = () => {

    const navigate = useNavigate()
    
    const [selFile, setSelFile] = useState('');

    const recipeFrom = useFormik({
        initialValues: {
            title: "",
            category: "",
            ingredients: "",
            method: "",
            image: ""
        },
        onSubmit: async (values, action) => {
            values.image = selFile
            console.log(values);
            const res = await fetch('https://localhost:5000/recipe/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Recipe Added Successfully!'
                })

                // reset the form values after a successfull submission
                navigate('/Browse');
            } else if (res.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Credentials!',
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
    const uploadfile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('https://localhost: 5000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status)

    }
    return (
        <section
            className='pt-5 pb-5 mt-0 align-items-center d-flex bg-dark'
            style={{
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundImage: ""
            }}>

            <div className='container-fluid'>
                <div className='row justifycontent-center align-items-center d-flex-row text-center h-100'>
                    <div className='col12 col-md-4 col-lg-3 h-50 w-auto'>
                        <div className='card-shadow'>
                            <div className='card-body max-auto w-100'>
                                <h4 className='card-title mt-1 mb-4 text-center fw-bold fs-2'>Add Recipe</h4>
                                <form className='' onSubmit={recipeFrom.handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='title' className='form-label fw-bold fs-5'>
                                            Food title
                                        </label>
                                        <input
                                            placeholder='Recipe Name'
                                            type='text'
                                            className='form-control w-100'
                                            id='title'
                                             onChange={recipeFrom.handleChange} value={recipeFrom.values.title}
                                            required=''
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='title' className='form-label fw-bold fs-5'>
                                            Category
                                        </label>
                                        <input
                                            placeholder='Veg - Non-veg vegan'
                                            type='text'
                                            className='form-control w-100'
                                            id='category'
                                             onChange={recipeFrom.handleChange} value={recipeFrom.values.category}
                                            required=''
                                        />

                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='title' className='form-label fw-bold fs-5'>
                                            Ingredients
                                        </label>
                                        <input
                                            placeholder='onions, tomato and so on'
                                            className='form-control'
                                            
                                            id='ingredients'
                                            onChange={recipeFrom.handleChange} value={recipeFrom.values.ingredients}
                                            required=''
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='title' className='form-label fw-bold fs-5'>
                                            Mehtod
                                        </label>
                                        <textarea
                                            placeholder='process.....'
                                            className='form-control'
                                            id='method'
                                             onChange={recipeFrom.handleChange} value={recipeFrom.values.method}
                                            rows={6}
                                            required=''
                                            defaultValue={""}
                                        />

                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='title' className='form-label fw-bold fs-5'>
                                            Upload Photo
                                        </label>
                                        <input
                                            type="file"
                                            className='form-control w-100'
                                            id='image'
                                            name='image'
                                            onChange={uploadfile}
                                            required=''
                                        />

                                    </div>
                                    <button type='submit' className='btn btn-dark'>Submit</button>
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
