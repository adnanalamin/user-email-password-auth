import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    if(password.length < 6){
        setRegisterError('Password should be at least 6 characters')
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setRegisterError('Password should be a uppercase charecters')
        return;
    }
    else if(!accepted){
        setRegisterError('Please acceprd our terms and conditions')
        return;
    }
    console.log(email, password,accepted);
    setRegisterError("");
    setSucess("");

    

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucess("User create sucees");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="mx-auto w-1/2">
        <h2 className="text-3xl mb-8 uppercase font-bold text-center font-mono">
          Please Register
        </h2>
        <form onSubmit={handelRegister}>
          <input
            className="w-full mb-4 py-2 px-4 bg-slate-300 rounded-md text-white"
            type="email"
            name="email"
            id="1"
            placeholder="Email Address"
            required
          />
          <br />
        <div className="mb-4 relative">
        <input
            className="w-full  py-2 px-4 bg-slate-300 rounded-md text-white"
            type={showPassword ? "text":"password"}
            name="password"
            placeholder="Password"
            id="2"
            required
          />
          <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
            {
                showPassword ?  <IoIosEyeOff></IoIosEyeOff> : <IoIosEye></IoIosEye>
            }
          </span>
        </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">Accept Our <a href=""> turms and conditions</a></label>
          </div>
          <br />
          <input
            className="btn btn-secondary w-full mb-4 py-2 px-4"
            type="submit"
            value="register"
          />
        </form>
        {registerError && <p className="text-red-600">{registerError}</p>}
        {sucess && <p className="text-green-600">{sucess}</p>}
      </div>
    </div>
  );
};

export default Register;
