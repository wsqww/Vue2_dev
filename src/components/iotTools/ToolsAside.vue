<template>
    <div class="aside">
        <ul class="base_list">
            <template v-for="(v,k) in baseTools">
                <li :key="k" @dragstart="dragstart(v.type, $event)" draggable="true">{{v.type}}</li>
            </template>
        </ul>

        <el-button @click="showDialog" type="success">显示数据</el-button>

        <el-dialog title="页面配置数据" :show-close="true" :visible.sync="dataDialog">
            <div class="show_data">
                <pre v-if="dataDialog" v-highlightjs><code class="JSON">{{toolsList}}</code></pre>
                <!-- <pre>{{toolsList}}</pre> -->
            </div>
            <template v-slot:footer>
                <el-button class="copy_btn" type="primary">提交</el-button>
                <el-button type="danger" @click="downDialog">取消</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script>
// 基础组件 配置
import BaseTools from "@/components/iotTools/config/baseTools";

export default {
    name: "ToolsAside",
    data() {
        return {
            baseTools: BaseTools,

            // 显示 页面信息 数据 Dialog
            dataDialog: false
        };
    },
    computed: {
        toolsList() {
            return this.$store.getters['toolsPage/get_toolsList'];
        }
    },
    methods: {
        // 拖动开始
        dragstart(type, ev) {
            ev.dataTransfer.setData("type", type);
            // console.log("dragstrat");
        },
        // 显示 Dialog
        showDialog() {
            this.dataDialog = true;
        },
        // 隐藏 Dialog
        downDialog() {
            this.dataDialog = false;
        }
    }
};
</script>

<style scoped>
.aside {
    width: 150px;
    padding: 10px;
    border: 1px solid #000;
}
.base_list > li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #33adff;
    color: #fff;
    margin-bottom: 10px;
    cursor: move;
}

.show_data {
    padding: 15px 3px 15px 0;
    background-color: #333;
}
.show_data pre {
    max-height: 360px;
    padding: 0 3px 0 15px;
    overflow: auto;
}
.show_data pre::-webkit-scrollbar {
    background-color: #333;
    width: 9px;
}
.show_data pre::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 10px;
}
</style>
