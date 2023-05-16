export interface Image {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

export interface ImagesResponse {
  after: string;
  data: Image[];
}

export interface FormAddImageProps {
  closeModal: () => void;
}

export interface NewImageData {
  url: string;
  title: string;
  description: string;
}

export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

export interface CardsProps {
  cards: Card[];
}
