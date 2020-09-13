<template>
    <div class="review" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <el-form class="droup_form" @submit.native.prevent label-width="auto">
            <Draggable class="droup_group" v-model="toolsList" group="droup_group">
                <div
                    v-for="(v, index) in toolsList"
                    :key="v.key"
                    :class="{
                        tools_item: true,
                        active: v.key == activeToolsKey,
                    }"
                    @click="selectTools(v.key)"
                >
                    <component :is="`Tools${v.type}`" v-model="v.value" :item="v"></component>
                    <i class="del_tools el-icon-delete" @click.stop="delTools(index)"></i>
                </div>
            </Draggable>
        </el-form>
    </div>
</template>

<script>
// 拖拽
import Draggable from "vuedraggable";
// 基础组件 配置
import BaseTools from "@/components/iotTools/config/baseTools";
// 小组件
import ToolsSwitch from "@/components/iotTools/tools/Switch";
import ToolsSlider from "@/components/iotTools/tools/Slider";
import ToolsInputNumber from "@/components/iotTools/tools/InputNumber";
import ToolsLoops from "@/components/iotTools/tools/Loops";
import ToolsPanel from "@/components/iotTools/tools/Panel";
import ToolsLayout from "@/components/iotTools/tools/Layout";

export default {
    name: "ToolsPage",
    components: {
        Draggable,
        ToolsSwitch,
        ToolsSlider,
        ToolsInputNumber,
        ToolsLoops,
        ToolsPanel,
        ToolsLayout
    },
    data() {
        return {
            BaseTools
        };
    },
    computed: {
        toolsList: {
            get() {
                return this.$store.getters['toolsPage/get_toolsList'];
            },
            set(data) {
                this.$store.commit("toolsPage/set_toolsList", data);
            }
        },
        activeToolsKey() {
            return this.$store.getters['toolsPage/get_activeToolsKey'];
        }
    },
    methods: {
        // 在目的地
        dragover(ev) {
            ev.preventDefault();
            // console.log("dragover");
        },
        // 离开目的地，未放下元素
        dragleave(ev) {
            ev.dataTransfer.setData("type", "");
            // console.log("dragleave");
        },
        // 目的地 放下元素
        drop(ev) {
            let type = ev.dataTransfer.getData("type");
            console.log("page-->>>", type);
            if (!(type in this.BaseTools)) return;
            let key = `${type}_${new Date().getTime()}`;
            // 解构赋值 解决浅拷贝
            let options = {...this.BaseTools[type]};
            options.key = key;
            // 设置 col 每一项的 key
            if ("cols" in options) {
                options.cols = options.cols.map((item, index) => {
                    let obj = { ...item };
                    obj.key = `key${new Date()
                        .getTime()
                        .toString()
                        .substr(8, 3)}${index}`;
                    return obj;
                });
            }
            // console.log(options);
            this.$store.commit("toolsPage/add_toolsList", options);
            this.selectTools(key);
            // console.log("drop");
        },
        // 选中 小组件
        selectTools(key) {
            // console.log('sel');
            // console.log(key);
            if (key == this.activeToolsKey) return;
            this.$store.commit("toolsPage/set_activeToolsKey", key);
        },
        // 删除 小组件
        delTools(index) {
            // console.log('del');
            // console.log(key);
            this.toolsList.splice(index, 1);
        }
    }
};
</script>
<style scoped>
.review {
    width: 415px;
    margin: 0 50px;
    border: 1px solid #000;
    padding: 10px;
}
.droup_form,
.droup_group {
    height: 100%;
    overflow: auto;
}
.tools_item {
    position: relative;
    /* height: 60px; */
    margin-bottom: 15px;
    border: 1px dashed #000;
    padding: 15px;
    cursor: move;
}
.tools_item.active {
    border-color: red;
}
.tools_item:hover {
    border-color: #33adff;
}
.tools_item:hover .del_tools {
    display: block;
}
.tools_item .del_tools {
    display: none;
    height: 22px;
    width: 22px;
    text-align: center;
    line-height: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: #33adff;
    font-size: 16px;
    cursor: pointer;
}
</style>
<style>
.tools_item .el-form-item {
    margin: 0;
}
</style>
