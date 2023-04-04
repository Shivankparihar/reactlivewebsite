import React, { useState } from "react";


const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    gmail: "",
    phone: "",
    date: "",
    time: "",
    state: "",
    city: "",
    numperson: "",
    carname: "",
  });

  const InputEvent = (event) => {
    
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    }
    )
  }

  

  const formSubmit = (ev) => {
    ev.preventDefault()
    alert(`
         my name is ${data.fullname} , my phone number is${data.phone}  ,
          my mailid is${data.gmail}  ,my carname is ${data.carname}  ,
          my date is ${data.date}  ,my time is ${data.time}  ,
          my city is ${data.city}  , my state is ${data.state}  ,
           my personnumer is ${data.numperson}  ,
  `)
  
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-md-4">
            <form action="" onSubmit={formSubmit}>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"

                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}

                  placeholder="Enter your full name" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="gmail" className="form-control" id="exampleFormControlInput1"
                  name="gmail"
                  value={data.gmail}
                  onChange={InputEvent}
                  placeholder="Enter your Email" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Car Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name="carname"
                  value={data.carname}
                  onChange={InputEvent}
                  placeholder="Enter Car Name" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Booking Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1"
                  name="date"
                  value={data.date}
                  onChange={InputEvent}
                  placeholder="Enter Date" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Booking Time</label>
                <input type="time" className="form-control" id="exampleFormControlInput1"
                  name="time"
                  value={data.time}
                  onChange={InputEvent}
                  placeholder="Enter Time" required />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Number Of Persons</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"
                  name="numperson"
                  value={data.numperson}
                  onChange={InputEvent}
                  placeholder="Enter Number Of Persons" required />
              </div>

              <div className="col-md-6">
                <label for="validationCustom03" className="form-label">State</label>
                <input type="text" className="form-control" id="validationCustom03"


                  name="state"
                  value={data.state}
                  onChange={InputEvent}


                  required />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label for="validationCustom04" className="form-label">City</label>
                <select className="form-select" id="validationCustom04"


                  name="city"
                  value={data.city}
                  onChange={InputEvent}

                  required>
                  <option selected disabled value="">Choose...</option>
                  <option>Rewa</option>
                  <option>Sidhi</option>
                  <option>Satna</option>
                  <option>Jabalpur</option>
                  <option>Allahabad</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid city.
                </div>
              </div>


              <div className="col-12 my-4">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
             {/* <div className="col-12 mb-5 ">
                <button className="btn btn-danger" type="reset">reset form</button>
              </div> */}


            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact