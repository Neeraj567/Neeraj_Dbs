import React,{ Fragment} from 'react';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <Fragment>

        
        <section className="Register1">
            <h1> Sign Up </h1>

            <div class="form">
            <input type="text" placeholder="Name Please" required />
            <input type="email" placeholder="Enter your email" required/>
            <input type="password" placeholder="enter password" minLength="8"/>
            
            </div>

         <input type="submit" className="btn-submit" value="Register" />

        </section>

        <p className= "details">
            Already have an account? <Link to="/login" > Sign in </Link>
        </p>
        </Fragment>
    )
}
