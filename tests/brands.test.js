import request from "supertest";
import {app, server} from "../app.js";

describe("Test CRUD products", () =>{
    describe("GET/product", () => {
        test('should return a response with status 200 and type json', async() => {
            const response = await request(app).get('/products').send()
						expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test('should return a response with status 200 and type json', async() => {
            const response = await request(app).get('/products/1').send()
						expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
    })
})

afterAll(()=>{
    server.close()
})
