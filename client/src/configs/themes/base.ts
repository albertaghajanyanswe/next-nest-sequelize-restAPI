import dark from './dark';
import light from './light';

const themes = {
  light,
  dark,
};

export default function getTheme(theme = 'light') {
  return themes[theme as keyof typeof themes];
}
