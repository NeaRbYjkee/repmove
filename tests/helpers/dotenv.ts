import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
    login: {
        email: process.env.LOGIN_EMAIL ?? "",
        password: process.env.LOGIN_PASSWORD ?? ""
    }
};
