<template>
 <div id="app">
   <guests-form />
   <guests-grid :guests="guests" />
 </div>
</template>
<script>
import GuestsForm from './components/GuestsForm';
import GuestsGrid from './components/GuestsGrid';
import { eventBus } from './main';
import GuestService from './services/GuestService';
export default {
 name: 'app',
 data () {
   return {
     guests: []
   }
 },
 components: {
   'guests-form': GuestsForm,
   'guests-grid': GuestsGrid
 },
 mounted(){
   this.fetchData();
   eventBus.$on('guest-added', guest => this.guests.push(guest));

   eventBus.$on('guest-deleted', id => {
     const index = this.guests.findIndex(guest => guest._id === id);
     this.guests.splice(index, 1);
   })
 },
 methods: {
   fetchData(){
       GuestService.getGuests()
       .then(guests => this.guests = guests);
   }
 }
}
</script>

<!-- this is new -->
