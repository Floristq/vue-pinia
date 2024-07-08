import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
export const useAgeStore = defineStore('dingding',{
    state:()=>{ //data
        return { age: 30 } 
    },
    getters:{ //computed
        gettersAge(state){
            return state.age + 5;
        }
    },
    actions:{ //methods
        addAge(){
            //this指向对应的store仓库
            this.age++ ;
        }
    }
})

//setup store
export const useCounterStore = defineStore('main',()=>{
    const counter = ref(30);//state
    const gettersCounter = computed(()=>{
        return counter.value+5;
    })
    function addCounter(){//action
        counter.value++;
    }
    return {counter,gettersCounter,addCounter}
})