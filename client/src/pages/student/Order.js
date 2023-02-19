import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from "../../components/student/Dropdown";

export default function Order() {
  const data = {
    title: "Introduction of C",
    level: "Its for beginners",
    discription: "C is a general-purpose programming language.",
    orders: "1",
    price: "100",
    img: "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header-1024x576.jpg",
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <div class="shadow-lg p-3 rounded">
              <p className="mb-3">Your Order</p>
              <div className="row mb-3">
                <div className="col-md-4">
                  <img src={data.img} alt={data.title} className="img-thumbnail" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>{data.title}</h5>
                    <h6 className="mb-2 text-muted">{data.level}</h6>
                    <p>{data.discription}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p>No. of courses purchasing</p>
                <p>{data.orders}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total Payable :</p>
                <p>Rs.{data.price}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p>Payment Methods:</p>
                <Dropdown />
              </div>
              <div className="d-grid">
                <Button variant="info">Pay</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}