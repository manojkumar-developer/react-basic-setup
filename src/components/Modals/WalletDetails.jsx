/*

Component : WalletDetails

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";

/** ****************************** Constants ************************** */
import { walletInfoConstants } from "../../constants/wallet-info-constants";

class WalletDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="info-modal-inner pt-1">
        {/* Header */}
        <div className="row mb-1">
          <div className="col-xl-6 col-sm-6">
            <div className="d-flex dialog-logo-title pt-1">
              <img
                src="/image/sign-in/truekarma-wallet.svg"
                width="50"
                height="50"
                className="img-fluid mr-2"
                alt="True karma logo"
              />
              <h4 className="pt-3 wallet-main-title">
                {walletInfoConstants.walletTitle.text}
              </h4>
            </div>
          </div>
          <div className="col-xl-6 col-sm-6">
            <div className="d-flex info-modal-pay-2s justify-content-end pr-5 pt-3 mr-4">
              <h5 className="mr-2">
                <span className="regular-price mr-2 mb-1">
                  <strike>{walletInfoConstants.regularPrice.text}</strike>
                </span>
                <span className="offer-price mb-1">
                  <b>{walletInfoConstants.offerPrice.text}</b>
                </span>
                <br />
                <span className="offer-percent pl-3 blue ml-2">
                  {walletInfoConstants.offerPercent.text}
                </span>
              </h5>
              <sub>{walletInfoConstants.priceText.text}</sub>
            </div>
          </div>
        </div>
        {/* Bg Section */}
        <div className="reg-stellar-wallet-popup bg-section pl-4 pt-4 pb-2 pr-4">
          <div className="row">
            <div className="col-xl-12">
              <h4>{walletInfoConstants.advantageBoxText.title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <img
                src="/image/sign-in/1000tk.svg"
                width="80"
                height="80"
                className="img-fluid adv1 text-center"
                alt=""
              />
              <p className="pr-2">
                <span className="mr-1 fs-20">{walletInfoConstants.advantageBox1.text1}</span>
                <span className="mr-1">{walletInfoConstants.advantageBox1.text2}</span>
              </p>
            </div>
            <div className="col-xl-3 col-sm-6 pl-2">
              <img
                src="/image/sign-in/10x.svg"
                width="80"
                height="80"
                className="img-fluid adv3 text-center"
                alt=""
              />
              <p className="">
                <span className="mr-1 fs-20">{walletInfoConstants.advantageBox2.text1}</span>
                <span>{walletInfoConstants.advantageBox2.text2}</span>
              </p>
            </div>
            <div className="col-xl-3 col-sm-6">
              <img
                src="/image/sign-in/2x.svg"
                width="80"
                height="80"
                className="img-fluid adv2 text-center"
                alt=""
              />
              <p className="">
                <span className="mr-1 fs-20">{walletInfoConstants.advantageBox3.text1}</span>
                <span>{walletInfoConstants.advantageBox3.text2}</span>
              </p>
            </div>
            <div className="col-xl-3 col-sm-6">
              <img
                src="/image/sign-in/bonus.svg"
                width="80"
                height="80"
                className="img-fluid pb-2 adv4 text-center"
                alt=""
              />
              <p className="">
                <span className="mr-1 fs-20">{walletInfoConstants.advantageBox4.text1}</span>
                {walletInfoConstants.advantageBox4.text2}
              </p>
            </div>
          </div>
        </div>
        {/* 2 Col Section */}
        <div className="col2-section pb-0">
          <div className="row mb-2">
            <div className="col-xl-12">
              <p className="mb-0">
                {walletInfoConstants.XLMStellar.title}
              </p>
            </div>
          </div>
          <div className="col2-boxes pl-3 pt-3 pr-3">
            <div className="row mb-2">
              <div className="col-xl-6 col-sm-6">
                <div className="d-flex mb-3">
                  <img
                    src="/image/sign-in/fea1.svg"
                    width="70"
                    height="70"
                    className="img-fluid mr-3"
                    alt=""
                  />
                  <p className="mb-0">
                    {walletInfoConstants.XLMStellar.text1}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6">
                <div className="d-flex mb-3">
                  <img
                    src="/image/sign-in/fea2.svg"
                    width="65"
                    height="65"
                    className="img-fluid mr-4"
                    alt=""
                  />
                  <p className="mb-0">
                    {walletInfoConstants.XLMStellar.text2}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-sm-6">
                <div className="d-flex mb-3 mb-sm-3">
                  <img
                    src="/image/sign-in/fea3.svg"
                    width="80"
                    height="80"
                    className="img-fluid mr-0 pr-3"
                    alt=""
                  />
                  <p className="mb-0">
                    {walletInfoConstants.XLMStellar.text3}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6">
                <div className="d-flex">
                  <img
                    src="/image/sign-in/fea4.svg"
                    width="80"
                    height="80"
                    className="img-fluid mr-3 pr-2"
                    alt=""
                  />
                  <p className="mb-0 mr-2">
                    {walletInfoConstants.XLMStellar.text4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalletDetails;
