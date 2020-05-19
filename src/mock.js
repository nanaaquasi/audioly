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

export { SERVICES, navItems, testimony, clientLogos, audioSamples };
