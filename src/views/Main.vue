<template>
    <ion-page>
        <ion-header> </ion-header>
        <ion-content :color="BackColor">
            <ion-grid>
                <ion-row>
                    <ion-col size="12" class="ion-text-center">
                        <h4 class="info-text">
                            <strong>FOTO IN CLOUD GESPEICHERT</strong>
                        </h4>
                    </ion-col>
                </ion-row>
                <br />
                <br />
                <br />
                <ion-row class="ion-align-items-center">
                    <ion-col size="12" class="ion-text-center">
                        <h4 class="info-text" v-if="started">
                            FOTO WIRD AN KONTAKTE GESENDET
                        </h4>
                        <ion-button
                            v-if="!started"
                            @click="start()"
                            class="start"
                            color="danger"
                            >START</ion-button
                        >
                        <ion-text class="countdown" v-if="started">{{
                            countdownText
                        }}</ion-text>
                    </ion-col>
                </ion-row>
                <br />
                <br />
                <ion-row v-if="started">
                    <ion-col size="12" class="ion-text-center">
                        <h4 class="info-text">
                            <strong>AKTUELLE KOORDINATEN:</strong> <br />
                            {{ coordinates[0] }}, {{ coordinates[1] }}
                        </h4>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
import useSound from "vue-use-sound";

export default defineComponent({
    name: "main-page",
    setup() {
        const [tick] = useSound("/assets/Tick.mp3");
        const [tock] = useSound("/assets/Tock.mp3");

        return { tick, tock };
    },
    data() {
        const countdownTime = new Date();
        countdownTime.setMinutes(2);
        countdownTime.setSeconds(0);
        return {
            countdownText: "",
            started: false,
            countdownTime,
            BackColor: "light",
            intervalId: 0,
            coordinates: [50.681926, 7.104203],
        };
    },
    methods: {
        start() {
            this.started = true;
            this.updateCountdown();
            this.intervalId = setInterval(() => {
                this.updateCountdown();
            }, 1000);
        },
        updateCountdown() {
            this.countdownTime.setSeconds(this.countdownTime.getSeconds() - 1);
            const minutes = this.countdownTime.getMinutes();
            const seconds = this.countdownTime.getSeconds();
            this.countdownText = `${minutes}:${
                seconds >= 10 ? seconds : "0" + seconds
            }`;

            if (this.countdownTime.getSeconds() % 2 === 0) {
                this.BackColor = "danger";
            } else {
                this.BackColor = "light";
            }

            if (seconds % 15 == 0) {
                this.tock();
            } else {
                this.tick();
            }

            if (seconds == 0 && minutes == 0) {
                clearInterval(this.intervalId);
                this.end();
            }
        },
        end() {
            window.location.href = "/share";
        },
    },
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
    },
    deactivated() {
        if (this.intervalId !== 0) {
            clearInterval(this.intervalId);
        }
    },
});
</script>

<style>
.body {
    background-color: var(--ion-background-color);
}
ion-button {
    font-size: 200%;
    height: 100px;
}
.countdown {
    font-size: 1000%;
}
h4.info-text {
    font-size: 98%;
}
</style>
