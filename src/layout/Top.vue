<template>
    <div>
        <div class="top_content">
            <div class="top_left">VUE</div>
            <div class="top_right">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        WSQ <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            v-for="(v, k) in dropdownMenu"
                            :key="k"
                            :icon="v.icon"
                        >{{v.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Top",
    data() {
        return {
            dropdownMenu: [
                { title: "个人主页", link: "", icon: "" },
                { title: "系统设置", link: "", icon: "" },
                { title: "退出", link: "", icon: "" }
            ]
        };
    }
};
</script>

<style scoped>
.top_content {
    display: flex;
    padding: 0 30px;
    color: #409eff;
    justify-content: space-between;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
    outline: 0;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.el-dropdown-menu[x-placement^="bottom"] {
    background-color: #666;
    margin-top: 5px;
}
.el-dropdown-menu__item {
    color: #fff;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #444444;
    color: #fff;
}
</style>
<style>
body .el-popper[x-placement^="bottom"] .popper__arrow,
body .el-popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #666;
}
</style>
