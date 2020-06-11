<template>
  <div>
    <button @click="exportExcel()">导出</button>
  </div>
</template>

<script>
import Tools from '@stroll/tools'
export default {
  data () {
    return {
      list: [
        {
          "id": 1,
          "timestamp": 375676396994,
          "author": "Melissa",
          "reviewer": "Angela",
          "title": "Gxjxpr Jdfjwf Lxssr Deyonm Moxy Ryxhzp Gxtukv Bvnmvmlo",
          "content_short": "mock data",
          "forecast": 29.75,
          "importance": 2,
          "type": "EU",
          "status": "published",
          "display_time": "1998-10-24 01:53:18",
          "comment_disabled": true,
          "pageviews": 1670,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 2,
          "timestamp": 14742538820,
          "author": "Anthony",
          "reviewer": "Angela",
          "title": "Ueeislixa Heid Dvcspjcuw Rrjyqi Wsqgyjsw",
          "content_short": "mock data",
          "forecast": 22.76,
          "importance": 2,
          "type": "JP",
          "status": "published",
          "display_time": "1990-03-21 05:30:52",
          "comment_disabled": true,
          "pageviews": 328,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 3,
          "timestamp": 1315789932004,
          "author": "Sharon",
          "reviewer": "Brian",
          "title": "Oofunoeoob Xreaujp Ndl Xoin Nyp Iedlihw Jlxyvu Ropkbfi Rljxpyl",
          "content_short": "mock data",
          "forecast": 36.57,
          "importance": 1,
          "type": "CN",
          "status": "deleted",
          "display_time": "1992-08-24 05:55:59",
          "comment_disabled": true,
          "pageviews": 1815,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 4,
          "timestamp": 538203551911,
          "author": "Scott",
          "reviewer": "Joseph",
          "title": "Yxrxsh Vwstgjqg Xqokntiuh Yrhsc Iiiugfk Hmoc",
          "content_short": "mock data",
          "forecast": 0.82,
          "importance": 2,
          "type": "US",
          "status": "draft",
          "display_time": "1982-10-19 21:06:25",
          "comment_disabled": true,
          "pageviews": 1575,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 5,
          "timestamp": 1171719793154,
          "author": "Barbara",
          "reviewer": "Angela",
          "title": "Xvewsrudv Sojbjzssbn Nqcnslcl Fwtx Sertvsqnnf Rxnom Jxhrdyqv Tyvktmi Dqeypf",
          "content_short": "mock data",
          "forecast": 22.84,
          "importance": 2,
          "type": "JP",
          "status": "published",
          "display_time": "1995-06-18 08:45:39",
          "comment_disabled": true,
          "pageviews": 1086,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 6,
          "timestamp": 98663463269,
          "author": "Dorothy",
          "reviewer": "Sharon",
          "title": "Jaeiqv Murhokxs Jeocvo Mdwf Ktgobp",
          "content_short": "mock data",
          "forecast": 84.76,
          "importance": 2,
          "type": "EU",
          "status": "published",
          "display_time": "1995-03-26 02:35:50",
          "comment_disabled": true,
          "pageviews": 1338,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 7,
          "timestamp": 846870802127,
          "author": "Richard",
          "reviewer": "Timothy",
          "title": "Hriiunzrh Jvt Xxtvpzype Gqoe Lkppdfbqh Txrfpgn Ykrloytzg Mgirqldy",
          "content_short": "mock data",
          "forecast": 35.18,
          "importance": 3,
          "type": "CN",
          "status": "draft",
          "display_time": "1973-07-02 19:02:43",
          "comment_disabled": true,
          "pageviews": 1335,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 8,
          "timestamp": 590582195083,
          "author": "George",
          "reviewer": "Helen",
          "title": "Tgcwifqcw Gogg Jsuypoa Hutu Rofnrslx Tntc Xehodrw Qrnsro Bcyilwymy",
          "content_short": "mock data",
          "forecast": 86.58,
          "importance": 2,
          "type": "US",
          "status": "draft",
          "display_time": "1980-06-28 20:47:17",
          "comment_disabled": true,
          "pageviews": 4937,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 9,
          "timestamp": 1548532983975,
          "author": "Brian",
          "reviewer": "Steven",
          "title": "Snasvoim Downll Npwbwionp Ihkdljs Yaxz Eugflokdf Hbevbqu Poukwladr Ahfkxfs",
          "content_short": "mock data",
          "forecast": 47.15,
          "importance": 2,
          "type": "CN",
          "status": "published",
          "display_time": "1993-01-05 23:12:51",
          "comment_disabled": true,
          "pageviews": 446,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 10,
          "timestamp": 1138507667384,
          "author": "Barbara",
          "reviewer": "Sandra",
          "title": "Elmpsxop Weih Bqimmtc Jnuv Stpuwnb Uouobwknbp Ntbq Jhxi Brqa Gmfowqi",
          "content_short": "mock data",
          "forecast": 49.13,
          "importance": 3,
          "type": "JP",
          "status": "draft",
          "display_time": "1995-07-06 04:31:51",
          "comment_disabled": true,
          "pageviews": 3377,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 11,
          "timestamp": 750337088505,
          "author": "Jose",
          "reviewer": "Sharon",
          "title": "Zzlns Pihvy Kgkok Xvcmm Fnryj Qulepu Khhnj Cpmy",
          "content_short": "mock data",
          "forecast": 88.75,
          "importance": 3,
          "type": "US",
          "status": "deleted",
          "display_time": "1974-11-21 19:51:59",
          "comment_disabled": true,
          "pageviews": 1965,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 12,
          "timestamp": 565505138784,
          "author": "Jennifer",
          "reviewer": "Edward",
          "title": "Kcqxrt Niwyrh Oop Dbbcmpjj Xstzd Obbucdnt Pprwq Puuclbxy Azzybptzc",
          "content_short": "mock data",
          "forecast": 97.64,
          "importance": 1,
          "type": "CN",
          "status": "published",
          "display_time": "1987-09-19 16:39:23",
          "comment_disabled": true,
          "pageviews": 488,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 13,
          "timestamp": 1109875948324,
          "author": "Laura",
          "reviewer": "Sharon",
          "title": "Hqbwqboqcb Fjixrn Sga Uioh Mjmxtbkom Nzsenp Wnqnrucee",
          "content_short": "mock data",
          "forecast": 44.47,
          "importance": 2,
          "type": "CN",
          "status": "published",
          "display_time": "2014-08-25 15:04:18",
          "comment_disabled": true,
          "pageviews": 2218,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 14,
          "timestamp": 1039817210594,
          "author": "Paul",
          "reviewer": "Ronald",
          "title": "Femyw Yvzgz Phhiht Svrxuoul Raxdisb Dpkhny Ynjrxxb Oykyn",
          "content_short": "mock data",
          "forecast": 93.17,
          "importance": 2,
          "type": "US",
          "status": "draft",
          "display_time": "2010-01-02 01:53:12",
          "comment_disabled": true,
          "pageviews": 2046,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 15,
          "timestamp": 1330523892167,
          "author": "Lisa",
          "reviewer": "Carol",
          "title": "Nqfdpohr Ovvodhn Agctq Dqtxloqo Wiqkrqds Lfkuy Nefqnwte Ryr",
          "content_short": "mock data",
          "forecast": 47.98,
          "importance": 2,
          "type": "US",
          "status": "draft",
          "display_time": "1999-12-12 15:07:15",
          "comment_disabled": true,
          "pageviews": 3265,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 16,
          "timestamp": 422707252878,
          "author": "Linda",
          "reviewer": "Kenneth",
          "title": "Hxguq Stg Xjpsiq Yhcstrkix Uljbt Xgdnb Vkowujuj Xse",
          "content_short": "mock data",
          "forecast": 20.19,
          "importance": 3,
          "type": "US",
          "status": "draft",
          "display_time": "1971-04-10 04:13:50",
          "comment_disabled": true,
          "pageviews": 564,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 17,
          "timestamp": 5845605622,
          "author": "Jeffrey",
          "reviewer": "Steven",
          "title": "Xzdix Miorfek Hqbkpuu Hwho Fqmhhpist Hitsf Unmh",
          "content_short": "mock data",
          "forecast": 32.68,
          "importance": 1,
          "type": "US",
          "status": "draft",
          "display_time": "1987-11-14 08:09:31",
          "comment_disabled": true,
          "pageviews": 2087,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 18,
          "timestamp": 272475524524,
          "author": "Joseph",
          "reviewer": "Sandra",
          "title": "Wmeim Uncmpq Iolymbvmdc Pkojiqc Utcskuu Qselvstud",
          "content_short": "mock data",
          "forecast": 94.84,
          "importance": 2,
          "type": "JP",
          "status": "draft",
          "display_time": "2012-12-16 01:54:13",
          "comment_disabled": true,
          "pageviews": 745,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 19,
          "timestamp": 590437287594,
          "author": "Karen",
          "reviewer": "Ruth",
          "title": "Gvred Vbdtfn Vbby Viokn Xzjyqri Dqi Dgkd Ttelcmi Spqmqo Sui",
          "content_short": "mock data",
          "forecast": 44.47,
          "importance": 3,
          "type": "JP",
          "status": "deleted",
          "display_time": "2013-11-21 06:36:17",
          "comment_disabled": true,
          "pageviews": 4950,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        },
        {
          "id": 20,
          "timestamp": 749752800977,
          "author": "Anthony",
          "reviewer": "Betty",
          "title": "Ccvicm Cttckbtw Esbeukpqvl Dmnt Eekplww Yjeqrxgc Vqhbyr Axhffgf",
          "content_short": "mock data",
          "forecast": 50.06,
          "importance": 2,
          "type": "US",
          "status": "draft",
          "display_time": "2012-02-04 03:48:46",
          "comment_disabled": true,
          "pageviews": 640,
          "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          "platforms": [
            "a-platform"
          ]
        }
      ],
      rolesList: [
        {
          userId: 123,
          userNum: "admin", // 用户账号
          userName: "admin", // 用户名称
          userDescription: "这个账户是超级管理员账户"
        }, {
          userId: 124,
          userNum: "wxf123", // 用户账号
          userName: "张三", // 用户名称
          userDescription: "这个账户是一级管理员账户"
        }, {
          userId: 125,
          userNum: "cz123", // 用户账号
          userName: "李氏", // 用户名称
          userDescription: "这个账户是二级管理员账户"
        }
      ]
    }
  },
  methods: {
    exportExcel () {
      var tableJson = [
        {
          header: ["", "", "Author", "Readings", "Date"], // sheet表一头部
          multiHeader: [
            ["Id", "Title", "Author", "", ""],
          ],
          merges: ["A1:A2", "B1:B2", "C1:E1"],
          filterKey: ["id", "title", "author", "pageviews", "display_time"], // 表一的数据字段
          list: this.list, // 表一的整体json数据
          sheetName: "sheet1"// 表一的sheet名字
        },
        {
          header: ["", "", "Author", "Readings", "Date"], // sheet表一头部
          multiHeader: [
            ["Id", "Title", "Author", "", ""],
          ],
          merges: ["A1:A2", "B1:B2", "C1:E1"],
          filterKey: ["id", "title", "author", "pageviews", "display_time"], // 表一的数据字段
          list: this.list, // 表一的整体json数据
          sheetName: "sheet2"// 表一的sheet名字
        },
        {
          header: ["序号", "名字", "描述"],
          filterKey: ["userId", "userName", "userDescription"],
          list: this.rolesList,
          sheetName: "sheet5555"
        }
      ]
      Tools.exportExcel({ tableJson })
    }
  }
}
</script>

<style lang="stylus" scoped>
.div
  overflow hidden
  div
    float left
    width 300px
    height 300px
    display inline-block
    margin-right: 9px
    border 1px solid #000
    li
      border 1px solid #cccccc
</style>
