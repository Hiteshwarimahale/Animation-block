import React from "react";
import "./mani.css";

const Mani = () => {
  return (
    <div>

      <div className="container-steps">
        <a href="#div1">div1</a>
        <a href="#div2">div2</a>
        <a href="#div3">div3</a>
        <a href="#div4">div4</a>
      </div>


      <div className="Container-mani1">

        <div className="div" id="div1" data-aos="fade-left"  data-aos-duration="2000"   anchorPlacement= 'top-centre' >

          im div one

        </div>
        <div className="container-mani2" >
          <div className="div" id="div2" data-aos="flip-up" data-aos-duration="1000" >

            im div two

          </div>
        </div>

        <div  className="container-mani3" >
          <div className="div" id="div3" data-aos="zoom-in-right" data-aos-duration="1000" >

            im div three

          </div>
        </div>
        <div className="div" id="div4" data-aos="slide-up" data-aos-duration="1000" >

          im div four


        </div>




      </div>
    </div>
  );
};

export default Mani;
