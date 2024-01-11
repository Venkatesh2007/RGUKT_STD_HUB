import "../App.css";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";


export default function AssignmentsFE1() {
  const context = useContext(HubContext);
  const { sidewidth} = context;
  
  const articles=[];

  return (
    <>
        <div
          className={`home nf ${
            (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
          }`}
        >

        <div className='row'>
          {/* {articles.map((element) => {
            return <div>
            </div>}} */}
          <div className="col">
            <div className="card " >
              {/* <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/610Dd3P-JIL._AC_UF1000,1000_QL80_.jpg" alt="document" style={{ width: "100%" }} /> */}
              <div className="container">
                <h4>
                  Uploaded Soon...
                  {/* <a href={Thomas_Calculus} download="Thomas_Calculus"><b>Download</b></a> */}
                </h4>
              </div>
            </div>
          </div>
      </div>
              
        </div>

    </>
    );
}