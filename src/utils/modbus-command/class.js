"use strict";
require("./buffer_bit")();
const Crc16 = require('./crc16');


/**
 * Modbus 指令 
 * @param {*} id 
 */
class ModbusCommand {
    constructor(id) {
        // 设备 id
        this._unitID = 1;
        if (id) {
            this._unitID = id;
        }
    }
    /**
     * 设置 设备ID
     * @param {*} id ; 设备ID
     */
    setID(id) {
        this._unitID = id;
    }

    // ----读取命令------------------------------------------------------------

    /**
     * 读线圈 （FC = 1）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} length       ; 读取的数据个数
     */
    readCoils(dataAddress, length) {
        return this.read_command(1, dataAddress, length);
    }

    /**
     * 读离散输入量 （FC = 2）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} length       ; 读取的数据个数
     */
    readDiscreteInputs(dataAddress, length) {
        return this.read_command(2, dataAddress, length);
    }

    /**
     * 读保持寄存器 （FC = 3）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} length       ; 读取的数据个数
     */
    readHoldingRegisters(dataAddress, length) {
        return this.read_command(3, dataAddress, length);
    }

    /**
     * 读输入寄存器 （FC = 4）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} length       ; 读取的数据个数
     */
    readInputRegisters(dataAddress, length) {
        return this.read_command(4, dataAddress, length);
    }

    /**
     * 生成 读信息的 Modbus指令
     * @param {Number} FC         ; 功能码（FC）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} length       ; 读取的数据个数
     * 
     * @return {Buffer} buf         ; 返回生成的 Modbus 指令 字节流
     */
    read_command(FC, dataAddress, length) {
        let codeLength = 6;
        let buf = Buffer.alloc(codeLength + 2); // 加两个字节的 CRC 校验码

        buf.writeUInt8(this._unitID, 0);
        buf.writeUInt8(FC, 1);
        buf.writeUInt16BE(dataAddress, 2);
        buf.writeUInt16BE(length, 4);
        // console.log(buf);

        // 添加 CRC 校验码
        // console.log(Crc16(buf.slice(0, -2)));
        buf.writeUInt16LE(Crc16(buf.slice(0, -2)), codeLength);

        return buf;
    }



    // ---写入命令----------------------------------------------------------

    /**
     * 写入单个线圈 （FC = 5）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} state        ; 写入线圈状态 （1/0）
     */
    writeCoil(dataAddress, state) {
        let FC = 5; // 功能码
        let codeLength = 6;
        let buf = Buffer.alloc(codeLength + 2); // 加两个字节的 CRC 校验码

        buf.writeUInt8(this._unitID, 0);
        buf.writeUInt8(FC, 1);
        buf.writeUInt16BE(dataAddress, 2);
        if (state) {
            buf.writeUInt16BE(0xff00, 4);
        } else {
            buf.writeUInt16BE(0x0000, 4);
        }
        // console.log(buf);

        // 添加 CRC 校验码
        buf.writeUInt16LE(Crc16(buf.slice(0, -2)), codeLength);

        return buf;
    }

    /**
     * 写入单个寄存器 （FC = 6）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} val          ; 写入寄存器的值
     */
    writeRegister(dataAddress, val) {
        let FC = 6; // 功能码
        let codeLength = 6;
        let buf = Buffer.alloc(codeLength + 2); // 加两个字节的 CRC 校验码

        buf.writeUInt8(this._unitID, 0);
        buf.writeUInt8(FC, 1);
        buf.writeUInt16BE(dataAddress, 2);
        buf.writeUInt16BE(val, 4);
        // console.log(buf);

        // 添加 CRC 校验码
        buf.writeUInt16LE(Crc16(buf.slice(0, -2)), codeLength);

        return buf;
    }

    /**
     * 写入多个线圈 （FC = 15）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} state        ; 写入线圈的布尔状态数组 [0,1,0,0, 0,0,1,0]
     */
    writeCoils(dataAddress, arr) {
        let FC = 15; // 功能码
        let dataBytes = Math.ceil(arr.length / 8); // 数据字节数
        let codeLength = 7 + dataBytes;
        let buf = Buffer.alloc(codeLength + 2); // 加两个字节的 CRC 校验码

        buf.writeUInt8(this._unitID, 0);
        buf.writeUInt8(FC, 1);
        buf.writeUInt16BE(dataAddress, 2);
        buf.writeUInt16BE(arr.length, 4);
        buf.writeUInt8(dataBytes, 6);

        // clear the data bytes before writing bits data
        for (let i = 0; i < dataBytes; i++) {
            buf.writeUInt8(0, 7 + i);
        }

        for (let i = 0; i < arr.length; i++) {
            // buffer bits are already all zero (0)
            // only set the ones set to one (1)
            if (arr[i]) {
                buf.writeBit(1, i, 7);
            }
        }

        // 添加 CRC 校验码
        buf.writeUInt16LE(Crc16(buf.slice(0, -2)), codeLength);

        return buf;
    }

    /**
     * 写入多个寄存器 （FC = 16）
     * @param {Number} dataAddress  ; 起始地址
     * @param {Number} val          ; 写入寄存器值 的数组
     */
    writeRegisters(dataAddress, arr) {
        let FC = 16; // 功能码
        var codeLength = 7 + 2 * arr.length;
        var buf = Buffer.alloc(codeLength + 2); // 加两个字节的 CRC 校验码

        buf.writeUInt8(this._unitID, 0);
        buf.writeUInt8(FC, 1);
        buf.writeUInt16BE(dataAddress, 2);
        buf.writeUInt16BE(arr.length, 4);
        buf.writeUInt8(arr.length * 2, 6);

        for (var i = 0; i < arr.length; i++) {
            buf.writeUInt16BE(arr[i], 7 + 2 * i);
        }
        // console.log(buf);

        // 添加 CRC 校验码
        buf.writeUInt16LE(Crc16(buf.slice(0, -2)), codeLength);

        return buf;
    }


