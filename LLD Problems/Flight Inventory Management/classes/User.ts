import { v4 as uuidv4 } from "uuid";

class User {
  private readonly name: string;
  private readonly userId: number;
  private readonly funds: number;

  constructor(userId: number, name: string, funds: number) {
    this.userId = userId;
    this.name = name;
    this.funds = funds;
  }
}
