import React from 'react';
import { Button } from 'react-bootstrap';

export default function StudentProfile() {
  const data = {
    fname: 'Sam',
    lname: 'Dio',
    email: 'sam@gmail.com',
    age: 25,
    gender: 'Male',
    mobile: 9988776655,
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
  };
  
  return (
    <div>
      <div className='container mb-4'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 mt-5'>
            <div class='shadow-lg p-4 rounded'>
              <p className='mb-3 fs-2'>Profile</p>
              <div className='row'></div>
              <div class='shadow-lg p-4 rounded '>
                <div class='col-lg-12'>
                  <div class='card mb-2'>
                    <div class='card-body'>
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>
                            Full Name
                          </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>
                            {data.fname}{' '}
                            {data.lname}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Email</p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>
                            {data.email}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Mobile</p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>
                            {data.mobile}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className='row p-3 mt-4 col-sm-5 offset-sm-3'>
                        <Button>Update Profile</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}