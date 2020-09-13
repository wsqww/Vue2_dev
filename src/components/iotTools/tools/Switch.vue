<template>
    <el-form-item :label="item.label">
        <el-switch
            v-bind="$attrs"
            v-on="$listeners"
            :value="item.value"
            :disabled="item.disabled"
            :active-text="item.activeText"
            :inactive-text="item.inactiveText"
        ></el-switch>
    </el-form-item>
</template>

<script>
export default {
    name: "mySwitch",
    props: {
        item: {
            type: Object,
            required: false
        }
    }
};
</script>