import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-4 m-5">
        <div className="col-5" style={{lineHeight:"1rem"}}>
          <h1 className="fs-3" style={{marginBottom:"1.5rem"}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <br/>
          <a style={{ textDecoration:"none"}}href="">Track account opening</a><br/><br/>
          <a style={{ textDecoration:"none"}}href="">Track segment activation</a><br/><br/>
          <a style={{ textDecoration:"none"}}href="">Intraday margins</a><br/><br/>
          <a style={{ textDecoration:"none"}}href="">Kite user manual</a><br/><br/>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a style={{textDecoration:"none"}}href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a style={{textDecoration:"none"}}href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;