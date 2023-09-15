export type ICarouselItem = {
  id: number,
  title: string,
  content: string,
  button?: {
    caption: string,
    href: string,
  },
};