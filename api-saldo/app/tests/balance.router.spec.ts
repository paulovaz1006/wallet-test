import request from "supertest";
import server from "../server";
import { AppDataSource } from '../../data-source';
import {v4 as uuid} from "uuid";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('/balance', () => {
  it('should create a new balance (POST)', async () => {
    const payload = {
      balance: 2000,
      user_id: uuid()
    }

    const response = await request(server).post('/balance').send(payload);
    
    expect(response.statusCode).toEqual(200);
  });
  
  it('should create a new balance (GET)', async () => {
    const payload = {
      params: {
        user_id: '1',
      }
    }

    const response = await request(server).get('/balance/1').send(payload);
    
    expect(response.statusCode).toEqual(200);
  });

  it('should create a new balance (GET)', async () => {
    const payload = {
        amount: 200,
    }

    const response = await request(server).put('/balance/1').send(payload);
    
    expect(response.statusCode).toEqual(200);
  });
});
