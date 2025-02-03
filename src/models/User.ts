// export interface User {
//   id: string;
//   username: string;
//   password: string;
// }

// export const users: User[] = [];

export default class User {
  private static idCounter: number = 0;
  private id: number;
  private username: string;
  private password: string;

  constructor(id: number, username: string, password: string) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
  }
}

export const users: User[] = [];
