<template>
    <div class="config">
        <component v-if="activeTools" :is="`Editor${activeTools.type}`" :configItems="activeTools"></component>
        <!-- <pre>{{activeTools}}</pre> -->
    </div>
</template>

<script>
import EditorSwitch from './editor/EditorSwitch'
import EditorSlider from './editor/EditorSlider'
import EditorInputNumber from './editor/EditorInputNumber'
import EditorLoops from './editor/EditorLoops'
import EditorPanel from './editor/EditorPanel'
import EditorLayout from './editor/EditorLayout'
export default {
    name: "ToolsConfig",
    components:{
        EditorSwitch,
        EditorSlider,
        EditorInputNumber,
        EditorLoops,
        EditorPanel,
        EditorLayout,
    },
    data() {
        return {};
    },
    computed: {
        activeTools: {
            get(){
                return this.$store.getters['toolsPage/get_activeTools'];
            },
            set(data) {
                this.$store.commit("toolsPage/update_toolsList", data);
            }
        }
    }
};
</script>

<style scoped>
.config {
    width: 250px;
    padding: 10px;
    border: 1px solid #000;
    overflow: auto;
}
</style>
<style>
.config_form .el-form-item__label{
    float: none;
}
.config_form .el-form-item__content{
    margin-left: 15px;
}
</style>
