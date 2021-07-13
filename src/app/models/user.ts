
export interface User {
  user_name: string;
  user_mail: string;
  user_image?: any;
  rating: Rating;
}

export interface Rating {
  comment: string;
  rating: number;
}
