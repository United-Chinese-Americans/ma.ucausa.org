const STORE = "https://storage.googleapis.com/objects-ma-ucausa-org";

export const LINKS = {
  join: "https://www.zeffy.com/en-US/ticketing/uca-memberships",
  donate: "https://ucausa.org/donate",
  subscribe:
    "https://visitor.r20.constantcontact.com/manage/optin?v=001_4PMpa8yxMUmHEcipv6fs9MCSvVCW1U-pFCE7ZSJVy71shydHcY4IEnBIfmVP08NHrz1XoekiVP3CV1o6BN1KO_KxPFG126LLZgVomX9V0_GtTj2uaSUSY1G_7E_ZbxMsKoZ3uzUS5O_xsYZ6gR4qQ%3D%3D",
  email: "communications@ucausa.org",
};

export const LOGOS = {
  seal: `${STORE}/logo.png`,
  wordmark: `${STORE}/logo2.png`,
  wordmarkWhite: `${STORE}/logo3.png`,
};

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#work", label: "Our work" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export const HERO_SLIDES = [
  { src: `${STORE}/home/hero1.png`, w: 1200, h: 800, caption: "Faneuil Hall and the Custom House Tower, Boston" },
  { src: `${STORE}/home/hero4.png`, w: 636, h: 398, caption: "The Chinatown Gate on a festival day, Boston" },
  { src: `${STORE}/home/hero5.png`, w: 1080, h: 720, caption: "2026 Boston Lunar New Year Festival Gala, City Hall" },
  { src: `${STORE}/home/hero2.png`, w: 1500, h: 1000, caption: "The Boston Public Garden" },
  { src: `${STORE}/home/hero3.png`, w: 2048, h: 1366, caption: "Boston Harbor and the Charles River" },
];

export const SUMMARY =
  "Empowering Chinese Americans across Massachusetts through community service, civic engagement, youth leadership, cultural heritage and community collaboration.";

export const MISSION =
  "UCA Massachusetts is dedicated to enriching and empowering Chinese American communities across Massachusetts through civic engagement, community service, youth leadership, cultural heritage, and community collaboration. As part of United Chinese Americans, UCA Massachusetts works to strengthen community participation, support the next generation of leaders, preserve and share Chinese American heritage, and create stronger connections among Chinese Americans and the broader communities of Massachusetts.";

export const VISION =
  "UCA Massachusetts envisions a connected, engaged, and thriving Chinese American community in Massachusetts where individuals of all generations are empowered to participate, contribute, serve, and lead.";

export const VALUES = [
  { word: "Service", detail: "Serving the community with compassion" },
  { word: "Lead", detail: "Strengthening connections across cultures and generations" },
  { word: "Inspire", detail: "Promoting the well-being and participation of Chinese Americans" },
];

export const VALUES_NOTE =
  "UCA Massachusetts follows the values of United Chinese Americans and is committed to serving the community with compassion, strengthening connections across cultures and generations, and promoting the well-being and participation of Chinese Americans.";

export const ABOUT = [
  {
    title: "Who we are",
    text: "UCA Massachusetts is the Massachusetts chapter of United Chinese Americans, a nationwide nonprofit and nonpartisan civic organization dedicated to enriching and empowering Chinese American communities.",
  },
  {
    title: "Who we bring together",
    text: "Serving Greater Boston and communities across Massachusetts, UCA Massachusetts brings together community leaders, volunteers, young people, nonprofit organizations, businesses, educational institutions, and community partners around a shared commitment to community service, civic engagement, cultural heritage, youth development, and community collaboration.",
  },
  {
    title: "Connecting the Commonwealth",
    text: "Massachusetts is home to a diverse and active Chinese American and Asian American community. UCA Massachusetts works to strengthen connections within these communities while creating opportunities for Chinese Americans to become more engaged in civic and community life. Through cultural celebrations, community service initiatives, educational programs, youth activities, public events, and partnerships with local organizations, the chapter helps connect individuals and organizations throughout the Commonwealth.",
  },
  {
    title: "Heritage we share",
    text: "UCA Massachusetts also works to celebrate and share Chinese and Asian American heritage with the broader community. Events and programs such as Lunar New Year celebrations, AAPI Heritage Month activities, community festivals, charitable initiatives, and cultural programs provide opportunities for community members of different generations and backgrounds to connect.",
  },
  {
    title: "Working together",
    text: "Working alongside UCA National and local community partners, UCA Massachusetts aims to build a stronger, more connected, and more engaged Chinese American community in Massachusetts while contributing positively to the broader society.",
  },
];

