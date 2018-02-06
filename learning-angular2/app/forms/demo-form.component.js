System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DemoFormSku;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormSku = (function () {
                function DemoFormSku(fb) {
                    this.myForm = fb.group({
                        'sku': ['', common_1.Validators.required]
                    });
                    this.sku = this.myForm.controls['sku'];
                }
                DemoFormSku.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormSku = __decorate([
                    core_1.Component({
                        selector: 'demo-form-with-validations-explicit',
                        // selector: 'demo-form-sku-builder',
                        templateUrl: 'app/forms/demo-form-component.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormSku);
                return DemoFormSku;
            }());
            exports_1("DemoFormSku", DemoFormSku);
        }
    }
});
//# sourceMappingURL=demo-form.component.js.map