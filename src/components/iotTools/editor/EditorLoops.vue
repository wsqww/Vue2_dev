<template>
    <el-form class="config_form" v-on="$listeners" v-bind="$attrs" @submit.native.prevent>
        <el-form-item label="标题：">
            <el-input v-model="configItems.label" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="默认值：">
            <template v-for="(v,k) in configItems.options">
                <el-radio
                :key="k"
                v-model="configItems.value"
                :label="v.val"
                :disabled="v.val == '' || configItems.disabled"
                >{{v.lab}}</el-radio>
            </template>
        </el-form-item>

        <el-form-item :required="true" label="数据绑定Key：">
            <el-input v-model="configItems.bindkey" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="添加选项：">
            <div class="radio_option" v-for="(v, k) in configItems.options" :key="k">
                <el-input class="option_val" v-model="v.val" placeholder="val"></el-input>
                <span style="padding: 0 5px;">:</span>
                <el-input class="option_lab" v-model="v.lab" placeholder="lab"></el-input>
                <el-button
                    @click="del_option(k)"
                    :disabled="configItems.options.length <= 1"
                    type="danger"
                    icon="el-icon-minus"
                    size="mini"
                    circle
                    style="margin-left: 5px;"
                ></el-button>
            </div>
            <el-button @click="add_option" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-checkbox v-model="configItems.disabled">禁用</el-checkbox>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "EditorRadio",
    props: {
        configItems: {
            type: Object,
            required: true
        }
    },
    computed: {
        radioConfig: {
            get(){
                return this.$store.getters['toolsPage/get_activeTools'];
            },
            set(data){
                this.$store.commit("toolsPage/update_toolsList", data);
            }
        }
    },
    methods: {
        add_option() {
            let radioConfig = this.radioConfig;
            radioConfig.options.push({
                val: "",
                lab: "选项"
            });

            this.radioConfig = radioConfig;
        },
        del_option(k) {
            let radioConfig = this.radioConfig;
            radioConfig.options.splice(k, 1);

            radioConfig.value = radioConfig.options[0].val;
            this.radioConfig = radioConfig;
        }
    }
};
</script>

<style scoped>
.radio_option {
    padding: 5px 0;
}
.option_val {
    width: 25%;
}
.option_lab {
    width: 40%;
}
</style>

