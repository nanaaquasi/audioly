import fbLogo from '../src/assets/fb.svg';
import latticeLogo from '../src/assets/lattice.svg';
import mtvLogo from '../src/assets/mtv.svg';
import twitterLogo from '../src/assets/twitter.svg';
import getaroundLogo from '../src/assets/getaround.svg';
import adobeLogo from '../src/assets/adobe.svg';

import audioImage_1 from '../src/assets/sample_1.png';
import audioImage_2 from '../src/assets/sample_2.png';
import audioImage_3 from '../src/assets/sample_3.png';
import audioImage_4 from '../src/assets/sample_4.png';

import audioSample_1 from '../src/assets/sample_1.mp3';
import audioSample_2 from '../src/assets/sample_2.mp3';
import audioSample_3 from '../src/assets/sample_3.mp3';
import audioSample_4 from '../src/assets/sample_4.mp3';

import clientImage from './assets/user.jpg';

class Service {
  constructor({ id, imagePath, title, body, buttonText = 'Book Service' }) {
    this.id = id;
    this.imagePath = imagePath;
    this.title = title;
    this.body = body;
    this.buttonText = buttonText;
  }
}

const SERVICES = [
  new Service({
    id: 'tasads',
    body:
      'We can support your original production from audio strategy and direction to music composition and management, sound design, celebrity acquisition, audio recording and mixing, as well as audio integration.',
    title: 'Audio Development',
    imagePath:
      'https://thenextscoop.com/wp-content/uploads/2019/06/audio-1280x720.jpg',
  }),
  new Service({
    id: 'asdhlamfa',
    body:
      'We support international audio production in more than 30 languages through our network of local facilities with fully owned, state-of-the-art studios in key strategic territories.',
    title: 'Audio Localization',
    imagePath:
      'https://mastertcloc.unistra.fr/wp-content/uploads/2017/12/alphacolor-13-181701-1080x675.jpg',
  }),
  new Service({
    id: 'retreamfa',
    body:
      'We also provide broadcasters and OTT providers with subtitling, audio description, dubbing, VO, recording, sound design and mixing, as well as audio QC and conformance.',
    title: 'Media & Entertainment',
    imagePath:
      'https://www.musictech.net/wp-content/uploads/2019/01/creative-sound-design-tips-header@1400x1050.jpg',
  }),
];

const testimony = {
  imagePath: 'https://npontu.com/UI/img/NpontuLogostroke.png',
  body:
    'What I love about working with Audioly is the confidence that I feel when I engage with them. I know the result is going to be first class.',
  author: 'Nana Aquasi',
};

const clientLogos = [
  { id: 'fb', assetName: fbLogo },
  { id: 'twitter', assetName: twitterLogo },
  { id: 'lattice', assetName: latticeLogo },
  { id: 'mtv', assetName: mtvLogo },
  { id: 'getaround', assetName: getaroundLogo },
  { id: 'adobe', assetName: adobeLogo },
];

const navItems = [
  { title: 'Services', link: '/services' },
  { title: 'Our Works', link: '/portfolio' },
  { title: 'Log In', link: '/auth' },
  { title: 'Bookings', link: '/bookings' },
];

const audioSamples = [
  {
    id: 'audio1',
    image: audioImage_1,
    audioFile: audioSample_1,
    title: 'Porche',
    description:
      'Porsche asked audioly to produce a podcast spot that could run on any podcast',
  },
  {
    id: 'audio2',
    image: audioImage_2,
    audioFile: audioSample_2,
    title: 'HSBC',
    description:
      'HSBC worked with audioly to create host reads, network reads and to produce their own creative to run across many podcast networks.',
  },
  {
    id: 'audio3',
    image: audioImage_3,
    audioFile: audioSample_3,
    title: 'HSBC',
    description:
      'Here’s an example of a host reading the same HSBC ad as above - same copy, but show specific, better reflecting the sound of the show, allowing for a more integrated feel.',
  },
  {
    id: 'audio4',
    image: audioImage_4,
    audioFile: audioSample_4,
    title: 'Porter Airlines',
    description:
      'Regional airline, Porter Air worked with TPX and the legendary Alan Cross to create a two-minute endoresed host read spot to run on his show',
  },
];

