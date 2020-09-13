<template>
    <el-form @submit.native.prevent label-width="100%" label-position="top">
        <Draggable class="layout_group" v-model="item.cols" group="layout_group">
            <div
                :class="{
                        layout_col: true,
                        active: v.key == activeToolsKey,
                    }"
                v-for="(v, index) in item.cols"
                :key="v.key"
                v-bind="$attrs"
                v-on="$listeners"
                @dragover.stop="dragover"
                @dragleave.stop="dragleave"
                @drop.stop="drop($event, index)"
                @click.stop="selectLayoutCal(v.key)"
            >
                <component
                    class="col_content"
                    v-if="v.type != ''"
                    :is="`Tools${v.type}`"
                    v-model="v.value"
                    :item="v"
                ></component>
                <i v-if="item.cols.length > 1" class="del_layout_col el-icon-delete" @click.stop="delLayoutCol(index)"></i>
            </div>
        </Draggable>
    </el-form>
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
export default {
    name: "Layout",
    components: {
        Draggable,
        ToolsSwitch,
        ToolsSlider,
        ToolsInputNumber,
        ToolsLoops,
        ToolsPanel,
    },
    props: {
        item: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            BaseTools
        };
    },
    computed: {
        layoutConfig: {
            get() {
                return this.$store.getters['toolsPage/get_activeTools'];
            },
            set(data) {
                this.$store.commit("toolsPage/update_toolsList", data);
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
        drop(ev, index) {
            // 设置选中的 控件
            this.$store.commit("toolsPage/set_activeToolsKey", this.item.key);

            let type = ev.dataTransfer.getData("type");
            console.log("layout-->>>", type);
            if (!(type in this.BaseTools) || type == "Layout") return;
            let key = `${type}_${new Date().getTime()}`;
            // console.log(type, index, key);
            // 解构赋值 解决浅拷贝
            let options = {...this.BaseTools[type]};
            options.key = key;
            // 添加
            this.layoutConfig.cols.splice(index, 1, options);
            // console.log(layoutConfig);

            this.selectLayoutCal(key);
        },
        // 删除列
        delLayoutCol(index){
            // 设置选中的 控件
            this.$store.commit("toolsPage/set_activeToolsKey", this.item.key);
            // 删除
            this.layoutConfig.cols.cols.splice(index, 1);
        },
        // 选择 col
        selectLayoutCal(key){
            // console.log(key);
            if(key.length < 11) return;
            this.$store.commit("toolsPage/set_activeToolsKey", key);
        },
    }
};
</script>

<style scoped>
.layout_group {
    height: 100px;
    margin: -5px;
    display: flex;
}
.layout_col {
    position: relative;
    height: 100%;
    border: 1px dashed #000;
    margin-right: 10px;
    padding: 10px;
    flex: 1;
    overflow: hidden;
}
.layout_group .layout_col:last-child {
    margin-right: 0;
}
.col_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.layout_col.active {
    border-color: red;
}
.layout_col:hover {
    border-color: #33adff;
}
.layout_col:hover .del_layout_col{
    display: block;
}
.layout_col .del_layout_col {
    display: none;
    height: 22px;
    width: 22px;
    text-align: center;
    line-height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    background-color: #33adff;
    font-size: 16px;
    cursor: pointer;
}
</style>

<style>
.layout_group .el-form-item__label-wrap {
    float: none;
}
.layout_group .el-form-item__label {
    padding: 0;
}
.layout_group .el-form-item__content {
    width: 100%;
    margin: 0px !important;
    text-align: center;
}
.layout_group .el-form-item__content .el-input-number{
    width: auto;
}
</style>