export const LEADERS = [
  {
    name: "Hua Wang, PhD",
    zh: "王华",
    title: "Chair, National Board of Directors",
    photo: `${STORE}/team/team1.png`,
    size: 341,
  },
  {
    name: "Qing Liao",
    zh: "廖青",
    title: "Vice Chair",
    photo: `${STORE}/team/team2.png`,
    size: 696,
  },
];

export type Icon = "vote" | "volunteer" | "school" | "festival" | "health" | "handshake";

export const WORK: {
  name: string;
  icon: Icon;
  active: boolean;
  text: string;
  past: string[];
  photo: string;
  alt: string;
}[] = [
  {
    name: "Civic Engagement",
    icon: "vote",
    active: true,
    text: "UCA Massachusetts promotes civic awareness and encourages Chinese Americans to become more involved in community and civic life. Through public programs, community outreach, educational activities, and partnerships, the chapter helps community members better understand local issues, connect with community resources, and participate more actively in society.",
    past: [
      "Community outreach activities",
      "Civic and community engagement programs",
      "Community forums and educational events",
      "AAPI community engagement activities",
    ],
    photo: "/events/2017-lunar-new-year/photo3.jpg",
    alt: "UCA President Haipei Shue speaking on civic engagement at the chapter's 2017 Lunar New Year luncheon",
  },
  {
    name: "Community Service",
    icon: "volunteer",
    active: true,
    text: "UCA Massachusetts brings together volunteers, community leaders, local organizations, and partners to support community service and charitable initiatives. The chapter encourages community members to give back through volunteering, fundraising, food-related activities, community support programs, and collaborative service projects.",
    past: [
      "Lunar New Year Dumpling Event / 饺子宴",
      "Community fundraising activities",
      "Volunteer and charitable initiatives",
      "Community partnership programs",
    ],
    photo: "/events/2017-lunar-new-year/photo6.jpg",
    alt: "Chapter members holding canned food collected for charity at the 2017 Lunar New Year luncheon",
  },
  {
    name: "Youth Leadership",
    icon: "school",
    active: true,
    text: "UCA Massachusetts supports the next generation of Chinese American and Asian American leaders by encouraging young people to participate in volunteering, cultural programs, civic engagement, community service, and leadership opportunities.",
    past: [
      "Youth volunteer participation",
      "Community event volunteering",
      "Youth engagement programs",
      "Collaboration with student and community organizations",
    ],
    photo: "https://picsum.photos/seed/uca-ma-students/1600/1000",
    alt: "Stone college facade under a cloudy sky, standing in for youth programs",
  },
  {
    name: "Culture & Heritage",
    icon: "festival",
    active: true,
    text: "UCA Massachusetts celebrates Chinese and Asian American heritage through cultural events, festivals, community gatherings, performances, educational activities, and public programs. These activities help preserve cultural traditions while sharing them with the broader Massachusetts community.",
    past: [
      "Lunar New Year activities",
      "AAPI Heritage Month programs",
      "Asian American Day Festival",
      "Community cultural celebrations",
    ],
    photo: "/events/2017-lunar-new-year/photo8.jpg",
    alt: "A Chinese folk ensemble playing pipa and erhu by a sunlit window",
  },
  {
    name: "Health & Wellness",
    icon: "health",
    active: false,
    text: "Programs in health and wellness are being planned. Details will be shared here once they are confirmed.",
    past: [],
    photo: "https://picsum.photos/seed/uca-volunteers/1600/1000",
    alt: "Green forest and stream, standing in for health and wellness programs",
  },
  {
    name: "Community Partnerships",
    icon: "handshake",
    active: true,
    text: "UCA Massachusetts works with nonprofit organizations, cultural associations, educational institutions, businesses, community groups, and other partners throughout Massachusetts and Greater Boston. Through these partnerships, the chapter connects community resources and expands the reach of cultural, civic, charitable, and educational programs.",
    past: [
      "AAPI Heritage Month collaborations",
      "Asian American Day Festival",
      "Community fundraising events",
      "Cultural and community programs",
    ],
    photo: "/events/2017-lunar-new-year/photo4.jpg",
    alt: "Organizers and leaders of partner community associations at the 2017 luncheon",
  },
];

