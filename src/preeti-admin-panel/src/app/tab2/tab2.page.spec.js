"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const storage_1 = require("@ionic/storage");
const ngx_1 = require("@ionic-native/camera/ngx");
const tab2_page_1 = require("./tab2.page");
describe('Tab2Page', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [storage_1.IonicStorageModule.forRoot()],
            providers: [ngx_1.Camera],
            declarations: [tab2_page_1.Tab2Page],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(tab2_page_1.Tab2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab2.page.spec.js.map