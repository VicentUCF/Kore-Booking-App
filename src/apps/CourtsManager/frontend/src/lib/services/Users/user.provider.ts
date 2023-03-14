import type { User } from "./User";
import { BaseProvider } from "../base.provider";

export class UserProvider extends BaseProvider {

  static url = `${this.baseUrl}/api/users`;

  static async getUsers(): Promise<User[]> {
    const response = await fetch(this.url);
    const users = await response.json();
    return users;
  }

  static async getUser(id: string): Promise<User> {
    const response = await fetch(`${this.url}/${id}`);
    const user = await response.json();
    return user;
  }

  static async createUser(user: User): Promise<User> {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUser = await response.json();
    return newUser;
  }

  static async updateUser(user: User): Promise<User> {
    const response = await fetch(`${this.url}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    return updatedUser;
  }

  static async deleteUser(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
  }
}
