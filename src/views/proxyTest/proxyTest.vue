<template>
  <div>
    <p>
      name: <input type="text" v-model="formProxy.name">
    </p>
    <p>
      age: <input type="text" v-model="formProxy.age">
    </p>
    <hr>
    formProxy2:  
    <p>
      name: <input type="text" v-model="formProxy2.name">
    </p>
    <p>
      age: <input type="text" v-model="formProxy2.age">
    </p>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        form: {},
        formProxy: null,
        formProxy2: null
      }
    },
    computed:{},
    created(){
      this.setDataAndProxy();
    },
    methods: {
      setDataAndProxy() {
        this.form = {
          name: 'wsq',
          age: 18
        };
        this.formProxy = new Proxy(this.form, {
            set: function(obj, prop, value){
                console.log(obj, prop, value);
                console.log('旧的值: ', obj[prop]);
                if (obj[prop] !== value) {
                    console.log('改变的 key 是: ', prop);
                }
                obj[prop] = value;
                return true;
            }
        });
        this.formProxy2 = new Proxy(this.form, {
            set: function(obj, prop, value){
                console.log(obj, prop, value);
                console.log('formProxy2 旧的值: ', obj[prop]);
                if (obj[prop] !== value) {
                    console.log('formProxy2 改变的 key 是: ', prop);
                }
                obj[prop] = value;
                return true;
            }
        });
      }
    },
  }
</script>

<style scoped>
  
</style>
