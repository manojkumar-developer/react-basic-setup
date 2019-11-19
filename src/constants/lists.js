const propertyTypeList = {
  less_5000: {
    id: "less_5000",
    value: "Property valued $5000 or less",
    value1: "$5000 or Less"
  },
  above_5000: {
    id: "above_5000",
    value: "Property valued $5000 or more",
    value1: "$5000 or More"
  }
};

const contributionCategoryList = {
  cryptocurrency: {
    id: "cryptocurrency",
    value: "Cryptocurrency"
  },
  securities: {
    id: "securities",
    value: "Securities"
  },
  other: {
    id: "other",
    value: "Other"
  }
};

const grantsCategoryList = {
  art_1: {
    id: "art_1",
    value: "Art* (contribution of $20,000 or more)"
  },
  qcc: {
    id: "qcc",
    value: "Qualified Conservation Contribution"
  },
  art_2: {
    id: "art_2",
    value: "Art* (contribution of less than $20,000)"
  },
  equipment: {
    id: "equipment",
    value: "Equipment"
  },
  real_estate: {
    id: "real_estate",
    value: "Other real estate"
  },
  securities: {
    id: "securities",
    value: "Securities"
  },
  collectibles: {
    id: "collectibles",
    value: "Collectibles"
  },
  intellectual: {
    id: "intellectual",
    value: "Intellectual property"
  },
  vehicles: {
    id: "vehicles",
    value: "Vehicles"
  },
  other: {
    id: "other",
    value: "Other"
  }
};

const activityList = {
  teaching: {
    id: "teaching",
    value: "Teaching"
  },
  gardening: {
    id: "gardening",
    value: "Gardening"
  },
  foot_ball_coaching: {
    id: "foot_ball_coaching",
    value: "Football coaching"
  }
};

const genderList = {
  male: {
    id: "male",
    value: "Male"
  },
  female: {
    id: "female",
    value: "Female"
  },
  transgender: {
    id: "transgender",
    value: "Transgender"
  }
};

const incomeList = {
  "0_50": {
    id: "0_50",
    value: "0 - $50,000"
  },
  "50_100": {
    id: "50_100",
    value: "$50,000 - $100,000"
  },
  "100_250": {
    id: "100_250",
    value: "$100,000 - $250,000"
  },
  "250_greater": {
    id: "250_greater",
    value: "More than $250,000"
  }
};

const timeList = {
  0: {
    id: " ",
    value: " "
  },
  1: {
    id: "1",
    value: "1 hr"
  },
  2: {
    id: "2",
    value: "2 hrs"
  },
  3: {
    id: "3",
    value: "3 hrs"
  },
  4: {
    id: "4",
    value: "4 hrs"
  },
  5: {
    id: "5",
    value: "5 hrs"
  },
  6: {
    id: "6",
    value: "6 hrs"
  },
  7: {
    id: "7",
    value: "7 hrs"
  },
  8: {
    id: "8",
    value: "8 hrs"
  },
  9: {
    id: "9",
    value: "9 hrs"
  },
  10: {
    id: "10",
    value: "10 hrs"
  },
  11: {
    id: "11",
    value: "11 hrs"
  },
  12: {
    id: "12",
    value: "12 hrs"
  },
  13: {
    id: "13",
    value: "13 hrs"
  },
  14: {
    id: "14",
    value: "14 hrs"
  },
  15: {
    id: "15",
    value: "15 hrs"
  },
  16: {
    id: "16",
    value: "16 hrs"
  },
  17: {
    id: "17",
    value: "17 hrs"
  },
  18: {
    id: "18",
    value: "18 hrs"
  },
  19: {
    id: "19",
    value: "19 hrs"
  },
  20: {
    id: "20",
    value: "20 hrs"
  },
  21: {
    id: "21",
    value: "21 hrs"
  },
  22: {
    id: "22",
    value: "22 hrs"
  },
  23: {
    id: "23",
    value: "23 hrs"
  },
  24: {
    id: "24",
    value: "24 hrs"
  }
};

const expenseTypeList = {
  mileage: {
    id: "mileage",
    value: "Mileage"
  },
  airfare: {
    id: "airfare",
    value: "Airfare"
  },
  lodging: {
    id: "lodging",
    value: "Lodging"
  },
  transportation: {
    id: "transportation",
    value: "Transportation"
  },
  other: {
    id: "other",
    value: "Other"
  }
};

