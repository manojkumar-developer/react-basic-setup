/*

Component : Registration

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

/** ****************************** Import Constants *************************** */
import myAccountFormConstants from "/imports/constants/my-account-forms";

/** ****************************** Import APIS *************************** */
import { verifyEmailByCode } from "/imports/api/users";
import { domainConfig } from "/imports/config";

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: null,
      fail: null
    };
  }

  componentWillMount() {
    const {
      match: { params }
    } = this.props;
    if (params.id) {
      this.setState({ loading: true });
      // get data from APIs
      verifyEmailByCode(params.id).then(result => {
        if (result) {
          this.setState({ success: true, loading: false });
        } else {
          this.setState({ fail: true, loading: false });
        }
      });
    }
  }

  renderLoading = () => {
    const { loading } = this.state;
    return <BeatLoader color="#57B1FB" loading={loading} />;
  };

  renderSuccessMsg = () => (
    <div>
      <i className="fa blue fa-check-circle fw-800" />
      <p>{myAccountFormConstants.verifyEmailSuccessMsg.text}</p>
    </div>
  );

  renderFailMsg = () => (
    <div>
      <i className="fa red fa-exclamation-triangle" />
      <p>{myAccountFormConstants.verifyEmailErrorMsg.text}</p>
    </div>
  );

  render() {
    const { loading, success, fail } = this.state;
    return (
      <div>
        <table
          width="100%"
          height="100%"
          border="0"
          cellSpacing="0"
          cellPadding="0"
          style={{ tableLayout: "fixed", marginTop: "5%" }}
        >
          <tbody>
            <tr>
              <td align="center" valign="top">
                <table
                  width="500"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  style={{
                    tableLayout: "fixed",
                    backgroundColor: "#E2ECF5",
                    border: "1px solid #DFE9F1"
                  }}
                >
                  <tbody>
                    <tr>
                      <td align="center" valign="top">
                        <table
                          width="100%"
                          border="0"
                          cellSpacing="0"
                          cellPadding="0"
                          style={{
                            tableLayout: "fixed",
                            boxShadow: "0 3px 8px rgba(0,0,0,.1)",
                            WebkitBoxShadow: "0 3px 8px rgba(0,0,0,.1)",
                            border: "1px solid rgba(0,0,0,0.125)"
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                valign="middle"
                                style={{
                                  paddingTop: "30px",
                                  paddingBottom: "10px"
                                }}
                              >
                                <span
                                  style={{
                                    display: "block",
                                    width: "240px",
                                    height: "40px",
                                    backgroundImage: `url(${
                                      domainConfig.websiteUrl
                                    }image/logo/logo.png)`,
                                    backgroundRepeat: "no-repeat"
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style={{
                                  paddingTop: "20px",
                                  paddingBottom: "20px"
                                }}
                              >
                                <h2
                                  style={{
                                    margin: "0",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500"
                                  }}
                                >
                                  {loading ? this.renderLoading() : null}
                                </h2>
                                <h2
                                  style={{
                                    margin: "0",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500"
                                  }}
                                >
                                  {success ? this.renderSuccessMsg() : null}
                                </h2>
                                <h2
                                  style={{
                                    margin: "0",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500"
                                  }}
                                >
                                  {fail ? this.renderFailMsg() : null}
                                </h2>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

VerifyEmail.propTypes = {
  match: PropTypes.object.isRequired
};

export default VerifyEmail;
