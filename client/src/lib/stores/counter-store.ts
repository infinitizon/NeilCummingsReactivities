// import { action, makeObservable, observable } from "mobx";
import { makeAutoObservable } from "mobx";

export default class CounterStore {
   title = "Counter Store";
   count = 0;
   events: string[] = [
      `Initial value of count is: ${this.count}`
   ]

   // constructor() {
   //    makeObservable(this, {
   //       title: observable,
   //       count: observable,
   //       increment: action,
   //       decrement: action,
   //    })
   // }
   /**
    *
    */
   constructor() {
      makeAutoObservable(this)
   }

   increment = (amount = 1) => {
      this.count += amount
      this.events.push(`Incremented count by ${amount}. New value: ${this.count}`);
   }
   decrement = (amount = 1) => {
      this.count -= amount;
      this.events.push(`Decremented count by ${amount}. New value: ${this.count}`);
   }
   get eventCount() {
      return this.events.length;
   }
}