"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
// We haven't created app.ts yet, so this will cause an error!
const app_1 = __importDefault(require("../src/app"));
describe('Auth Endpoints', () => {
    it('should register a new user successfully', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/api/auth/register')
            .send({
            username: 'sweet_user',
            password: 'Password123!',
            email: 'test@example.com'
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
    });
});
//# sourceMappingURL=auth.test.js.map