const path = require("path");
const Email = require("email-templates");
const moment = require("moment");
var express = require("express");

var app = express();
app.set("view engine", "ejs");

const assetsUrl = "http://assetsUrl";
const appUrl = `http://appUrl`;

const newsletter = new Email({
  views: {
    options: {
      extension: "ejs"
    }
  },
  preview: {
    wait: false
  },
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
      // style.css location for inlining
      relativeTo: `${__dirname}/assets/aggregateAlerts`
    }
  }
});

function truncateText(text, length = 30, end) {
  if (end === undefined) {
    end = "...";
  }

  if (text.length <= length || text.length - end.length <= length) {
    return text;
  }

  return String(text).substring(0, length - end.length) + end;
}

const todaysDate = moment.utc().format("MMMM DD, YYYY");

let context = {
  alertId: "5e79a1c14f53ebc75cb04ac4",
  aggregateId: "5e6a60d8ccc65f90078dec3f",
  type: "portfolio",
  userId: "5c9dc6dbcc9fb857d98c3253",
  emailAddress: "ziya.aktas+sasbv2@truvaluelabs.com",
  aggregateTitle: "test",
  spotlightAlerts: [
    {
      orgTvlId: "0b0791dc-efe5-4ec8-9823-d6254b5ab946",
      primaryInstrumentTvlId: "8bb6651b-007b-4df8-8ee7-9b485d5911d5",
      entityName: "Fiat Chrysler Automobiles NV",
      startMs: 1584489600000,
      headline:
        "Updated at 12:45 PM EDT BREAKING NEWS: Workers shut production in auto plants throughout Michigan and Ohio, in defiance of UAW and management",
      articleId: "5e727dd4d9386e6c5063ce21",
      articleSource: "World Socialist Web Site",
      hourMs: 1584489600000,
      articleCount: 2,
      individualCategory: "Labor Practices aoeuaoe ueao aoe uaoeuoeauoe",
      articleUrl:
        "http://ct.moreover.com/?a=41655921697&p=48m&v=1&x=TXL6ulBc0aM7SYh6Aiws9g",
      isCategoryMaterial: true,
      symbol: "FCA"
    }
  ],
  lowVolumeAlerts: [
    {
      _id: "5e78e62fd9386e6c506dd57f",
      articlePubDateMs: 1584976925000,
      title:
        "UK begins trial of HIV medicine, steroid as possible Covid-19 treatments",
      articleUrl:
        "http://ct.moreover.com/?a=41695616604&p=48m&v=1&x=luwLnZ2gxwAPI17z22gT0w",
      orgTvlId: "dda038d6-2173-4619-8dd3-2886d7a36b99",
      sourceName: "Malay Mail",
      entityName: "AbbVie Inc",
      symbol: "ABBV",
      primaryInstrumentTvlId: "3ae4499a-a4a7-4204-a28e-135bac8093c8"
    },
    {
      _id: "5e78cb88d9386e6c506db61b",
      articlePubDateMs: 1584971520000,
      title:
        'INVESTOR UPDATE: UBS YES Investors May Potentially Recover the "Double Whammy" Losses Suffered in the COVID-19 SPX Market Crash',
      articleUrl:
        "http://ct.moreover.com/?a=41694997894&p=48m&v=1&x=RkFwoJw-pK4IVDjWXi_qhA",
      orgTvlId: "bfa6684a-4225-451a-88e0-b81804b87b08",
      sourceName: "Business Wire",
      entityName: "UBS Group AG",
      symbol: "UBSG",
      primaryInstrumentTvlId: "1e5097ac-58c4-4bef-82b8-f71885dae196"
    },
    {
      _id: "5e78b371d9386e6c506d8e31",
      articlePubDateMs: 1584966300000,
      title: "AGCO Provides Update on Impact of COVID-19",
      articleUrl:
        "http://ct.moreover.com/?a=41694406774&p=48m&v=1&x=vwjOVYh4f-PQUj8fcAPRfA",
      orgTvlId: "f23b9788-79b0-467c-a8ef-eea6a4b58c4d",
      sourceName: "Business Wire",
      entityName: "AGCO Corp",
      symbol: "AGCO",
      primaryInstrumentTvlId: "963dbc05-1c5d-47c2-8940-c3e1a228104c"
    },
    {
      _id: "5e78b1c0d9386e6c506d8b44",
      articlePubDateMs: 1584966222000,
      title: "CVS to Hire 50,000 Employees for Coronavirus Assistance",
      articleUrl:
        "http://ct.moreover.com/?a=41694361184&p=48m&v=1&x=ilGT5OYjmpTr_1qA2uQ7QQ",
      orgTvlId: "ab36df78-be57-424c-9cf3-88c5d27adb9d",
      sourceName: "New York Times",
      entityName: "CVS Health Corp",
      symbol: "CVS",
      primaryInstrumentTvlId: "6a7f4da2-b25b-4fd6-95b3-a7a8634832d1"
    },
    {
      _id: "5e78c56ad9386e6c506daa91",
      articlePubDateMs: 1584965847000,
      title: "Brewer AB InBev Deploys Waste Alcohol to Make Virus Disinfectant",
      articleUrl:
        "http://ct.moreover.com/?a=41694840124&p=48m&v=1&x=mtiU9XuQkdhr0quzZ3T98Q",
      orgTvlId: "9df21107-d3ff-49d4-9c5b-e7b41021c08d",
      sourceName: "New York Times",
      entityName: "Anheuser Busch Inbev NV",
      symbol: "ABI",
      primaryInstrumentTvlId: "b7a65c38-1c59-4f76-9c65-1a8a93de1fb2"
    },
    {
      _id: "5e787927d9386e6c506d13d0",
      articlePubDateMs: 1584953223000,
      title:
        "Canadian firm claims to have a viable vaccine candidate for Covid-19",
      articleUrl:
        "http://ct.moreover.com/?a=41692908165&p=48m&v=1&x=txRdDwDa-PZgT_reVk6GGw",
      orgTvlId: "e52b36b4-462a-45b9-b530-cf0ec195cae4",
      sourceName: "Malay Mail",
      entityName: "Philip Morris International Inc",
      symbol: "PM",
      primaryInstrumentTvlId: "43504ca4-e357-4ec0-946b-2a9aaf4931b0"
    },
    {
      _id: "5e784804d9386e6c506c9da0",
      articlePubDateMs: 1584941017000,
      title:
        "Walmart Ups Minimum Wage in e-Commerce Warehouses by $2 as Orders Surge on Virus Worries",
      articleUrl:
        "http://ct.moreover.com/?a=41691795701&p=48m&v=1&x=VAuvW4_dH38hXuVVtzmRdA",
      orgTvlId: "9c9d5525-0a38-4a67-885f-6852517d7e26",
      sourceName: "New York Times",
      entityName: "Target Corp",
      symbol: "TGT",
      primaryInstrumentTvlId: "03fc73c3-c16d-4e03-a9f3-595216ebe250"
    },
    {
      _id: "5e77b764d9386e6c506bb604",
      articlePubDateMs: 1584903606000,
      title: "José Andrés: Mobilize Restaurant Workers to Feed America Now",
      articleUrl:
        "http://ct.moreover.com/?a=41688943030&p=48m&v=1&x=1HnRDUIfgrX6Nt5PxQ9ubQ",
      orgTvlId: "968342a5-dceb-46cc-8623-8429a8728dff",
      sourceName: "New York Times",
      entityName: "GrubHub Inc",
      symbol: "GRUB",
      primaryInstrumentTvlId: "9e8874cb-2773-4b87-8004-af10f1d2a050"
    },
    {
      _id: "5e778d47d9386e6c506b9da5",
      articlePubDateMs: 1584892730000,
      title: "Target Apologizes for Selling N95 Masks in Seattle",
      articleUrl:
        "http://ct.moreover.com/?a=41687992347&p=48m&v=1&x=M-aIq8dytEsxY2BYfKsqlQ",
      orgTvlId: "9c9d5525-0a38-4a67-885f-6852517d7e26",
      sourceName: "New York Times",
      entityName: "Target Corp",
      symbol: "TGT",
      primaryInstrumentTvlId: "03fc73c3-c16d-4e03-a9f3-595216ebe250"
    },
    {
      _id: "5e772f7ed9386e6c506b20dd",
      articlePubDateMs: 1584867616000,
      title: "Deniers and Disbelievers: 'If I Get Corona, I Get Corona.'",
      articleUrl:
        "http://ct.moreover.com/?a=41685966162&p=48m&v=1&x=ZokvrdpaMfXCa3UQ8--sKQ",
      orgTvlId: "1589644e-1e0b-4c32-90c2-939ee03957b7",
      sourceName: "New York Times",
      entityName: "GameStop Corp",
      symbol: "GME",
      primaryInstrumentTvlId: "95ecdb98-7dae-4996-95ff-f4b5eaecce80"
    },
    {
      _id: "5e770febd9386e6c506aec9d",
      articlePubDateMs: 1584861131000,
      title: "Automakers Hero, Fiat Halt Indian Production Due to Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41685464138&p=48m&v=1&x=FODAH_auJdvX9Ntbgxf54g",
      orgTvlId: "54a59c63-c727-4ba8-9236-b16f4421cb21",
      sourceName: "New York Times",
      entityName: "Tata Motors Ltd",
      symbol: "TATAMOTORS",
      primaryInstrumentTvlId: "0dd3c1af-369c-4b93-92fe-8211d893168e"
    },
    {
      _id: "5e7646bbd9386e6c506a284e",
      articlePubDateMs: 1584809520000,
      title:
        "Kessler Topaz Meltzer & Check, LLP Announces Investor Securities Fraud Class Action Lawsuit Filed Against Norwegian Cruise Line Holdings Ltd.",
      articleUrl:
        "http://ct.moreover.com/?a=41681847942&p=48m&v=1&x=tHwOjXWQRBeVURTFQlIQSg",
      orgTvlId: "332e424f-f6ac-415d-add2-5a21b49d139c",
      sourceName: "Business Wire",
      entityName: "Norwegian Cruise Line Holdings Ltd",
      symbol: "NCLH",
      primaryInstrumentTvlId: "f614ef1c-96cd-4000-a919-a93f1a2d5358"
    },
    {
      _id: "5e763ce2d9386e6c506a227d",
      articlePubDateMs: 1584806495000,
      title:
        "Used to Meeting Challenges With Bluster and Force, Trump Confronts a Crisis Unlike Any Before",
      articleUrl:
        "http://ct.moreover.com/?a=41681626359&p=48m&v=1&x=nN_fiLYIb3gjtYPlx4nhLA",
      orgTvlId: "2c4f20a1-13e7-4eb2-ab7e-41f26204eea9",
      sourceName: "New York Times",
      entityName: "Comcast Corp",
      symbol: "CMCSA",
      primaryInstrumentTvlId: "55c1e5c4-21e5-4011-9c21-9d00695e682c"
    },
    {
      _id: "5e763a79d9386e6c506a200d",
      articlePubDateMs: 1584806400000,
      title:
        "Cooper Tire Announces Temporary Shutdown of Manufacturing Facilities in the Americas",
      articleUrl:
        "http://ct.moreover.com/?a=41681567678&p=48m&v=1&x=KgSgnY0MTJL7pmEvK_Y8Jw",
      orgTvlId: "c1f8f960-50c7-45fd-b023-204a1f23d964",
      sourceName: "Business Wire",
      entityName: "Cooper Tire & Rubber Co",
      symbol: "CTB",
      primaryInstrumentTvlId: "5365e34b-5d50-4076-bb32-f8bd395b09bb"
    },
    {
      _id: "5e75be49d9386e6c50696f18",
      articlePubDateMs: 1584774008000,
      title: "As Crisis Deepens, Companies Hand Out Cash to Workers",
      articleUrl:
        "http://ct.moreover.com/?a=41678741346&p=48m&v=1&x=SYPJjQ_lRmSIJwKZeMgRDw",
      orgTvlId: "62d63910-b286-4891-ad63-1eec732780a1",
      sourceName: "New York Times",
      entityName: "Darden Restaurants Inc",
      symbol: "DRI",
      primaryInstrumentTvlId: "34051b8f-1847-48a0-bdce-af77205a27c8"
    },
    {
      _id: "5e75c0d9d9386e6c506972b2",
      articlePubDateMs: 1584766800000,
      title:
        'Illinois governor belatedly places entire state under "stay-at-home" order in response to coronavirus pandemic',
      articleUrl:
        "http://ct.moreover.com/?a=41678786927&p=48m&v=1&x=0cMwPt1awE4Yu1L8QzLeEA",
      orgTvlId: "32c66bb4-2e07-4b3d-8fa0-10a6de8f0625",
      sourceName: "World Socialist Web Site",
      entityName: "Deere & Co",
      symbol: "DE",
      primaryInstrumentTvlId: "76a4c912-ccc9-4eb6-a4ba-1fc164adfda7"
    },
    {
      _id: "5e757b70d9386e6c5068c9d5",
      articlePubDateMs: 1584746045000,
      title:
        "Trump's Embrace of Unproven Drugs to Treat Coronavirus Defies Science",
      articleUrl:
        "http://ct.moreover.com/?a=41676631978&p=48m&v=1&x=Olg_NJ6NtwYq0oy8MhB3Xw",
      orgTvlId: "ab36df78-be57-424c-9cf3-88c5d27adb9d",
      sourceName: "New York Times",
      entityName: "CVS Health Corp",
      symbol: "CVS",
      primaryInstrumentTvlId: "6a7f4da2-b25b-4fd6-95b3-a7a8634832d1"
    },
    {
      _id: "5e754a84d9386e6c5068a543",
      articlePubDateMs: 1584731161000,
      title: "The War on Coronavirus Comes to Trump Properties",
      articleUrl:
        "http://ct.moreover.com/?a=41675146898&p=48m&v=1&x=4Pb5uVl1L7foYh6oTc-RBw",
      orgTvlId: "d4c002e0-90a9-469e-be92-0f0ee7fb0f56",
      sourceName: "New York Times",
      entityName: "Hilton Worldwide Holdings Inc",
      symbol: "HLT",
      primaryInstrumentTvlId: "65a5922b-4430-4f9a-8247-eff69ffc89cf"
    },
    {
      _id: "5e752589d9386e6c50688e4f",
      articlePubDateMs: 1584723120000,
      title:
        "Clearwater Paper Provides Update on Operations in Response to COVID-19",
      articleUrl:
        "http://ct.moreover.com/?a=41674198334&p=48m&v=1&x=2EOf-N1a8y6H1hEsFJZ7Bg",
      orgTvlId: "b99aa990-101a-4669-8df0-0e28c8d244fd",
      sourceName: "Business Wire",
      entityName: "Clearwater Paper Corp",
      symbol: "CLW",
      primaryInstrumentTvlId: "4ed6822b-833b-4ed6-88d5-91c387ac1235"
    },
    {
      _id: "5e751d29d9386e6c5068890f",
      articlePubDateMs: 1584721347000,
      title: "NBC News Employee Dies After Testing Positive for Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41673961642&p=48m&v=1&x=wO_7TZT4jfdduwTrkvAxhw",
      orgTvlId: "2c4f20a1-13e7-4eb2-ab7e-41f26204eea9",
      sourceName: "New York Times",
      entityName: "Comcast Corp",
      symbol: "CMCSA",
      primaryInstrumentTvlId: "55c1e5c4-21e5-4011-9c21-9d00695e682c"
    },
    {
      _id: "5e75317cd9386e6c5068951e",
      articlePubDateMs: 1584710900000,
      title:
        "Corruption Vulnerabilities in the U.S. Response to the Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41674476448&p=48m&v=1&x=IzJXAQViE9kW1vM2BNWz-g",
      orgTvlId: "ab36df78-be57-424c-9cf3-88c5d27adb9d",
      sourceName: "Carnegie Endowment",
      entityName: "CVS Health Corp",
      symbol: "CVS",
      primaryInstrumentTvlId: "6a7f4da2-b25b-4fd6-95b3-a7a8634832d1"
    },
    {
      _id: "5e748f73d9386e6c50677e56",
      articlePubDateMs: 1584692370000,
      title:
        "Moody's cuts global shipping outlook to negative, estimates 30pc drop in Ebitda",
      articleUrl:
        "http://ct.moreover.com/?a=41670487994&p=48m&v=1&x=-5sQObK4C1i-RY8KuutfsQ",
      orgTvlId: "c74bb49d-11cd-40ec-9f62-2efcb1a90196",
      sourceName: "Malay Mail",
      entityName: "Moody's Corp",
      symbol: "MCO",
      primaryInstrumentTvlId: "9ca63da0-8f04-4e35-b853-53b721726dde"
    },
    {
      _id: "5e74bcd6d9386e6c5067f2f0",
      articlePubDateMs: 1584662400000,
      title: "{I-bank focus}Citi lowers China Mobile (00941) to HK$78",
      articleUrl:
        "http://ct.moreover.com/?a=41671537986&p=48m&v=1&x=MM2BTK8CW3vvNi-Pg6Mzrg",
      orgTvlId: "78df5200-eaae-4075-ad3d-bef468034ebc",
      sourceName: "Etnet.com.hk",
      entityName: "China Mobile Ltd",
      symbol: "941",
      primaryInstrumentTvlId: "d99ec8aa-7aa7-463f-b686-d9e04589c515"
    },
    {
      _id: "5e74b150d9386e6c5067d4f8",
      articlePubDateMs: 1584662400000,
      title:
        "Moody's cuts global shipping outlook to negative, estimates 30 per cent drop in EBITDA",
      articleUrl:
        "http://ct.moreover.com/?a=41671273201&p=48m&v=1&x=eOLc6Np5HjQVg7EGVZkitg",
      orgTvlId: "c74bb49d-11cd-40ec-9f62-2efcb1a90196",
      sourceName: "Bernama",
      entityName: "Moody's Corp",
      symbol: "MCO",
      primaryInstrumentTvlId: "9ca63da0-8f04-4e35-b853-53b721726dde"
    },
    {
      _id: "5e7423b2d9386e6c506680ba",
      articlePubDateMs: 1584657060000,
      title:
        "Shareholder Alert: Robbins LLP Announces It Is Investigating Sasol Limited (SSL)",
      articleUrl:
        "http://ct.moreover.com/?a=41667395082&p=48m&v=1&x=tdgtTwv9SS-sdXARNoyACA",
      orgTvlId: "a6d57695-6632-421a-ac95-eecadec1fd23",
      sourceName: "Business Wire",
      entityName: "Sasol Ltd",
      symbol: "SOL",
      primaryInstrumentTvlId: "c78c6d0c-5daf-4d91-9ded-0c8c1e76cc03"
    },
    {
      _id: "5e741816d9386e6c50667450",
      articlePubDateMs: 1584653677000,
      title:
        "Latin America's Largest Airline to Halve Pay for Its 43,000 Employees",
      articleUrl:
        "http://ct.moreover.com/?a=41667020998&p=48m&v=1&x=d269_7GrmNIRgAIfdAMyjw",
      orgTvlId: "b07eafc4-ee13-4d37-a648-8ef3baab8795",
      sourceName: "New York Times",
      entityName: "Gol Linhas Aereas Inteligentes SA",
      symbol: "GOLL4",
      primaryInstrumentTvlId: "90e9553e-5195-44c0-bbc5-2e4038b8a487"
    },
    {
      _id: "5e740846d9386e6c506666f8",
      articlePubDateMs: 1584645832000,
      title:
        "Exclusive: Potential Coronavirus Treatment Touted by Trump Already in Shortage-Pharmacists",
      articleUrl:
        "http://ct.moreover.com/?a=41666528422&p=48m&v=1&x=wMM7-V_2mF9nt7NW9FxciQ",
      orgTvlId: "dda038d6-2173-4619-8dd3-2886d7a36b99",
      sourceName: "New York Times",
      entityName: "AbbVie Inc",
      symbol: "ABBV",
      primaryInstrumentTvlId: "3ae4499a-a4a7-4204-a28e-135bac8093c8"
    },
    {
      _id: "5e73e2d2d9386e6c50664f1f",
      articlePubDateMs: 1584638582000,
      title:
        "If Trump doesn't act fast, major airlines will vanish because of the coronavirus outbreak: analyst",
      articleUrl:
        "http://ct.moreover.com/?a=41665491622&p=48m&v=1&x=c5EoCo8JW25wM2AMnH9-Rg",
      orgTvlId: "7edfff2a-7a96-460e-820a-51e5819017f2",
      sourceName: "Yahoo! Hong Kong",
      entityName: "United Airlines Holdings Inc",
      symbol: "UAL",
      primaryInstrumentTvlId: "2f10d1ae-aa65-4abe-acba-47e4a5c99039"
    },
    {
      _id: "5e73c646d9386e6c506635bd",
      articlePubDateMs: 1584632820000,
      title:
        "CORRECTING and REPLACING Morgan Stanley Announces $10 Million Cash Commitment to Support Coronavirus Relief Efforts",
      articleUrl:
        "http://ct.moreover.com/?a=41664671506&p=48m&v=1&x=ppn4hmwaNTz0tWYL4Yje-g",
      orgTvlId: "833b9c15-6068-4047-8ddc-ec2835df8f68",
      sourceName: "Business Wire",
      entityName: "Morgan Stanley",
      symbol: "MS",
      primaryInstrumentTvlId: "a707bbbe-c18c-478d-86cf-aec87ca10e6a"
    },
    {
      _id: "5e7372f3d9386e6c506595bd",
      articlePubDateMs: 1584617081000,
      title:
        "Two generic drugs being tested in US in race to find coronavirus treatments",
      articleUrl:
        "http://ct.moreover.com/?a=41662676807&p=48m&v=1&x=aejn8wI4BD-ERhiVUNYKMg",
      orgTvlId: "78bfe01a-ac20-42bb-a851-c6298663f25b",
      sourceName: "Malay Mail",
      entityName: "Eli Lilly & Co",
      symbol: "LLY",
      primaryInstrumentTvlId: "f255c274-dd30-480b-8fce-2b84f88f92d6"
    },
    {
      _id: "5e7380f6d9386e6c5065b7d2",
      articlePubDateMs: 1584616302000,
      title:
        "U.S. Life Insurers Impose Waiting Periods to Skirt Coronavirus Risk",
      articleUrl:
        "http://ct.moreover.com/?a=41662986819&p=48m&v=1&x=ZahEihiX5-bB2R0PNW0jmg",
      orgTvlId: "5d999534-03a5-406b-81cc-ac6d0ca11a80",
      sourceName: "New York Times",
      entityName: "American International Group Inc",
      symbol: "AIG",
      primaryInstrumentTvlId: "92a1a371-a599-4769-88bf-f55e8d7888fe"
    },
    {
      _id: "5e736a33d9386e6c5065823f",
      articlePubDateMs: 1584615600000,
      title:
        "Cleveland-Cliffs New Labor Agreement with IAM Members Ratified for its Middletown Works",
      articleUrl:
        "http://ct.moreover.com/?a=41662482063&p=48m&v=1&x=zupgnnDMxFflaYqI4xvBog",
      orgTvlId: "fec64811-a1a2-422c-8c19-1e7d89753cb7",
      sourceName: "Business Wire",
      entityName: "AK Steel Holding Corp",
      symbol: "AKS",
      primaryInstrumentTvlId: "bc5e7948-28ed-4812-9866-e97ec69214c7"
    },
    {
      _id: "5e73679cd9386e6c50657c1f",
      articlePubDateMs: 1584615350000,
      title:
        "From Boeing to Tennessee Whiskey, Coronavirus Bailout Requests Top $1 Trillion",
      articleUrl:
        "http://ct.moreover.com/?a=41662430514&p=48m&v=1&x=b2WIry413M2A_wkh4nR0Ug",
      orgTvlId: "346c0e1d-cad9-44e7-b14f-25d58c777b77",
      sourceName: "New York Times",
      entityName: "Southwest Airlines Co",
      symbol: "LUV",
      primaryInstrumentTvlId: "b03aaba5-35e4-488b-9b00-2d43cf2f7eb3"
    },
    {
      _id: "5e735051d9386e6c50654a39",
      articlePubDateMs: 1584609627000,
      title: "Vietnam spins virus crisis to win hearts and minds",
      articleUrl:
        "http://ct.moreover.com/?a=41661906297&p=48m&v=1&x=GIRs2YHadkJaP0-z6ESecw",
      orgTvlId: "ec5a142e-2ae1-4e0a-8718-434444713d2f",
      sourceName: "Asia Times Online",
      entityName: "Visa Inc",
      symbol: "V",
      primaryInstrumentTvlId: "583fe7fe-bd49-48f3-b5c5-965deddf553c"
    },
    {
      _id: "5e734561d9386e6c50652fbe",
      articlePubDateMs: 1584608407000,
      title: "How to Get Paid Leave for Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41661661975&p=48m&v=1&x=l12hde-TgImch9Gm9ug9rg",
      orgTvlId: "9c9d5525-0a38-4a67-885f-6852517d7e26",
      sourceName: "New York Times",
      entityName: "Target Corp",
      symbol: "TGT",
      primaryInstrumentTvlId: "03fc73c3-c16d-4e03-a9f3-595216ebe250"
    },
    {
      _id: "5e740068d9386e6c506661b8",
      articlePubDateMs: 1584608407000,
      title: "Coronavirus Paid Leave: Who Qualifies Under the New Law",
      articleUrl:
        "http://ct.moreover.com/?a=41666299881&p=48m&v=1&x=g57Idk4xWN1npNL6vVSjOg",
      orgTvlId: "9c9d5525-0a38-4a67-885f-6852517d7e26",
      sourceName: "New York Times",
      entityName: "Target Corp",
      symbol: "TGT",
      primaryInstrumentTvlId: "03fc73c3-c16d-4e03-a9f3-595216ebe250"
    },
    {
      _id: "5e72e467d9386e6c50644148",
      articlePubDateMs: 1584577074000,
      title:
        "HIV Drug Combo Fails as Treatment for Severe COVID-19 in China Study",
      articleUrl:
        "http://ct.moreover.com/?a=41659049869&p=48m&v=1&x=nPNcIm3oFTVoQUurzS8wvw",
      orgTvlId: "dda038d6-2173-4619-8dd3-2886d7a36b99",
      sourceName: "New York Times",
      entityName: "AbbVie Inc",
      symbol: "ABBV",
      primaryInstrumentTvlId: "3ae4499a-a4a7-4204-a28e-135bac8093c8"
    },
    {
      _id: "5e72cfaad9386e6c50641255",
      articlePubDateMs: 1584572836000,
      title:
        "What's in the U.S. Coronavirus Aid Bill That Just Passed Congress?",
      articleUrl:
        "http://ct.moreover.com/?a=41658399663&p=48m&v=1&x=hb26fcbXKDFAKS72yH_qHA",
      orgTvlId: "62d63910-b286-4891-ad63-1eec732780a1",
      sourceName: "New York Times",
      entityName: "Darden Restaurants Inc",
      symbol: "DRI",
      primaryInstrumentTvlId: "34051b8f-1847-48a0-bdce-af77205a27c8"
    },
    {
      _id: "5e72cdf4d9386e6c50640f98",
      articlePubDateMs: 1584567351000,
      title:
        "U.S. Airlines Shares Plunge After Cash-Free Washington Rescue Proposal",
      articleUrl:
        "http://ct.moreover.com/?a=41658332210&p=48m&v=1&x=0HGI7Wl01pDm1E09d41ptg",
      orgTvlId: "7edfff2a-7a96-460e-820a-51e5819017f2",
      sourceName: "New York Times",
      entityName: "United Airlines Holdings Inc",
      symbol: "UAL",
      primaryInstrumentTvlId: "2f10d1ae-aa65-4abe-acba-47e4a5c99039"
    },
    {
      _id: "5e72ace6d9386e6c5063f10e",
      articlePubDateMs: 1584561900000,
      title:
        "Brightcove to Evolve the PLAY 2020 Event and Launch PLAY TV, an Innovative Streaming Experience Featuring the Most, Must-Watch Content Focused on Video",
      articleUrl:
        "http://ct.moreover.com/?a=41657263311&p=48m&v=1&x=rupu6WBgVEeksRQCxb5xbg",
      orgTvlId: "02849556-d675-4cec-b9f9-056d32d1cdd1",
      sourceName: "Business Wire",
      entityName: "Brightcove Inc",
      symbol: "BCOV",
      primaryInstrumentTvlId: "b9bef4d6-6ca6-42b9-a094-e0be6406021c"
    },
    {
      _id: "5e72756bd9386e6c5063c6d8",
      articlePubDateMs: 1584545584000,
      title:
        "IMF : The Next Great Depression Has Already Begun - Stock Market Collapse , Covid 19 , Unemployment , Bankruptcy & Crude Oil Price Crashed",
      articleUrl:
        "http://ct.moreover.com/?a=41655667992&p=48m&v=1&x=SFTMVa0ojVhlSCoLevWrtw",
      orgTvlId: "74a11420-15f2-40fa-9e4e-ce61cb292fcf",
      sourceName: "The Coverage",
      entityName: "S&P Global Inc",
      symbol: "SPGI",
      primaryInstrumentTvlId: "ee1d22b7-b0b1-40c5-b2be-ec0a3fde8ff3"
    },
    {
      _id: "5e726549d9386e6c5063b0ea",
      articlePubDateMs: 1584544560000,
      title: "Rite Aid Expands Services in Response to COVID-19",
      articleUrl:
        "http://ct.moreover.com/?a=41655236123&p=48m&v=1&x=rIUs_cCUiEBOK-IL9RZOZA",
      orgTvlId: "dfdd0907-810f-455e-803a-a01b0dac97d7",
      sourceName: "Business Wire",
      entityName: "Rite Aid Corp",
      symbol: "RAD",
      primaryInstrumentTvlId: "be569aa6-0b8b-46a8-a28d-fb8ea33ba932"
    },
    {
      _id: "5e725820d9386e6c5063a24b",
      articlePubDateMs: 1584536400000,
      title:
        "Badger Meter Acclaimed by Frost & Sullivan for Pioneering the Cellular LPWAN Technology for Smart Water Metering",
      articleUrl:
        "http://ct.moreover.com/?a=41654861473&p=48m&v=1&x=SPcInULBqX4oCvyOauwi9w",
      orgTvlId: "d6d25dcd-64be-4284-963c-40ab443d5d37",
      sourceName: "Money Compass",
      entityName: "Badger Meter Inc",
      symbol: "BMI",
      primaryInstrumentTvlId: "8668a70d-a02f-4622-b79d-9920d1bcb63a"
    },
    {
      _id: "5e724267d9386e6c5063804d",
      articlePubDateMs: 1584536400000,
      title: "UGI Corporation Response to COVID-19",
      articleUrl:
        "http://ct.moreover.com/?a=41654333139&p=48m&v=1&x=_89dvmuerntS_7N6pKiLWA",
      orgTvlId: "b73d8524-7d7c-4ee1-8988-6b60c9313278",
      sourceName: "Business Wire",
      entityName: "UGI Corp",
      symbol: "UGI",
      primaryInstrumentTvlId: "6649210c-beec-49a4-8f47-b00520edb261"
    },
    {
      _id: "5e722868d9386e6c5063450b",
      articlePubDateMs: 1584532542000,
      title:
        "Coronavirus Hits Florida Economy in Threat to Trump's Re-election Hopes",
      articleUrl:
        "http://ct.moreover.com/?a=41653622911&p=48m&v=1&x=QG3-GaZoeXLKXNDTuVc_0g",
      orgTvlId: "c74bb49d-11cd-40ec-9f62-2efcb1a90196",
      sourceName: "New York Times",
      entityName: "Moody's Corp",
      symbol: "MCO",
      primaryInstrumentTvlId: "9ca63da0-8f04-4e35-b853-53b721726dde"
    },
    {
      _id: "5e72295ed9386e6c5063471c",
      articlePubDateMs: 1584531356000,
      title:
        "Coronavirus update: Trump plans for big bang stimulus as worldwide infections hit 200K",
      articleUrl:
        "http://ct.moreover.com/?a=41653654942&p=48m&v=1&x=3bEQlSFRoRVENlHQ-R_Grw",
      orgTvlId: "968342a5-dceb-46cc-8623-8429a8728dff",
      sourceName: "Yahoo! Hong Kong",
      entityName: "GrubHub Inc",
      symbol: "GRUB",
      primaryInstrumentTvlId: "9e8874cb-2773-4b87-8004-af10f1d2a050"
    },
    {
      _id: "5e71ed93d9386e6c5062b5d0",
      articlePubDateMs: 1584522012000,
      title: "Drug Companies Will Make a Killing From Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41652367983&p=48m&v=1&x=o0cQMBGWe7A5sOLldBKwNw",
      orgTvlId: "c7e9a000-8887-4ad2-9ed9-8887db89bb9d",
      sourceName: "New York Times",
      entityName: "Sanofi SA",
      symbol: "SAN",
      primaryInstrumentTvlId: "0031f236-60c9-4567-9b34-a7791e2cba5e"
    },
    {
      _id: "5e71bbcbd9386e6c50623a5d",
      articlePubDateMs: 1584507600000,
      title:
        "Bolsonaro tells workers to work or starve as COVID-19 spreads in Brazil",
      articleUrl:
        "http://ct.moreover.com/?a=41651218831&p=48m&v=1&x=FzWtpUTCQs0Fsk6zzzKCLQ",
      orgTvlId: "9b5337c1-e638-456b-a7a8-6abf15b96cbf",
      sourceName: "World Socialist Web Site",
      entityName: "Cinemark Holdings Inc",
      symbol: "CNK",
      primaryInstrumentTvlId: "7f95f7d3-aff8-4781-99f3-296009e29f8b"
    },
    {
      _id: "5e71b103d9386e6c5062217d",
      articlePubDateMs: 1584507180000,
      title: "Gap Inc. Announces Temporary Closure of Stores in North America",
      articleUrl:
        "http://ct.moreover.com/?a=41650960476&p=48m&v=1&x=fFItOvYxFE2zHxKQYww2MQ",
      orgTvlId: "cb2ae342-7f9c-4673-9374-62e75ecd9f26",
      sourceName: "Business Wire",
      entityName: "Gap Inc",
      symbol: "GPS",
      primaryInstrumentTvlId: "55381f2f-5d25-480b-86a6-a82ff1c6e620"
    },
    {
      _id: "5e71a57dd9386e6c50620765",
      articlePubDateMs: 1584502710000,
      title:
        "Canada's 'Big Six' banks to limit hours, close branches in coronavirus fight",
      articleUrl:
        "http://ct.moreover.com/?a=41650619508&p=48m&v=1&x=W8AqlOb0TfNmuFAQI2vydg",
      orgTvlId: "7c798830-236c-4167-882e-c25f079052d7",
      sourceName: "Malay Mail",
      entityName: "Canadian Imperial Bank of Commerce",
      symbol: "CM",
      primaryInstrumentTvlId: "fc3547e6-8fff-4682-82ad-05ac0e596299"
    },
    {
      _id: "5e71eeedd9386e6c5062b9d5",
      articlePubDateMs: 1584489600000,
      title: "China's oil majors to go through crude price slump - S&P",
      articleUrl:
        "http://ct.moreover.com/?a=41652388619&p=48m&v=1&x=bYLG9RqOUQuRso2hspug9g",
      orgTvlId: "9cf1168d-25f1-4326-9b7a-a7242ea555b1",
      sourceName: "Etnet.com.hk",
      entityName: "CNOOC Ltd",
      symbol: "883",
      primaryInstrumentTvlId: "759dfe22-a6c2-4de3-b03a-37bb114ee279"
    },
    {
      _id: "5e716f1ad9386e6c50619522",
      articlePubDateMs: 1584484116000,
      title: "Food, a Basic Pleasure, Is Suddenly Fraught",
      articleUrl:
        "http://ct.moreover.com/?a=41648952657&p=48m&v=1&x=xqvejD8gAfFelO3DnT972w",
      orgTvlId: "968342a5-dceb-46cc-8623-8429a8728dff",
      sourceName: "New York Times",
      entityName: "GrubHub Inc",
      symbol: "GRUB",
      primaryInstrumentTvlId: "9e8874cb-2773-4b87-8004-af10f1d2a050"
    },
    {
      _id: "5e716854d9386e6c50618dc7",
      articlePubDateMs: 1584479700000,
      title:
        " Capri Holdings Limited Provides COVID-19 Related Business Update",
      articleUrl:
        "http://ct.moreover.com/?a=41648746859&p=48m&v=1&x=igFF6x8iApzL33GBpJ9n9Q",
      orgTvlId: "8012f431-de1d-4a89-ae27-f18a6460f488",
      sourceName: "Business Wire",
      entityName: "Capri Holdings Ltd",
      symbol: "CPRI",
      primaryInstrumentTvlId: "662e4738-f334-4f7d-bb46-6ba16cfa1bc3"
    },
    {
      _id: "5e716266d9386e6c506188a1",
      articlePubDateMs: 1584479089000,
      title:
        "Coronavirus update: Trump plans for big bang stimulus as US infections top 5K; NYC braces for lockdown",
      articleUrl:
        "http://ct.moreover.com/?a=41648561395&p=48m&v=1&x=2kQJpHdnfKC1mRZbHUFptA",
      orgTvlId: "968342a5-dceb-46cc-8623-8429a8728dff",
      sourceName: "Yahoo! Hong Kong",
      entityName: "GrubHub Inc",
      symbol: "GRUB",
      primaryInstrumentTvlId: "9e8874cb-2773-4b87-8004-af10f1d2a050"
    },
    {
      _id: "5e715b66d9386e6c50618316",
      articlePubDateMs: 1584478380000,
      title:
        "Buenaventura Advises of Government Restrictions to Contain COVID-19 Outbreak",
      articleUrl:
        "http://ct.moreover.com/?a=41648334792&p=48m&v=1&x=WNjCoAOtEmpkobJamZS-HQ",
      orgTvlId: "6d710645-994a-411c-8bb3-a485881e7965",
      sourceName: "Business Wire",
      entityName: "Compania de Minas Buenaventura SAA",
      symbol: "BVN",
      primaryInstrumentTvlId: "e667cd2c-0093-4022-80ea-196111648dd2"
    },
    {
      _id: "5e712fe0d9386e6c50616587",
      articlePubDateMs: 1584466735000,
      title: "Qué es el Coronavirus y lo que los científicos saben hasta ahora",
      articleUrl:
        "http://ct.moreover.com/?a=41647091265&p=48m&v=1&x=XZ7BZihFGLU7RliB38rOHQ",
      orgTvlId: "0919be79-0de2-4ede-91ad-19d4f72ae359",
      sourceName: "New York Times",
      entityName: "Laboratory Corporation of America Holdings",
      symbol: "LH",
      primaryInstrumentTvlId: "9294edb0-0d28-4320-ad8f-df51ea69a19d"
    },
    {
      _id: "5e711e26d9386e6c506156ff",
      articlePubDateMs: 1584462414000,
      title: "Glued to the Screen in the Time of Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41646631605&p=48m&v=1&x=kf1PgYgSgFX4hCkLAYUl8g",
      orgTvlId: "2c4f20a1-13e7-4eb2-ab7e-41f26204eea9",
      sourceName: "New York Times",
      entityName: "Comcast Corp",
      symbol: "CMCSA",
      primaryInstrumentTvlId: "55c1e5c4-21e5-4011-9c21-9d00695e682c"
    },
    {
      _id: "5e70d49fd9386e6c5060faf6",
      articlePubDateMs: 1584442800000,
      title:
        "Canadian Solar Secures Project Financing and Continues to Invest into Solar Energy Development in Italy",
      articleUrl:
        "http://ct.moreover.com/?a=41644696505&p=48m&v=1&x=VeOTdmJqcBr1khaW0sX22A",
      orgTvlId: "4e108eca-b05f-417c-8e89-1bff148fad1e",
      sourceName: "Money Compass",
      entityName: "Canadian Solar Inc",
      symbol: "CSIQ",
      primaryInstrumentTvlId: "b9d2a03c-ddda-4969-9bf5-4b2678fd1ff8"
    },
    {
      _id: "5e70aed0d9386e6c5060b99e",
      articlePubDateMs: 1584438780000,
      title:
        "Dr. Reddys Laboratories announces the launch of Ziprasidone Mesylate for Injection in the U.S. Market",
      articleUrl:
        "http://ct.moreover.com/?a=41643706536&p=48m&v=1&x=A34dPA3bBCUHOIFzmQ8YlQ",
      orgTvlId: "eddc48f9-6da6-4e68-b821-d7a8bb34303e",
      sourceName: "Business Wire",
      entityName: "Dr.Reddy's Laboratories Ltd",
      symbol: "DRREDDY",
      primaryInstrumentTvlId: "3e1fa6ae-b74f-43e6-b131-0acb4639bc14"
    },
    {
      _id: "5e7064ded9386e6c505ffa47",
      articlePubDateMs: 1584421200000,
      title:
        "Malaysia's Sunway Pyramid Mall cuts RM3 million in annual energy cost for seven consecutive years with Johnson Controls' technology",
      articleUrl:
        "http://ct.moreover.com/?a=41642084030&p=48m&v=1&x=z-VAIvYMFBBv_cIIHDZdjg",
      orgTvlId: "b34a9f14-2e42-4b06-9b9f-ace5b1a999b6",
      sourceName: "Money Compass",
      entityName: "Johnson Controls International PLC",
      symbol: "JCI",
      primaryInstrumentTvlId: "7007bd71-2a73-4bc4-a9c2-79e9ec07b2a8"
    },
    {
      _id: "5e704e18d9386e6c505fc6fb",
      articlePubDateMs: 1584417896000,
      title: "Asian Markets Mixed After Wall Street's Swoon: Live Updates",
      articleUrl:
        "http://ct.moreover.com/?a=41641591554&p=48m&v=1&x=4bpr7-rohwzjoNJPVC70Ug",
      orgTvlId: "be9e1848-15b7-4f29-aede-6004f8cf01c9",
      sourceName: "New York Times",
      entityName: "Sysco Corp",
      symbol: "SYY",
      primaryInstrumentTvlId: "9ab1f6aa-9643-4bee-8397-170bc1e7ff7b"
    },
    {
      _id: "5e703f81d9386e6c505fa18a",
      articlePubDateMs: 1584412364000,
      title:
        "U.S. Under Pressure to Keep Slaughterhouses Open During Virus Outbreak",
      articleUrl:
        "http://ct.moreover.com/?a=41641258821&p=48m&v=1&x=1sVOlUqzdPz__zVtRvQmKg",
      orgTvlId: "58eaca03-95ad-4b58-aaae-7ede272bccdc",
      sourceName: "New York Times",
      entityName: "Tyson Foods Inc",
      symbol: "TSN",
      primaryInstrumentTvlId: "18584482-7f18-45e3-929e-d66c8b347323"
    },
    {
      _id: "5e701d21d9386e6c505f466f",
      articlePubDateMs: 1584405120000,
      title: "Nordstrom Provides Business Update Related to Coronavirus",
      articleUrl:
        "http://ct.moreover.com/?a=41640437712&p=48m&v=1&x=rx-UkciuwYk5OaJHr1parg",
      orgTvlId: "544c3a85-9639-4618-9831-317343456cf4",
      sourceName: "Business Wire",
      entityName: "Nordstrom Inc",
      symbol: "JWN",
      primaryInstrumentTvlId: "263a3c47-19e1-4c43-989a-7b29afe659a9"
    }
  ]
};

context = Object.assign(context, {
  assetsUrl,
  appUrl,
  todaysDate,
  truncateText
});

const template = `${__dirname}/assets/aggregateAlerts`;

app.get("/", function(req, res) {
  newsletter.render(template, context).then(email => {
    res.set("Content-Type", "text/html");
    res.send(email);
  });
});

//create a server object:
app.listen(8080, function() {
  console.log("Listening on port 8080");
});
