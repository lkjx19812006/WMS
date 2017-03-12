<style scoped lang="less">
    .content {
        height: 100%;
        /*导航*/
        .side_left {
            width: 200px;
        }
        /*内容主体*/
        .home_content {
            height: 100%;
            margin-left: 210px;
            margin-top: 10px;
            margin-right: 10px;
            /*border: 1px solid #ccc;*/
            padding: 10px;
            background-color: #fff;
        }
    }
</style>
<template>
    <div class="content">
        <!--头部-->
        <div class="right">
            <main-header></main-header>
        </div>
        <!--导航-->
        <div class="side_left fl">
            <side-nav :data="navsData['zh']" :base="'/wms/zh'"> </side-nav>
        </div>
        <!--内容主题-->
        <div class="home_content ">
            <router-view></router-view>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'

    import MainHeader from '../../components/header.vue';
    import SideNav from '../../components/side-nav.vue';
    import navsData from '../../router/router.config.json';
    // import common from '../../common/common.js'
    export default {
        name: 'home-view',
        data() {
            console.log(navsData)
            return {
                lang: this.$route.meta.lang,
                navsData
            }
        },
        components: {
            MainHeader,
            SideNav
        },
        // computed: {
        //     products() {
        //         return this.$store.state.products.all
        //     },
        //     langConfig() {
        //         return require('../../i18n/' + this.$route.meta.lang + '.i18n.json')
        //     }
        // },
        // methods: {
        //     checkout(param) {
        //         this.$router.push('/en')
        //     }
        // },
        // mounted() {
        //     let _self = this;
        //     if (!window.localStorage.KEY) {
        //         this.$router.push('/login');
        //     } else {
        //         common.KEY = window.localStorage.KEY;
        //         common.SID = window.localStorage.SID;
        //         common.getDate(
        //             function () {
        //                 let url = common.urlCommon + common.apiUrl.most
        //                 let body = {
        //                     biz_module: 'userService',
        //                     biz_method: 'getwmsUserInfo'
        //                 }
        //                 url = common.addSID(url);
        //                 body.version = 1;
        //                 body.time = Date.parse(new Date()) + parseInt(common.difTime);
        //                 body.sign = common.getSign('biz_module=' + body.biz_module + '&biz_method=' + body.biz_method + '&time=' + body.time);
        //                 _self.$store.dispatch('getUserInformation', {
        //                     body: body,
        //                     path: url
        //                 }).then(() => { console.log(this.$store.state.user.user) }, () => { });
        //             }
        //         );

        //     }
        // }
    }

</script>