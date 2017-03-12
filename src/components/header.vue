<style lang="less">
    .header {
        height: 100px;
        background-color: #fff;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        /*logo部分*/
        .logo_img {
            width: 80px;
            margin-top: 20px;
            margin-left: 50px;
            float: left;
        }
        /*标题部分*/
        .title {
            float: left;
            padding-top: 60px;
            h1 {
                font-size: 20px;
            }
        }
        /*用户信息部分*/
        .userFunc {
           .userInfo {
               margin-top: 60px;
               margin-right: 20px;
           }
           .btn_wrap {
               margin-top: 20px;
               margin-right: 20px;
           }
            
        }
    }
</style>
<template>
    <div class="header">
        <!--logo部分-->
        <div class="logo fl">
            <img class="logo_img" src="../assets/images/logo.png">
            <div class="title">
                <h1>药材买卖网仓储管理系统V1.0</h1>
            </div>
        </div>
        <!--用户功能部分-->
        <div class="userFunc fr">
            <div class="userInfo fl">
                <span class="iconfont icon-ux13996221517411354"></span> 
                你好,
                <span>xxx</span>
            </div>
            <div class="btn_wrap fr">
                <el-button size="small" style="margin-bottom: 10px;">修改密码</el-button>
                <br>
                <el-button size="small">安全退出</el-button>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "header-view",
        data() {
            return {

            }
        }
    }

</script>