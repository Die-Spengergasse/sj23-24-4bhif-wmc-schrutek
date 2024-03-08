import { Observable } from "rxjs";
import { Product } from "../model/product";
import { Injectable } from "@angular/core";

export interface Repository {
    getProducts(): Observable<Product[]>;
}