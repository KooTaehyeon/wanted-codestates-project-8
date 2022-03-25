import { atom } from 'recoil';

export const DataState = atom({
  key: 'DataState',
  default: false,
});
export const modalDatas = atom({
  key: 'modalDatas',
  default: false,
});
export const apiDatas = atom({
  key: 'apiDatas',
  default: [],
});
