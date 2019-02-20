import { ConfigService } from './DAL';
import { searchPridicate, response } from '../interfaces/interfaces';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { debug } from 'util';


describe("ConfigService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ConfigService]
        });
    });

    it(
        'should be initialized',
        inject([ConfigService], (apiService: ConfigService) => {
            expect(apiService).toBeTruthy();
        })
    );
    it(
        'should perform serach correctly',
        inject(
            [ConfigService, HttpTestingController],
            (apiService: ConfigService, backend: HttpTestingController) => {
                let pridicat: searchPridicate = new searchPridicate;
                pridicat.query = "Spongbob";
                expect(apiService.search(pridicat)).toHaveBeenCalled();
                apiService.search(pridicat).toPromise().then((data: response) => {
                    expect(data.items.length).toBeGreaterThan(1);
                },
                    (error: any) => { }
                );
            }
        )
    );
});