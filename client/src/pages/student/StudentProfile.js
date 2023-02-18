import React from 'react';
import { Button } from 'react-bootstrap';

export default function StudentProfile() {
  const data = {
    fname: 'Sam',
    lname: 'Dio',
    email: 'sam@gmail.com',
    mobile: 9988776655,
  };

  return (
    <div>
      <div className='container mb-4'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 mt-5'>
            <div className='shadow-lg p-4 rounded'>
              <p className='mb-3 fs-2'>Profile</p>
              <div className='row'></div>
              <div className='shadow-lg p-4 rounded '>
                <div className='col-lg-12'>
                  <div className='card mb-2'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <p className='mb-0'>
                            Full Name
                          </p>
                        </div>
                        <div className='col-sm-9'>
                          <p className='text-muted mb-0'>
                            {data.fname}{' '}
                            {data.lname}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <p className='mb-0'>Email</p>
                        </div>
                        <div className='col-sm-9'>
                          <p className='text-muted mb-0'>
                            {data.email}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <p className='mb-0'>Mobile</p>
                        </div>
                        <div className='col-sm-9'>
                          <p className='text-muted mb-0'>
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