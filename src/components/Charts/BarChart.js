import { Bar } from 'vue-chartjs'
import database from "../../firebase.js"


export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Prawn omelette","Dry Beef Hor Fun","Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn" ],
            datasets: [{
                label: "Quantity",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#28DAE2"],
                data: [0, 0, 0, 0, 0, 0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'ZiChar Orders Aggregate'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods:{
      fetchItems: function(){
          database.collection('orders').get().then(querySnapShot => {
              querySnapShot.forEach(doc => {
                  this.datacollection.datasets[0].data[0] += parseInt(doc.data().prawn)
                  this.datacollection.datasets[0].data[1] += parseInt(doc.data().dry)
                  this.datacollection.datasets[0].data[2] += parseInt(doc.data().sambal)
                  this.datacollection.datasets[0].data[3] += parseInt(doc.data().pork)
                  this.datacollection.datasets[0].data[4] += parseInt(doc.data().mapo)
                  this.datacollection.datasets[0].data[5] += parseInt(doc.data().cereal)
              })
              this.renderChart(this.datacollection, this.options)
          })
      }
  },
  created() {
    this.fetchItems()
  }
}