type Image = {
  id: number;
  url: string;
};
export interface IProducts {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: Image;
}
