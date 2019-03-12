<template>
    <div class="w-full">
        <card class="my-4" color="grey-lighter" text="black" rounded="">
            <div class="float-right relative">
                <button 
                    class="text-red-light text-xl rounded-full p-2 px-3 font-bold"
                    @click="remove" title="Dismiss Task"
                >
                    x
                </button>
            </div>
            <h2 @dblclick="editTitle" class="cursor-pointer uppercase">
                {{ name }}
            </h2>
            <small class="capitalize">{{ description }}</small>
            <div class="flex phone:flex-col">
                <div class="flex">
                    <span class="text-5xl font-bold">{{ timeElapsed }}</span>
                </div>
                <div class="flex w-full justify-end content-end pt-2">
                    <div class="px-1">
                        <button v-if="!start"
                            class="p-4 pl-6 pr-6 bg-green hover:bg-green-dark hover:text-grey-light text-white font-bold uppercase rounded text-xl"
                            :title="`Start ${name}`" @click="startTimer"
                            >
                            Start
                        </button>

                        <button v-else
                            class="p-4 px-8 bg-red hover:bg-red-dark hover:text-grey-light text-white font-bold uppercase rounded text-xl"
                            :title="`Stop ${name}`" @click="stopTimer"
                            >
                            Stop
                        </button>
                    </div>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        name: 'task',
        props: {
            name: { type: String, required: true },
            description: { type: String },
        },
        data() {
            return {
                timeStarted: 0,
                start: false,
                interval: null
            }
        },
        methods: {
            editTitle() {
                this.name = "Edit Task Name"
            },

            startTimer () {
                this.interval = setInterval(() => { this.timeStarted++ }, 1000)
                this.start = true
            },

            stopTimer () {
                this.start = false
                clearInterval(this.interval)
            },

            remove(event) {
                // this.$emit('remove', event)
            }
        },

        computed: {
            timeElapsed () {
                return moment.utc(this.timeStarted * 1000).format('HH:mm:ss')
            }
        }
    }
</script>

<style scoped>

</style>