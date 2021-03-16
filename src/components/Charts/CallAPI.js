import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                data: [],
                label: "West",
                borderColor:"#3e95cd",
                fill: false
            }, {
                data: [],
                label: "National",
                borderColor:"#8e5ea2",
                fill: false
            },{
                data: [],
                label: "East",
                borderColor:"#3cba9f",
                fill: false
            },{
                data: [],
                label: "Central",
                borderColor:"#e8c3b9",
                fill: false
            },{
                data: [],
                label: "South",
                borderColor:"#c45850",
                fill: false
            }, {
                data: [],
                label: "North",
                borderColor:"#28DAE2",
                fill: false
            }]
        },
        options: {
            title: {
              display: true,
              text: 'Line Graph of 24hr PSI over Singapore'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data["items"].forEach(item => { 
                this.datacollection.labels.push(item["timestamp"])
                this.datacollection.datasets[0].data.push(item["readings"]["psi_twenty_four_hourly"]["west"])
                this.datacollection.datasets[1].data.push(item["readings"]["psi_twenty_four_hourly"]["national"])
                this.datacollection.datasets[2].data.push(item["readings"]["psi_twenty_four_hourly"]["east"])
                this.datacollection.datasets[3].data.push(item["readings"]["psi_twenty_four_hourly"]["central"])
                this.datacollection.datasets[4].data.push(item["readings"]["psi_twenty_four_hourly"]["south"])
                this.datacollection.datasets[5].data.push(item["readings"]["psi_twenty_four_hourly"]["north"])
            })
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}