<template lang="html">
    <div id="guestsGrid">
        <div class="guest" v-for="guest in guests">
            <h2>{{ guest.name }}</h2>
            <p>{{ guest.email }} </p>
            <p> Has guest checked in? {{guest.checkin}}</p>
            <button v-on:click="deleteGuest(guest._id)">Delete Guest</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';
import GuestService from '@/services/GuestService.js';
export default {
    name: "guests-grid",
    props: ["guests"],


    methods: {
         deleteGuest(id){
            GuestService.deleteGuest(id)
            .then(response => eventBus.$emit('guest-deleted', id));
        }
    }

}
</script>
