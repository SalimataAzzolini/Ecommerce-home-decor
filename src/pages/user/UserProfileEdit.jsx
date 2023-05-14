import React, {useContext, useEffect, useState} from 'react';
import { UserDatasContext } from "@/_contexts/userDatasContext";
import { accountService } from "@/_services/";
import "./style/user-profile-edit.scss";



const UserProfileEdit = () => {

  const { userDatas, setUserDatas } = useContext(UserDatasContext);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // console.log(userDatas);

  const onChange = (e) => {
    setUserDatas({...userDatas, [e.target.name]: e.target.value});
  }


  const onSubmit = (e) => {
    e.preventDefault();
    
    userDatas.password = password;
    fetch("http://127.0.0.1:8000/profile/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountService.getToken()}`,
      },
      body: JSON.stringify(userDatas),
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setMessage(data.message);
    })
    .catch((error) => console.log(error));

  }

    return ( 
        
      <div id="user-edit-form"> 
        {message && <div className="alert alert-success">{message}</div>}
        <form className="container-form" onSubmit={onSubmit} >
        <div className="brand-title"> INFOS</div>
        <div className="container-inputs">
          <input
            type="text"
            name="firstname"
            value={userDatas.firstname}
            onChange={onChange}
            className="input-user-edit"
          
          />
             <input
            type="text"
            name="lastname"
            value={userDatas.lastname}
            onChange={onChange}
            className="input-user-edit"
          />
          <input
            type="text"
            name="address"
            value={userDatas.address}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="number"
            name="zipcode"
            value={userDatas.zipcode}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="city"
            name="city"
            value={userDatas.city}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="email"
            name="email"
            value={userDatas.email}
            onChange={onChange}
            className="input-user-edit"
          />

          <h6 style={{marginTop : "10px"}}> Changer de mot de passe : </h6>

          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-user-edit"
          />
          <div className='div-btn-edit-user'>
            <button className='btn-user-edit'>Enregistrer</button>
            </div>
        </div>

        </form>

{/* <div class="form_wrapper">
            <div class="form_container">
        <div class="title_container">
        <h2>Responsive Registration Form</h2>
        </div>
        <div class="row clearfix">
        <div class="">
            <form>
            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Password" required />
            </div>
            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Re-type Password" required />
            </div>
            <div class="row clearfix">
                <div class="col_half">
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="First Name" />
                </div>
                </div>
                <div class="col_half">
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="Last Name" required />
                </div>
                </div>
            </div>
        
                
                <div class="input_field checkbox_option">
                    <input type="checkbox" id="cb1"/>
                    <label for="cb1">I agree with terms and conditions</label>
                </div>
                <div class="input_field checkbox_option">
                    <input type="checkbox" id="cb2"/>
                    <label for="cb2">I want to receive the newsletter</label>
                </div>
            <input class="button" type="submit" value="Register" />
            </form>
      </div>
    </div>
  </div>
        </div> */}

      </div>
    );
}


export default UserProfileEdit;