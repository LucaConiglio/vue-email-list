const { createApp } = Vue;


createApp({
  data () {
    return {
        
      listaEmail : [],

      listaEmail2 : [],

      listaEmail3 : [],

      listaEmail3Temporanea : [],

};
  },
  methods : {

    fetchData () {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            
          this.listaEmail.push(resp.data.response);
          
          

          
        });
    },
    fetchData2 () {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            
          this.listaEmail2.push(resp.data.response);
          console.log(resp.data.response);

        });
    },
    fetchData3 () {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            
          this.listaEmail3Temporanea.push(resp.data.response);
          
          if(this.listaEmail3Temporanea.length === 10) {
            this.listaEmail3 = this.listaEmail3Temporanea
          }
        });
    },

    createArray () {

      for (let i = 0; i < 10; i++) {
        this.fetchData()
       }
    },

    createArray2 () {

      for (let i = 0; i < 10; i++) {
        this.fetchData2();
       }
       
    },
    createArray3 () {

      for (let i = 0; i < 10; i++) {
        this.fetchData3();
       }
       
       
    },

  },
  mounted () {
    this.createArray();
    this.createArray2();
    this.createArray3();
  },
computed : {
  

    
  
},
}).mount("#app")