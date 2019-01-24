export class User {
  id: number;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(username?, password?, first_name?, last_name?, email?) {
    this.username = username;
    this.password = password;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
  }

}
