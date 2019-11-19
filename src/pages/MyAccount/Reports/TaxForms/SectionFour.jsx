/* 

Component : TaxForm - SectionFour

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";

class SectionFour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // Page 1 Footer Details
      <div className="page-1-footer-details">
        <table className="table table-header mb-0 mb-0">
          <tbody>
            <tr>
              <td className="pt-0 pb-0 border-bottom-0">
                <p className="mdm-txt mb-0 text-left fw-500">
                  {
                    "For Paperwork Reduction Act Notice, see separate instructions."
                  }
                </p>
              </td>
              <td className="pt-0 pb-0 border-bottom-0">
                <p className="mdm-txt mb-0 text-center">{`Cat. No. 62299J`}</p>
              </td>
              <td className="pt-0 pb-0 border-bottom-0">
                <p className="mdm-txt mb-0 text-right">
                  <sub>{`Form`}</sub>
                  <span className="form-8283-font-footer ml-1 mr-1">{`8283`}</span>
                  <sub>{"(Rev. 12-2014)"}</sub>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SectionFour;
