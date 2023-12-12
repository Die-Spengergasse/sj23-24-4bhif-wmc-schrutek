import { FireBaseService } from "./firebase-service.js";
import { Product } from "./product-model.js";

export class App {

    private fbs: FireBaseService = new FireBaseService();
    private errorMessage;

    public doSomething(): void {
        this.fbs.loadProducts();
        this.fbs.getProducts().subscribe({ 
            next: (data: Product[]) => {  
                data.forEach((data) => { console.log(data.Name); });
            },
            error: (err) => {
                console.log(err);
                this.errorMessage = err;
            }
        });
    }
}

let app: App = new App();
app.doSomething();