    // ---解析命令-------------------------------------------------------

    /**
     * 验证 Modbus命令 crc 校验码
     * @param {Buffer} command; 需要验证的
     * 
     * @return {Boolean}
     */
    checkCrc(command) {
        // buffer 中分解出 crc校验码
        let command_crc = command.slice(-2);

        // 生成 crc 校验码
        let check_crc = Buffer.alloc(2);
        check_crc.writeUInt16LE(Crc16(command.slice(0, - 2)), 0);

        // 对比 crc校验码
        // console.log(command_crc);
        // console.log(check_crc);
        // console.log(check_crc.compare(command_crc));
        // console.log(check_crc.equals(command_crc));
        return check_crc.equals(command_crc);
    }


    /**
     * 解析接收到的 modbus 数据
     * @param {Buffer} buffer ;需要解析的 Buffer 对象
     * 
     * @return {Object} result ;
     */
    parse(buffer) {
        let result = {
            msg: true,          // Crc 校验状态
            data: [],           // 解析后的数据
            buffer: buffer      // 原始 buffer
        };
        // 校验 CRC
        if (!this.checkCrc(buffer)) {
            result.msg = false;
            result.data = 'CRC 校验码错误';
            return result;
        }

        // 功能码
        let FC = buffer.slice(1, 2)[0];

        // 判断 是否错误码
        if (FC > 0x80) {
            result.msg = false;
            result.data = this.parseFCerr(buffer);
            return result;
        }

        // 解析 数据
        let data;
        switch (FC) {
            // 读取 线圈/离散量输入
            case 1:
            case 2:
                data = this.parseFC2(buffer);
                break;
            // 读取 寄存器
            case 3:
            case 4:
                data = this.parseFC4(buffer);
                break;
            // 写单个线圈
            case 5:
                data = this.parseFC5(buffer);
                break;
            // 写单个寄存器
            case 6:
                data = this.parseFC6(buffer);
                break;
            // 写入多个 
            case 15:
            case 16:
                data = this.parseFC16(buffer);
                break;
            default:
                data = [];
                break;
        }

        result.data = data;
        return result;

    }

    /**
     * 解析 读 线圈/离散输入 返回的 modbus （FC = 1, FC = 2）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Array} data ; 返回 解析后的数据（起始地址，数值的数组）
     */
    parseFC2(buffer) {
        // 获取 数据字节数
        var length = buffer.readUInt8(2);
        var data = [];

        for (let i = 0; i < length; i++) {
            let reg = buffer[3 + i]; // 从第三个字节开始读

            for (let j = 0; j < 8; j++) {
                data.push((reg & 1) === 1);
                reg = reg >> 1;
            }
        }

        return data;
    }

    /**
     * 解析 读 寄存器 返回的 modbus （FC = 3, FC = 4）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Array} data ; 返回 解析后的数据（起始地址，数值的数组）
     */
    parseFC4(buffer) {
        // 获取 数据字节数
        var length = buffer.readUInt8(2);
        var data = [];

        // (i += 2) 每个·寄存器占 两个字节
        for (let i = 0; i < length; i += 2) {
            let reg = buffer.readUInt16BE(3 + i); // 从第三个字节开始读
            data.push(reg);
        }

        return data;
    }

    /**
     * 解析 写 单个线圈 返回的 modbus （FC = 5）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Object} data ; 返回 解析后的数据（起始地址，true/false）
     */
    parseFC5(buffer) {
        var result = this.parseFC6(buffer);
        result.value = result.value === 0xff00;
        return result;
    }

    /**
     * 解析 写 单个寄存器 返回的 modbus （FC = 6）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Object} data ; 返回 解析后的数据（起始地址，数值）
     */
    parseFC6(buffer) {
        return {
            dataAddress: buffer.readUInt16BE(2),
            value: buffer.readUInt16BE(4),
        };
    }

    /**
     * 解析 读 寄存器 返回的 modbus （FC = 3, FC = 4）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Object} data ; 返回 解析后的数据（起始地址，数值的字节数）
     */
    parseFC16(buffer) {
        return {
            dataAddress: buffer.readUInt16BE(2),
            value: buffer.readUInt16BE(4),
        };
    }

    /**
     * 解析 返回的 modbus 错误码 （FC = 0x80+beforeFC ）
     * @param {Buffer} buffer ;需要解析的 buffer 对象
     * 
     * @return {Array} data ; 返回 解析后的数据（起始地址，数值的字节数）
     */
    parseFCerr(buffer) {
        let errCode = buffer.readUInt8(2),
            data;

        switch (errCode) {
            case 0x01:
                data = '非法功能';
                break;
            case 0x02:
                data = '非法数据地址';
                break;
            case 0x03:
                data = '非法数据值';
                break;
            case 0x04:
                data = '从站设备故障';
                break;
            case 0x05:
                data = '确认';
                break;
            case 0x06:
                data = '从属设备忙';
                break;
            case 0x08:
                data = '存储奇偶性差错';
                break;
            case 0x0a:
                data = '不可用网关路径';
                break;
            case 0x0b:
                data = '网关目标设备相应失败';
                break;
            default:
                data = '非法错误';
                break;
        }

        return data;

    }
}

export default ModbusCommand;