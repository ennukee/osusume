import { HomeItem } from './interfaces';

const titles = [
  'Hana',
  'Arashi',
  'Trinity',
  'Yorushika',
  'Minami no Tensei ka yo',
  'Amatsuki no Uta',
  'Kimi no Tsuyosa',
  'Dame dame dame dame',
  'Ame ame ame ame ame',
  'Negai titoru desu, kore wa',
];

const randomN = (): number => Math.floor(Math.random() * 4) + 5;

export const generateMockItems = (count: number): HomeItem[] => {
  return [...Array(Math.min(count, 10))].map((_, index) => ({
    color: `#${randomN()}${randomN()}${randomN()}`,
    title: titles[index],
  }));
};
