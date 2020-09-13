<template>
    <el-form-item :label="item.label">
        <el-slider
            v-bind="$attrs"
            v-on="$listeners"
            :value="item.value"
            :disabled="item.disabled"
            :step="item.step"
            :min="item.min"
            :max="item.max"
            style="margin:  0 5px;"
        ></el-slider>
    </el-form-item>
</template>

<script>
export default {
    name: "Slider",
    props: {
        item: {
            type: Object,
            required: false
        }
    }
};
</script>