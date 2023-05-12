import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import UserContext from "../store/user-context";

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();


    const submitHandler = data => {
        console.log(data);
        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };


        fetch('http://localhost:4000/users/sign_in', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('successful login');
                    let token = response.headers.get('Authorization').split(' ')[1];
                    localStorage.setItem('token', token);
                    //navigate('/');
                    return response.json();
                }
            })
            .then(data => {
                console.log('login user data:', data.status.data);
                userCtx.login(data.status.data);
                navigate('/');
            })
            .catch(error => console.log('login handler error:', error));
    };
    
    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email', { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password', { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;