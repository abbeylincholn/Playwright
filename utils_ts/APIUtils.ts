

export class APIUtils {

    apiContext: any;
    loginPayload: String;

    constructor(apiContext:any, loginPayload:String) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

      // Login API call
    async getToken(){
            const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
            {
                data: this.loginPayload
            });
         
            const loginResponseJson = await loginResponse.json();          
            const token = loginResponseJson.token;   
            console.log(token);                     
            return token;
    }


    async createOrder(orderPayload:string){      
        let response = {token : String, orderId : String};
        response.token = await this.getToken();

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
        {
            data: orderPayload,
            headers: {
                'Authorization': response.token,
                'Content-Type': 'application/json'
            }
        })

        const orderResponseJson = await orderResponse.json();
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;             
        return response;      
    }


}

module.exports = { APIUtils };