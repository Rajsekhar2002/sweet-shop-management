interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: string;
}
declare const createUser: (user: User) => Promise<number>;
declare const findUserByUsername: (username: string) => Promise<User | null>;
declare const findUserByEmail: (email: string) => Promise<User | null>;
export { createUser, findUserByUsername, findUserByEmail };
//# sourceMappingURL=User.d.ts.map