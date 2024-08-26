import React, {useState} from "react";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name] : value,
        }));
    }

    const validate = () => {
        let tempErrors = {};
        if(!formData.firstname) tempErrors.firstname = "First name is required.";
        if(!formData.lastname) tempErrors.lastname = "Last name is required.";
        if(!formData.email) tempErrors.email = "Email is required.";
        if(!formData.password) tempErrors.password = "Password is required.";
        if(!formData.confirmPassword) tempErrors.confirmPassword = "Confirm Password is required.";
    
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate()){
            console.log("Registration Successfull...!", formData);
            alert("Registration successfull..!", formData);

            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            setErrors({});
        }
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Enter first name : 
                        <input type="text" name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div> 
                <div>
                    <label> Enter last name : 
                        <input type="text" name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                        />    
                    </label>
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div>
                    <label> Enter email : 
                        <input type="email" name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label> Enter password : 
                        <input type="password" name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label> Enter confirmPassword :
                        <input type="password" name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm;