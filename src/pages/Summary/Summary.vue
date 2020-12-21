<template>
  <div class="overview-container">
    <h1 class="text-center">TỔNG QUAN</h1>
    <div class="row sparkboxes mt-4">
      <div class="col-md-3">
        <div class="box box1">
          <div class="details">
            <h3>{{ responseData.chu_nha }}</h3>
            <h4>CHỦ NHÀ</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box box2">
          <div class="details">
            <h3>{{ responseData.khach_thue }}</h3>
            <h4>KHÁCH THUÊ</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box box3">
          <div class="details">
            <h3>{{ responseData.toa_nha }}</h3>
            <h4>TÒA NHÀ</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box box4">
          <div class="details">
            <h3>{{ responseData.can_ho }}</h3>
            <h4>CĂN HỘ</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <label>Các bên liên quan:</label>
        <div class="box shadow mt-4">
          <div id="chart">
            <apexchart type="radialBar" height="390" :options="chartOptions1" :series="series1"></apexchart>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label>Bộ hợp đồng:</label>
        <div class="box shadow mt-4">
          <div id="chart">
            <apexchart type="radialBar" height="390" :options="chartOptions" :series="series"></apexchart>
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
      responseData: {},
      radialBar: {},
      radialBarMulti: {},
      series: [44, 55, 67],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Bộ Hợp Đồng',
                formatter: () => 249,
              }
            }
          }
        },
        labels: ['HĐ Thuê', 'HĐ Môi Giới', 'HĐ Dịch Vụ'],
      },
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
              }
            }
          }
        },
        colors: ['#0396FF', '#2AFADF', '#FD6585', '#5961F9'],
        labels: ['Chủ nhà', 'Khách thuê', 'Tòa nhà', 'Căn hộ'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: (seriesName, opts) => `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`,
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      },
    };
  },
  created() {
    this.overview();
  },
  methods: {
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
        // this.series1 = [this.responseData.chu_nha, this.responseData.khach_thue, this.responseData.toa_nha, this.responseData.can_ho];
        // this.series = [this.responseData.hd_thue, this.responseData.hd_moi_gioi, this.responseData.hd_dich_vu];
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
  .details {
    margin-left: 15px;
  }
</style>

