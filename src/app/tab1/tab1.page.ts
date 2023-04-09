import { Component, OnInit } from '@angular/core';
// import { GroceryItem } from '../GroceryItem';
import { ToastController, AlertController } from '@ionic/angular';
// import { ITEMS } from '../Items';
import { GroceriesService } from '../services/groceries.service';
import { InputDialogService } from '../services/input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  title = "Grocery";
  // Array of objects
  //items: GroceryItem[] = ITEMS;
  // items = [
  //   {
  //     name: "Milk",
  //     quantity: 2
  //   },
  //   {
  //     name: "Bread",
  //     quantity: 1
  //   },
  //   {
  //     name: "Banana",
  //     quantity: 3
  //   },
  //   {
  //     name: "Sugar",
  //     quantity: 1
  //   }
  // ];

  // in order to use a service you have to add it as a provider into the constructor
  // constructor(private groceryService: GroceryService, private toastController: ToastController, private alertController: AlertController) { }
  constructor(private dataService: GroceriesService, private inputDialogService: InputDialogService, private toastController: ToastController, private alertController: AlertController) { }

  loadItems(){
    return this.dataService.getItems();
  }

  ngOnInit(){
    //this.groceryService.getGroceries().subscribe((items) => this.items = items)
  }

  async editItem(item: any, index: number) {
    console.log("Editing item - ", item, index);
    const toast = await this.toastController.create({
      message: 'Editing Item - ' + index,
      duration: 1500
    });

    await toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  async removeItem(item: any, index: any) {
    console.log("Removing item -", index);
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index,
      duration: 1500
    });

    //this.items.splice(index, 1);
    await toast.present();
    this.dataService.removeItem(index);
  }

  addItem() {
    console.log("Adding item -");
    this.inputDialogService.showPrompt()
  }
}