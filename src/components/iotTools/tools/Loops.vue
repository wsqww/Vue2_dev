<template>
    <el-form-item :label="item.label">
        <div
            :class="{
                loops: true,
                disabled: item.disabled,
            }"
            @click="handleRadio"
        >{{item.options.find(ele=> ele.val == item.value ).lab}}</div>
    </el-form-item>
</template>

<script>
export default {
    name: "Radio",
    props: {
        item: {
            type: Object,
            required: false
        }
    },
    methods: {
        handleRadio() {
            if(this.item.disabled) return;
            let options = this.item.options;
            let index = options.findIndex(ele => ele.val == this.item.value);
            index = ++index >= options.length ? 0 : index;
            let value = options[index].val;
            this.item.value = value;
        }
    }
};
</script>
<style scoped>
.loops {
    color: #606266;
    cursor: pointer;
}
.loops.disabled {
    cursor: not-allowed;
    color: #c0c4cc;
}
</style>