<template>
    <div class="w-full">
        <card class="my-4" color="grey-lighter" text="black" rounded>
            <div class="float-right relative">
                <button 
                    class="text-red-light text-xl rounded-full p-2 px-3 font-bold"
                    @click="remove" title="Dismiss Task"
                >
                    x
                </button>
            </div>
            <h2 @dblclick="titleEdit" class="cursor-pointer uppercase" v-if="!editTitle">
                {{ name }}
            </h2>
            <div v-else>
                <input type="text" class="uppercase text-2xl font-bold p-4" 
                    v-model="name" 
                    @keyup.enter="doneEdit"
                    @blur="doneEdit"
                    @abort="doneEdit"
                    autofocus
                    >
            </div>
            <small @dblclick="descriptionEdit" class="capitalize cursor-pointer" v-if="!editDescription">
                {{ description }}
            </small>
            <div v-else>
                <input type="text" class="uppercase text-xs font-hairline p-4 w-full" 
                    v-model="description" 
                    @keyup.enter="doneEdit"
                    @blur="doneEdit"
                    @abort="doneEdit"
                    autofocus
                    >
            </div>
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
                    <div class="px-1">
                        <button class="p-4 px-8 bg-grey-darkest hover:bg-grey-dark text-white font-bold uppercase rounded text-xl" @click="restartTimer" :disabled="start">
                            Restart
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
            id: { type: String },
        },
        data() {
            return {
                timeStarted: 0,
                start: false,
                interval: null,
                editTitle: false,
                editDescription: false,
            }
        },
        methods: {
            titleEdit() { this.editTitle = true },
            descriptionEdit () { this.editDescription = true },

            doneEdit() {
                this.editTitle = false
                this.editDescription = false
                if (this.name == null || this.name == '')
                    this.name = "Task title"
                if (this.description == null || this.description === '')
                    this.description = "Task description"

            },

            startTimer () {
                this.interval = setInterval(() => { this.timeStarted++ }, 1000)
                this.start = true
            },

            stopTimer () {
                this.start = false
                clearInterval(this.interval)
            },

            restartTimer () {
                this.timeStarted = 0
            },  

            remove() {
                this.$emit('remove', this)
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