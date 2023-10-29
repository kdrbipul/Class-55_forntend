import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData()
    return (
        <>
        <div>
            <h1>this is a main part</h1>
        </div>

        <div className='container row'>
            {
                users.map(user=><div key={user._id} className='col-12 mx-auto col-sm-6 my-1 col-md-4 border border-warning rounded-2'>
                    <h3>Name : {user.name}</h3>
                    <h5>Email: {user.email}</h5>
                    <button className='btn btn-outline-warning mx-2 my-2'>Delete</button>
                    <Link to={`/update/${user._id}`}><button className='btn btn-outline-warning mx-2 my-2'>Update</button></Link>
                </div>
            )}
        </div>
        </>
        
    );
};

export default Home;