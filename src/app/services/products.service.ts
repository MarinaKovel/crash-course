import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(
        private http: HttpClient,
    ) {
    }

    products: IProduct[] = []

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            // params: new HttpParams().append('limit', 5)
            // params: new HttpParams({ fromString: 'limit=5' })
            params: new HttpParams({ fromObject: {limit: 5} })
        })
    }
}