import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8D2] text-black px-8 py-12">
      <div className="max-w-[1500px] m-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="font-antic text-xl font-bold">A SAI CREATION</h2>
          <p className="font-roboto text-gray-500 mt-4">
            We are an Event Management Company dealing with events of all zones
            specializing in Corporate Events.
          </p>
        </div>
        <div>
          <h2 className="font-antic text-xl font-bold">SERVICES</h2>
          <ul className="font-roboto text-gray-500 mt-4 flex flex-col gap-2">
            <li>
              <Link to={"/corporateevents"}>Corporate Events</Link>
            </li>
            <li>
              <Link>Road Shows</Link>
            </li>
            <li>
              <Link>Mall Activities</Link>
            </li>
            <li>
              <Link to={"/weddings"}>Weddings</Link>
            </li>
            <li>
              <Link to={"/exhibitions"}>Exhibitions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-antic text-xl font-bold">USEFUL LINKS</h2>
          <ul className="font-roboto text-gray-500 mt-4 flex flex-col gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Our Work</Link>
            </li>
            <li>
              <Link to={"/clients"}>Our Clients</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-antic text-xl font-bold">CONTACT US</h2>
          <div className="font-roboto text-gray-500 mt-4 flex flex-col gap-2">
            <p>
              <span className="font-bold">Address: </span>2nd Floor, House
              No.34(A), Opp. Rajgarh Link Road, Guwahati-781007, Assam
            </p>
            <p>
              <span className="font-bold">Email: </span>saicreationsne@gmail.com
            </p>
            <p>
              <span className="font-bold">Phone: </span>+91 9707320781
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
