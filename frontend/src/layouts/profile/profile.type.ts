export interface Store {
  getState: () => {
    auth: {
      user: {
        id: string;
        token: string;
        address: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
      };
    };
  };
}

export interface Reviews {
  _id: string;
  placeId: string;
  userName: string;
  rating: number;
  comment: string;
  updatedAt: string;
}
