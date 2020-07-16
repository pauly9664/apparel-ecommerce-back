"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const storage_1 = require("@ionic/storage");
const ngx_1 = require("@ionic-native/camera/ngx");
const photo_service_1 = require("./photo.service");
describe('PhotoService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        imports: [storage_1.IonicStorageModule.forRoot()],
        providers: [ngx_1.Camera]
    }));
    it('should be created', () => {
        const service = testing_1.TestBed.get(photo_service_1.PhotoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=photo.service.spec.js.map