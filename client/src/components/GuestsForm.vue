<template lang="html">
    <form id="guests-form" v-on:submit="handleSubmit">
        <h2>Add a Guest</h2>
        <div class="formWrap">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name"/>
        </div>
        <div class="formWrap">
            <label for="email">Email:</label>
            <input type="text" id="email" v-model="email"/>

        </div>
        <div>
            <label for="checkin">Checked in?:</label>
            <input type="checkbox" id="checkin" v-model="checkin" />
        </div>
        <input type="submit" value="Save" onclick="this.form.reset()" id="save" />
    </form>
</template>
<script>
import { eventBus } from '../main';
import GuestService from '../services/GuestService';
export default {
    name: "guests-form",
    data(){
        return {
            name: "",
            email: "",
            checkin: false,

        }
    },
    methods: {
        handleSubmit(event){


            event.preventDefault();
            const payload = {
                name: this.name,
                email: this.email,
                checkin: this.checkin
            };
            GuestService.postGuest(payload)
            .then(guest => {
                    eventBus.$emit('guest-added', guest);
            });
        },
         clearForm() {
          document.getElementById("guests-form").reset();

    },



    }


}
</script>
