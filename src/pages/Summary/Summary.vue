<template>
  <div class="overview-container">
    <h1 class="text-center">TỔNG QUAN</h1>
    <div class="row sparkboxes mt-4">
      <div class="col-md-3" v-for="(tabMenu, key) in constants.COMMON_CONST.MENU_TAB_SUMMARY" :key="key">
        <div class="box box1">
          <div>
            <h3 class="mb-0 d-flex justify-content-center">{{ tabMenu }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <label>Các bên liên quan:</label>
        <div class="box shadow mt-4">
          <div id="chart">
            <apexchart type="radialBar" height="380" :options="chartOptions1" :series="series1"></apexchart>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label>Bộ hợp đồng:</label>
        <div class="box shadow mt-4">
          <div id="chart">
            <apexchart type="pie" height="390" :options="chartOptions" :series="seriesContract"></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../core/services/api/api';
import constants from '../../constants/index';

export default {
  name: 'Summary',
  data() {
    return {
      responseData: [],
      radialBar: {},
      radialBarMulti: {},
      chartOptions: constants.COMMON_CONST.CHART_OPTIONS,
      series1: [76, 67, 61, 90],
      chartOptions1: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ['#0396FF', '#2AFADF', '#FD6585', '#5961F9'],
        labels: ['Chủ nhà', 'Khách thuê', 'Tòa nhà', 'Căn hộ'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: (seriesName, opts) => `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`,
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        }],
      },
      constants,
    };
  },
  async beforeMount() {
    await this.overview();
    this.setLabelsContract();
  },
  computed: {
    getContract() {
      const result = [];
      if (this.responseData.length > 0) {
        this.responseData.forEach((item) => {
          if (constants.COMMON_CONST.CONTRACT.indexOf(item.name) !== -1) {
            result.push(item);
          }
        });
      }
      return result;
    },
    seriesContract() {
      const result = [];
      if (this.getContract.length > 0) {
        this.getContract.forEach((item) => {
          result.push(item.value);
        });
      }
      return result;
    },
  },
  methods: {
    setLabelsContract() {
      if (this.getContract.length > 0) {
        this.getContract.forEach((item) => {
          this.chartOptions.labels.push(item.name);
        });
      }
      this.chartOptions.title.text = constants.COMMON_CONST.TITLE_CONTRACT_CHART;
    },
    makeToastMessage(message, status) {
      this.$bvToast.toast(message, {
        title: 'Thông báo',
        variant: status,
        autoHideDelay: 2000,
        solid: true,
      });
    },
    async overview() {
      const response = await api('overview');
      if (response.data.error_code === 0) {
        this.responseData = response.data.data;
      } else {
        this.makeToastMessage(response.data.message, 'danger');
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.overview-container {
  .text-center {
    color: burlywood;
    font-weight: 600;
  }
  .sparkboxes .box {
    padding-top: 10px;
    padding-bottom: 10px;
    text-shadow: 0 1px 1px 1px #666;
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
    position: relative;
    border-radius: 5px;
  }

  .sparkboxes strong {
    position: relative;
    z-index: 3;
    top: -8px;
    color: #fff;
  }

  .sparkboxes .box1 {
    background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
  }

  .sparkboxes .box2 {
    background-image: linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%);
  }

  .sparkboxes .box3 {
    background-image: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);
  }

  .sparkboxes .box4 {
    background-image: linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%);
  }
}
</style>

<style lang='scss' scoped>

</style>
