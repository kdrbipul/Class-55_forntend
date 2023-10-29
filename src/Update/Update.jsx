import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const storedUser = useLoaderData()

    const handleUpdateUser = (e) => {
        e.preventDefault();
    }
    const handleOnBlur = (e) =>{
        e.preventDefault();
        const field = e.target.name;
        // console.log(field);
        const value = e.target.value;
        // console.log(value);
        const newUser = {...user};
        newUser [field] = value;
        setUser(newUser)
    }
    return (
        <div>
            <h1>update {storedUser.name} information</h1>
            <form onSubmit={handleUpdateUser} className='bg-warning m-5 p-5 rounded-2'>
            <div className="mb-3 text-start">
                <label  className="form-label">Name</label>
                <input onBlur={handleOnBlur} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={storedUser.name} required />
            </div>
            <div className="mb-3 text-start">
                <label  className="form-label">Email</label>
                <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="exampleInputPassword1" defaultValue={storedUser.email} required />
            </div>
            
            <button type="submit" className="btn btn-success">Update User</button>
        </form>
            
        </div>
    );
};

export default Update;