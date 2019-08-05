import bg01 from "../../images/bg01.png";
import bg02 from "../../images/bg02.png";
import bg03 from "../../images/bg03.png";
import bg04 from "../../images/bg04.png";
import bg05 from "../../images/bg05.png";
import bg06 from "../../images/bg06.png";

import iuzeit_white from "../../images/iuzeit-white.svg";
import stallion_white from "../../images/stallion-white.svg";
import GP_white from "../../images/GP-white.svg";
import hcp_white from "../../images/hcp-white.svg";
import fusemap_white from "../../images/fusemap_white.svg";
import ikarus_white from "../../images/ikarus.svg";

import products01 from "../../images/products/Ikarus/Screen1.png";
import products02 from "../../images/products/Ikarus/Screen2.png";
import products03 from "../../images/products/Ikarus/Screen3.png";
import products04 from "../../images/products/Ikarus/Screen4.png";
import products05 from "../../images/products/Ikarus/Screen4.png";
import products06 from "../../images/products/Ikarus/Screen6.png";

import fusemapScreen1 from "../../images/products//Fusemap/Screen1.png";
import fusemapScreen2 from "../../images/products//Fusemap/Screen2.png";
import fusemapScreen3 from "../../images/products//Fusemap/Screen3.png";
import fusemapScreen4 from "../../images/products//Fusemap/Screen4.png";
import fusemapScreen5 from "../../images/products//Fusemap/Screen5.png";
import fusemapScreen6 from "../../images/products//Fusemap/Screen6.png";

import GPScreen1 from "../../images/products/Georgia Pacific/Screen1.png";
import GPScreen2 from "../../images/products/Georgia Pacific/Screen2.png";
import GPScreen3 from "../../images/products/Georgia Pacific/Screen3.png";
import GPScreen4 from "../../images/products/Georgia Pacific/Screen4.png";
import GPScreen5 from "../../images/products/Georgia Pacific/Screen5.png";
import GPScreen6 from "../../images/products/Georgia Pacific/Screen6.png";

import hcpScreen1 from "../../images/products/HCP/Screen1.png";
import hcpScreen2 from "../../images/products/HCP/Screen2.png";
import hcpScreen3 from "../../images/products/HCP/Screen3.png";
import hcpScreen4 from "../../images/products/HCP/Screen4.png";
import hcpScreen5 from "../../images/products/HCP/Screen5.png";
import hcpScreen6 from "../../images/products/HCP/Screen6.png";

import iuzeitScreen1 from "../../images/products/iuzeit/Screen1.png";
import iuzeitScreen2 from "../../images/products/iuzeit/Screen2.png";
import iuzeitScreen3 from "../../images/products/iuzeit/Screen3.png";
import iuzeitScreen4 from "../../images/products/iuzeit/Screen4.png";
import iuzeitScreen5 from "../../images/products/iuzeit/Screen5.png";
import iuzeitScreen6 from "../../images/products/iuzeit/Screen6.png";

import stallionScreen1 from "../../images/products/Stallion/Screen1.png";
import stallionScreen2 from "../../images/products/Stallion/Screen2.png";
import stallionScreen3 from "../../images/products/Stallion/Screen3.png";
import stallionScreen4 from "../../images/products/Stallion/Screen4.png";
import stallionScreen5 from "../../images/products/Stallion/Screen5.png";
import stallionScreen6 from "../../images/products/Stallion/Screen6.png";

const ikarusScreens = [
  products01,
  products02,
  products03,
  products04,
  products05,
  products06,
];

const bgImages = {
  '01': bg01,
  '02': bg02,
  '03': bg03,
  '04': bg04,
  '05': bg05,
  '06': bg06,
};

const fusemapScreens = [
  fusemapScreen1,
  fusemapScreen2,
  fusemapScreen3,
  fusemapScreen4,
  fusemapScreen5,
  fusemapScreen6,
];

const GPScreens = [
  GPScreen1,
  GPScreen2,
  GPScreen3,
  GPScreen4,
  GPScreen5,
  GPScreen6,
];

const hcpScreens = [
  hcpScreen1,
  hcpScreen2,
  hcpScreen3,
  hcpScreen4,
  hcpScreen5,
  hcpScreen6,
];

const iuzeitScreens = [
  iuzeitScreen1,
  iuzeitScreen2,
  iuzeitScreen3,
  iuzeitScreen4,
  iuzeitScreen5,
  iuzeitScreen6,
];

const stallionScreens = [
  stallionScreen1,
  stallionScreen2,
  stallionScreen3,
  stallionScreen4,
  stallionScreen5,
  stallionScreen6,
];

const productScreens = {
  '01': iuzeitScreens,
  '02': GPScreens,
  '03': stallionScreens,
  '04': fusemapScreens,
  '05': hcpScreens,
  '06': ikarusScreens,
};

const logos = {
  '01': iuzeit_white,
  '02': GP_white,
  '03': stallion_white,
  '04': fusemap_white,
  '05': hcp_white,
  '06': ikarus_white,
};

const subtitles = {
  '01': 'Shaping the future of the online purchase journey.',
  '02': 'Transforming how logistics gets done.',
  '03': 'Taking field analytics to a whole new level.',
  '04': 'Thinking smarter about how we power the world.',
  '05': 'Setting the standard in healthcare—literally.',
  '06': 'Redefining the business marketplace.'
};

const descriptions = {
  '01': 'With iuzeit, finding the product that meets a user’s exact lifestyle need is only a few clicks away.  We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface.',
  '02': 'In partnership with Army of Bees, we designed a new check-in/check-out system that allowed Georgia-Pacific to quickly give their logisitics team an efficiency boost.  We built the product tailor-fit for outdoor professionals, and even designed it to minimzie sun glare.',
  '03': 'Working with Stallion meant taking data visualization to the next level.  By doing a deep-dive into the world of oilfield services, we built a robust interface that simplified complex data streams and allowed snapshot statistics of vital KPIs.',
  '04': 'Working with Fusemap was a chance to redefine how we interpret basic, everyday tasks.  Using their cloud-based tool, we captured and vizualized the complex operational tasks of automated and AI-powered building management.',
  '05': 'Designing for a multi-billion user industry, we evolved the Healthcare Compliance Pros online suite into a feature-rich tool that helps maintain strict legal compliance, engages users, and fosters long-term retention.',
  '06': 'Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.'
};

export {
  bgImages,
  productScreens,
  logos,
  subtitles,
  descriptions,
}