const EV = "/events/2017-lunar-new-year";

export const EVENT = {
  title: "Lunar New Year Friendship Luncheon",
  date: "Saturday 18 February 2017",
  place: "Fung Shui Restaurant, Chelmsford",
  source: "https://mp.weixin.qq.com/s/7-zQP0unHocf187FYks7Lw",
  credit: "Report and photographs: 波士顿中文网, 2017",
  en: [
    "Nearly 50 friends from across Massachusetts gathered in Chelmsford for the Lunar New Year luncheon of the UCA Massachusetts organizing committee. Many answered UCA's 2017 Charitable Lunar New Year call and brought canned food and spare clothing for local charities; many came in traditional dress.",
    "Organized by Qing Liao and Guoliang Yu and hosted by Wanru Chen, the luncheon welcomed UCA President Haipei Shue from Washington, DC. He asked how Chinese Americans can restore civility, learn from each other and build a community led by civic engagement rather than party lines.",
    "He shared UCA's three Lunar New Year initiatives: pair the festival with charity and giving back; keep the family reunion and open the doors for dumpling banquets that teach the next generation; and share charity red envelopes with neighbours in need. Leaders of local Chinese associations attended, and the Xi Yang Yang ensemble played folk music.",
  ],
  zh: [
    "2月18日，美国华人全国委员会麻州分会筹备委员会（UCA MA）新春联谊午餐会在Chelmsford的风水餐厅举行，近50位来麻州各地的朋友欢聚一堂，或响应UCA 2017慈善春节的倡议，带来罐装食品或家中多余的衣服捐给慈善机构；或着中国传统的唐装，喜气洋洋。",
    "据组织者之一廖青、俞国梁介绍，此次聚会是UCA在波士顿地区的好友们增进友谊、增强了解、共同探讨华人未来的一次难得的机会。活动由陈婉如主持，专程由首都华盛顿特区赶来的UCA主席薛海培致辞。",
    "他倡议各地华人把庆贺春节与慈善公益相结合；坚持阖家团圆，以开放好客的精神举办饺子春宴，向下一代传授春节传统；并向较为贫困的美国人发放“慈善红包”。波士顿闻名遐迩的喜洋洋乐队为联欢会进行了精彩的民乐演奏。",
  ],
  photos: [
    { src: `${EV}/photo1.jpg`, alt: "Group photograph of nearly 50 guests at the luncheon" },
    { src: `${EV}/photo2.jpg`, alt: "Guests at the teppanyaki tables during the luncheon" },
    { src: `${EV}/photo3.jpg`, alt: "UCA President Haipei Shue at the lectern between red lanterns" },
    { src: `${EV}/photo4.jpg`, alt: "Organizers and guests of honour" },
    { src: `${EV}/photo5.jpg`, alt: "The Xi Yang Yang folk ensemble in traditional dress" },
    { src: `${EV}/photo6.jpg`, alt: "Members holding canned food for charity" },
    { src: `${EV}/photo7.jpg`, alt: "Presentation of the 2016 most popular Chinese-language playwright award" },
    { src: `${EV}/photo8.jpg`, alt: "The folk ensemble performing by the window" },
  ],
};

// Lunar New Year (first day of the first lunar month), for the countdown in Events.
export const LUNAR_NEW_YEARS = [
  { date: "2027-02-06", animal: "Goat" },
  { date: "2028-01-26", animal: "Monkey" },
  { date: "2029-02-13", animal: "Rooster" },
  { date: "2030-02-03", animal: "Dog" },
];
