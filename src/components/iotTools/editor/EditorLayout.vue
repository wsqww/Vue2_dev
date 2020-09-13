<template>
    <div>
        <el-form class="config_form" v-on="$listeners" v-bind="$attrs" @submit.native.prevent>
            <el-form-item label="标题：">
                <el-input v-model="configItems.label" placeholder="请输入内容"></el-input>
            </el-form-item>

            <el-form-item label="总列数：">
                <el-input-number
                    :value="configItems.cols.length"
                    :step-strictly="true"
                    :min="1"
                    :max="3"
                    @change="changeCols"
                    size="small"
                ></el-input-number>
            </el-form-item>
        </el-form>
        <pre>{{configItems}}</pre>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
        configItems: {
            type: Object,
            required: true
        }
    },
    computed: {
        layoutConfig: {
            get() {
                return this.$store.getters['toolsPage/get_activeTools'];
            },
            set(data) {
                this.$store.commit("toolsPage/update_toolsList", data);
            }
        }
    },
    methods: {
        changeCols(val) {
            let add = val - this.configItems.cols.length > 0;
            let num = Math.abs(val - this.configItems.cols.length);
            if (add) {
                this.layoutConfig.cols = this.layoutConfig.cols.concat(
                    Array(num)
                        .fill({ key: "", type: "" })
                        .map((item, index) => {
                            let obj = { ...item };
                            obj.key = `key${new Date()
                                .getTime()
                                .toString()
                                .substr(8, 3)}${val - index}`;
                            return obj;
                        })
                );
            } else {
                this.layoutConfig.cols.splice(val, num);
            }

        }
    }
};
</script>

<style scoped>
</style>
