export interface NewsHeader {
  title: string;
  url: string;
}

export interface RollingNews {
  press_name: string;
  news_header: NewsHeader[];
}
