import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button, Alert } from 'react-bootstrap';
import { UpdatePasswordAPI } from '../utils/fetch/signupFetch';

const UserAccountManagement = () => {
  let user = JSON.parse(localStorage.getItem('user'))

  
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const newPass=document.getElementById('newPassword')
  const confirmPass=document.getElementById('confirmPassword')

const updatePassword = () =>
{
  if (newPass.value===''){
  
    alert("Please enter your new password.")
  
}
else if (newPass.value.length<8){
  
  alert("Your password must be 8 characters")

}
else if (newPass.value!==confirmPass.value){
  
  alert("Password not much")
}
else
{
UpdatePasswordAPI(email, newPass.value)
.then((results)=>results.json())
.then((results)=>
{
  alert(results.message)
  window.location.href='https://dlmrcc.github.io/build-test-2/#/homepage'
})
 .catch(error=>{
  console.log('error: ', error)
})
}
}


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleCancelChangePassword = () => {
    setShowChangePassword(false);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitPasswordChange = (event) => {
    event.preventDefault();
    // TODO: handle password change submission
  };

  return (
    <Container fluid="sm" className="mt-4 pt-0">
    <h4 className="text-center">Account Management</h4>
    <Row className="mt-3">
      <Col sm={{ span: 4, offset: 4 }} className="text-center">
        <Image src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" roundedCircle  style={{ width: '100px', height: '100px' }} />
        <h3 className="mt-2">{firstName} {lastName}</h3>
        <p>{email}</p>
      </Col>
    </Row>
    <Row className="mt-3 justify-content-center ">
      <Col xs={12} md={6} className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        {showChangePassword ? (
          <Form onSubmit={handleSubmitPasswordChange}>
          
            <Form.Group controlId="formBasicNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control id="newPassword" className="border-radius" type="password" placeholder="New Password" value={newPassword} onChange={handleNewPasswordChange} col={12} />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control id="confirmPassword" className="border-radius" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} col={12} />
            </Form.Group>
            <Button  className="btn btn-warning bg-gradient btn-sm btn-block border-radius mt-2"  variant="primary" type="submit" onClick={updatePassword}>
              Update Password
            </Button>
            <Button  className="btn btn-warning bg-gradient btn-sm btn-block border-radius ms-2 ml-2 mt-2"   variant="secondary" onClick={handleCancelChangePassword} >
              Cancel
            </Button>
          </Form>
        ) : (
          <Button variant="link" onClick={handleShowChangePassword}>
            Change Password
          </Button>
        )}
      </Col>
    </Row>
  </Container>
  
  );
};

export default UserAccountManagement;
