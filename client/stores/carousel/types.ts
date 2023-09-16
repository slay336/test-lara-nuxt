export type ICarouselItem = {
  id: number,
  title: string,
  content: string,
  button?: {
    caption: string,
    href: string,
  },
};

export type IServiceCarouselItem = {
  id: number,
  image: string,
  title: string,
  description: string,
};
