import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const submitHandler = data => {
        console.log(data);
        if (data.password !== data.password_confirmation) {
            alert('Password and password confirmation do not match');
            return;
        }

        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => {
                if (response.ok) {
                    console.log('signup response:', response);
                    return response.json();
                }
            })
            .then(data => {
                console.log('signup data:', data);
                localStorage.setItem('token', data.jti);
                navigate('/');
            })
            .catch(error => console.log('signup handler error:', error));
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">Signup</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email', { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password', { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type='password' className="form-control" {...register('password_confirmation', { required: true })} />
                    {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}

export default Signup;