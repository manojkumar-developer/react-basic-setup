const tkConstants = {
  signup: "Signup",
  emailVerification: "Email verification",
  referralUser: "Verified referral",
  contributionOneDollar: "Cash contribution",
  contributionOneHour: "Time contribution",
  timeContribution: "Time contribution",
  startBalance: "startBalance",
  maxCoins: "maxCoins",
  TotalCoins: "TotalCoins",
  grantCredits: "grantCredits"
};

const paymentConfig = {
  servicePercent: {
    id: "servicePercent",
    value: 10
  }
};

const keditActivities = [
  "CASH DONATION",
  "NONCASH DONATION",
  "REFERRAL",
  "DIRECT CASH DONATION",
  "DIRECT NONCASH DONATION",
  "VOLUNTEER TIME",
  "EMAIL VERIFICATION",
  "SIGNUP"
];

const domainConfig = {
  websiteUrl: "https://staging.truekarma.org/",
  // websiteUrl: "https://truekarma.org/",
  reload: 1500,
  intervals: 500
};

const intervals = {
  reload: 1500
};

export { tkConstants, paymentConfig, keditActivities, domainConfig, intervals };
