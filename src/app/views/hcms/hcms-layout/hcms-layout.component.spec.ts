import { RouterTestingModule }                                      from '@angular/router/testing';
import { RequestWrapperComponent }                                  from '@widgets/request-wrapper';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { of }                                                       from 'rxjs';
import { NzFooterComponent, NzHeaderComponent }                     from 'ng-zorro-antd/layout';
import { HcmsLayoutComponent }                                      from './hcms-layout.component';
import { HcmsLayoutModule }                                         from './hcms-layout.module';
import { DictionariesService }                                      from '../services/dictionaries';

const FAKE_DICTIONARIES = {
  dict1: ['dict1'],
  dict2: ['dict2']
};

describe('HcmsLayoutComponent', () => {

  let fixture: MockedComponentFixture<HcmsLayoutComponent>;
  let requestWrapper: RequestWrapperComponent;

  beforeEach(() => MockBuilder(HcmsLayoutComponent, HcmsLayoutModule)
    .mock(RequestWrapperComponent)
    .mock(DictionariesService, {getDictionaries$: () => of(FAKE_DICTIONARIES) as any})
    .mock(RouterTestingModule)
  );

  beforeEach(() => {
    fixture = MockRender(HcmsLayoutComponent);
    requestWrapper = ngMocks.find(RequestWrapperComponent).componentInstance;
  });

  it('should create the hcms layout component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(requestWrapper).toBeTruthy();
  });

  it('should have nz-header', () => {
    expect(ngMocks.find(NzHeaderComponent).componentInstance).toBeTruthy();
  });

  it('should have nz-footer', () => {
    expect(ngMocks.find(NzFooterComponent).componentInstance).toBeTruthy();
  });

  it('should have tabset in nz-header', () => {
    const header = ngMocks.find(NzHeaderComponent);
    expect(ngMocks.find(header, 'nz-tabset')).toBeTruthy();
  });

  it('should have 3 tabs', () => {
    const header = ngMocks.find(NzHeaderComponent);
    expect(ngMocks.findAll(header, 'nz-tab').length).toBe(3);
  });

  it('request wrapper should get dictionaries', () => {
    requestWrapper.request$.subscribe(res => expect(res).toEqual(FAKE_DICTIONARIES));
  });

  it('request wrapper should emit responses', () => {
    spyOn(fixture.componentInstance, 'testFn');
    requestWrapper.response.emit('lolkek');
    expect(fixture.componentInstance.testFn).toHaveBeenCalled();
    expect(fixture.componentInstance.testFn).toHaveBeenCalledWith('lolkek');
  });
});
