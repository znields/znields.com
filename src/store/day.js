import { observable } from 'mobx';

const dayStore = observable({
  day: (new Date()).getHours() < 19 && (new Date()).getHours() > 8,
});

export default dayStore;
