<template>
    <el-form class="config_form" v-on="$listeners" v-bind="$attrs" @submit.native.prevent>
        <el-form-item label="标题：">
            <el-input v-model="configItems.label" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="默认值：">
            <el-switch v-model="configItems.value"></el-switch>
        </el-form-item>

        <el-form-item :required="true" label="数据绑定Key：">
            <el-input v-model="configItems.bindkey" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-checkbox v-model="configItems.disabled">禁用</el-checkbox>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "EditorSwitch",
    props: {
        configItems: {
            type: Object,
            required: true
        }
    }
};
</script>
