import { ref, computed } from 'vue';
import hasOwnProperty from 'src/utils/hasOwnProperty';

export interface Theme {
  fontColor: string
}

const currentThemeName = ref('light');

const themes = {
  light: {
    fontColor: 'text-blue-gray-10',
  },
};

const theme = computed(() => {
  if (hasOwnProperty(themes, currentThemeName.value)) {
    return themes[currentThemeName.value];
  }
  return themes[Object.keys(themes)[0]];
});

const changeTheme = () => {
  currentThemeName.value = currentThemeName.value === 'light' ? 'dark' : 'light';
};

export default {
  theme,
  changeTheme,
};
