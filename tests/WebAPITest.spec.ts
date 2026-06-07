import { test, expect, request } from '@playwright/test';
import { log } from 'console';
const loginPayload = { userEmail: "abbeylincoln1@gmail.com", userPassword: "Iamking@000" }

test('Web API Test Suite', async () => {

    
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        { data: loginPayload });
    expect(loginResponse.status()).toBe(200);    
    const loginResponseBody = await loginResponse.json();
    expect(loginResponseBody.message).toEqual('Login Successfully'); 
    const token =  loginResponseBody.token;
    // const body = loginResponseBody;
    // console.log('Login Token:', token);
    // console.log('Login Body:', body);
    //expect(loginResponseBody.userEmail).toEqual(loginPayload.userEmail);
    expect(loginResponseBody).toHaveProperty('userId');
    expect(Object.keys(loginResponseBody)).toHaveLength(3);

})