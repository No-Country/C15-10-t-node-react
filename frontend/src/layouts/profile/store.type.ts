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
