import { Injectable }                  from '@angular/core';
import { HttpClient }                  from '@angular/common/http';
import { NzSelectOptionInterface }                 from 'ng-zorro-antd/select';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap }                         from 'rxjs/operators';
import keyBy                           from 'lodash/keyBy';

declare type Dict = NzSelectOptionInterface[];
declare type DictMap = {[key: string]: NzSelectOptionInterface};

@Injectable({providedIn: 'root'})
export class DictionariesService {

  private _categoryOptions$ = new BehaviorSubject<Dict>([]);
  private _categoryOptionsMap$ = new BehaviorSubject<DictMap>({});
  public set categoryOptions(e: Dict) { this._categoryOptions$.next(e); this._categoryOptionsMap$.next(keyBy(e, 'value')); }
  public get categoryOptions(): Dict { return this._categoryOptions$.getValue(); }
  public get categoryOptions$(): Observable<Dict> { return this._categoryOptions$.asObservable(); }
  public get categoryOptionsMap(): DictMap { return this._categoryOptionsMap$.getValue(); }
  public get categoryOptionsMap$(): Observable<DictMap> { return this._categoryOptionsMap$.asObservable(); }

  private _linkOptions$ = new BehaviorSubject<Dict>([]);
  private _linkOptionsMap$ = new BehaviorSubject<DictMap>({});
  public set linkOptions(e: Dict) { this._linkOptions$.next(e); this._linkOptionsMap$.next(keyBy(e, 'value')); }
  public get linkOptions(): Dict { return this._linkOptions$.getValue(); }
  public get linkOptions$(): Observable<Dict> { return this._linkOptions$.asObservable(); }
  public get linkOptionsMap(): DictMap { return this._linkOptionsMap$.getValue(); }
  public get linkOptionsMap$(): Observable<DictMap> { return this._linkOptionsMap$.asObservable(); }

  private _positionOptions$ = new BehaviorSubject<Dict>([]);
  private _positionOptionsMap$ = new BehaviorSubject<DictMap>({});
  public set positionOptions(e: Dict) { this._positionOptions$.next(e); this._positionOptionsMap$.next(keyBy(e, 'value')); }
  public get positionOptions(): Dict { return this._positionOptions$.getValue(); }
  public get positionOptions$(): Observable<Dict> { return this._positionOptions$.asObservable(); }
  public get positionOptionsMap(): DictMap { return this._positionOptionsMap$.getValue(); }
  public get positionOptionsMap$(): Observable<DictMap> { return this._positionOptionsMap$.asObservable(); }

  private _violationOptions$ = new BehaviorSubject<Dict>([]);
  private _violationOptionsMap$ = new BehaviorSubject<DictMap>({});
  public set violationOptions(e: Dict) { this._violationOptions$.next(e); this._violationOptionsMap$.next(keyBy(e, 'value')); }
  public get violationOptions(): Dict { return this._violationOptions$.getValue(); }
  public get violationOptions$(): Observable<Dict> { return this._violationOptions$.asObservable(); }
  public get violationOptionsMap(): DictMap { return this._violationOptionsMap$.getValue(); }
  public get violationOptionsMap$(): Observable<DictMap> { return this._violationOptionsMap$.asObservable(); }

  constructor(
    private http: HttpClient
  ) {
  }

  getDictionaries$(): Observable<{ [key: string]: Dict }> {
    return this.http.get<{ [key: string]: Dict }>('dictionaries').pipe(
      tap(({categoryOptions}) => this.categoryOptions = categoryOptions),
      tap(({linkOptions}) => this.linkOptions = linkOptions),
      tap(({positionOptions}) => this.positionOptions = positionOptions),
      tap(({violationOptions}) => this.violationOptions = violationOptions),
      catchError(() => throwError({error: 'Не удалось получить справочники'}))
    );
  }
}
