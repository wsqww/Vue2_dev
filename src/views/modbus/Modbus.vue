<template>
    <div>
        <div>生成 Modbus 指令（打开控制台）：</div>
        <el-table :data="read" :border="true" stripe style="margin-top: 30px">
            <el-table-column prop="title" label="读操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        @click="modRead(scope.row.fun, scope.row.startAddress, scope.row.length)"
                    >{{scope.row.title}}</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="startAddress" label="起始地址"></el-table-column>
            <el-table-column prop="length" label="读长度"></el-table-column>
        </el-table>
        <!--  -->
        <el-table :data="write" :border="true" stripe style="margin-top: 30px">
            <el-table-column prop="title" label="写操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        @click="modRead(scope.row.fun, scope.row.startAddress, scope.row.value)"
                    >{{scope.row.title}}</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="startAddress" label="起始地址"></el-table-column>
            <el-table-column prop="value" label="写入值">
                <template slot-scope="scope">
                    <div v-if="(scope.row.value instanceof Array)"><pre>{{scope.row.value}}</pre></div>
                    <div v-else>{{scope.row.value}}</div>
                </template>
            </el-table-column>
        </el-table>
        <!--  -->
        <el-table :data="parse" :border="true" stripe style="margin-top: 30px">
            <el-table-column prop="title" label="解析">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        @click="modParse(scope.row.modbus)"
                    >{{scope.row.title}}</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="modbus" label="数据">
                <template slot-scope="scope"><pre>{{scope.row.modbus}}</pre></template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
// @ is an alias to /src
import ModbusCommand from "@/utils/modbus-command";
export default {
    name: "Modbus",
    data() {
        return {
            modbus: null,

            // 表格
            read: [
                {
                    title: "读线圈",
                    startAddress: 0,
                    length: 2,
                    fun: "readCoils"
                },
                {
                    title: "读离散量输入",
                    startAddress: 0,
                    length: 3,
                    fun: "readDiscreteInputs"
                },
                {
                    title: "读保持寄存器",
                    startAddress: 2,
                    length: 5,
                    fun: "readHoldingRegisters"
                },
                {
                    title: "读输入寄存器",
                    startAddress: 2,
                    length: 4,
                    fun: "readInputRegisters"
                }
            ],
            write: [
                {
                    title: "写线圈",
                    startAddress: 0,
                    value: 1,
                    fun: "writeCoil"
                },
                {
                    title: "写寄存器",
                    startAddress: 0,
                    value: 20,
                    fun: "writeRegister"
                },
                {
                    title: "写多个线圈",
                    startAddress: 0,
                    value: [0,0,1,0, 0,1,0,0, 0,1],
                    fun: "writeCoils"
                },
                {
                    title: "写多个寄存器",
                    startAddress:  2,
                    value: [10, 20],
                    fun: "writeRegisters"
                }
            ],
            parse: [
                {
                    title: "解析",
                    modbus: [0x01, 0x01, 0x02, 0x05, 0x01, 0x07b, 0x6c],
                },
                {
                    title: "解析",
                    modbus: [0x01, 0x03, 0x04, 0x03, 0xe8, 0x02, 0xa1, 0xba, 0x9b],
                },
                {
                    title: "解析",
                    modbus: [0x01, 0x05, 0x00,0x00, 0x00,0x00, 0xcd,0xca],
                },
                {
                    title: "解析",
                    modbus: [0x01, 0x06, 0x00,0x00, 0x00,0xf0, 0x89,0x8e],
                },
                {
                    title: "解析",
                    modbus: [0x01, 0x0f, 0x00, 0x00, 0x00, 0x14, 0x03, 0x24, 0x42, 0x04, 0x21, 0x1d],
                },
                {
                    title: "解析",
                    modbus: [0x01, 0x10, 0x00, 0x00, 0x00, 0x02, 0x04, 0x1a, 0x1f, 0x0c, 0xbd],
                },
            ]
        };
    },
    created() {
        this.modbus = new ModbusCommand();
        // console.log(modbus);
        // 读取操作

        // let buffer = modbus.readCoils(0, 2);
        // let buffer = modbus.readDiscreteInputs(0, 3);
        // let buffer = modbus.readHoldingRegisters(2, 5);
        // let buffer = modbus.readInputRegisters(2, 4);

        // 写入操作
        // let buffer = modbus.writeCoil(0, 1);
        // let buffer = modbus.writeRegister(0, 20);
        // let buffer = modbus.writeCoils(0, [0,0,1,0, 0,1,0,0, 0,1,0,0, 0,0,1,0, 0,0,1,0]);
        // let buffer = modbus.writeRegisters(0, [10, 20]);

        // 解析 数据
        // let buffer = Buffer.from([0x01, 0x01, 0x02, 0x05, 0x01, 0x07b, 0x6c]);
        // let buffer = Buffer.from([0x01, 0x03, 0x04, 0x03, 0xe8, 0x02, 0xa1, 0xba, 0x9b]);

        // let buffer = Buffer.from([0x01, 0x05, 0x00,0x00, 0x00,0x00, 0xcd,0xca]);
        // let buffer = Buffer.from([0x01, 0x06, 0x00,0x00, 0x00,0xf0, 0x89,0x8e]);

        // let buffer = Buffer.from([0x01, 0x0f, 0x00, 0x00, 0x00, 0x14, 0x03, 0x24, 0x42, 0x04, 0x21, 0x1d]);
        // let buffer = Buffer.from([0x01, 0x10, 0x00, 0x00, 0x00, 0x02, 0x04, 0x1a, 0x1f, 0x0c, 0xbd]);

        // let buffer = Buffer.from([0x01, 0x81, 0x02, 0xc1, 0x91]);
        // console.log(buffer);

        // 验证 crc 校验码是否正确
        // let check = modbus.checkCrc(buffer);
        // console.log(check);

        // 解析 数据
        // let result = modbus.parse(buffer);
        // console.log(result);
    },
    methods: {
        modRead(fun, startAddress, length) {
            let buffer = this.modbus[fun](startAddress, length);
            console.log(fun, buffer);
        },
        modWrite(fun, startAddress, value) {
            let buffer = this.modbus[fun](startAddress, value);
            console.log(fun, buffer);
        },
        modParse(modbus){
            let buffer = Buffer.from(modbus);
            let result = this.modbus.parse(buffer);
            console.log(result);
        },
    }
};
</script>

<style>
</style>
