<template>
    <el-form class="config_form" v-on="$listeners" v-bind="$attrs" @submit.native.prevent>
        <el-form-item label="标题：">
            <el-input v-model="configItems.label" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="默认值：">
            <el-input-number
                v-model="configItems.value"
                :step-strictly="true"
                :step="configItems.step"
                :min="configItems.min"
                :max="configItems.max"
                size="small"
            ></el-input-number>
        </el-form-item>

        <el-form-item :required="true" label="数据绑定Key：">
            <el-input v-model="configItems.bindkey" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="最小值：">
            <el-input-number v-model="configItems.min" :step-strictly="true" :step="1" size="small"></el-input-number>
        </el-form-item>

        <el-form-item label="最大值：">
            <el-input-number v-model="configItems.max" :step-strictly="true" :step="1" size="small"></el-input-number>
        </el-form-item>

        <el-form-item label="步长：">
            <el-input-number
                v-model="configItems.step"
                :step-strictly="true"
                :step="1"
                size="small"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-checkbox v-model="configItems.disabled">禁用</el-checkbox>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "EditorSlider",
    props: {
        configItems: {
            type: Object,
            required: true
        }
    }
};
</script>