const pricing = [
  {
    id: 'basic',
    title: 'Basic',
    desc: 'For personal use',
    price: '$100',
    billRate: 'Billed per video',
    services: [
      'Voice Over',
      'Audio Branding',
      '-',
      '3 minutes',
      '1-7 Days',
      '-',
      '1 Language',
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    desc: 'For small marketing team',
    price: '$550',
    billRate: 'Billed monthly',
    services: [
      'Voice Over',
      'Audio Branding',
      'Audio Development',
      '20 minutes',
      '1-3 Days',
      'Project Management',
      '2 Languages',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    desc: 'For large businesses',
    price: 'Custom',
    billRate: 'Reach out for a quote',
    services: [
      'Voice Over',
      'Audio Branding',
      'Audio Development',
      '30 minutes / Choice',
      '1-3 Days',
      'Project Management',
      '5 Languages',
    ],
  },
];

const checkboxes = [
  {
    name: 'Audio Branding',
    key: 'audioBrand',
    label: 'Audio Branding',
  },
  {
    name: 'Audio Development',
    key: 'audioDev',
    label: 'Audio Development',
  },
  {
    name: 'Media & Entertainment',
    key: 'media',
    label: 'Media & Entertainment',
  },
];

const clientDashboardLinks = [
  { id: 1, title: 'Bookings', link: 'client_bookings' },
  { id: 2, title: 'Payments', link: 'payments' },
];

const adminDashboardLinks = [
  { id: 1, title: 'Clients', link: 'clients' },
  { id: 2, title: 'Works', link: 'projects' },
];

const clientInfo = {
  username: 'Nana Aquasi',
  profileImage: clientImage,
};

const adminInfo = {
  username: 'Admin',
  profileImage:
    'https://pbs.twimg.com/profile_images/1242164855416725508/WfpWzO7y_400x400.jpg',
};
const CLIENT_BOOKINGS = [
  {
    id: `${Math.random()}proj`,
    status: 'Active',
    title: 'Podcast Intro',
    dateAdded: '20th May, 2020',
    audio: audioSample_1,
    image: audioImage_1,
  },
  {
    id: `${Math.random()}projs`,
    status: 'Active',
    title: 'Voice Over',
    dateAdded: '20th April, 2020',
    audio: audioSample_2,
    image: audioImage_2,
  },
  {
    id: `${Math.random()}proj`,
    status: 'Completed',
    title: 'Audio Branding',
    dateAdded: '20th March, 2020',
    audio: audioSample_3,
    image: audioImage_3,
  },
  {
    id: `${Math.random()}proj`,
    status: 'Waiting for Verification',
    title: 'Audio Branding',
    dateAdded: '20th March, 2020',
    audio: audioSample_4,
    image: audioImage_4,
  },
  {
    id: `${Math.random()}proj`,
    status: 'Waiting for Verification',
    title: 'Voice Overs',
    dateAdded: '12th May, 2020',
    audio: audioSample_1,
    image: audioImage_1,
  },
  {
    id: `${Math.random()}proj`,
    status: 'Completed',
    title: 'Audio Mixing',
    dateAdded: '6th April, 2020',
    audio: audioSample_2,
    image: audioImage_2,
  },
];

const CLIENT_PAYMENTS = [
  {
    id: `${Math.random()}proj`,
    status: 'Paid',
    service: 'Podcast Intro',
    dateAdded: '20th May, 2020',
    amount: 200,
    type: 'Mobile Money',
    details: 'Marketing Services',
  },
  {
    id: `${Math.random()}projs`,
    status: 'Not Paid',
    service: 'Voice Over',
    dateAdded: '20th April, 2020',
    amount: 200.49,
    type: 'BitCoin',
    details: 'For a Podcast',
  },
  {
    id: `${Math.random()}proj`,
    status: 'Paid',
    service: 'Audio Branding',
    dateAdded: '20th March, 2020',
    amount: 30.65,
    type: 'Mobile Money',
    details: 'Product Advertisement',
  },
  {
    id: `${Math.random()}proj`,
    status: 'Refund',
    service: 'Audio Branding',
    dateAdded: '20th March, 2020',
    amount: 250,
    type: 'Cash Pay',
    details: 'For Presentation',
  },
  {
    id: `${Math.random()}proj`,
    status: 'Failed',
    service: 'Voice Overs',
    dateAdded: '12th May, 2020',
    amount: 120,
    type: 'Credit Card',
    details: 'Church service intro',
  },
  {
    id: `${Math.random()}proj`,
    status: 'Refund',
    service: 'Audio Mixing',
    dateAdded: '6th April, 2020',
    amount: 100,
    type: 'Mobile Money',
    details: 'For a Podcast',
  },
];

const paymentTableHeadings = [
  'Service',
  'Payment Details',
  'Payment Type',
  'Date',
  'Amount',
  'Status',
];

const projectTableHeadings = ['Project', 'Audio File', 'Date', 'Status'];

const INVOICE_DATA = [
  {
    service: 'Podcast Intro',
    type: 'Mobile Money',
    date: '20th May, 2020',
    amount: '$200.99',
  },
  {
    service: 'Voice Over',
    type: 'BitCoin',
    date: '20th April, 2020',
    amount: '$200.99',
  },
  {
    service: 'Audio Branding',
    type: 'Mobile Money',
    date: '20th March, 2020',
    amount: '$300.99',
  },
  {
    service: 'Audio Branding',
    type: 'Cash Pay',
    date: '20th March, 2020',
    amount: '$250.99',
  },
  {
    service: 'Voice Overs',
    type: 'Credit Card',
    date: '12th May, 2020',
    amount: '$120.99',
  },
];

export {
  SERVICES,
  navItems,
  testimony,
  clientLogos,
  audioSamples,
  pricing,
  checkboxes,
  clientDashboardLinks,
  CLIENT_BOOKINGS,
  paymentTableHeadings,
  projectTableHeadings,
  CLIENT_PAYMENTS,
  INVOICE_DATA,
  adminDashboardLinks,
  adminInfo,
  clientInfo,
};
