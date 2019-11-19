const MainMenuConstants = [
  {
    id: "home",
    title: "Home",
    value: "/"
  },
  {
    id: "news",
    title: "Charity News",
    value: "/news"
  },
  {
    id: "blog",
    title: "Blog",
    value: "/blog"
  },
  {
    id: "charitylist",
    title: "Charity Finder",
    value: "/charity/list"
  },
  {
    id: "lottery",
    title: "TrueKarma Lottery",
    value: "/lottery"
  },
  {
    id: "contactus",
    title: "Contact Us",
    value: "/contact"
  }
];

const AccountMenuConstants = [
  {
    id: "dashboard",
    title: "Dashboard"
  },
  {
    id: "referral",
    title: "Referral"
  },
  {
    id: "contributions",
    title: "Contributions",
    submenu: [
      {
        id: "cash-contributions",
        title: "TK Cash Contributions"
      },
      {
        id: "noncash-contributions",
        title: "TK Noncash Contributions"
      }
    ]
  },
  {
    id: "grants",
    title: "Grants",
    submenu: [
      {
        id: "grants",
        title: "TK Grants"
      },
      {
        id: "direct-grants",
        title: "Direct Cash Grants"
      },
      {
        id: "direct-noncash-grants",
        title: "Direct Noncash Grants"
      }
    ]
  },
  {
    id: "my-time",
    title: "Volunteer Time"
  },
  {
    id: "credits",
    title: "My TrueKarma"
  },
  {
    id: "my-charities",
    title: "My Charities"
  },
  {
    id: "reports",
    title: "Reports",
    submenu: [
      {
        id: "tax-reports",
        title: "Tax Reports"
      },
      {
        id: "tax-forms",
        title: "Tax Forms"
      }
    ]
  }
];

const ProfileMenuConstants = [
  {
    id: "profile",
    title: "Edit Profile"
  },
  {
    id: "change-password",
    title: "Change Password"
  },
  {
    id: "stellar",
    title: "Stellar"
  }
];

const MyAccountConstants = {
  dashboard: {
    name: "Dashboard",
    title: "Dashboard"
  },
  myAccountButton: {
    btnText: "Sign In"
  },
  settings: {
    title: "Settings"
  },
  logout: {
    title: "Logout"
  }
};

export {
  MainMenuConstants,
  AccountMenuConstants,
  ProfileMenuConstants,
  MyAccountConstants
};
