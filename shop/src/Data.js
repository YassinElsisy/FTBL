let shopItemsData = [
  {
    id: "NMS9A",
    category: "Football Boots",
    brand: "Nike",
    name: "Nike Mercurial Superfly 9 Academy - White",
    price: 125,
    img: "https://productimages.footy.com/63c9b28c7e517bb3ecc7eb5d/2/1920.webp?q=75",
  },
  {
    id: "ADIXSPD",
    category: "Football Boots",
    brand: "Adidas",
    name: "adidas X Speedportal+ Soft Ground Boots",
    price: 370,
    img: "https://productimages.footy.com/63da71ce450e0275e4c847da/0/1920.webp?q=75",
  },
  {
    id: "PUFXPC",
    category: "Football Boots",
    brand: "Puma",
    name: "Puma Future x PowerCat Tokyo Ultimate FG PD25 SE",
    price: 285,
    img: "https://productimages.footy.com/6437f604150b6f87375601c2/0/1920.webp?q=75",
  },
  {
    id: "NBFUD",
    category: "Football Boots",
    brand: "NewBalance",
    name: "New Balance Men's Furon v6+ Destroy AG",
    price: 150,
    img: "https://productimages.footy.com/62a902bcea745915c255650c/0/1920.webp?q=75",
  },
  {
    id: "ADIXCFG",
    category: "Football Boots",
    brand: "Adidas",
    name: "adidas X Crazylight+ FG",
    price: 300,
    img: "https://productimages.footy.com/647e61ec6321bbba8c195e30/0/1920.webp?q=75",
  },
  {
    id: "NBTKV3",
    category: "Football Boots",
    brand: "NewBalance",
    name: "New Balance Men's TEKELA V3+ PRO FG",
    price: 215,
    img: "https://productimages.footy.com/6266a06a2510ba193dd9b1a0/0/1920.webp?q=75",
  },
  {
    id: "PFUDNA",
    category: "Football Boots",
    brand: "Puma",
    name: "Puma FUTURE ULTIMATE DNA FG/AG",
    price: 285,
    img: "https://productimages.footy.com/63acd55a235700c80c01ec0b/0/1920.webp?q=75",
  },
  {
    id: "MIZSR4",
    category: "Football Boots",
    brand: "Mizuno",
    name: "Mizuno Alpha x SR4 Made In Japan FG",
    price: 320,
    img: "https://productimages.footy.com/64387861ba6d3557e998f2eb/0/1920.webp?q=75",
  },
  {
    id: "PUFMFG",
    category: "Football Boots",
    brand: "Puma",
    name: "PUMA Future Match",
    price: 120,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/334013434/puma-future-match-fg-blu-org-123-m-3e16b1e6-fa5e-49d2-a735-b6aca169f676-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "NIMERFZ",
    category: "Football Boots",
    brand: "Nike",
    name: "Nike Mercurial Zoom Superfly 9 Elite",
    price: 300,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/333905294/nike-mercurial-zoom-superfly-9-elite-fg-cop-1022--efdca41e-c546-4587-87d7-39c85dd37de2-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "NPHGRPD",
    category: "Football Boots",
    brand: "Nike",
    name: "Nike Phantom Graphic Pro Dynamic",
    price: 180,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/333976427/nike-phantom-gx-pro-df-fg-black-org-123-a-b2187a3f-9337-48aa-af41-16089136ebfe-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "NPHFGRE",
    category: "Football Boots",
    brand: "Nike",
    name: "Nike Phantom Fusion Graphic Elite",
    price: 280,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/333976357/nike-phantom-gx-elite-df-fg-blue-pink-white-123-a-9ac515dc-223f-4b2e-9dc4-fddec9f58c6e-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "PULTRPRO",
    category: "Football Boots",
    brand: "Puma",
    name: "PUMA Ultra Pro",
    price: 170,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/334013633/puma-ultra-pro-fg-org-wht-123-m-bce61b1a-d33f-4109-8956-607d6d8be6ae-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "ADIPRAC3",
    category: "Football Boots",
    brand: "Adidas",
    name: "adidas Predator Accuracy.3",
    price: 120,
    img: "https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/333999360/adidas-predator-accuracy-3-fg-blk-pnk-223-a-33f8c80c-e026-44a7-b5de-1114af95ccd7-jpgrendition.jpg?imdensity=1&imwidth=1244",
  },
  {
    id: "ADIZPRKN",
    category: "Football Boots",
    brand: "Adidas",
    name: "ADIZERO PRIMEKNIT",
    price: 230,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d3a72da2b654cc195c3ae9c0005c99f_9366/Adizero_PRIMEKNIT_Cleats_Black_GV9288_01_standard.jpg",
  },
  {
    id: "NIMERCV14",
    category: "Football Boots",
    brand: "Nike",
    name: "Nike Mercurial Vapor 14 Elite FG",
    price: 330,
    img: "https://i.ebayimg.com/images/g/pZoAAOSwFh9hYwwI/s-l1200.webp",
  },
  {
    id: "ARSMAW2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Arsenal Mens Away Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64b94dee8171833d9fd2f31b/0/1920.webp?q=75",
  },
  {
    id: "JUVMHOM2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Juventus Mens Home Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/648b09f8d854ad41950c9932/0/1920.webp?q=75",
  },
  {
    id: "MANUMHOM2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Manchester United Mens Home Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64be89fdde02aa3cf2b82582/0/1920.webp?q=75",
  },
  {
    id: "RMMHOM2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Real Madrid Mens Home Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64ad3494ea1d7ec1da362624/0/1920.webp?q=75",
  },
  {
    id: "LIVMAW2324",
    category: "Football Kits",
    brand: "Nike",
    name: "Nike Liverpool Mens Away Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64ae371086071e9aebae1e9b/0/1920.webp?q=75",
  },
  {
    id: "MANCMTH2324",
    category: "Football Kits",
    brand: "Puma",
    name: "Puma Manchester City Mens Third Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64bfdf3ce2398673c95502ab/0/1920.webp?q=75",
  },
  {
    id: "ARSMHOMLS2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Arsenal Mens LS Home Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/6472009b7a627d8c2b457f5b/0/1920.webp?q=75",
  },
  {
    id: "MANUMLSAW2324",
    category: "Football Kits",
    brand: "Adidas",
    name: "adidas Manchester United Mens LS Away Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64bfc72e1e7e458fde18fa4a/0/1920.webp?q=75",
  },
  {
    id: "MANCMHOM2324",
    category: "Football Kits",
    brand: "Puma",
    name: "Puma Manchester City Mens Home Shirt 2023/24",
    price: 160,
    img: "https://productimages.footy.com/64679e634945a4250ecac6de/0/1920.webp?q=75",
  },
  {
    id: "NIGGVPR3",
    category: "Equipment",
    brand: "Nike",
    name: "Nike Goalkeeper Gloves Vapor Grip 3",
    price: 40,
    img: "https://productimages.footy.com/61f2fa79b331cf62b613b979/0/1920.webp?q=75",
  },
  {
    id: "NIG3GG",
    category: "Equipment",
    brand: "Nike",
    name: "Nike Grip 3 Goalkeeper Gloves",
    price: 50,
    img: "https://productimages.footy.com/637e92d58f1bd0a7840b2943/0/1920.webp?q=75",
  },
  {
    id: "ADIXSHL",
    category: "Equipment",
    brand: "Adidas",
    name: "adidas X Shinguard League",
    price: 20,
    img: "https://productimages.footy.com/63e38e5055412d58c5d539b8/0/1920.webp?q=75",
  },
  {
    id: "ADIPREPG",
    category: "Equipment",
    brand: "Adidas",
    name: "adidas Predator Pro Goalkeeper Gloves",
    price: 100,
    img: "https://productimages.footy.com/63df152e8e4de8859aac1603/0/1920.webp?q=75",
  },
  {
    id: "PUFORBF",
    category: "Footballs",
    brand: "Puma",
    name: "Puma Football Serie A Orbita Pro Match Ball",
    price: 150,
    img: "https://productimages.footy.com/648ebc1c016f8d6cbefe40c5/0/1920.webp?q=75",
  },
  {
    id: "PUGKGUG4",
    category: "Equipment",
    brand: "Puma",
    name: "Puma Goalkeeper Gloves Ultra Grip 4",
    price: 20,
    img: "https://productimages.footy.com/6414f85de25f48bd2f6751a3/0/1920.webp?q=75",
  },
  {
    id: "ADIXLGSG",
    category: "Equipment",
    brand: "Adidas",
    name: "adidas X League Shin Guard Adults",
    price: 30,
    img: "https://productimages.footy.com/63e3af38c007b4a9ca1a830b/0/1920.webp?q=75",
  },
  {
    id: "ADIXSN33",
    category: "Equipment",
    brand: "Adidas",
    name: "adidas X League Sh Sn33",
    price: 25,
    img: "https://productimages.footy.com/61f96d73b331cf62b65f4aeb/0/1920.webp?q=75",
  },
  {
    id: "PUFZ1GR",
    category: "Equipment",
    brand: "Puma",
    name: "Puma Future Z One Grip 1 Negative Cut",
    price: 90,
    img: "https://productimages.footy.com/630fb747ee7c797a2152893c/0/1920.webp?q=75",
  },
  {
    id: "PULLFB",
    category: "Footballs",
    brand: "Puma",
    name: "Puma Laliga Football 22/23",
    price: 20,
    img: "https://productimages.footy.com/62ef0adcc643c6cec7eb179a/0/1920.webp?q=75",
  },
  {
    id: "PO1MF",
    category: "Footballs",
    brand: "Puma",
    name: "Puma Orbita 1 EFL Sky Bet Match Football",
    price: 70,
    img: "https://productimages.footy.com/62ef0dd8c643c6cec7eb18cf/0/1920.webp?q=75",
  },
  {
    id: "PUFSFSG",
    category: "Equipment",
    brand: "Puma",
    name: "PUMA Ultra Flex Sleeve Football Shin Guards,",
    price: 25,
    img: "https://productimages.footy.com/6414f858e25f48bd2f6751a2/0/1920.webp?q=75",
  },
  {
    id: "NIFTBFL",
    category: "Footballs",
    brand: "Nike",
    name: "Nike Football Flight",
    price: 150,
    img: "https://productimages.footy.com/60f0e1806a12020dc4597227/1/1920.webp?q=75",
  },
  {
    id: "PUFMGG",
    category: "Equipment",
    brand: "Puma",
    name: "PUMA Future Match Nc Goalkeeper Gloves",
    price: 40,
    img: "https://productimages.footy.com/63c9b77b7e517bb3ecc80384/0/1920.webp?q=75",
  },
  // {
  //   id: "",
  //   category: "",
  //   brand: "",
  //   name: "",
  //   price: 0,
  //   img: "",
  // },
  // {
  //   id: "",
  //   category: "",
  //   brand: "",
  //   name: "",
  //   price: 0,
  //   img: "",
  // },
];

let categories = [
  {
    category: "Football Boots",
  },
  {
    category: "Football Kits",
  },
  {
    category: "Gloves",
  },
  {
    category: "Footballs",
  },
  {
    category: "Shin Pads",
  },
  {
    category: "Sneakers",
  },
  {
    category: "Topwear",
  },
  {
    category: "Bottomwear",
  },
];
