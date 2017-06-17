import React from "react";
import { Link } from "react-router";

const Navbar = (props) => (
  <nav className="navbar navbar-default">
      <div className="container-fluid">
        {/*Brand and toggle get grouped for better mobile display */} 
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">MLB News</Link>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */} 
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className={location.pathname === "/" && "active"}>
              <Link to="/">Articles</Link>
            </li>
            <li className={location.pathname === "/saved" && "active"}>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
          {location.pathname === "/" && (
          <form className="navbar-form navbar-left">
            <button id='scraper' className="btn btn-primary" onClick={props.scrapeArticles}>Scrape Articles!</button>
          </form>
          )}
        </div> {/*/.navbar-collapse */}
      </div> {/* /.container-fluid */}
    </nav>
);

export default Navbar;
