var app = new Vue({
    el: '#app',
    data: {
      lists : []
    },

    methods:{
      addList(){
        const newList = {
          name: "",
          status: "creating",
          cards: []
        }
        this.lists.push(newList)
      },

      saveList(list){
        list.status = "saved"
      },


      removeList (index){
        this.lists.splice(index, 1)
      },

      addCard(listCards){
        listCards.push("");
      },

      ver(card, l){
        console.log("hola")
        console.log(card)
        l[card] = "hola vue"
        console.log(l[card]);
      }
      

    }
  })