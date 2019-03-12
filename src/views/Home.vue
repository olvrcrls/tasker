<template>
    <div>
        <Card class="w-full" color="white" hover>
            <div class="flex">
                <article class="w-full">
                    <section class=" my-4">
                        <span class="text-4xl text-grey-dark uppercase font-black">
                            Tasker
                        </span>
                    </section>
                    <section>
                        <button class="p-4 bg-indigo-light text-grey-lighter rounded uppercase tracking-wide font-bold hover:shadow-md" @click="addTask">
                            ADD ANOTHER
                        </button>
                    </section> <!-- Add Task Button -->
                    <section class="my-4">
                        <task v-for="task in tasks" :key="task.id" 
                            :name="task.name"
                            :description="task.description"
                            @remove="removeTask($event)"
                        />
                    </section>
                </article>
            </div>
        </Card>
    </div>
</template>

<script>
import randomWords from 'random-words'
    export default {
        name: 'home',
        data () {
            return {
                tasks: [
                    { 
                        name: randomWords({ exactly: 1, wordsPerString: 2, join: ' ' }), 
                        description: randomWords({ exactly: 5, join: ' ' }), 
                        id: 1 
                    }
                ],
            }
        },

        methods: {
            addTask() {
                this.tasks.push({
                    name: randomWords({ exactly: 1, wordsPerString: 2, join: ' ' }),
                    description: randomWords({ exactly: 5, join: ' ' }),
                    id: this.tasks.length + 1
                })
            },
            removeTask(removeTask) {
                this.tasks = this.tasks.filter((task) => task.name != removeTask.name)
                if (this.tasks.length < 1)
                    this.tasks.push({ 
                        name: randomWords({ exactly: 1, wordsPerString: 2, join: ' ' }), 
                        description: randomWords({ exactly: 5, join: ' ' }), 
                        id: 1 
                    })
            }
        }
    }
</script>

<style scoped>

</style>