/*
   
Faq

*/
/* ****************************** Import Packages *************************** */
import React from "react";
/* ****************************** Import Constants *************************** */
import faqLists from "../../constants/faq-lists";

const Faq = () => (
  <div className="faq">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="faq-inner text-left">
            <h3 className="mb-5 text-center">
              <span>{faqLists.section.title}</span>
            </h3>
            {/* Accordion */}
            <div id="accordion">
              <div className="card mb-2">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {faqLists.question1.title}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {faqLists.question1.text}                    
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {faqLists.question2.title}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {faqLists.question2.text}                    
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >                      
                      {faqLists.question3.title}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse show"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {faqLists.question3.text}                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
