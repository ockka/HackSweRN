import colors from '../colors';

const Videos = {
  kungsholmen: require('./kungsholmen.mp4'),
  vasastan: require('./vasastan.mp4'),
  gardet: require('./gardet.mp4'),
  midsommarkransen: require('./midsommarkransen.mp4'),
  ostermalm: require('./ostermalm.mp4'),
  soder: require('./soder.mp4'),
  solna: require('./solna.mp4')
};

export default Videos;

export const CardColors = {
  natur: colors.blue,
  barer: colors.amaranth,
  kultur: colors.blue_shade,
  restaurang: colors.tiger,
  musik: colors.blue_green,
  traning: colors.amaranth_shade,
  stadspuls: colors.blue_green_shade
};
