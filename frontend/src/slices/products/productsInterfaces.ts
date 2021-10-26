type Image = {
  id: number;
  url: string;
};
export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  image: Image;
}