const paymentTypeList = {
  card: {
    id: "card",
    value: "Card"
  },
  ach: {
    id: "ach",
    value: "ACH"
  }
};

const paymentMethodList = {
  cash: {
    id: "cash",
    value: "Cash/Check"
  },
  e_check: {
    id: "e_check",
    value: "E-Check"
  },
  credit_card: {
    id: "credit_card",
    value: "Credit card"
  },
  paypal: {
    id: "paypal",
    value: "Paypal"
  },
  cryptocurrency: {
    id: "cryptocurrency",
    value: "Cryptocurrency"
  },
  other: {
    id: "other",
    value: "Other"
  }
};

const accountTypeList = {
  individual: {
    id: "individual",
    value: "Individual"
  },
  company: {
    id: "company",
    value: "Company"
  }
};

const reportTypeList = {
  contributions: {
    id: "contributions",
    value: "Contributions"
  },
  grants: {
    id: "grants",
    value: "Grants"
  }
};

const contributionMethodList = {
  all: {
    id: "all",
    value: "All"
  },
  cash: {
    id: "cash",
    value: "Cash"
  },
  non_cash: {
    id: "non_cash",
    value: "Noncash"
  }
};

const grantsMethodList = {
  all: {
    id: "all",
    value: "All"
  },
  truekarma: {
    id: "truekarma",
    value: "TrueKarma"
  },
  cash: {
    id: "cash",
    value: "Cash"
  },
  non_cash: {
    id: "non_cash",
    value: "Noncash"
  }
};

const methodList = {
  cash_contributions: {
    id: "cash_contributions",
    value: "Cash contributions"
  },
  non_cash_contributions: {
    id: "noncash_contributions",
    value: "Noncash contributions"
  },
  event_contributions: {
    id: "event_contributions",
    value: "Event contributions"
  },
  lottery_contributions: {
    id: "lottery_contributions",
    value: "Lottery contributions"
  },
  grants: {
    id: "grants",
    value: "Grants"
  },
  cash_grants: {
    id: "cash_grants",
    value: "Direct cash grants"
  },
  non_cash_grants: {
    id: "noncash_grants",
    value: "Direct Noncash grants"
  },
  event_grants: {
    id: "event_grants",
    value: "Event grants"
  },
  lottery_grants: {
    id: "lottery_grants",
    value: "Lottery grants"
  }
};

const yearList = {
  2015: {
    id: "2015",
    value: "Year 2015"
  },
  2016: {
    id: "2016",
    value: "Year 2016"
  },
  2017: {
    id: "2017",
    value: "Year 2017"
  },
  2018: {
    id: "2018",
    value: "Year 2018"
  },
  2019: {
    id: "2019",
    value: "Year 2019"
  },
  2020: {
    id: "2020",
    value: "Year 2020"
  },
  2021: {
    id: "2021",
    value: "Year 2021"
  },
  2022: {
    id: "2022",
    value: "Year 2022"
  }
};

const sharedDetails = {
  name_email: {
    id: "name_email",
    value: "My name and email address"
  },
  name: {
    id: "name",
    value: "My name"
  },
  email: {
    id: "email",
    value: "My email"
  },
  anonymous: {
    id: "anonymous",
    value: "Anonymous"
  }
};

const AlphabhetList = {
  1: {
    value: "A"
  },
  2: {
    value: "B"
  },
  3: {
    value: "C"
  },
  4: {
    value: "D"
  },
  5: {
    value: "E"
  },
  6: {
    value: "F"
  },
  7: {
    value: "G"
  },
  8: {
    value: "H"
  }
};

const RomanList = {
  1: {
    value: "i"
  },
  2: {
    value: "ii"
  },
  3: {
    value: "iii"
  },
  4: {
    value: "iv"
  },
  5: {
    value: "v"
  },
  6: {
    value: "vi"
  },
  7: {
    value: "vii"
  },
  8: {
    value: "viii"
  }
};

const various = "Various";

export {
  contributionCategoryList,
  grantsCategoryList,
  propertyTypeList,
  activityList,
  genderList,
  incomeList,
  timeList,
  expenseTypeList,
  paymentMethodList,
  paymentTypeList,
  accountTypeList,
  reportTypeList,
  contributionMethodList,
  grantsMethodList,
  methodList,
  yearList,
  sharedDetails,
  various,
  AlphabhetList,
  RomanList
};
