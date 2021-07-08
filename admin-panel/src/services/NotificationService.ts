import { Notify } from 'quasar';

export default {
  showError(message: string) {
    Notify.create({
      message,
      color: 'negative',
      icon: 'report_problem',
      position: 'top-right',
      actions: [
        { label: 'Закрыть', color: 'white' },
      ],
    });
  },

  showSuccess(message: string) {
    Notify.create({
      message,
      color: 'positive',
      icon: 'done',
      position: 'top-right',
      actions: [
        { label: 'Закрыть', color: 'white' },
      ],
    });
  },
};
