import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  public form : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _FB: FormBuilder) {
    this.form = this._FB.group({
      name : ['', Validators.required],
      markets: this._FB.array([this.initMarketFields()])
    });
  }

  addNewMarketField() : void
  {
    const control = <FormArray>this.form.controls.markets;
    control.push(this.initMarketFields());
  }  

  removeMarketField(i : number) : void
  {
    const control = <FormArray>this.form.controls.markets;
    control.removeAt(i);
  }
  initMarketFields() : FormGroup
  {
    return this._FB.group({
      name : ['', Validators.required],
      price: 0,
      quantity: 0
    });
  }
  manage(val : any) : void
  {
    console.dir(val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

}
