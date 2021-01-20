import addMinutes from 'date-fns/addMinutes';
import careImage from '@assets/img/class-banners/care.png';
import focusImage from '@assets/img/class-banners/focus.png';
import motivationImage from '@assets/img/class-banners/motivation.png';
import stretchImage from '@assets/img/class-banners/stretch.png';

export const classes = [
  {
    date: new Date(),
    image: motivationImage,
    name: 'Morning Meditation',
    tutor: 'Anna-Sophie',
    id: 'mm',
  },
  {
    date: addMinutes(new Date(), 5),
    image: stretchImage,
    name: 'Strong Stretch',
    tutor: 'Sophie-Anna',
    id: 'ss',
  },
  {
    date: addMinutes(new Date(), 10),
    image: focusImage,
    name: 'Soft focus',
    tutor: 'Ann-Sophie',
    id: 'sf',
  },
  {
    date: addMinutes(new Date(), 15),
    image: careImage,
    name: 'Care & Love',
    tutor: 'Sophanna',
    id: 'cl',
  },
];
