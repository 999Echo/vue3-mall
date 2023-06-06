<template>
    <!-- 首页大盘数据 -->
    <el-card class="introduce">
    <div class="order">
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>今日订单数</span>
          </div>
        </template>
        <div class="item">1888</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>今日日活</span>
          </div>
        </template>
        <div class="item">36271</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>转化率</span>
          </div>
        </template>
        <div class="item">20%</div>
      </el-card>
    </div>
    <!-- 订单信息折线图 -->
    <div id='zoom'></div>
  </el-card>
</template>

<script setup>
    import { onMounted,onUnmounted } from 'vue'
    let myChart = null
    onMounted(() => {
        if (window.echarts) {
            // 基于准备好的dom，初始化echarts实例
            myChart = window.echarts.init(document.getElementById('zoom'))

            // 指定图表的配置项和数据
            const option = {
                //标题
            title: {
                text: '系统折线图'
            },
            //提示框
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
                }
            },
            //图例标识
            legend: {
                data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
            },
            //工具栏
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            //各方向边距
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            //横轴
            xAxis: [
                {
                type: 'category',
                boundaryGap: false,
                data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
                }
            ],
            //纵轴
            yAxis: [
                {
                type: 'value'
                }
            ],
            //具体数据
            series: [
                {
                name: '新增注册',
                type: 'line',
                stack: '总量',
                //   通过 areaStyle 设置折线图的填充区域样式，将其设为为 {} 表示使用默认样式
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                name: '付费用户',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                name: '活跃用户',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                name: '订单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                name: '当日总收入',
                type: 'line',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
        } 
    })
    onUnmounted(() => {
        myChart.dispose()
    })
</script>

<style>
/* 一个父级三个子集横向排布的flex布局 */
 .introduce .order {
    display: flex;
    margin-bottom: 50px;
  }
  .introduce .order .order-item {
    flex: 1;
    margin-right: 20px;
  }
  .introduce .order .order-item:last-child{
    margin-right: 0;
  }
  #zoom {
   min-height: 300px;
  }
</style>