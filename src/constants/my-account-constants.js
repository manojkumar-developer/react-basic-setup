const CashContributionInfo = {
  info1: {
    text:
      "Contributions accepted by TrueKarma are both irrevocable and unconditional. Upon acceptance, assets are owned and held by TrueKarma. Stock, crypto currencies and noncash contributions are sold promptly upon receipt."
  }
};

const dashboardConstants = {
  totalGranted: {
    title: "Total Granted",
    cardFooterText1: "Current reward is",
    outOfTotalText: "Out of your total contributions of",
    highlightText: "TrueKarma per USD"
  }
};

const NoncashContributionInfo = {
  info1: {
    text:
      "The tax deduction for assets held long term (one year or more) is generally equal to the fair market value of the asset, while the deduction for assets held short term (less than one year) is generally limited to the lower of the original purchase price or the fair market value on the date the asset is contributed."
  },
  info2: {
    text:
      "When contributing appreciated assets, you should consider both the cost basis and the holding period of the asset. Please consult your tax professional for specifics on your own tax situation."
  }
};

const referralLinkConstants = {
  whatsapp: {
    id: "whatsapp",
    class: "fa-whatsapp whatsapp-bg",
    sharelink: "https://api.whatsapp.com/send?text="
  },
  facebook: {
    id: "facebook",
    class: "fa-facebook facebook-bg",
    sharelink: "http://www.facebook.com/inbox/?compose&message="
  },
  twitter: {
    id: "twitter",
    class: "fa-twitter twitter-bg",
    sharelink: "https://twitter.com/intent/tweet?text="
  },
  envelope: {
    id: "envelope",
    class: "fa-envelope gmail-bg",
    sharelink:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=I signed up to TrueKarma. Join me.&body="
  }
};

const referralConstants = {
  referralTitle: {
    title: "Referral",
    text1:
      "Invite people you know personally and you can both earn more TrueKarma!"
  },
  approvalList: {
    title1: "You have",
    title2: "friends waiting for verification",
    verifyRequestBy: "Please verify the request by",
    cancelBtn: "Cancel",
    verifyBtn: "Confirm verify",
    verifiedMsg: "User verified successfully",
    reviewBtn: "Review"
  },
  referralList: {
    title: "Verified Invitees"
  },
  shareData: {
    text:
      "TrueKarma is a platform that rewards people for doing good in the world. Every good deed is eligible to get TrueKarma - however small it may seem to be! The system uses its own currency, TKC, and to get people to start using the system once it's ready they are allocating TKCs for free to people that sign up now (the amount drops as more people join - so better to join early). Signing up is free and they only ask for your name and an email address. There's nothing to lose and you wouldn't want to miss this :-)",
    linkText: "A Here is my invite link: ",
    textEnd:
      "This link will stop working once I’m out of invites. Let me know after you registered, because I need to verify you on my end."
  },
  sharedDetails: {
    title: "Invite your Friends",
    text: "Share the joy!",
    shareLinkText: "Share link with",
    btnText: "Copy"
  }
};

const cashContribByCheck = {
  donateByCheck: {
    title: "Donate by check?",
    modalTitle: "TK Cash Contributions - Donate by check",
    modalInnerTitle1: "Make checks payable to:",
    modalInnerTitle2: "and mail it to:",
    modalInnerAddress1: "TrueKarma.org",
    modalInnerAddress2: "c/o Davis Sharma Donthineni, PC",
    modalInnerAddress3: "15200 Hesperian Blvd. Ste 202",
    modalInnerAddress4: "San Leandro, CA 94578"
  }
};

const taxFormConstants = {
  taxForm: {
    text:
      "The tax form(s) is/are being provided as a convenience to subscribers. They should not be construed as a tax advice or a proof for claiming the tax deduction. Please consult your CPA or tax preparer before claiming any tax deduction. Please check the box to acknowledge that you have read and understood this.",
    btnText: "Tax Form"
  }
};

const stellerSettingsConstants = {
  walletAddress: {
    title: "Wallet address"
  },
  walletBalance: {
    title: "Wallet balance",
    subTitle1: "XLM",
    subTitle2: "TKCOINS"
  },
  XLMLists: {
    title1: "Buying liabilities",
    title2: "Selling liabilities"
  },
  TKCoins: {
    title1: "Asset issuer",
    title2: "Buying liabilities",
    title3: "Selling liabilities",
    title4: "Limit"
  }
};

const tkCreditsConstants = {
  linkTitle: {
    text: "Click here"
  }
};

const removeFavMyCharities = {
  modalTitle: {
    title: "Remove my charities",
    text: "Are you sure want to remove this item? Please continue with confirm",
    btnText: "Confirm"
  }
};

export {
  CashContributionInfo,
  dashboardConstants,
  NoncashContributionInfo,
  referralLinkConstants,
  referralConstants,
  cashContribByCheck,
  taxFormConstants,
  stellerSettingsConstants,
  tkCreditsConstants,
  removeFavMyCharities
};
