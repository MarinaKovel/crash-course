import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";
import { catchError, delay, Observable, throwError } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
    }

    products: IProduct[] = []

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products1', {
            // params: new HttpParams().append('limit', 5)
            // params: new HttpParams({ fromString: 'limit=5' })
            params: new HttpParams({ fromObject: {limit: 5} })
        }).pipe(
            delay(200),
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}