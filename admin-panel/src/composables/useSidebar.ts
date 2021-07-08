import { useI18n } from 'vue-i18n';
import { IEssentialLink } from 'src/types/UI.d';

export default () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();
  const links: IEssentialLink[] = [
    {
      title: t('sideMenuLinkConsole'),
      icon: 'las la-tachometer-alt',
      link: '/',
    },
    {
      title: t('sideMenuLinkCategories'),
      icon: 'las la-layer-group',
      link: '/categories',
    },
    {
      title: t('sideMenuLinkProducts'),
      icon: 'las la-hamburger',
      link: '/products',
    },
  ];
  return {
    links,
  };
};
