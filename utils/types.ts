export type DevToData = {
  id: number;
  user: { [key: string]: string };
  tags: string;
  social_image: string;
  url: string;
  title: string;
  tag_list: string[];
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
};
