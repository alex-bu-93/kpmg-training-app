export const randomNumber = (min = 10, max = 100) => Math.random() * (max - min) + min;
export const randomIntNumber = (min = 10, max = 100) => Math.floor(randomNumber(min, max));
export const randomDate = (s = new Date(2012, 0, 1), e = new Date()) => new Date(s.getTime() + Math.random() * (e.getTime() - s.getTime()));
export const randomListItem = list => list[Math.floor(Math.random() * list.length)];
