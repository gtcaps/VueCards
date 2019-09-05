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
        
        const newCard = {
          text : "",
          status : "creating"
        }
        
        if(listCards.length == 0){
          listCards.push(newCard);
          console.log(listCards.length);
        }else{
          console.log(listCards);
          var vacio = false;
          listCards.forEach(element => {
            if(element.text == ""){
              vacio = true;
              element.status = "creating";
            }else{
              element.status = "saved";
            }
          });

          if(vacio){
            alert("No debes dejar una actividad vacia!")
          }else{
            listCards.push(newCard);
          }

        }

        console.log(listCards);
      },

      ver(card, l){
        console.log("hola")
        console.log(card)
        l[card] = "hola vue"
        console.log(l[card]);
      },

      removeCard(listCards, ind){
        console.log(ind)
        console.log(listCards.length);
        listCards.splice(ind, 1);
        console.log(listCards.length);
      },
      
      consola(ind){
        alert(ind);
      }

    }
  })