import React from "react";
import "../../App.css";

const MyAddressComponent = () => {
  return (
    <>
      <a href="https://www.facebook.com/ti.ay.5872/">
        <i className="fa-brands fa-facebook-f" />
      </a>
      <a href="https://www.youtube.com/channel/UCYSjcezikSshf0nAcgbmoaA">
        <i className="fa-brands fa-youtube"></i>{" "}
      </a>
      <a href="https://wa.me/qr/WUP5GCUWFI5HI1">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="https://twitter.com/TahaTiay">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://web.telegram.org">
        <i className="fa-brands fa-telegram"></i>{" "}
      </a>
    </>
  );
};
export default MyAddressComponent;
