<template>
    <ion-header></ion-header>
    <ion-content color="warning">
        <ion-grid>
            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <h4 class="info-text">
                        <strong>DATEN WERDEN MIT KONTAKTEN GETEILT:</strong>
                    </h4>
                </ion-col>
            </ion-row>
            <br />
            <br />
            <br />
            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <h1>{{ currentPerson }}</h1>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "share",
    data() {
        return { intervalId: 0, currentPerson: "" };
    },
    created() {
        this.intervalId = setInterval(() => {
            this.currentPerson = this.generateName();
        }, 500);
        setTimeout(() => {
            window.location.href = "/finished";
        }, 30000);
    },
    methods: {
        generateName() {
            const firstNames = [
                "Albert",
                "Arnold",
                "Bernard",
                "Carsten",
                "Falk",
                "Ferdinand",
                "Frederick",
                "Heinrich",
                "Henry",
                "Gary",
                "Fritz",
                "Karl",
                "Kurt",
                "Konrad",
                "Kevin",
                "Mathias",
                "Rudolph",

                "Amelia",
                "Frederica",
                "Hilda",
                "Johanna",
                "Karla",
                "Louisa",
                "Luna",
                "Mina",
                "Silke",
                "Ulrika",
                "Tabea",
            ];
            const lastNames = [
                "Weber",
                "Müller",
                "Schmidt",
                "Köhler",
                "Meier",
                "Bauer",
                "Klein",
                "Fischer",
                "Herrmann",
                "Becker",
                "Bauer",
                "Richter",
                "Wolf",
                "Schröder",
                "Meyer",
                "Schäfer",
                "Wagner",
                "Walter",
                "Lange",
                "Krüger",
                "Jung",
                "Stein",
                "Berger",
                "Peters",
                "Schuster",
                "Schubert",
                "Roth",
            ];

            const firstName =
                firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName =
                lastNames[Math.floor(Math.random() * lastNames.length)];

            return `${firstName} ${lastName}`;
        },
    },
    deactivated() {
        if (this.intervalId !== 0) {
            clearInterval(this.intervalId);
        }
    },
});
</script>

<style></style>
