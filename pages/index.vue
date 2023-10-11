<template>
  <div class="w-full bg-slate-800">
    <div class="max-w-sm mx-auto my-0 bg-slate-900 min-h-screen">
      <div class="py-4 text-center">
        <h1 class="text-white font-bold text-gray-700 text-2xl">
          API Nuxt Js To do list
        </h1>
        <p class="text-xs text-white font-medium mt-2">
          Create a list of tasks :
        </p>
      </div>
      <div class="py-4">
        <div class="my-4">
          <div class="flex px-4">
            <input
              v-model="inputTodo"
              type="text"
              placeholder="Add A New Task"
              class="focus:border-b-purple-600 duration text-white text-base bg-transparent border-b appearance-none focus:outline-none w-full"
            >
            <div class="pl-2">
              <button
                class="rounded-lg bg-green-600 w-14 py-2 text-white"
                @click="addTodoList"
              >
                ADD
              </button>
            </div>
          </div>
          <div v-if="selectedTodo" class="flex px-4 pt-4">
            <input
              v-model="selectedTodo.title"
              type="text"
              placeholder="Add A New Task"
              class="focus:border-b-purple-600 duration text-white text-base bg-transparent border-b appearance-none focus:outline-none w-full"
            >
            <div class="pl-2">
              <button class="rounded-lg bg-green-600 w-14 py-2 text-white" @click="editTodo">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div
          v-for="(todo, index) in todolist"
          :key="index"
          class="py-2 px-4 relative"
        >
          <div
            class="bg-slate-800 py-4 px-4 w-full rounded-md"
          >
            <div class="space-x-2 w-full flex justify-between text-white my-2">
              <div class="w-full break-all text-sm">
                {{ todo.title }}
              </div>
              <div class="flex flex-shrink-0 gap-2">
                <div>
                  <button
                    class="text-center items-center bg-blue-600 w-[40px] text-sm rounded"
                    @click="selectedTodo=todo"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    class="text-center items-center bg-red-600 w-[40px] text-sm rounded"
                    @click="deleteTodoList(todo.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      todolist: [],
      inputTodo: null,
      selectedTodo: null
    }
  },

  mounted () {
    this.getTodoList()
  },

  methods: {
    async getTodoList () {
      this.todolist = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/todos'
      )
    },

    async addTodoList () {
      await this.$axios.$post(
        'https://jsonplaceholder.typicode.com/todos', {
          userId: 99,
          title: this.inputTodo
        }
      ).then(() => this.todolist.unshift({
        userId: 99,
        id: this.todolist.length + 1,
        title: this.inputTodo,
        completed: false
      }))
    },

    async editTodo () {
      await this.$axios.$put(
        `https://jsonplaceholder.typicode.com/todos/${this.selectedTodo.id}`, {
          // userId: this.selectedTodo.userId,
          title: this.selectedTodo.title
        }
      ).then(() => {
        const index = this.todolist.findIndex(todo => todo.id === this.selectedTodo.id)
        this.todolist[index].title = this.selectedTodo.title
      })
    },

    async deleteTodoList (id) {
      await this.$axios.$delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => {
          const index = this.todolist.findIndex(todo => todo.id === id)
          this.todolist.splice(index, 1)
        })
    }
  }
}
</script>
