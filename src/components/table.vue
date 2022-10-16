<template>
  <vui-table rowKey="id" v-bind:columns="columns" v-bind:data="data" v-bind:rowSelection="rowSelection"
    v-on:rowSelect="handleRowSelect">
    <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
      <a href="javascript:;">Edit</a>
      <a href="javascript:;" @click="handleDelete(row.id)">Delete</a>
    </vui-space>
  </vui-table>
</template>

<script>
import { isDuringDate } from '/src/utils/index.js'

export default {
  data() {
    const columns = [
      { key: "interface_name", dataIndex: "interface_name", width: 200, title: "接口名称" },
      { key: "project_type", dataIndex: "project_type", width: 140, title: "项目类型" },
      { key: "connection", dataIndex: "connection", title: "查询连接" },
      {
        key: "date", dataIndex: "date", width: 140, title: "有效日期",
        width: '300',
        filter: {
          options: [
            {
              label: '有效期内',
              value: 'effective_date',
            },
            {
              label: '非有效期内',
              value: 'expired'
            }
          ],
          multiple: true,
          method(value, row) {
            if (!value || !value.length) {
              return true
            }
            if (value.length === 2) {
              return true
            }
            if (value.length === 1 && value.includes('effective_date')) {
              return isDuringDate(row.start_time, row.end_time)
            } else {
              return !isDuringDate(row.start_time, row.end_time)
            }
          },
          value: ['effective_date']
        }
      },
    ];

    const data = [
      {
        "interface_id": "1527150177363",
        "uniq_id": "znjuf1",
        "interface_name": "测试用",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": "26",
        "project_type": "通用",
        "interface_type": "GET",
        "connection_id": "134",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2022-08-09",
        "end_time": "2022-08-31",
        "configure": "杨丹青",
        "configure_time": "2022-08-09 10:20:58",
        "editor": "王宇辉",
        "edit_time": "2022-09-25 15:47:10",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=znjuf1&num=${num}",
        "cache_state": "1",
        "cache_time": "1",
        "key_check": "1",
        "key_value": "klw4uaube6wgqpj",
        "connection": "内网50接口库",
        "date": "2022-08-09 - 2022-08-31"
      },
      {
        "interface_id": "1527150177362",
        "uniq_id": "kkbbd3",
        "interface_name": "时间类型测试-PG",
        "purpose": "测试",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2022-07-05",
        "end_time": "2023-07-31",
        "configure": "黄海珍",
        "configure_time": "2022-07-05 16:23:40",
        "editor": "岳梦婕",
        "edit_time": "2022-08-08 15:54:24",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=kkbbd3",
        "cache_state": "0",
        "cache_time": "0",
        "key_check": "1",
        "key_value": "uecjj9btiat9sp2xl4ltx3w9ecowrdll",
        "connection": "接口测试",
        "date": "2022-07-05 - 2023-07-31"
      },
      {
        "interface_id": "1527150177361",
        "uniq_id": "qunb64",
        "interface_name": "时间类型测试-mysql",
        "purpose": "测试",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "通用",
        "interface_type": "GET",
        "connection_id": "134",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2022-07-05",
        "end_time": "2023-07-31",
        "configure": "黄海珍",
        "configure_time": "2022-07-05 16:16:37",
        "editor": "",
        "edit_time": "0000-00-00 00:00:00",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=qunb64",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "内网50接口库",
        "date": "2022-07-05 - 2023-07-31"
      },
      {
        "interface_id": "1527150177360",
        "uniq_id": "4njec1",
        "interface_name": "充值月榜玩家批量查询",
        "purpose": "充值月榜玩家批量查询",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2022-04-08",
        "end_time": "2023-06-30",
        "configure": "黄海珍",
        "configure_time": "2022-04-08 14:14:21",
        "editor": "",
        "edit_time": "0000-00-00 00:00:00",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=4njec1&action_date=${action_date}&user_list=${user_list}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2022-04-08 - 2023-06-30"
      },
      {
        "interface_id": "1527150177359",
        "uniq_id": "8yxif4",
        "interface_name": "野蛮人2-组队邀请pvp次数接口",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2021-11-29",
        "end_time": "2023-03-31",
        "configure": "杨平盛",
        "configure_time": "2021-11-29 16:43:38",
        "editor": "杨平盛",
        "edit_time": "2022-01-17 11:10:45",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=8yxif4&team_id=${team_id}&team_zid=${team_zid}&team_sid=${team_sid}&start_time=${start_time}&end_time=${end_time}&zid=${zid}&sid=${sid}&role_id=${role_id}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2021-11-29 - 2023-03-31"
      },
      {
        "interface_id": "1527150177358",
        "uniq_id": "xbgnd",
        "interface_name": "测试传参",
        "purpose": "11",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "通用",
        "interface_type": "GET",
        "connection_id": "134",
        "demand_presenter": "11",
        "demand_depart": "11",
        "start_time": "2021-11-16",
        "end_time": "2023-11-16",
        "configure": "杨丹青",
        "configure_time": "2021-11-16 17:55:19",
        "editor": "杨丹青",
        "edit_time": "2021-11-16 18:00:04",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=xbgnd&zids=${zids}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "内网50接口库",
        "date": "2021-11-16 - 2023-11-16"
      },
      {
        "interface_id": "1527150177357",
        "uniq_id": "kg4ww1",
        "interface_name": "测试os参数不完整",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2021-11-10",
        "end_time": "2023-12-01",
        "configure": "王国超",
        "configure_time": "2021-11-10 14:29:03",
        "editor": "王国超",
        "edit_time": "2021-11-10 14:29:59",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=kg4ww1&product_id=${product_id}&data_type=${data_type}&account_id=${account_id}&zid=${zid}&sid=${sid}&data_os=${data_os}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2021-11-10 - 2023-12-01"
      },
      {
        "interface_id": "1527150177356",
        "uniq_id": "xmgsp",
        "interface_name": "野蛮人2-岛屿、徽章、建筑",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "野蛮2",
        "start_time": "2021-09-22",
        "end_time": "2023-03-03",
        "configure": "杨平盛",
        "configure_time": "2021-09-22 17:33:37",
        "editor": "黄海珍",
        "edit_time": "2022-03-29 14:29:00",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=xmgsp&zid=${zid}&sid=${sid}&role_id=${role_id}&event=${event}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2021-09-22 - 2023-03-03"
      },
      {
        "interface_id": "1527150177355",
        "uniq_id": "arvnv3",
        "interface_name": "bbq2野蛮人2赛季奖杯排行接口",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "野蛮人2",
        "start_time": "2021-07-01",
        "end_time": "2023-03-03",
        "configure": "杨平盛",
        "configure_time": "2021-07-06 14:24:06",
        "editor": "胡俊男",
        "edit_time": "2022-06-20 17:05:13",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=arvnv3&zid=${zid}&sid=${sid}&role_id=${role_id}&start_season_id=${start_season_id}&end_season_id=${end_season_id}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2021-07-01 - 2023-03-03"
      },
      {
        "interface_id": "1527150177354",
        "uniq_id": "dn5cu4",
        "interface_name": "梦三复刻一夫当关",
        "purpose": "",
        "server_ip": "",
        "server_ip_group": null,
        "project_type": "测试",
        "interface_type": "GET",
        "connection_id": "141",
        "demand_presenter": "",
        "demand_depart": "",
        "start_time": "2021-06-10",
        "end_time": "2099-07-20",
        "configure": "黄海珍",
        "configure_time": "2021-06-15 10:25:50",
        "editor": "黄海珍",
        "edit_time": "2021-10-18 16:02:19",
        "is_del": "0",
        "hits": "0",
        "interface_url": "http://dataapi.op.dianhun.cn/index.php/interfaceManage/interfaceForCommonUse?uniq_id=dn5cu4&cid=${cid}&activity_id=${activity_id}",
        "cache_state": "0",
        "cache_time": null,
        "key_check": "0",
        "key_value": null,
        "connection": "接口测试",
        "date": "2021-06-10 - 2099-07-20"
      }
    ]

    // const filterData = exclude(data,['date'])

    // console.log(filterData)
    // 实现什么样的效果 表格列能够可以按条件筛选 这里只对接口是否有效进行筛选
    // 手动设置几个接口数据 每个数据对象都有一个dateSection属性 
    const rowSelection = {
      getComponentProps(row) {
        return {
          disabled: row.name === "Joe Black",
        };
      },
    };

    return {
      columns,
      data,
      rowSelection,
    };
  },
  methods: {
    handleRowSelect(value) {
      console.log(value);
    },
    handleDelete(id) {
      this.data = this.data.filter((item) => item.id !== id);
    },
  },
};
</script>
