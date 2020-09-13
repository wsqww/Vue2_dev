<template>
    <el-form-item :label="item.label">
        <el-input-number
            v-bind="$attrs"
            v-on="$listeners"
            :value="item.value"
            :disabled="item.disabled"
            :step="item.step"
            :min="item.min"
            :max="item.max"
            size="small"
        ></el-input-number>
    </el-form-item>
</template>

<script>
export default {
    name: "InputNumber",
    props: {
        item: {
            type: Object,
            required: false
        }
    }
};
</script>