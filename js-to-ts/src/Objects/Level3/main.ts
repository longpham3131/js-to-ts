import { Expense, Income, PersonAccount } from "./models/PersonAccount";
import { Product, Rating } from "./models/Product";
import { User } from "./models/User";

const users: User[] = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products: Product[] = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
export function ObjectsLevel3() {
  // 1.
  const personAccount: PersonAccount = {
    firstName: "Long",
    lastName: "Hoang Long",
    incomes: [
      {
        id: 1,
        name: "a",
        value: 10,
        des: "description",
      },
      {
        id: 2,
        name: "b",
        value: 20,
        des: "description",
      },
    ],
    expenses: [
      {
        id: 1,
        name: "expense-a",
        value: 10,
        des: "description",
      },
      {
        id: 2,
        name: "expense-b",
        value: 5,
        des: "description",
      },
    ],
    totalIncome: function () {
      return this.incomes.reduce(
        (sum: number, income) => sum + income.value,
        0
      );
    },
    totalExpense: function () {
      return this.expenses.reduce(
        (sum: number, expense) => sum + expense.value,
        0
      );
    },
    accountInfo: function () {
      const fullName = `${this.firstName} ${this.lastName}`;
      const incomes = this.incomes.map(
        (inc: Income, index: number) =>
          ` ${index + 1}. Income ${inc.name}: ${inc.value}$`
      );
      const expenses = this.expenses.map(
        (exps: Expense, index: number) =>
          ` ${index + 1}. Expense ${exps.name}: ${exps.value}$`
      );
      return `${fullName} \n\n Income list: \n ${incomes} \n Expense list: \n ${expenses}`;
    },
    addIncome: function (name: string, value: number, des: string) {
      this.incomes.push({ id: this.incomes.length + 1, name, value, des });
    },
    addExpense: function (name: string, value: number, des: string) {
      this.expenses.push({ id: this.expenses.length + 1, name, value, des });
    },
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    },
  };
  // 2.
  function SignUp(username: string, email: string, password: string): void {
    // check username existed
    const isExisted =
      users.findIndex((usr: User) => usr.username === username) !== -1;
    if (isExisted) {
      console.log(`username ${username} is existed `);
      return;
    }
    users.push({
      username,
      email,
      password,
      _id: "xxxx",
      createdAt: Date().toString(),
      isLoggedIn: false,
    });
    console.log("Sign up success");
  }

  function SignIn(username: string, password: string): void {
    const index = users.findIndex(
      (usr: User) => usr.username === username && usr.password === password
    );
    const isExisted = index !== -1;
    if (isExisted) {
      users[index].isLoggedIn = true;
      console.log("Sign in success");
      return;
    }
    console.log("username or password incorrect");
  }

  // 3.
  function rateProduct(productId: string, userId: string, rate: number): void {
    const prodIndex = products.findIndex((pr: Product) => pr._id === productId);

    if (prodIndex === -1) {
      console.log("Some error...");
      return;
    }

    const ratings = products[prodIndex].ratings;

    const indexUserRated = ratings.findIndex(
      (rate: Rating) => rate.userId === userId
    );
    if (indexUserRated !== -1) {
      ratings[indexUserRated].rate = rate;
    } else {
      ratings.push({ userId, rate });
    }
  }
  function averageRating(productId: string): number {
    const product = products.find((prd: Product) => prd._id === productId);
    if (product) {
      const totalRating = product?.ratings.reduce(
        (sum: number, rating: Rating) => sum + rating.rate,
        0
      );
      return totalRating / product?.ratings.length;
    }
    return 0;
  }

  //4.

  function likeProduct(productId: string, userId: string): void {
    const productIndex = products.findIndex(
      (prd: Product) => prd._id === productId
    );
    if (productIndex !== -1) {
      const likes = products[productIndex].likes;
      likes.includes(userId)
        ? likes.splice(productIndex, 1)
        : likes.push(userId);
    }
  }
}
