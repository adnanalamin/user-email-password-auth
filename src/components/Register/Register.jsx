

const Register = () => {
    const handelRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email,password)

    }
    return (
        <div>
            <div className="mx-auto w-1/2">
            <h2 className="text-3xl mb-8 uppercase font-bold text-center font-mono">Please Register</h2>
            <form onSubmit={handelRegister}>
                <input className="w-3/4 mb-4 py-2 px-4 bg-slate-300 rounded-md text-white" type="email" name="email" id="" placeholder="Email Address" />
                <br />
                <input className="w-3/4 mb-4 py-2 px-4 bg-slate-300 rounded-md text-white" type="password" name="password" placeholder="Password" id="" />
                <br />
                <input className="btn btn-secondary w-3/4 mb-4 py-2 px-4" type="submit" value="register" />
            </form>
            </div>
        </div>
    );
};

export default Register;