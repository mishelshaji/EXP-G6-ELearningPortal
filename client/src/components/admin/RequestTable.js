import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Axios from "../../services/axios";

function RequestTable() {
  const [error, setError] = useState('');
  const [courses, setCourses] = useState([]);
  const [updateData, setUpdateData] = useState(true);

  useEffect(() => {
    Axios.get('/admin/courses/inactive').then((courses) => {
      setCourses(courses.data);
    }).catch((error) => {
      if (error.response.status === 404) {
        setCourses([]);
        setError('No course found');
      }
    })
  }, [updateData])

  async function approveRequest(courseId) {
    const confirm = window.confirm(
      "Accept course?"
    )
    if (confirm === true) {
      try {
        const updateStatus = await Axios.put(`/admin/courses/status/${courseId}`, {
          status: 1
        })
        setUpdateData(!updateData);
        console.log(updateStatus);
      } catch (err) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <div className='content container mt-3'>
        <Button className='float-end' variant='white' onClick={() => setUpdateData(!updateData)}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </Button>
        <Table striped bordered hover size='sm'>
          <thead className='bg-dark text-white'>
            <tr>
              <td>Course id</td>
              <td>Course title</td>
              <td>Created on</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {courses.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{(i.createdAt).slice(0, 10)}</td>
                <td>
                  <Button variant='success' className='me-2' title="Approve" onClick={(e) => { approveRequest(i.id) }}>
                    <i className='fa-solid fa-check'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {error ? (
          <span className='d-block text-danger text-center'>
            {error}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default RequestTable