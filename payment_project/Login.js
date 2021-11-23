import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

function Login()
{
    return(
        <Fragment> 
        <section>
            <form>
            <div className="logindetails">
                <h1 className="large-text"> Sign In </h1>
                <div className="form">

                    <input type="email" placeholder="enter your email" name="email" required/>
                    <input type="password" placeholder="password please" name="password"/>

                </div>
                </div> 
                <input type="submit" className="btn-submit" value="Login"/>
                <Link to ="Home"> submit</Link>
                </form>
                <p>
                    Don't have an account? <Link to="/register" > Sign Up!</Link> 
                </p>         
        </section>
        </Fragment>
    )
}
export default Login