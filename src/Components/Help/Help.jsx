import React from "react";
import "./Help.css";

export const Help = () => {
  return (
    <div className="HelpMain">
      <div className="HelpContainer">
        <div className="HelpBar1">
          <form action="submit" className="HelpForm">
            <h2>Name</h2>
            <label htmlFor="calendar-">First Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="calendar-">Last Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="calendar-">Phone Number</label>
            <input type="text" name="" id="" />
            <label htmlFor="calendar-">Email</label>
            <input type="text" name="" id="" />
            <textarea name="" id="text" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className="HelpBar2">
          <div>
            <h1>Studio address & contact</h1>
          </div>
          <div>
            <h2>
              6 Akpoguma Street,By Kilo Bus-Stop Masha/Kilo Surulere 100011,
              Lagos , Nigeria.
            </h2>
          </div>
          <section className="HelpSection">
            <h2>Studio hours</h2>
            <p>Mon: Closed</p>
            <p>Tue: 9:00 AM - 9:00 PM</p>
            <p>Wed: 9:00 AM - 9:00 PM</p>
            <p>Thus: 9:00 AM - 9:00 PM</p>
            <p>Fri: 9:00 AM - 9:00 PM</p>
            <p>Sat: 9:00 AM - 9:00 PM</p>
            <p>Sun: 1:00 PM - 9:00 PM</p>
          </section>
        </div>
      </div>
    </div>
  );
};
