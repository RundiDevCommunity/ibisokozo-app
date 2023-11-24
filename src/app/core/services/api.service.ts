import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

import { catchError, retry } from 'rxjs/operators';
// import { JwtService } from './jwt.service';

// import { PaginationConfig } from '../models';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .append('Accept', 'application/json');
    constructor(private http: HttpClient) {}

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(
        path: string,
        // pagination: PaginationConfig = new PaginationConfig(),
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders()
    ): Observable<any> {
        // if (pagination.filters.limit > 0) {
        //   params = params.set('limit', pagination.filters.limit.toString());
        // }
        // if (pagination.filters.offset > 0) {
        //   params = params.set('offset', pagination.filters.offset.toString());
        // }

        if (headers['lazyUpdate']) {
            this.headers = headers;
        }

        return this.http
            .get(`${environment.apiUrl}${path}`, {
                params: params,
                headers: this.headers,
            })
            .pipe(
                retry({ count: 3, delay: 2000, resetOnSuccess: true }),
                catchError(this.formatErrors)
            );
    }

    patch(
        path: string,
        body: object = {},
        headers: HttpHeaders = new HttpHeaders()
    ): Observable<any> {
        if (headers['lazyUpdate']) {
            this.headers = headers;
        }

        return this.http
            .patch(`${environment.apiUrl}${path}`, JSON.stringify(body), {
                headers: this.headers,
            })
            .pipe(catchError(this.formatErrors));
    }

    post(
        path: string,
        body: object = {},
        headers: HttpHeaders = new HttpHeaders()
    ): Observable<any> {
        if (headers['lazyUpdate']) {
            this.headers = headers;
        }

        return this.http
            .post(`${environment.apiUrl}${path}`, JSON.stringify(body), {
                headers: this.headers,
            })
            .pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http
            .delete(`${environment.apiUrl}${path}`)
            .pipe(catchError(this.formatErrors));
    }
}

//Other use case:
