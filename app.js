const vm = Vue.createApp({
    data(){
        return{
            firstName: 'john',
            middleName: "",
            lastName: 'Doe',
            url: 'https://www.gooogle.com',
            raw_url: '<a href="https://www.google.com" target="_blank">google</a>',
            age: 20
        }
    },
    methods: { //good for functions that deal with element calls
        increment(){
            this.age++
        },
        updateLastName(msg, event){
            // console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    computed: { //calculates values, does not need to be within methods
        fullName(){
            console.log("fullname called")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch:{
        age(newVal, oldVal){
            setTimeout(()=>{
                this.age = 20
            },3000)
        }
    },
}).mount('#app')

// Vue.createApp({
//     data(){
//         return{
//             firstName: 'jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')

// setTimeout(() => {
//     vm.firstName = 'Bob'
// },2000)