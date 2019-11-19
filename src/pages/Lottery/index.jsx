/*
   
Component : Lottery

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import SubClasses *************************** */
import LotteryForm from "./LotteryForm";
import CompleteList from "./CompleteList";

/* ****************************** Import Constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";
import myAccountFormConstants from "../../constants/my-account-forms";
import History from "../../utils/History";

/** ****************************** Import APIS *************************** */
// import { getLivePoolList, getCompletePoolList } from "/imports/api/events";
// import { getConfiguration } from "/imports/api/lists";
// import { addPoolContribution } from "/imports/api/contributions";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configuration: {},
      liveList: [],
      completeList: [],
      date: new Date()
    };
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops) {
      const configuration = nextprops.configuration;
      const liveList = nextprops.liveList;
      const completeList = nextprops.completeList;
      if (configuration) {
        this.setState({ configuration, liveList, completeList });
      }
    }
  };

  gotoLotteryLists = () => {
    History.push("/lottery-lists");
  };

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = data => {
  //   const self = this;
  //   const { date } = this.state;
  //   const userId = Session.get("currentUserId");
  //   const _inputData = data;
  //   _inputData.method = "card";
  //   _inputData.date = date;
  //   _inputData.verified = true;
  //   _inputData.type = "lottery_contributions";
  //   if (data.token) {
  //     toast.success(myAccountFormConstants.processing.text);
  //     addPoolContribution(userId, _inputData).then((result, err) => {
  //       if (err) {
  //         toast.success(myAccountFormConstants.errorMsg.text);
  //       } else if (result) {
  //         toast.success(myAccountFormConstants.paySuccessMsg.text);
  //       }
  //     });
  //     self.form.clear();
  //   }
  // };

  render() {
    const { configuration, liveList, completeList } = this.state;
    return (
      <div className="lottery pt-5 pb-5">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              {/* Lottery Info */}
              <div className="lottery-info relative mb-4">
                {/* Lottery Info BG */}
                <div className="lottery-info-bg" />
                <div className="lottery-info-content p-4 text-white text-left">
                  <h4 className="mb-3">{lotteryConstants.mainTitle.title}</h4>
                  <p className="mdm-text mb-0 fw-500 text-justify">
                    {lotteryConstants.mainTitle.text}
                  </p>
                </div>
              </div>
              {/* Form */}
              <div className="lottery-form">
                <LotteryForm
                  onInitialize={this.handleInitialize}
                  onValidSubmit={this.handleSubmit}
                  configuration={configuration}
                  list={liveList}
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="right-sidebar mt-sm-3 mt-md-3 mt-lg-0">
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  type="button"
                  className="blue-bg text-inherit mb-3 w-100"
                  onClick={() => this.gotoLotteryLists()}
                >
                  {lotteryConstants.poolLists.poolBtnText}
                </Button>
                <CompleteList list={completeList} />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default Lottery;

// export default createContainer(() => {
//   Meteor.subscribe("collect_live_lottery");
//   const liveList = getLivePoolList();
//   Meteor.subscribe("collect_complete_lottery");
//   const completeList = getCompletePoolList();
//   Meteor.subscribe("collect_configuration");
//   const configuration = getConfiguration();
//   return {
//     liveList,
//     completeList,
//     configuration
//   };
// }, Lottery);
