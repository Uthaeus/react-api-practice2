import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    // q: will my submitHandler function work?
    // a: no, it won't work because we are not sending the token back to the client
    //    we are only sending the token to the client when the user signs up
    //    we are not sending the token to the client when the user logs in

    // q: how do we get the token back to the client?
    // a: we need to send the token back to the client in the response to the login request
    // q: how do we do that?
    // a: we need to modify the backend code to send the token back to the client in the response to the login request
    // q: how do we do that?
    // a: we need to modify the backend code to send the token back to the client in the response to the login request
    // q: how would a rails developer do that?
    // a: a rails developer would modify the sessions controller to send the token back to the client in the response to the login request
    // q: how do we do that?
    // a: we need to modify the sessions controller to send the token back to the client in the response to the login request
    // q: how do we do that?
    // a: we need to modify the sessions controller to send the token back to the client in the response to the login request
    // q: 


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
                //navigate('/');
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