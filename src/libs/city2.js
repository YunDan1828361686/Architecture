
let city = [
  {
    'id': 1,
    'region_name': '北京市',
    'region_code': 110000,
    'parent_code': 0
  },
  {
    'id': 2,
    'region_name': '市辖区',
    'region_code': 110100,
    'parent_code': 110000
  },
  {
    'id': 3,
    'region_name': '东城区',
    'region_code': 110101,
    'parent_code': 110100
  },
  {
    'id': 4,
    'region_name': '西城区',
    'region_code': 110102,
    'parent_code': 110100
  },
  {
    'id': 5,
    'region_name': '崇文区',
    'region_code': 110103,
    'parent_code': null
  },
  {
    'id': 6,
    'region_name': '宣武区',
    'region_code': 110104,
    'parent_code': null
  },
  {
    'id': 7,
    'region_name': '朝阳区',
    'region_code': 110105,
    'parent_code': 110100
  },
  {
    'id': 8,
    'region_name': '丰台区',
    'region_code': 110106,
    'parent_code': 110100
  },
  {
    'id': 9,
    'region_name': '石景山区',
    'region_code': 110107,
    'parent_code': 110100
  },
  {
    'id': 10,
    'region_name': '海淀区',
    'region_code': 110108,
    'parent_code': 110100
  },
  {
    'id': 11,
    'region_name': '门头沟区',
    'region_code': 110109,
    'parent_code': 110100
  },
  {
    'id': 12,
    'region_name': '房山区',
    'region_code': 110111,
    'parent_code': 110100
  },
  {
    'id': 13,
    'region_name': '通州区',
    'region_code': 110112,
    'parent_code': 110100
  },
  {
    'id': 14,
    'region_name': '顺义区',
    'region_code': 110113,
    'parent_code': 110100
  },
  {
    'id': 15,
    'region_name': '昌平区',
    'region_code': 110114,
    'parent_code': 110100
  },
  {
    'id': 16,
    'region_name': '大兴区',
    'region_code': 110115,
    'parent_code': 110100
  },
  {
    'id': 17,
    'region_name': '怀柔区',
    'region_code': 110116,
    'parent_code': 110100
  },
  {
    'id': 18,
    'region_name': '平谷区',
    'region_code': 110117,
    'parent_code': 110100
  },
  {
    'id': 19,
    'region_name': '县',
    'region_code': 110200,
    'parent_code': 110000
  },
  {
    'id': 20,
    'region_name': '密云县',
    'region_code': 110228,
    'parent_code': 110200
  },
  {
    'id': 21,
    'region_name': '延庆县',
    'region_code': 110229,
    'parent_code': 110200
  },
  {
    'id': 22,
    'region_name': '天津市',
    'region_code': 120000,
    'parent_code': 0
  },
  {
    'id': 23,
    'region_name': '市辖区',
    'region_code': 120100,
    'parent_code': 120000
  },
  {
    'id': 24,
    'region_name': '和平区',
    'region_code': 120101,
    'parent_code': 120100
  },
  {
    'id': 25,
    'region_name': '河东区',
    'region_code': 120102,
    'parent_code': 120100
  },
  {
    'id': 26,
    'region_name': '河西区',
    'region_code': 120103,
    'parent_code': 120100
  },
  {
    'id': 27,
    'region_name': '南开区',
    'region_code': 120104,
    'parent_code': 120100
  },
  {
    'id': 28,
    'region_name': '河北区',
    'region_code': 120105,
    'parent_code': 120100
  },
  {
    'id': 29,
    'region_name': '红桥区',
    'region_code': 120106,
    'parent_code': 120100
  },
  {
    'id': 30,
    'region_name': '塘沽区',
    'region_code': 120107,
    'parent_code': null
  },
  {
    'id': 31,
    'region_name': '汉沽区',
    'region_code': 120108,
    'parent_code': null
  },
  {
    'id': 32,
    'region_name': '大港区',
    'region_code': 120109,
    'parent_code': null
  },
  {
    'id': 33,
    'region_name': '东丽区',
    'region_code': 120110,
    'parent_code': 120100
  },
  {
    'id': 34,
    'region_name': '西青区',
    'region_code': 120111,
    'parent_code': 120100
  },
  {
    'id': 35,
    'region_name': '津南区',
    'region_code': 120112,
    'parent_code': 120100
  },
  {
    'id': 36,
    'region_name': '北辰区',
    'region_code': 120113,
    'parent_code': 120100
  },
  {
    'id': 37,
    'region_name': '武清区',
    'region_code': 120114,
    'parent_code': 120100
  },
  {
    'id': 38,
    'region_name': '宝坻区',
    'region_code': 120115,
    'parent_code': 120100
  },
  {
    'id': 39,
    'region_name': '县',
    'region_code': 120200,
    'parent_code': 120000
  },
  {
    'id': 40,
    'region_name': '宁河县',
    'region_code': 120221,
    'parent_code': 120200
  },
  {
    'id': 41,
    'region_name': '静海县',
    'region_code': 120223,
    'parent_code': 120200
  },
  {
    'id': 42,
    'region_name': '蓟县',
    'region_code': 120225,
    'parent_code': 120200
  },
  {
    'id': 43,
    'region_name': '河北省',
    'region_code': 130000,
    'parent_code': 0
  },
  {
    'id': 44,
    'region_name': '石家庄市',
    'region_code': 130100,
    'parent_code': 130000
  },
  {
    'id': 45,
    'region_name': '市辖区',
    'region_code': 130101,
    'parent_code': 130100
  },
  {
    'id': 46,
    'region_name': '长安区',
    'region_code': 130102,
    'parent_code': 130100
  },
  {
    'id': 47,
    'region_name': '桥东区',
    'region_code': 130103,
    'parent_code': null
  },
  {
    'id': 48,
    'region_name': '桥西区',
    'region_code': 130104,
    'parent_code': 130100
  },
  {
    'id': 49,
    'region_name': '新华区',
    'region_code': 130105,
    'parent_code': 130100
  },
  {
    'id': 50,
    'region_name': '井陉矿区',
    'region_code': 130107,
    'parent_code': 130100
  },
  {
    'id': 51,
    'region_name': '裕华区',
    'region_code': 130108,
    'parent_code': 130100
  },
  {
    'id': 52,
    'region_name': '井陉县',
    'region_code': 130121,
    'parent_code': 130100
  },
  {
    'id': 53,
    'region_name': '正定县',
    'region_code': 130123,
    'parent_code': 130100
  },
  {
    'id': 54,
    'region_name': '栾城县',
    'region_code': 130124,
    'parent_code': null
  },
  {
    'id': 55,
    'region_name': '行唐县',
    'region_code': 130125,
    'parent_code': 130100
  },
  {
    'id': 56,
    'region_name': '灵寿县',
    'region_code': 130126,
    'parent_code': 130100
  },
  {
    'id': 57,
    'region_name': '高邑县',
    'region_code': 130127,
    'parent_code': 130100
  },
  {
    'id': 58,
    'region_name': '深泽县',
    'region_code': 130128,
    'parent_code': 130100
  },
  {
    'id': 59,
    'region_name': '赞皇县',
    'region_code': 130129,
    'parent_code': 130100
  },
  {
    'id': 60,
    'region_name': '无极县',
    'region_code': 130130,
    'parent_code': 130100
  },
  {
    'id': 61,
    'region_name': '平山县',
    'region_code': 130131,
    'parent_code': 130100
  },
  {
    'id': 62,
    'region_name': '元氏县',
    'region_code': 130132,
    'parent_code': 130100
  },
  {
    'id': 63,
    'region_name': '赵县',
    'region_code': 130133,
    'parent_code': 130100
  },
  {
    'id': 64,
    'region_name': '辛集市',
    'region_code': 130181,
    'parent_code': 130100
  },
  {
    'id': 65,
    'region_name': '藁城市',
    'region_code': 130182,
    'parent_code': null
  },
  {
    'id': 66,
    'region_name': '晋州市',
    'region_code': 130183,
    'parent_code': 130100
  },
  {
    'id': 67,
    'region_name': '新乐市',
    'region_code': 130184,
    'parent_code': 130100
  },
  {
    'id': 68,
    'region_name': '鹿泉市',
    'region_code': 130185,
    'parent_code': null
  },
  {
    'id': 69,
    'region_name': '唐山市',
    'region_code': 130200,
    'parent_code': 130000
  },
  {
    'id': 70,
    'region_name': '市辖区',
    'region_code': 130201,
    'parent_code': 130200
  },
  {
    'id': 71,
    'region_name': '路南区',
    'region_code': 130202,
    'parent_code': 130200
  },
  {
    'id': 72,
    'region_name': '路北区',
    'region_code': 130203,
    'parent_code': 130200
  },
  {
    'id': 73,
    'region_name': '古冶区',
    'region_code': 130204,
    'parent_code': 130200
  },
  {
    'id': 74,
    'region_name': '开平区',
    'region_code': 130205,
    'parent_code': 130200
  },
  {
    'id': 75,
    'region_name': '丰南区',
    'region_code': 130207,
    'parent_code': 130200
  },
  {
    'id': 76,
    'region_name': '丰润区',
    'region_code': 130208,
    'parent_code': 130200
  },
  {
    'id': 77,
    'region_name': '滦县',
    'region_code': 130223,
    'parent_code': 130200
  },
  {
    'id': 78,
    'region_name': '滦南县',
    'region_code': 130224,
    'parent_code': 130200
  },
  {
    'id': 79,
    'region_name': '乐亭县',
    'region_code': 130225,
    'parent_code': 130200
  },
  {
    'id': 80,
    'region_name': '迁西县',
    'region_code': 130227,
    'parent_code': 130200
  },
  {
    'id': 81,
    'region_name': '玉田县',
    'region_code': 130229,
    'parent_code': 130200
  },
  {
    'id': 82,
    'region_name': '唐海县',
    'region_code': 130230,
    'parent_code': null
  },
  {
    'id': 83,
    'region_name': '遵化市',
    'region_code': 130281,
    'parent_code': 130200
  },
  {
    'id': 84,
    'region_name': '迁安市',
    'region_code': 130283,
    'parent_code': 130200
  },
  {
    'id': 85,
    'region_name': '秦皇岛市',
    'region_code': 130300,
    'parent_code': 130000
  },
  {
    'id': 86,
    'region_name': '市辖区',
    'region_code': 130301,
    'parent_code': 130300
  },
  {
    'id': 87,
    'region_name': '海港区',
    'region_code': 130302,
    'parent_code': 130300
  },
  {
    'id': 88,
    'region_name': '山海关区',
    'region_code': 130303,
    'parent_code': 130300
  },
  {
    'id': 89,
    'region_name': '北戴河区',
    'region_code': 130304,
    'parent_code': 130300
  },
  {
    'id': 90,
    'region_name': '青龙满族自治县',
    'region_code': 130321,
    'parent_code': 130300
  },
  {
    'id': 91,
    'region_name': '昌黎县',
    'region_code': 130322,
    'parent_code': 130300
  },
  {
    'id': 92,
    'region_name': '抚宁县',
    'region_code': 130323,
    'parent_code': 130300
  },
  {
    'id': 93,
    'region_name': '卢龙县',
    'region_code': 130324,
    'parent_code': 130300
  },
  {
    'id': 94,
    'region_name': '邯郸市',
    'region_code': 130400,
    'parent_code': 130000
  },
  {
    'id': 95,
    'region_name': '市辖区',
    'region_code': 130401,
    'parent_code': 130400
  },
  {
    'id': 96,
    'region_name': '邯山区',
    'region_code': 130402,
    'parent_code': 130400
  },
  {
    'id': 97,
    'region_name': '丛台区',
    'region_code': 130403,
    'parent_code': 130400
  },
  {
    'id': 98,
    'region_name': '复兴区',
    'region_code': 130404,
    'parent_code': 130400
  },
  {
    'id': 99,
    'region_name': '峰峰矿区',
    'region_code': 130406,
    'parent_code': 130400
  },
  {
    'id': 100,
    'region_name': '邯郸县',
    'region_code': 130421,
    'parent_code': 130400
  },
  {
    'id': 101,
    'region_name': '临漳县',
    'region_code': 130423,
    'parent_code': 130400
  },
  {
    'id': 102,
    'region_name': '成安县',
    'region_code': 130424,
    'parent_code': 130400
  },
  {
    'id': 103,
    'region_name': '大名县',
    'region_code': 130425,
    'parent_code': 130400
  },
  {
    'id': 104,
    'region_name': '涉县',
    'region_code': 130426,
    'parent_code': 130400
  },
  {
    'id': 105,
    'region_name': '磁县',
    'region_code': 130427,
    'parent_code': 130400
  },
  {
    'id': 106,
    'region_name': '肥乡县',
    'region_code': 130428,
    'parent_code': 130400
  },
  {
    'id': 107,
    'region_name': '永年县',
    'region_code': 130429,
    'parent_code': 130400
  },
  {
    'id': 108,
    'region_name': '邱县',
    'region_code': 130430,
    'parent_code': 130400
  },
  {
    'id': 109,
    'region_name': '鸡泽县',
    'region_code': 130431,
    'parent_code': 130400
  },
  {
    'id': 110,
    'region_name': '广平县',
    'region_code': 130432,
    'parent_code': 130400
  },
  {
    'id': 111,
    'region_name': '馆陶县',
    'region_code': 130433,
    'parent_code': 130400
  },
  {
    'id': 112,
    'region_name': '魏县',
    'region_code': 130434,
    'parent_code': 130400
  },
  {
    'id': 113,
    'region_name': '曲周县',
    'region_code': 130435,
    'parent_code': 130400
  },
  {
    'id': 114,
    'region_name': '武安市',
    'region_code': 130481,
    'parent_code': 130400
  },
  {
    'id': 115,
    'region_name': '邢台市',
    'region_code': 130500,
    'parent_code': 130000
  },
  {
    'id': 116,
    'region_name': '市辖区',
    'region_code': 130501,
    'parent_code': 130500
  },
  {
    'id': 117,
    'region_name': '桥东区',
    'region_code': 130502,
    'parent_code': 130500
  },
  {
    'id': 118,
    'region_name': '桥西区',
    'region_code': 130503,
    'parent_code': 130500
  },
  {
    'id': 119,
    'region_name': '邢台县',
    'region_code': 130521,
    'parent_code': 130500
  },
  {
    'id': 120,
    'region_name': '临城县',
    'region_code': 130522,
    'parent_code': 130500
  },
  {
    'id': 121,
    'region_name': '内丘县',
    'region_code': 130523,
    'parent_code': 130500
  },
  {
    'id': 122,
    'region_name': '柏乡县',
    'region_code': 130524,
    'parent_code': 130500
  },
  {
    'id': 123,
    'region_name': '隆尧县',
    'region_code': 130525,
    'parent_code': 130500
  },
  {
    'id': 124,
    'region_name': '任县',
    'region_code': 130526,
    'parent_code': 130500
  },
  {
    'id': 125,
    'region_name': '南和县',
    'region_code': 130527,
    'parent_code': 130500
  },
  {
    'id': 126,
    'region_name': '宁晋县',
    'region_code': 130528,
    'parent_code': 130500
  },
  {
    'id': 127,
    'region_name': '巨鹿县',
    'region_code': 130529,
    'parent_code': 130500
  },
  {
    'id': 128,
    'region_name': '新河县',
    'region_code': 130530,
    'parent_code': 130500
  },
  {
    'id': 129,
    'region_name': '广宗县',
    'region_code': 130531,
    'parent_code': 130500
  },
  {
    'id': 130,
    'region_name': '平乡县',
    'region_code': 130532,
    'parent_code': 130500
  },
  {
    'id': 131,
    'region_name': '威县',
    'region_code': 130533,
    'parent_code': 130500
  },
  {
    'id': 132,
    'region_name': '清河县',
    'region_code': 130534,
    'parent_code': 130500
  },
  {
    'id': 133,
    'region_name': '临西县',
    'region_code': 130535,
    'parent_code': 130500
  },
  {
    'id': 134,
    'region_name': '南宫市',
    'region_code': 130581,
    'parent_code': 130500
  },
  {
    'id': 135,
    'region_name': '沙河市',
    'region_code': 130582,
    'parent_code': 130500
  },
  {
    'id': 136,
    'region_name': '保定市',
    'region_code': 130600,
    'parent_code': 130000
  },
  {
    'id': 137,
    'region_name': '市辖区',
    'region_code': 130601,
    'parent_code': 130600
  },
  {
    'id': 138,
    'region_name': '新市区',
    'region_code': 130602,
    'parent_code': 130600
  },
  {
    'id': 139,
    'region_name': '北市区',
    'region_code': 130603,
    'parent_code': 130600
  },
  {
    'id': 140,
    'region_name': '南市区',
    'region_code': 130604,
    'parent_code': 130600
  },
  {
    'id': 141,
    'region_name': '满城县',
    'region_code': 130621,
    'parent_code': 130600
  },
  {
    'id': 142,
    'region_name': '清苑县',
    'region_code': 130622,
    'parent_code': 130600
  },
  {
    'id': 143,
    'region_name': '涞水县',
    'region_code': 130623,
    'parent_code': 130600
  },
  {
    'id': 144,
    'region_name': '阜平县',
    'region_code': 130624,
    'parent_code': 130600
  },
  {
    'id': 145,
    'region_name': '徐水县',
    'region_code': 130625,
    'parent_code': 130600
  },
  {
    'id': 146,
    'region_name': '定兴县',
    'region_code': 130626,
    'parent_code': 130600
  },
  {
    'id': 147,
    'region_name': '唐县',
    'region_code': 130627,
    'parent_code': 130600
  },
  {
    'id': 148,
    'region_name': '高阳县',
    'region_code': 130628,
    'parent_code': 130600
  },
  {
    'id': 149,
    'region_name': '容城县',
    'region_code': 130629,
    'parent_code': 130600
  },
  {
    'id': 150,
    'region_name': '涞源县',
    'region_code': 130630,
    'parent_code': 130600
  },
  {
    'id': 151,
    'region_name': '望都县',
    'region_code': 130631,
    'parent_code': 130600
  },
  {
    'id': 152,
    'region_name': '安新县',
    'region_code': 130632,
    'parent_code': 130600
  },
  {
    'id': 153,
    'region_name': '曲阳县',
    'region_code': 130634,
    'parent_code': 130600
  },
  {
    'id': 154,
    'region_name': '蠡县',
    'region_code': 130635,
    'parent_code': 130600
  },
  {
    'id': 155,
    'region_name': '顺平县',
    'region_code': 130636,
    'parent_code': 130600
  },
  {
    'id': 156,
    'region_name': '博野县',
    'region_code': 130637,
    'parent_code': 130600
  },
  {
    'id': 157,
    'region_name': '雄县',
    'region_code': 130638,
    'parent_code': 130600
  },
  {
    'id': 158,
    'region_name': '涿州市',
    'region_code': 130681,
    'parent_code': 130600
  },
  {
    'id': 159,
    'region_name': '定州市',
    'region_code': 130682,
    'parent_code': 130600
  },
  {
    'id': 160,
    'region_name': '安国市',
    'region_code': 130683,
    'parent_code': 130600
  },
  {
    'id': 161,
    'region_name': '高碑店市',
    'region_code': 130684,
    'parent_code': 130600
  },
  {
    'id': 162,
    'region_name': '张家口市',
    'region_code': 130700,
    'parent_code': 130000
  },
  {
    'id': 163,
    'region_name': '市辖区',
    'region_code': 130701,
    'parent_code': 130700
  },
  {
    'id': 164,
    'region_name': '桥东区',
    'region_code': 130702,
    'parent_code': 130700
  },
  {
    'id': 165,
    'region_name': '桥西区',
    'region_code': 130703,
    'parent_code': 130700
  },
  {
    'id': 166,
    'region_name': '宣化区',
    'region_code': 130705,
    'parent_code': 130700
  },
  {
    'id': 167,
    'region_name': '下花园区',
    'region_code': 130706,
    'parent_code': 130700
  },
  {
    'id': 168,
    'region_name': '宣化县',
    'region_code': 130721,
    'parent_code': 130700
  },
  {
    'id': 169,
    'region_name': '张北县',
    'region_code': 130722,
    'parent_code': 130700
  },
  {
    'id': 170,
    'region_name': '康保县',
    'region_code': 130723,
    'parent_code': 130700
  },
  {
    'id': 171,
    'region_name': '沽源县',
    'region_code': 130724,
    'parent_code': 130700
  },
  {
    'id': 172,
    'region_name': '尚义县',
    'region_code': 130725,
    'parent_code': 130700
  },
  {
    'id': 173,
    'region_name': '蔚县',
    'region_code': 130726,
    'parent_code': 130700
  },
  {
    'id': 174,
    'region_name': '阳原县',
    'region_code': 130727,
    'parent_code': 130700
  },
  {
    'id': 175,
    'region_name': '怀安县',
    'region_code': 130728,
    'parent_code': 130700
  },
  {
    'id': 176,
    'region_name': '万全县',
    'region_code': 130729,
    'parent_code': 130700
  },
  {
    'id': 177,
    'region_name': '怀来县',
    'region_code': 130730,
    'parent_code': 130700
  },
  {
    'id': 178,
    'region_name': '涿鹿县',
    'region_code': 130731,
    'parent_code': 130700
  },
  {
    'id': 179,
    'region_name': '赤城县',
    'region_code': 130732,
    'parent_code': 130700
  },
  {
    'id': 180,
    'region_name': '崇礼县',
    'region_code': 130733,
    'parent_code': 130700
  },
  {
    'id': 181,
    'region_name': '承德市',
    'region_code': 130800,
    'parent_code': 130000
  },
  {
    'id': 182,
    'region_name': '市辖区',
    'region_code': 130801,
    'parent_code': 130800
  },
  {
    'id': 183,
    'region_name': '双桥区',
    'region_code': 130802,
    'parent_code': 130800
  },
  {
    'id': 184,
    'region_name': '双滦区',
    'region_code': 130803,
    'parent_code': 130800
  },
  {
    'id': 185,
    'region_name': '鹰手营子矿区',
    'region_code': 130804,
    'parent_code': 130800
  },
  {
    'id': 186,
    'region_name': '承德县',
    'region_code': 130821,
    'parent_code': 130800
  },
  {
    'id': 187,
    'region_name': '兴隆县',
    'region_code': 130822,
    'parent_code': 130800
  },
  {
    'id': 188,
    'region_name': '平泉县',
    'region_code': 130823,
    'parent_code': 130800
  },
  {
    'id': 189,
    'region_name': '滦平县',
    'region_code': 130824,
    'parent_code': 130800
  },
  {
    'id': 190,
    'region_name': '隆化县',
    'region_code': 130825,
    'parent_code': 130800
  },
  {
    'id': 191,
    'region_name': '丰宁满族自治县',
    'region_code': 130826,
    'parent_code': 130800
  },
  {
    'id': 192,
    'region_name': '宽城满族自治县',
    'region_code': 130827,
    'parent_code': 130800
  },
  {
    'id': 193,
    'region_name': '围场满族蒙古族自治县',
    'region_code': 130828,
    'parent_code': 130800
  },
  {
    'id': 194,
    'region_name': '沧州市',
    'region_code': 130900,
    'parent_code': 130000
  },
  {
    'id': 195,
    'region_name': '市辖区',
    'region_code': 130901,
    'parent_code': 130900
  },
  {
    'id': 196,
    'region_name': '新华区',
    'region_code': 130902,
    'parent_code': 130900
  },
  {
    'id': 197,
    'region_name': '运河区',
    'region_code': 130903,
    'parent_code': 130900
  },
  {
    'id': 198,
    'region_name': '沧县',
    'region_code': 130921,
    'parent_code': 130900
  },
  {
    'id': 199,
    'region_name': '青县',
    'region_code': 130922,
    'parent_code': 130900
  },
  {
    'id': 200,
    'region_name': '东光县',
    'region_code': 130923,
    'parent_code': 130900
  },
  {
    'id': 201,
    'region_name': '海兴县',
    'region_code': 130924,
    'parent_code': 130900
  },
  {
    'id': 202,
    'region_name': '盐山县',
    'region_code': 130925,
    'parent_code': 130900
  },
  {
    'id': 203,
    'region_name': '肃宁县',
    'region_code': 130926,
    'parent_code': 130900
  },
  {
    'id': 204,
    'region_name': '南皮县',
    'region_code': 130927,
    'parent_code': 130900
  },
  {
    'id': 205,
    'region_name': '吴桥县',
    'region_code': 130928,
    'parent_code': 130900
  },
  {
    'id': 206,
    'region_name': '献县',
    'region_code': 130929,
    'parent_code': 130900
  },
  {
    'id': 207,
    'region_name': '孟村回族自治县',
    'region_code': 130930,
    'parent_code': 130900
  },
  {
    'id': 208,
    'region_name': '泊头市',
    'region_code': 130981,
    'parent_code': 130900
  },
  {
    'id': 209,
    'region_name': '任丘市',
    'region_code': 130982,
    'parent_code': 130900
  },
  {
    'id': 210,
    'region_name': '黄骅市',
    'region_code': 130983,
    'parent_code': 130900
  },
  {
    'id': 211,
    'region_name': '河间市',
    'region_code': 130984,
    'parent_code': 130900
  },
  {
    'id': 212,
    'region_name': '廊坊市',
    'region_code': 131000,
    'parent_code': 130000
  },
  {
    'id': 213,
    'region_name': '市辖区',
    'region_code': 131001,
    'parent_code': 131000
  },
  {
    'id': 214,
    'region_name': '安次区',
    'region_code': 131002,
    'parent_code': 131000
  },
  {
    'id': 215,
    'region_name': '广阳区',
    'region_code': 131003,
    'parent_code': 131000
  },
  {
    'id': 216,
    'region_name': '固安县',
    'region_code': 131022,
    'parent_code': 131000
  },
  {
    'id': 217,
    'region_name': '永清县',
    'region_code': 131023,
    'parent_code': 131000
  },
  {
    'id': 218,
    'region_name': '香河县',
    'region_code': 131024,
    'parent_code': 131000
  },
  {
    'id': 219,
    'region_name': '大城县',
    'region_code': 131025,
    'parent_code': 131000
  },
  {
    'id': 220,
    'region_name': '文安县',
    'region_code': 131026,
    'parent_code': 131000
  },
  {
    'id': 221,
    'region_name': '大厂回族自治县',
    'region_code': 131028,
    'parent_code': 131000
  },
  {
    'id': 222,
    'region_name': '霸州市',
    'region_code': 131081,
    'parent_code': 131000
  },
  {
    'id': 223,
    'region_name': '三河市',
    'region_code': 131082,
    'parent_code': 131000
  },
  {
    'id': 224,
    'region_name': '衡水市',
    'region_code': 131100,
    'parent_code': 130000
  },
  {
    'id': 225,
    'region_name': '市辖区',
    'region_code': 131101,
    'parent_code': 131100
  },
  {
    'id': 226,
    'region_name': '桃城区',
    'region_code': 131102,
    'parent_code': 131100
  },
  {
    'id': 227,
    'region_name': '枣强县',
    'region_code': 131121,
    'parent_code': 131100
  },
  {
    'id': 228,
    'region_name': '武邑县',
    'region_code': 131122,
    'parent_code': 131100
  },
  {
    'id': 229,
    'region_name': '武强县',
    'region_code': 131123,
    'parent_code': 131100
  },
  {
    'id': 230,
    'region_name': '饶阳县',
    'region_code': 131124,
    'parent_code': 131100
  },
  {
    'id': 231,
    'region_name': '安平县',
    'region_code': 131125,
    'parent_code': 131100
  },
  {
    'id': 232,
    'region_name': '故城县',
    'region_code': 131126,
    'parent_code': 131100
  },
  {
    'id': 233,
    'region_name': '景县',
    'region_code': 131127,
    'parent_code': 131100
  },
  {
    'id': 234,
    'region_name': '阜城县',
    'region_code': 131128,
    'parent_code': 131100
  },
  {
    'id': 235,
    'region_name': '冀州市',
    'region_code': 131181,
    'parent_code': 131100
  },
  {
    'id': 236,
    'region_name': '深州市',
    'region_code': 131182,
    'parent_code': 131100
  },
  {
    'id': 237,
    'region_name': '山西省',
    'region_code': 140000,
    'parent_code': 0
  },
  {
    'id': 238,
    'region_name': '太原市',
    'region_code': 140100,
    'parent_code': 140000
  },
  {
    'id': 239,
    'region_name': '市辖区',
    'region_code': 140101,
    'parent_code': 140100
  },
  {
    'id': 240,
    'region_name': '小店区',
    'region_code': 140105,
    'parent_code': 140100
  },
  {
    'id': 241,
    'region_name': '迎泽区',
    'region_code': 140106,
    'parent_code': 140100
  },
  {
    'id': 242,
    'region_name': '杏花岭区',
    'region_code': 140107,
    'parent_code': 140100
  },
  {
    'id': 243,
    'region_name': '尖草坪区',
    'region_code': 140108,
    'parent_code': 140100
  },
  {
    'id': 244,
    'region_name': '万柏林区',
    'region_code': 140109,
    'parent_code': 140100
  },
  {
    'id': 245,
    'region_name': '晋源区',
    'region_code': 140110,
    'parent_code': 140100
  },
  {
    'id': 246,
    'region_name': '清徐县',
    'region_code': 140121,
    'parent_code': 140100
  },
  {
    'id': 247,
    'region_name': '阳曲县',
    'region_code': 140122,
    'parent_code': 140100
  },
  {
    'id': 248,
    'region_name': '娄烦县',
    'region_code': 140123,
    'parent_code': 140100
  },
  {
    'id': 249,
    'region_name': '古交市',
    'region_code': 140181,
    'parent_code': 140100
  },
  {
    'id': 250,
    'region_name': '大同市',
    'region_code': 140200,
    'parent_code': 140000
  },
  {
    'id': 251,
    'region_name': '市辖区',
    'region_code': 140201,
    'parent_code': 140200
  },
  {
    'id': 252,
    'region_name': '城区',
    'region_code': 140202,
    'parent_code': 140200
  },
  {
    'id': 253,
    'region_name': '矿区',
    'region_code': 140203,
    'parent_code': 140200
  },
  {
    'id': 254,
    'region_name': '南郊区',
    'region_code': 140211,
    'parent_code': 140200
  },
  {
    'id': 255,
    'region_name': '新荣区',
    'region_code': 140212,
    'parent_code': 140200
  },
  {
    'id': 256,
    'region_name': '阳高县',
    'region_code': 140221,
    'parent_code': 140200
  },
  {
    'id': 257,
    'region_name': '天镇县',
    'region_code': 140222,
    'parent_code': 140200
  },
  {
    'id': 258,
    'region_name': '广灵县',
    'region_code': 140223,
    'parent_code': 140200
  },
  {
    'id': 259,
    'region_name': '灵丘县',
    'region_code': 140224,
    'parent_code': 140200
  },
  {
    'id': 260,
    'region_name': '浑源县',
    'region_code': 140225,
    'parent_code': 140200
  },
  {
    'id': 261,
    'region_name': '左云县',
    'region_code': 140226,
    'parent_code': 140200
  },
  {
    'id': 262,
    'region_name': '大同县',
    'region_code': 140227,
    'parent_code': 140200
  },
  {
    'id': 263,
    'region_name': '阳泉市',
    'region_code': 140300,
    'parent_code': 140000
  },
  {
    'id': 264,
    'region_name': '市辖区',
    'region_code': 140301,
    'parent_code': 140300
  },
  {
    'id': 265,
    'region_name': '城区',
    'region_code': 140302,
    'parent_code': 140300
  },
  {
    'id': 266,
    'region_name': '矿区',
    'region_code': 140303,
    'parent_code': 140300
  },
  {
    'id': 267,
    'region_name': '郊区',
    'region_code': 140311,
    'parent_code': 140300
  },
  {
    'id': 268,
    'region_name': '平定县',
    'region_code': 140321,
    'parent_code': 140300
  },
  {
    'id': 269,
    'region_name': '盂县',
    'region_code': 140322,
    'parent_code': 140300
  },
  {
    'id': 270,
    'region_name': '长治市',
    'region_code': 140400,
    'parent_code': 140000
  },
  {
    'id': 271,
    'region_name': '市辖区',
    'region_code': 140401,
    'parent_code': 140400
  },
  {
    'id': 272,
    'region_name': '城区',
    'region_code': 140402,
    'parent_code': 140400
  },
  {
    'id': 273,
    'region_name': '郊区',
    'region_code': 140411,
    'parent_code': 140400
  },
  {
    'id': 274,
    'region_name': '长治县',
    'region_code': 140421,
    'parent_code': 140400
  },
  {
    'id': 275,
    'region_name': '襄垣县',
    'region_code': 140423,
    'parent_code': 140400
  },
  {
    'id': 276,
    'region_name': '屯留县',
    'region_code': 140424,
    'parent_code': 140400
  },
  {
    'id': 277,
    'region_name': '平顺县',
    'region_code': 140425,
    'parent_code': 140400
  },
  {
    'id': 278,
    'region_name': '黎城县',
    'region_code': 140426,
    'parent_code': 140400
  },
  {
    'id': 279,
    'region_name': '壶关县',
    'region_code': 140427,
    'parent_code': 140400
  },
  {
    'id': 280,
    'region_name': '长子县',
    'region_code': 140428,
    'parent_code': 140400
  },
  {
    'id': 281,
    'region_name': '武乡县',
    'region_code': 140429,
    'parent_code': 140400
  },
  {
    'id': 282,
    'region_name': '沁县',
    'region_code': 140430,
    'parent_code': 140400
  },
  {
    'id': 283,
    'region_name': '沁源县',
    'region_code': 140431,
    'parent_code': 140400
  },
  {
    'id': 284,
    'region_name': '潞城市',
    'region_code': 140481,
    'parent_code': 140400
  },
  {
    'id': 285,
    'region_name': '晋城市',
    'region_code': 140500,
    'parent_code': 140000
  },
  {
    'id': 286,
    'region_name': '市辖区',
    'region_code': 140501,
    'parent_code': 140500
  },
  {
    'id': 287,
    'region_name': '城区',
    'region_code': 140502,
    'parent_code': 140500
  },
  {
    'id': 288,
    'region_name': '沁水县',
    'region_code': 140521,
    'parent_code': 140500
  },
  {
    'id': 289,
    'region_name': '阳城县',
    'region_code': 140522,
    'parent_code': 140500
  },
  {
    'id': 290,
    'region_name': '陵川县',
    'region_code': 140524,
    'parent_code': 140500
  },
  {
    'id': 291,
    'region_name': '泽州县',
    'region_code': 140525,
    'parent_code': 140500
  },
  {
    'id': 292,
    'region_name': '高平市',
    'region_code': 140581,
    'parent_code': 140500
  },
  {
    'id': 293,
    'region_name': '朔州市',
    'region_code': 140600,
    'parent_code': 140000
  },
  {
    'id': 294,
    'region_name': '市辖区',
    'region_code': 140601,
    'parent_code': 140600
  },
  {
    'id': 295,
    'region_name': '朔城区',
    'region_code': 140602,
    'parent_code': 140600
  },
  {
    'id': 296,
    'region_name': '平鲁区',
    'region_code': 140603,
    'parent_code': 140600
  },
  {
    'id': 297,
    'region_name': '山阴县',
    'region_code': 140621,
    'parent_code': 140600
  },
  {
    'id': 298,
    'region_name': '应县',
    'region_code': 140622,
    'parent_code': 140600
  },
  {
    'id': 299,
    'region_name': '右玉县',
    'region_code': 140623,
    'parent_code': 140600
  },
  {
    'id': 300,
    'region_name': '怀仁县',
    'region_code': 140624,
    'parent_code': 140600
  },
  {
    'id': 301,
    'region_name': '晋中市',
    'region_code': 140700,
    'parent_code': 140000
  },
  {
    'id': 302,
    'region_name': '市辖区',
    'region_code': 140701,
    'parent_code': 140700
  },
  {
    'id': 303,
    'region_name': '榆次区',
    'region_code': 140702,
    'parent_code': 140700
  },
  {
    'id': 304,
    'region_name': '榆社县',
    'region_code': 140721,
    'parent_code': 140700
  },
  {
    'id': 305,
    'region_name': '左权县',
    'region_code': 140722,
    'parent_code': 140700
  },
  {
    'id': 306,
    'region_name': '和顺县',
    'region_code': 140723,
    'parent_code': 140700
  },
  {
    'id': 307,
    'region_name': '昔阳县',
    'region_code': 140724,
    'parent_code': 140700
  },
  {
    'id': 308,
    'region_name': '寿阳县',
    'region_code': 140725,
    'parent_code': 140700
  },
  {
    'id': 309,
    'region_name': '太谷县',
    'region_code': 140726,
    'parent_code': 140700
  },
  {
    'id': 310,
    'region_name': '祁县',
    'region_code': 140727,
    'parent_code': 140700
  },
  {
    'id': 311,
    'region_name': '平遥县',
    'region_code': 140728,
    'parent_code': 140700
  },
  {
    'id': 312,
    'region_name': '灵石县',
    'region_code': 140729,
    'parent_code': 140700
  },
  {
    'id': 313,
    'region_name': '介休市',
    'region_code': 140781,
    'parent_code': 140700
  },
  {
    'id': 314,
    'region_name': '运城市',
    'region_code': 140800,
    'parent_code': 140000
  },
  {
    'id': 315,
    'region_name': '市辖区',
    'region_code': 140801,
    'parent_code': 140800
  },
  {
    'id': 316,
    'region_name': '盐湖区',
    'region_code': 140802,
    'parent_code': 140800
  },
  {
    'id': 317,
    'region_name': '临猗县',
    'region_code': 140821,
    'parent_code': 140800
  },
  {
    'id': 318,
    'region_name': '万荣县',
    'region_code': 140822,
    'parent_code': 140800
  },
  {
    'id': 319,
    'region_name': '闻喜县',
    'region_code': 140823,
    'parent_code': 140800
  },
  {
    'id': 320,
    'region_name': '稷山县',
    'region_code': 140824,
    'parent_code': 140800
  },
  {
    'id': 321,
    'region_name': '新绛县',
    'region_code': 140825,
    'parent_code': 140800
  },
  {
    'id': 322,
    'region_name': '绛县',
    'region_code': 140826,
    'parent_code': 140800
  },
  {
    'id': 323,
    'region_name': '垣曲县',
    'region_code': 140827,
    'parent_code': 140800
  },
  {
    'id': 324,
    'region_name': '夏县',
    'region_code': 140828,
    'parent_code': 140800
  },
  {
    'id': 325,
    'region_name': '平陆县',
    'region_code': 140829,
    'parent_code': 140800
  },
  {
    'id': 326,
    'region_name': '芮城县',
    'region_code': 140830,
    'parent_code': 140800
  },
  {
    'id': 327,
    'region_name': '永济市',
    'region_code': 140881,
    'parent_code': 140800
  },
  {
    'id': 328,
    'region_name': '河津市',
    'region_code': 140882,
    'parent_code': 140800
  },
  {
    'id': 329,
    'region_name': '忻州市',
    'region_code': 140900,
    'parent_code': 140000
  },
  {
    'id': 330,
    'region_name': '市辖区',
    'region_code': 140901,
    'parent_code': 140900
  },
  {
    'id': 331,
    'region_name': '忻府区',
    'region_code': 140902,
    'parent_code': 140900
  },
  {
    'id': 332,
    'region_name': '定襄县',
    'region_code': 140921,
    'parent_code': 140900
  },
  {
    'id': 333,
    'region_name': '五台县',
    'region_code': 140922,
    'parent_code': 140900
  },
  {
    'id': 334,
    'region_name': '代县',
    'region_code': 140923,
    'parent_code': 140900
  },
  {
    'id': 335,
    'region_name': '繁峙县',
    'region_code': 140924,
    'parent_code': 140900
  },
  {
    'id': 336,
    'region_name': '宁武县',
    'region_code': 140925,
    'parent_code': 140900
  },
  {
    'id': 337,
    'region_name': '静乐县',
    'region_code': 140926,
    'parent_code': 140900
  },
  {
    'id': 338,
    'region_name': '神池县',
    'region_code': 140927,
    'parent_code': 140900
  },
  {
    'id': 339,
    'region_name': '五寨县',
    'region_code': 140928,
    'parent_code': 140900
  },
  {
    'id': 340,
    'region_name': '岢岚县',
    'region_code': 140929,
    'parent_code': 140900
  },
  {
    'id': 341,
    'region_name': '河曲县',
    'region_code': 140930,
    'parent_code': 140900
  },
  {
    'id': 342,
    'region_name': '保德县',
    'region_code': 140931,
    'parent_code': 140900
  },
  {
    'id': 343,
    'region_name': '偏关县',
    'region_code': 140932,
    'parent_code': 140900
  },
  {
    'id': 344,
    'region_name': '原平市',
    'region_code': 140981,
    'parent_code': 140900
  },
  {
    'id': 345,
    'region_name': '临汾市',
    'region_code': 141000,
    'parent_code': 140000
  },
  {
    'id': 346,
    'region_name': '市辖区',
    'region_code': 141001,
    'parent_code': 141000
  },
  {
    'id': 347,
    'region_name': '尧都区',
    'region_code': 141002,
    'parent_code': 141000
  },
  {
    'id': 348,
    'region_name': '曲沃县',
    'region_code': 141021,
    'parent_code': 141000
  },
  {
    'id': 349,
    'region_name': '翼城县',
    'region_code': 141022,
    'parent_code': 141000
  },
  {
    'id': 350,
    'region_name': '襄汾县',
    'region_code': 141023,
    'parent_code': 141000
  },
  {
    'id': 351,
    'region_name': '洪洞县',
    'region_code': 141024,
    'parent_code': 141000
  },
  {
    'id': 352,
    'region_name': '古县',
    'region_code': 141025,
    'parent_code': 141000
  },
  {
    'id': 353,
    'region_name': '安泽县',
    'region_code': 141026,
    'parent_code': 141000
  },
  {
    'id': 354,
    'region_name': '浮山县',
    'region_code': 141027,
    'parent_code': 141000
  },
  {
    'id': 355,
    'region_name': '吉县',
    'region_code': 141028,
    'parent_code': 141000
  },
  {
    'id': 356,
    'region_name': '乡宁县',
    'region_code': 141029,
    'parent_code': 141000
  },
  {
    'id': 357,
    'region_name': '大宁县',
    'region_code': 141030,
    'parent_code': 141000
  },
  {
    'id': 358,
    'region_name': '隰县',
    'region_code': 141031,
    'parent_code': 141000
  },
  {
    'id': 359,
    'region_name': '永和县',
    'region_code': 141032,
    'parent_code': 141000
  },
  {
    'id': 360,
    'region_name': '蒲县',
    'region_code': 141033,
    'parent_code': 141000
  },
  {
    'id': 361,
    'region_name': '汾西县',
    'region_code': 141034,
    'parent_code': 141000
  },
  {
    'id': 362,
    'region_name': '侯马市',
    'region_code': 141081,
    'parent_code': 141000
  },
  {
    'id': 363,
    'region_name': '霍州市',
    'region_code': 141082,
    'parent_code': 141000
  },
  {
    'id': 364,
    'region_name': '吕梁市',
    'region_code': 141100,
    'parent_code': 140000
  },
  {
    'id': 365,
    'region_name': '市辖区',
    'region_code': 141101,
    'parent_code': 141100
  },
  {
    'id': 366,
    'region_name': '离石区',
    'region_code': 141102,
    'parent_code': 141100
  },
  {
    'id': 367,
    'region_name': '文水县',
    'region_code': 141121,
    'parent_code': 141100
  },
  {
    'id': 368,
    'region_name': '交城县',
    'region_code': 141122,
    'parent_code': 141100
  },
  {
    'id': 369,
    'region_name': '兴县',
    'region_code': 141123,
    'parent_code': 141100
  },
  {
    'id': 370,
    'region_name': '临县',
    'region_code': 141124,
    'parent_code': 141100
  },
  {
    'id': 371,
    'region_name': '柳林县',
    'region_code': 141125,
    'parent_code': 141100
  },
  {
    'id': 372,
    'region_name': '石楼县',
    'region_code': 141126,
    'parent_code': 141100
  },
  {
    'id': 373,
    'region_name': '岚县',
    'region_code': 141127,
    'parent_code': 141100
  },
  {
    'id': 374,
    'region_name': '方山县',
    'region_code': 141128,
    'parent_code': 141100
  },
  {
    'id': 375,
    'region_name': '中阳县',
    'region_code': 141129,
    'parent_code': 141100
  },
  {
    'id': 376,
    'region_name': '交口县',
    'region_code': 141130,
    'parent_code': 141100
  },
  {
    'id': 377,
    'region_name': '孝义市',
    'region_code': 141181,
    'parent_code': 141100
  },
  {
    'id': 378,
    'region_name': '汾阳市',
    'region_code': 141182,
    'parent_code': 141100
  },
  {
    'id': 379,
    'region_name': '内蒙古自治区',
    'region_code': 150000,
    'parent_code': 0
  },
  {
    'id': 380,
    'region_name': '呼和浩特市',
    'region_code': 150100,
    'parent_code': 150000
  },
  {
    'id': 381,
    'region_name': '市辖区',
    'region_code': 150101,
    'parent_code': 150100
  },
  {
    'id': 382,
    'region_name': '新城区',
    'region_code': 150102,
    'parent_code': 150100
  },
  {
    'id': 383,
    'region_name': '回民区',
    'region_code': 150103,
    'parent_code': 150100
  },
  {
    'id': 384,
    'region_name': '玉泉区',
    'region_code': 150104,
    'parent_code': 150100
  },
  {
    'id': 385,
    'region_name': '赛罕区',
    'region_code': 150105,
    'parent_code': 150100
  },
  {
    'id': 386,
    'region_name': '土默特左旗',
    'region_code': 150121,
    'parent_code': 150100
  },
  {
    'id': 387,
    'region_name': '托克托县',
    'region_code': 150122,
    'parent_code': 150100
  },
  {
    'id': 388,
    'region_name': '和林格尔县',
    'region_code': 150123,
    'parent_code': 150100
  },
  {
    'id': 389,
    'region_name': '清水河县',
    'region_code': 150124,
    'parent_code': 150100
  },
  {
    'id': 390,
    'region_name': '武川县',
    'region_code': 150125,
    'parent_code': 150100
  },
  {
    'id': 391,
    'region_name': '包头市',
    'region_code': 150200,
    'parent_code': 150000
  },
  {
    'id': 392,
    'region_name': '市辖区',
    'region_code': 150201,
    'parent_code': 150200
  },
  {
    'id': 393,
    'region_name': '东河区',
    'region_code': 150202,
    'parent_code': 150200
  },
  {
    'id': 394,
    'region_name': '昆都仑区',
    'region_code': 150203,
    'parent_code': 150200
  },
  {
    'id': 395,
    'region_name': '青山区',
    'region_code': 150204,
    'parent_code': 150200
  },
  {
    'id': 396,
    'region_name': '石拐区',
    'region_code': 150205,
    'parent_code': 150200
  },
  {
    'id': 397,
    'region_name': '白云矿区',
    'region_code': 150206,
    'parent_code': 150200
  },
  {
    'id': 398,
    'region_name': '九原区',
    'region_code': 150207,
    'parent_code': 150200
  },
  {
    'id': 399,
    'region_name': '土默特右旗合旗',
    'region_code': 150221,
    'parent_code': 150200
  },
  {
    'id': 400,
    'region_name': '固阳县',
    'region_code': 150222,
    'parent_code': 150200
  },
  {
    'id': 401,
    'region_name': '达尔罕茂明安联',
    'region_code': 150223,
    'parent_code': 150200
  },
  {
    'id': 402,
    'region_name': '乌海市',
    'region_code': 150300,
    'parent_code': 150000
  },
  {
    'id': 403,
    'region_name': '市辖区',
    'region_code': 150301,
    'parent_code': 150300
  },
  {
    'id': 404,
    'region_name': '海勃湾区',
    'region_code': 150302,
    'parent_code': 150300
  },
  {
    'id': 405,
    'region_name': '海南区',
    'region_code': 150303,
    'parent_code': 150300
  },
  {
    'id': 406,
    'region_name': '乌达区',
    'region_code': 150304,
    'parent_code': 150300
  },
  {
    'id': 407,
    'region_name': '赤峰市',
    'region_code': 150400,
    'parent_code': 150000
  },
  {
    'id': 408,
    'region_name': '市辖区',
    'region_code': 150401,
    'parent_code': 150400
  },
  {
    'id': 409,
    'region_name': '红山区',
    'region_code': 150402,
    'parent_code': 150400
  },
  {
    'id': 410,
    'region_name': '元宝山区',
    'region_code': 150403,
    'parent_code': 150400
  },
  {
    'id': 411,
    'region_name': '松山区',
    'region_code': 150404,
    'parent_code': 150400
  },
  {
    'id': 412,
    'region_name': '阿鲁科尔沁旗',
    'region_code': 150421,
    'parent_code': 150400
  },
  {
    'id': 413,
    'region_name': '巴林左旗',
    'region_code': 150422,
    'parent_code': 150400
  },
  {
    'id': 414,
    'region_name': '巴林右旗',
    'region_code': 150423,
    'parent_code': 150400
  },
  {
    'id': 415,
    'region_name': '林西县',
    'region_code': 150424,
    'parent_code': 150400
  },
  {
    'id': 416,
    'region_name': '克什克腾旗',
    'region_code': 150425,
    'parent_code': 150400
  },
  {
    'id': 417,
    'region_name': '翁牛特旗',
    'region_code': 150426,
    'parent_code': 150400
  },
  {
    'id': 418,
    'region_name': '喀喇沁旗',
    'region_code': 150428,
    'parent_code': 150400
  },
  {
    'id': 419,
    'region_name': '宁城县',
    'region_code': 150429,
    'parent_code': 150400
  },
  {
    'id': 420,
    'region_name': '敖汉旗',
    'region_code': 150430,
    'parent_code': 150400
  },
  {
    'id': 421,
    'region_name': '通辽市',
    'region_code': 150500,
    'parent_code': 150000
  },
  {
    'id': 422,
    'region_name': '市辖区',
    'region_code': 150501,
    'parent_code': 150500
  },
  {
    'id': 423,
    'region_name': '科尔沁区',
    'region_code': 150502,
    'parent_code': 150500
  },
  {
    'id': 424,
    'region_name': '科尔沁左翼中旗',
    'region_code': 150521,
    'parent_code': 150500
  },
  {
    'id': 425,
    'region_name': '科尔沁左翼后旗',
    'region_code': 150522,
    'parent_code': 150500
  },
  {
    'id': 426,
    'region_name': '开鲁县',
    'region_code': 150523,
    'parent_code': 150500
  },
  {
    'id': 427,
    'region_name': '库伦旗',
    'region_code': 150524,
    'parent_code': 150500
  },
  {
    'id': 428,
    'region_name': '奈曼旗',
    'region_code': 150525,
    'parent_code': 150500
  },
  {
    'id': 429,
    'region_name': '扎鲁特旗',
    'region_code': 150526,
    'parent_code': 150500
  },
  {
    'id': 430,
    'region_name': '霍林郭勒市',
    'region_code': 150581,
    'parent_code': 150500
  },
  {
    'id': 431,
    'region_name': '鄂尔多斯市',
    'region_code': 150600,
    'parent_code': 150000
  },
  {
    'id': 432,
    'region_name': '东胜区',
    'region_code': 150602,
    'parent_code': 150600
  },
  {
    'id': 433,
    'region_name': '达拉特旗',
    'region_code': 150621,
    'parent_code': 150600
  },
  {
    'id': 434,
    'region_name': '准格尔旗',
    'region_code': 150622,
    'parent_code': 150600
  },
  {
    'id': 435,
    'region_name': '鄂托克前旗',
    'region_code': 150623,
    'parent_code': 150600
  },
  {
    'id': 436,
    'region_name': '鄂托克旗',
    'region_code': 150624,
    'parent_code': 150600
  },
  {
    'id': 437,
    'region_name': '杭锦旗',
    'region_code': 150625,
    'parent_code': 150600
  },
  {
    'id': 438,
    'region_name': '乌审旗',
    'region_code': 150626,
    'parent_code': 150600
  },
  {
    'id': 439,
    'region_name': '伊金霍洛旗',
    'region_code': 150627,
    'parent_code': 150600
  },
  {
    'id': 440,
    'region_name': '呼伦贝尔市',
    'region_code': 150700,
    'parent_code': 150000
  },
  {
    'id': 441,
    'region_name': '市辖区',
    'region_code': 150701,
    'parent_code': 150700
  },
  {
    'id': 442,
    'region_name': '海拉尔区族自治旗',
    'region_code': 150702,
    'parent_code': 150700
  },
  {
    'id': 443,
    'region_name': '阿荣旗',
    'region_code': 150721,
    'parent_code': 150700
  },
  {
    'id': 444,
    'region_name': '莫力达瓦达斡尔',
    'region_code': 150722,
    'parent_code': 150700
  },
  {
    'id': 445,
    'region_name': '鄂伦春自治旗',
    'region_code': 150723,
    'parent_code': 150700
  },
  {
    'id': 446,
    'region_name': '鄂温克族自治旗',
    'region_code': 150724,
    'parent_code': 150700
  },
  {
    'id': 447,
    'region_name': '陈巴尔虎旗',
    'region_code': 150725,
    'parent_code': 150700
  },
  {
    'id': 448,
    'region_name': '新巴尔虎左旗',
    'region_code': 150726,
    'parent_code': 150700
  },
  {
    'id': 449,
    'region_name': '新巴尔虎右旗',
    'region_code': 150727,
    'parent_code': 150700
  },
  {
    'id': 450,
    'region_name': '满洲里市',
    'region_code': 150781,
    'parent_code': 150700
  },
  {
    'id': 451,
    'region_name': '牙克石市',
    'region_code': 150782,
    'parent_code': 150700
  },
  {
    'id': 452,
    'region_name': '扎兰屯市',
    'region_code': 150783,
    'parent_code': 150700
  },
  {
    'id': 453,
    'region_name': '额尔古纳市',
    'region_code': 150784,
    'parent_code': 150700
  },
  {
    'id': 454,
    'region_name': '根河市',
    'region_code': 150785,
    'parent_code': 150700
  },
  {
    'id': 455,
    'region_name': '巴彦淖尔市',
    'region_code': 150800,
    'parent_code': 150000
  },
  {
    'id': 456,
    'region_name': '市辖区',
    'region_code': 150801,
    'parent_code': 150800
  },
  {
    'id': 457,
    'region_name': '临河区',
    'region_code': 150802,
    'parent_code': 150800
  },
  {
    'id': 458,
    'region_name': '五原县',
    'region_code': 150821,
    'parent_code': 150800
  },
  {
    'id': 459,
    'region_name': '磴口县',
    'region_code': 150822,
    'parent_code': 150800
  },
  {
    'id': 460,
    'region_name': '乌拉特前旗',
    'region_code': 150823,
    'parent_code': 150800
  },
  {
    'id': 461,
    'region_name': '乌拉特中旗',
    'region_code': 150824,
    'parent_code': 150800
  },
  {
    'id': 462,
    'region_name': '乌拉特后旗',
    'region_code': 150825,
    'parent_code': 150800
  },
  {
    'id': 463,
    'region_name': '杭锦后旗',
    'region_code': 150826,
    'parent_code': 150800
  },
  {
    'id': 464,
    'region_name': '乌兰察布市',
    'region_code': 150900,
    'parent_code': 150000
  },
  {
    'id': 465,
    'region_name': '市辖区',
    'region_code': 150901,
    'parent_code': 150900
  },
  {
    'id': 466,
    'region_name': '集宁区',
    'region_code': 150902,
    'parent_code': 150900
  },
  {
    'id': 467,
    'region_name': '卓资县',
    'region_code': 150921,
    'parent_code': 150900
  },
  {
    'id': 468,
    'region_name': '化德县',
    'region_code': 150922,
    'parent_code': 150900
  },
  {
    'id': 469,
    'region_name': '商都县',
    'region_code': 150923,
    'parent_code': 150900
  },
  {
    'id': 470,
    'region_name': '兴和县',
    'region_code': 150924,
    'parent_code': 150900
  },
  {
    'id': 471,
    'region_name': '凉城县',
    'region_code': 150925,
    'parent_code': 150900
  },
  {
    'id': 472,
    'region_name': '察哈尔右翼前',
    'region_code': 150926,
    'parent_code': 150900
  },
  {
    'id': 473,
    'region_name': '察哈尔右翼中旗',
    'region_code': 150927,
    'parent_code': 150900
  },
  {
    'id': 474,
    'region_name': '察哈尔右翼后',
    'region_code': 150928,
    'parent_code': 150900
  },
  {
    'id': 475,
    'region_name': '四子王旗',
    'region_code': 150929,
    'parent_code': 150900
  },
  {
    'id': 476,
    'region_name': '丰镇市',
    'region_code': 150981,
    'parent_code': 150900
  },
  {
    'id': 477,
    'region_name': '兴安盟',
    'region_code': 152200,
    'parent_code': 150000
  },
  {
    'id': 478,
    'region_name': '乌兰浩特市',
    'region_code': 152201,
    'parent_code': 152200
  },
  {
    'id': 479,
    'region_name': '阿尔山市',
    'region_code': 152202,
    'parent_code': 152200
  },
  {
    'id': 480,
    'region_name': '科尔沁右翼前旗',
    'region_code': 152221,
    'parent_code': 152200
  },
  {
    'id': 481,
    'region_name': '科尔沁右翼中旗',
    'region_code': 152222,
    'parent_code': 152200
  },
  {
    'id': 482,
    'region_name': '扎赉特旗',
    'region_code': 152223,
    'parent_code': 152200
  },
  {
    'id': 483,
    'region_name': '突泉县',
    'region_code': 152224,
    'parent_code': 152200
  },
  {
    'id': 484,
    'region_name': '锡林郭勒盟',
    'region_code': 152500,
    'parent_code': 150000
  },
  {
    'id': 485,
    'region_name': '二连浩特市',
    'region_code': 152501,
    'parent_code': 152500
  },
  {
    'id': 486,
    'region_name': '锡林浩特市',
    'region_code': 152502,
    'parent_code': 152500
  },
  {
    'id': 487,
    'region_name': '阿巴嘎旗',
    'region_code': 152522,
    'parent_code': 152500
  },
  {
    'id': 488,
    'region_name': '苏尼特左旗',
    'region_code': 152523,
    'parent_code': 152500
  },
  {
    'id': 489,
    'region_name': '苏尼特右旗',
    'region_code': 152524,
    'parent_code': 152500
  },
  {
    'id': 490,
    'region_name': '东乌珠穆沁旗',
    'region_code': 152525,
    'parent_code': 152500
  },
  {
    'id': 491,
    'region_name': '西乌珠穆沁旗',
    'region_code': 152526,
    'parent_code': 152500
  },
  {
    'id': 492,
    'region_name': '太仆寺旗',
    'region_code': 152527,
    'parent_code': 152500
  },
  {
    'id': 493,
    'region_name': '镶黄旗',
    'region_code': 152528,
    'parent_code': 152500
  },
  {
    'id': 494,
    'region_name': '正镶白旗',
    'region_code': 152529,
    'parent_code': 152500
  },
  {
    'id': 495,
    'region_name': '正蓝旗',
    'region_code': 152530,
    'parent_code': 152500
  },
  {
    'id': 496,
    'region_name': '多伦县',
    'region_code': 152531,
    'parent_code': 152500
  },
  {
    'id': 497,
    'region_name': '乌兰察布盟',
    'region_code': 152600,
    'parent_code': null
  },
  {
    'id': 498,
    'region_name': '阿拉善盟',
    'region_code': 152900,
    'parent_code': 150000
  },
  {
    'id': 499,
    'region_name': '阿拉善左旗',
    'region_code': 152921,
    'parent_code': 152900
  },
  {
    'id': 500,
    'region_name': '阿拉善右旗',
    'region_code': 152922,
    'parent_code': 152900
  },
  {
    'id': 501,
    'region_name': '额济纳旗',
    'region_code': 152923,
    'parent_code': 152900
  },
  {
    'id': 502,
    'region_name': '辽宁省',
    'region_code': 210000,
    'parent_code': 0
  },
  {
    'id': 503,
    'region_name': '沈阳市',
    'region_code': 210100,
    'parent_code': 210000
  },
  {
    'id': 504,
    'region_name': '市辖区',
    'region_code': 210101,
    'parent_code': 210100
  },
  {
    'id': 505,
    'region_name': '和平区',
    'region_code': 210102,
    'parent_code': 210100
  },
  {
    'id': 506,
    'region_name': '沈河区',
    'region_code': 210103,
    'parent_code': 210100
  },
  {
    'id': 507,
    'region_name': '大东区',
    'region_code': 210104,
    'parent_code': 210100
  },
  {
    'id': 508,
    'region_name': '皇姑区',
    'region_code': 210105,
    'parent_code': 210100
  },
  {
    'id': 509,
    'region_name': '铁西区',
    'region_code': 210106,
    'parent_code': 210100
  },
  {
    'id': 510,
    'region_name': '苏家屯区',
    'region_code': 210111,
    'parent_code': 210100
  },
  {
    'id': 511,
    'region_name': '东陵区',
    'region_code': 210112,
    'parent_code': 210100
  },
  {
    'id': 512,
    'region_name': '新城子区',
    'region_code': 210113,
    'parent_code': 210100
  },
  {
    'id': 513,
    'region_name': '于洪区',
    'region_code': 210114,
    'parent_code': 210100
  },
  {
    'id': 514,
    'region_name': '辽中县',
    'region_code': 210122,
    'parent_code': 210100
  },
  {
    'id': 515,
    'region_name': '康平县',
    'region_code': 210123,
    'parent_code': 210100
  },
  {
    'id': 516,
    'region_name': '法库县',
    'region_code': 210124,
    'parent_code': 210100
  },
  {
    'id': 517,
    'region_name': '新民市',
    'region_code': 210181,
    'parent_code': 210100
  },
  {
    'id': 518,
    'region_name': '大连市',
    'region_code': 210200,
    'parent_code': 210000
  },
  {
    'id': 519,
    'region_name': '市辖区',
    'region_code': 210201,
    'parent_code': 210200
  },
  {
    'id': 520,
    'region_name': '中山区',
    'region_code': 210202,
    'parent_code': 210200
  },
  {
    'id': 521,
    'region_name': '西岗区',
    'region_code': 210203,
    'parent_code': 210200
  },
  {
    'id': 522,
    'region_name': '沙河口区',
    'region_code': 210204,
    'parent_code': 210200
  },
  {
    'id': 523,
    'region_name': '甘井子区',
    'region_code': 210211,
    'parent_code': 210200
  },
  {
    'id': 524,
    'region_name': '旅顺口区',
    'region_code': 210212,
    'parent_code': 210200
  },
  {
    'id': 525,
    'region_name': '金州区',
    'region_code': 210213,
    'parent_code': 210200
  },
  {
    'id': 526,
    'region_name': '长海县',
    'region_code': 210224,
    'parent_code': 210200
  },
  {
    'id': 527,
    'region_name': '瓦房店市',
    'region_code': 210281,
    'parent_code': 210200
  },
  {
    'id': 528,
    'region_name': '普兰店市',
    'region_code': 210282,
    'parent_code': 210200
  },
  {
    'id': 529,
    'region_name': '庄河市',
    'region_code': 210283,
    'parent_code': 210200
  },
  {
    'id': 530,
    'region_name': '鞍山市',
    'region_code': 210300,
    'parent_code': 210000
  },
  {
    'id': 531,
    'region_name': '市辖区',
    'region_code': 210301,
    'parent_code': 210300
  },
  {
    'id': 532,
    'region_name': '铁东区',
    'region_code': 210302,
    'parent_code': 210300
  },
  {
    'id': 533,
    'region_name': '铁西区',
    'region_code': 210303,
    'parent_code': 210300
  },
  {
    'id': 534,
    'region_name': '立山区',
    'region_code': 210304,
    'parent_code': 210300
  },
  {
    'id': 535,
    'region_name': '千山区',
    'region_code': 210311,
    'parent_code': 210300
  },
  {
    'id': 536,
    'region_name': '台安县',
    'region_code': 210321,
    'parent_code': 210300
  },
  {
    'id': 537,
    'region_name': '岫岩满族自治县',
    'region_code': 210323,
    'parent_code': 210300
  },
  {
    'id': 538,
    'region_name': '海城市',
    'region_code': 210381,
    'parent_code': 210300
  },
  {
    'id': 539,
    'region_name': '抚顺市',
    'region_code': 210400,
    'parent_code': 210000
  },
  {
    'id': 540,
    'region_name': '市辖区',
    'region_code': 210401,
    'parent_code': 210400
  },
  {
    'id': 541,
    'region_name': '新抚区',
    'region_code': 210402,
    'parent_code': 210400
  },
  {
    'id': 542,
    'region_name': '东洲区',
    'region_code': 210403,
    'parent_code': 210400
  },
  {
    'id': 543,
    'region_name': '望花区',
    'region_code': 210404,
    'parent_code': 210400
  },
  {
    'id': 544,
    'region_name': '顺城区',
    'region_code': 210411,
    'parent_code': 210400
  },
  {
    'id': 545,
    'region_name': '抚顺县',
    'region_code': 210421,
    'parent_code': 210400
  },
  {
    'id': 546,
    'region_name': '新宾满族自治县',
    'region_code': 210422,
    'parent_code': 210400
  },
  {
    'id': 547,
    'region_name': '清原满族自治县',
    'region_code': 210423,
    'parent_code': 210400
  },
  {
    'id': 548,
    'region_name': '本溪市',
    'region_code': 210500,
    'parent_code': 210000
  },
  {
    'id': 549,
    'region_name': '市辖区',
    'region_code': 210501,
    'parent_code': 210500
  },
  {
    'id': 550,
    'region_name': '平山区',
    'region_code': 210502,
    'parent_code': 210500
  },
  {
    'id': 551,
    'region_name': '溪湖区',
    'region_code': 210503,
    'parent_code': 210500
  },
  {
    'id': 552,
    'region_name': '明山区',
    'region_code': 210504,
    'parent_code': 210500
  },
  {
    'id': 553,
    'region_name': '南芬区',
    'region_code': 210505,
    'parent_code': 210500
  },
  {
    'id': 554,
    'region_name': '本溪满族自治县',
    'region_code': 210521,
    'parent_code': 210500
  },
  {
    'id': 555,
    'region_name': '桓仁满族自治县',
    'region_code': 210522,
    'parent_code': 210500
  },
  {
    'id': 556,
    'region_name': '丹东市',
    'region_code': 210600,
    'parent_code': 210000
  },
  {
    'id': 557,
    'region_name': '市辖区',
    'region_code': 210601,
    'parent_code': 210600
  },
  {
    'id': 558,
    'region_name': '元宝区',
    'region_code': 210602,
    'parent_code': 210600
  },
  {
    'id': 559,
    'region_name': '振兴区',
    'region_code': 210603,
    'parent_code': 210600
  },
  {
    'id': 560,
    'region_name': '振安区',
    'region_code': 210604,
    'parent_code': 210600
  },
  {
    'id': 561,
    'region_name': '宽甸满族自治县',
    'region_code': 210624,
    'parent_code': 210600
  },
  {
    'id': 562,
    'region_name': '东港市',
    'region_code': 210681,
    'parent_code': 210600
  },
  {
    'id': 563,
    'region_name': '凤城市',
    'region_code': 210682,
    'parent_code': 210600
  },
  {
    'id': 564,
    'region_name': '锦州市',
    'region_code': 210700,
    'parent_code': 210000
  },
  {
    'id': 565,
    'region_name': '市辖区',
    'region_code': 210701,
    'parent_code': 210700
  },
  {
    'id': 566,
    'region_name': '古塔区',
    'region_code': 210702,
    'parent_code': 210700
  },
  {
    'id': 567,
    'region_name': '凌河区',
    'region_code': 210703,
    'parent_code': 210700
  },
  {
    'id': 568,
    'region_name': '太和区',
    'region_code': 210711,
    'parent_code': 210700
  },
  {
    'id': 569,
    'region_name': '黑山县',
    'region_code': 210726,
    'parent_code': 210700
  },
  {
    'id': 570,
    'region_name': '义县',
    'region_code': 210727,
    'parent_code': 210700
  },
  {
    'id': 571,
    'region_name': '凌海市',
    'region_code': 210781,
    'parent_code': 210700
  },
  {
    'id': 572,
    'region_name': '北宁市',
    'region_code': 210782,
    'parent_code': 210700
  },
  {
    'id': 573,
    'region_name': '营口市',
    'region_code': 210800,
    'parent_code': 210000
  },
  {
    'id': 574,
    'region_name': '市辖区',
    'region_code': 210801,
    'parent_code': 210800
  },
  {
    'id': 575,
    'region_name': '站前区',
    'region_code': 210802,
    'parent_code': 210800
  },
  {
    'id': 576,
    'region_name': '西市区',
    'region_code': 210803,
    'parent_code': 210800
  },
  {
    'id': 577,
    'region_name': '鲅鱼圈区',
    'region_code': 210804,
    'parent_code': 210800
  },
  {
    'id': 578,
    'region_name': '老边区',
    'region_code': 210811,
    'parent_code': 210800
  },
  {
    'id': 579,
    'region_name': '盖州市',
    'region_code': 210881,
    'parent_code': 210800
  },
  {
    'id': 580,
    'region_name': '大石桥市',
    'region_code': 210882,
    'parent_code': 210800
  },
  {
    'id': 581,
    'region_name': '阜新市',
    'region_code': 210900,
    'parent_code': 210000
  },
  {
    'id': 582,
    'region_name': '市辖区',
    'region_code': 210901,
    'parent_code': 210900
  },
  {
    'id': 583,
    'region_name': '海州区',
    'region_code': 210902,
    'parent_code': 210900
  },
  {
    'id': 584,
    'region_name': '新邱区',
    'region_code': 210903,
    'parent_code': 210900
  },
  {
    'id': 585,
    'region_name': '太平区',
    'region_code': 210904,
    'parent_code': 210900
  },
  {
    'id': 586,
    'region_name': '清河门区',
    'region_code': 210905,
    'parent_code': 210900
  },
  {
    'id': 587,
    'region_name': '细河区',
    'region_code': 210911,
    'parent_code': 210900
  },
  {
    'id': 588,
    'region_name': '阜新蒙古族自治县',
    'region_code': 210921,
    'parent_code': 210900
  },
  {
    'id': 589,
    'region_name': '彰武县',
    'region_code': 210922,
    'parent_code': 210900
  },
  {
    'id': 590,
    'region_name': '辽阳市',
    'region_code': 211000,
    'parent_code': 210000
  },
  {
    'id': 591,
    'region_name': '市辖区',
    'region_code': 211001,
    'parent_code': 211000
  },
  {
    'id': 592,
    'region_name': '白塔区',
    'region_code': 211002,
    'parent_code': 211000
  },
  {
    'id': 593,
    'region_name': '文圣区',
    'region_code': 211003,
    'parent_code': 211000
  },
  {
    'id': 594,
    'region_name': '宏伟区',
    'region_code': 211004,
    'parent_code': 211000
  },
  {
    'id': 595,
    'region_name': '弓长岭区',
    'region_code': 211005,
    'parent_code': 211000
  },
  {
    'id': 596,
    'region_name': '太子河区',
    'region_code': 211011,
    'parent_code': 211000
  },
  {
    'id': 597,
    'region_name': '辽阳县',
    'region_code': 211021,
    'parent_code': 211000
  },
  {
    'id': 598,
    'region_name': '灯塔市',
    'region_code': 211081,
    'parent_code': 211000
  },
  {
    'id': 599,
    'region_name': '盘锦市',
    'region_code': 211100,
    'parent_code': 210000
  },
  {
    'id': 600,
    'region_name': '市辖区',
    'region_code': 211101,
    'parent_code': 211100
  },
  {
    'id': 601,
    'region_name': '双台子区',
    'region_code': 211102,
    'parent_code': 211100
  },
  {
    'id': 602,
    'region_name': '兴隆台区',
    'region_code': 211103,
    'parent_code': 211100
  },
  {
    'id': 603,
    'region_name': '大洼县',
    'region_code': 211121,
    'parent_code': 211100
  },
  {
    'id': 604,
    'region_name': '盘山县',
    'region_code': 211122,
    'parent_code': 211100
  },
  {
    'id': 605,
    'region_name': '铁岭市',
    'region_code': 211200,
    'parent_code': 210000
  },
  {
    'id': 606,
    'region_name': '市辖区',
    'region_code': 211201,
    'parent_code': 211200
  },
  {
    'id': 607,
    'region_name': '银州区',
    'region_code': 211202,
    'parent_code': 211200
  },
  {
    'id': 608,
    'region_name': '清河区',
    'region_code': 211204,
    'parent_code': 211200
  },
  {
    'id': 609,
    'region_name': '铁岭县',
    'region_code': 211221,
    'parent_code': 211200
  },
  {
    'id': 610,
    'region_name': '西丰县',
    'region_code': 211223,
    'parent_code': 211200
  },
  {
    'id': 611,
    'region_name': '昌图县',
    'region_code': 211224,
    'parent_code': 211200
  },
  {
    'id': 612,
    'region_name': '调兵山市',
    'region_code': 211281,
    'parent_code': 211200
  },
  {
    'id': 613,
    'region_name': '开原市',
    'region_code': 211282,
    'parent_code': 211200
  },
  {
    'id': 614,
    'region_name': '朝阳市',
    'region_code': 211300,
    'parent_code': 210000
  },
  {
    'id': 615,
    'region_name': '市辖区',
    'region_code': 211301,
    'parent_code': 211300
  },
  {
    'id': 616,
    'region_name': '双塔区',
    'region_code': 211302,
    'parent_code': 211300
  },
  {
    'id': 617,
    'region_name': '龙城区',
    'region_code': 211303,
    'parent_code': 211300
  },
  {
    'id': 618,
    'region_name': '朝阳县',
    'region_code': 211321,
    'parent_code': 211300
  },
  {
    'id': 619,
    'region_name': '建平县',
    'region_code': 211322,
    'parent_code': 211300
  },
  {
    'id': 620,
    'region_name': '喀喇沁左翼蒙古族自治县',
    'region_code': 211324,
    'parent_code': 211300
  },
  {
    'id': 621,
    'region_name': '北票市',
    'region_code': 211381,
    'parent_code': 211300
  },
  {
    'id': 622,
    'region_name': '凌源市',
    'region_code': 211382,
    'parent_code': 211300
  },
  {
    'id': 623,
    'region_name': '葫芦岛市',
    'region_code': 211400,
    'parent_code': 210000
  },
  {
    'id': 624,
    'region_name': '市辖区',
    'region_code': 211401,
    'parent_code': 211400
  },
  {
    'id': 625,
    'region_name': '连山区',
    'region_code': 211402,
    'parent_code': 211400
  },
  {
    'id': 626,
    'region_name': '龙港区',
    'region_code': 211403,
    'parent_code': 211400
  },
  {
    'id': 627,
    'region_name': '南票区',
    'region_code': 211404,
    'parent_code': 211400
  },
  {
    'id': 628,
    'region_name': '绥中县',
    'region_code': 211421,
    'parent_code': 211400
  },
  {
    'id': 629,
    'region_name': '建昌县',
    'region_code': 211422,
    'parent_code': 211400
  },
  {
    'id': 630,
    'region_name': '兴城市',
    'region_code': 211481,
    'parent_code': 211400
  },
  {
    'id': 631,
    'region_name': '吉林省',
    'region_code': 220000,
    'parent_code': 0
  },
  {
    'id': 632,
    'region_name': '长春市',
    'region_code': 220100,
    'parent_code': 220000
  },
  {
    'id': 633,
    'region_name': '市辖区',
    'region_code': 220101,
    'parent_code': 220100
  },
  {
    'id': 634,
    'region_name': '南关区',
    'region_code': 220102,
    'parent_code': 220100
  },
  {
    'id': 635,
    'region_name': '宽城区',
    'region_code': 220103,
    'parent_code': 220100
  },
  {
    'id': 636,
    'region_name': '朝阳区',
    'region_code': 220104,
    'parent_code': 220100
  },
  {
    'id': 637,
    'region_name': '二道区',
    'region_code': 220105,
    'parent_code': 220100
  },
  {
    'id': 638,
    'region_name': '绿园区',
    'region_code': 220106,
    'parent_code': 220100
  },
  {
    'id': 639,
    'region_name': '双阳区',
    'region_code': 220112,
    'parent_code': 220100
  },
  {
    'id': 640,
    'region_name': '农安县',
    'region_code': 220122,
    'parent_code': 220100
  },
  {
    'id': 641,
    'region_name': '九台市',
    'region_code': 220181,
    'parent_code': null
  },
  {
    'id': 642,
    'region_name': '榆树市',
    'region_code': 220182,
    'parent_code': 220100
  },
  {
    'id': 643,
    'region_name': '德惠市',
    'region_code': 220183,
    'parent_code': 220100
  },
  {
    'id': 644,
    'region_name': '吉林市',
    'region_code': 220200,
    'parent_code': 220000
  },
  {
    'id': 645,
    'region_name': '市辖区',
    'region_code': 220201,
    'parent_code': 220200
  },
  {
    'id': 646,
    'region_name': '昌邑区',
    'region_code': 220202,
    'parent_code': 220200
  },
  {
    'id': 647,
    'region_name': '龙潭区',
    'region_code': 220203,
    'parent_code': 220200
  },
  {
    'id': 648,
    'region_name': '船营区',
    'region_code': 220204,
    'parent_code': 220200
  },
  {
    'id': 649,
    'region_name': '丰满区',
    'region_code': 220211,
    'parent_code': 220200
  },
  {
    'id': 650,
    'region_name': '永吉县',
    'region_code': 220221,
    'parent_code': 220200
  },
  {
    'id': 651,
    'region_name': '蛟河市',
    'region_code': 220281,
    'parent_code': 220200
  },
  {
    'id': 652,
    'region_name': '桦甸市',
    'region_code': 220282,
    'parent_code': 220200
  },
  {
    'id': 653,
    'region_name': '舒兰市',
    'region_code': 220283,
    'parent_code': 220200
  },
  {
    'id': 654,
    'region_name': '磐石市',
    'region_code': 220284,
    'parent_code': 220200
  },
  {
    'id': 655,
    'region_name': '四平市',
    'region_code': 220300,
    'parent_code': 220000
  },
  {
    'id': 656,
    'region_name': '市辖区',
    'region_code': 220301,
    'parent_code': 220300
  },
  {
    'id': 657,
    'region_name': '铁西区',
    'region_code': 220302,
    'parent_code': 220300
  },
  {
    'id': 658,
    'region_name': '铁东区',
    'region_code': 220303,
    'parent_code': 220300
  },
  {
    'id': 659,
    'region_name': '梨树县',
    'region_code': 220322,
    'parent_code': 220300
  },
  {
    'id': 660,
    'region_name': '伊通满族自治县',
    'region_code': 220323,
    'parent_code': 220300
  },
  {
    'id': 661,
    'region_name': '公主岭市',
    'region_code': 220381,
    'parent_code': 220300
  },
  {
    'id': 662,
    'region_name': '双辽市',
    'region_code': 220382,
    'parent_code': 220300
  },
  {
    'id': 663,
    'region_name': '辽源市',
    'region_code': 220400,
    'parent_code': 220000
  },
  {
    'id': 664,
    'region_name': '市辖区',
    'region_code': 220401,
    'parent_code': 220400
  },
  {
    'id': 665,
    'region_name': '龙山区',
    'region_code': 220402,
    'parent_code': 220400
  },
  {
    'id': 666,
    'region_name': '西安区',
    'region_code': 220403,
    'parent_code': 220400
  },
  {
    'id': 667,
    'region_name': '东丰县',
    'region_code': 220421,
    'parent_code': 220400
  },
  {
    'id': 668,
    'region_name': '东辽县',
    'region_code': 220422,
    'parent_code': 220400
  },
  {
    'id': 669,
    'region_name': '通化市',
    'region_code': 220500,
    'parent_code': 220000
  },
  {
    'id': 670,
    'region_name': '市辖区',
    'region_code': 220501,
    'parent_code': 220500
  },
  {
    'id': 671,
    'region_name': '东昌区',
    'region_code': 220502,
    'parent_code': 220500
  },
  {
    'id': 672,
    'region_name': '二道江区',
    'region_code': 220503,
    'parent_code': 220500
  },
  {
    'id': 673,
    'region_name': '通化县',
    'region_code': 220521,
    'parent_code': 220500
  },
  {
    'id': 674,
    'region_name': '辉南县',
    'region_code': 220523,
    'parent_code': 220500
  },
  {
    'id': 675,
    'region_name': '柳河县',
    'region_code': 220524,
    'parent_code': 220500
  },
  {
    'id': 676,
    'region_name': '梅河口市',
    'region_code': 220581,
    'parent_code': 220500
  },
  {
    'id': 677,
    'region_name': '集安市',
    'region_code': 220582,
    'parent_code': 220500
  },
  {
    'id': 678,
    'region_name': '白山市',
    'region_code': 220600,
    'parent_code': 220000
  },
  {
    'id': 679,
    'region_name': '市辖区',
    'region_code': 220601,
    'parent_code': 220600
  },
  {
    'id': 680,
    'region_name': '八道江区',
    'region_code': 220602,
    'parent_code': 220600
  },
  {
    'id': 681,
    'region_name': '抚松县',
    'region_code': 220621,
    'parent_code': 220600
  },
  {
    'id': 682,
    'region_name': '靖宇县',
    'region_code': 220622,
    'parent_code': 220600
  },
  {
    'id': 683,
    'region_name': '长白朝鲜族自治县',
    'region_code': 220623,
    'parent_code': 220600
  },
  {
    'id': 684,
    'region_name': '江源县',
    'region_code': 220625,
    'parent_code': null
  },
  {
    'id': 685,
    'region_name': '临江市',
    'region_code': 220681,
    'parent_code': 220600
  },
  {
    'id': 686,
    'region_name': '松原市',
    'region_code': 220700,
    'parent_code': 220000
  },
  {
    'id': 687,
    'region_name': '市辖区',
    'region_code': 220701,
    'parent_code': 220700
  },
  {
    'id': 688,
    'region_name': '宁江区',
    'region_code': 220702,
    'parent_code': 220700
  },
  {
    'id': 689,
    'region_name': '前郭尔罗斯蒙古族自治县',
    'region_code': 220721,
    'parent_code': 220700
  },
  {
    'id': 690,
    'region_name': '长岭县',
    'region_code': 220722,
    'parent_code': 220700
  },
  {
    'id': 691,
    'region_name': '乾安县',
    'region_code': 220723,
    'parent_code': 220700
  },
  {
    'id': 692,
    'region_name': '扶余县',
    'region_code': 220724,
    'parent_code': null
  },
  {
    'id': 693,
    'region_name': '白城市',
    'region_code': 220800,
    'parent_code': 220000
  },
  {
    'id': 694,
    'region_name': '市辖区',
    'region_code': 220801,
    'parent_code': 220800
  },
  {
    'id': 695,
    'region_name': '洮北区',
    'region_code': 220802,
    'parent_code': 220800
  },
  {
    'id': 696,
    'region_name': '镇赉县',
    'region_code': 220821,
    'parent_code': 220800
  },
  {
    'id': 697,
    'region_name': '通榆县',
    'region_code': 220822,
    'parent_code': 220800
  },
  {
    'id': 698,
    'region_name': '洮南市',
    'region_code': 220881,
    'parent_code': 220800
  },
  {
    'id': 699,
    'region_name': '大安市',
    'region_code': 220882,
    'parent_code': 220800
  },
  {
    'id': 700,
    'region_name': '延边朝鲜族自治州',
    'region_code': 222400,
    'parent_code': 220000
  },
  {
    'id': 701,
    'region_name': '延吉市',
    'region_code': 222401,
    'parent_code': 222400
  },
  {
    'id': 702,
    'region_name': '图们市',
    'region_code': 222402,
    'parent_code': 222400
  },
  {
    'id': 703,
    'region_name': '敦化市',
    'region_code': 222403,
    'parent_code': 222400
  },
  {
    'id': 704,
    'region_name': '珲春市',
    'region_code': 222404,
    'parent_code': 222400
  },
  {
    'id': 705,
    'region_name': '龙井市',
    'region_code': 222405,
    'parent_code': 222400
  },
  {
    'id': 706,
    'region_name': '和龙市',
    'region_code': 222406,
    'parent_code': 222400
  },
  {
    'id': 707,
    'region_name': '汪清县',
    'region_code': 222424,
    'parent_code': 222400
  },
  {
    'id': 708,
    'region_name': '安图县',
    'region_code': 222426,
    'parent_code': 222400
  },
  {
    'id': 709,
    'region_name': '黑龙江省',
    'region_code': 230000,
    'parent_code': 0
  },
  {
    'id': 710,
    'region_name': '哈尔滨市',
    'region_code': 230100,
    'parent_code': 230000
  },
  {
    'id': 711,
    'region_name': '市辖区',
    'region_code': 230101,
    'parent_code': 230100
  },
  {
    'id': 712,
    'region_name': '道里区',
    'region_code': 230102,
    'parent_code': 230100
  },
  {
    'id': 713,
    'region_name': '南岗区',
    'region_code': 230103,
    'parent_code': 230100
  },
  {
    'id': 714,
    'region_name': '道外区',
    'region_code': 230104,
    'parent_code': 230100
  },
  {
    'id': 715,
    'region_name': '太平区',
    'region_code': 230105,
    'parent_code': null
  },
  {
    'id': 716,
    'region_name': '香坊区',
    'region_code': 230106,
    'parent_code': null
  },
  {
    'id': 717,
    'region_name': '动力区',
    'region_code': 230107,
    'parent_code': null
  },
  {
    'id': 718,
    'region_name': '平房区',
    'region_code': 230108,
    'parent_code': 230100
  },
  {
    'id': 719,
    'region_name': '呼兰县',
    'region_code': 230121,
    'parent_code': null
  },
  {
    'id': 720,
    'region_name': '依兰县',
    'region_code': 230123,
    'parent_code': 230100
  },
  {
    'id': 721,
    'region_name': '方正县',
    'region_code': 230124,
    'parent_code': 230100
  },
  {
    'id': 722,
    'region_name': '宾县',
    'region_code': 230125,
    'parent_code': 230100
  },
  {
    'id': 723,
    'region_name': '巴彦县',
    'region_code': 230126,
    'parent_code': 230100
  },
  {
    'id': 724,
    'region_name': '木兰县',
    'region_code': 230127,
    'parent_code': 230100
  },
  {
    'id': 725,
    'region_name': '通河县',
    'region_code': 230128,
    'parent_code': 230100
  },
  {
    'id': 726,
    'region_name': '延寿县',
    'region_code': 230129,
    'parent_code': 230100
  },
  {
    'id': 727,
    'region_name': '阿城市',
    'region_code': 230181,
    'parent_code': null
  },
  {
    'id': 728,
    'region_name': '双城市',
    'region_code': 230182,
    'parent_code': 230100
  },
  {
    'id': 729,
    'region_name': '尚志市',
    'region_code': 230183,
    'parent_code': 230100
  },
  {
    'id': 730,
    'region_name': '五常市',
    'region_code': 230184,
    'parent_code': 230100
  },
  {
    'id': 731,
    'region_name': '齐齐哈尔市',
    'region_code': 230200,
    'parent_code': 230000
  },
  {
    'id': 732,
    'region_name': '市辖区',
    'region_code': 230201,
    'parent_code': 230200
  },
  {
    'id': 733,
    'region_name': '龙沙区',
    'region_code': 230202,
    'parent_code': 230200
  },
  {
    'id': 734,
    'region_name': '建华区',
    'region_code': 230203,
    'parent_code': 230200
  },
  {
    'id': 735,
    'region_name': '铁锋区',
    'region_code': 230204,
    'parent_code': 230200
  },
  {
    'id': 736,
    'region_name': '昂昂溪区',
    'region_code': 230205,
    'parent_code': 230200
  },
  {
    'id': 737,
    'region_name': '富拉尔基区',
    'region_code': 230206,
    'parent_code': 230200
  },
  {
    'id': 738,
    'region_name': '碾子山区',
    'region_code': 230207,
    'parent_code': 230200
  },
  {
    'id': 739,
    'region_name': '梅里斯达斡尔族区',
    'region_code': 230208,
    'parent_code': 230200
  },
  {
    'id': 740,
    'region_name': '龙江县',
    'region_code': 230221,
    'parent_code': 230200
  },
  {
    'id': 741,
    'region_name': '依安县',
    'region_code': 230223,
    'parent_code': 230200
  },
  {
    'id': 742,
    'region_name': '泰来县',
    'region_code': 230224,
    'parent_code': 230200
  },
  {
    'id': 743,
    'region_name': '甘南县',
    'region_code': 230225,
    'parent_code': 230200
  },
  {
    'id': 744,
    'region_name': '富裕县',
    'region_code': 230227,
    'parent_code': 230200
  },
  {
    'id': 745,
    'region_name': '克山县',
    'region_code': 230229,
    'parent_code': 230200
  },
  {
    'id': 746,
    'region_name': '克东县',
    'region_code': 230230,
    'parent_code': 230200
  },
  {
    'id': 747,
    'region_name': '拜泉县',
    'region_code': 230231,
    'parent_code': 230200
  },
  {
    'id': 748,
    'region_name': '讷河市',
    'region_code': 230281,
    'parent_code': 230200
  },
  {
    'id': 749,
    'region_name': '鸡西市',
    'region_code': 230300,
    'parent_code': 230000
  },
  {
    'id': 750,
    'region_name': '市辖区',
    'region_code': 230301,
    'parent_code': 230300
  },
  {
    'id': 751,
    'region_name': '鸡冠区',
    'region_code': 230302,
    'parent_code': 230300
  },
  {
    'id': 752,
    'region_name': '恒山区',
    'region_code': 230303,
    'parent_code': 230300
  },
  {
    'id': 753,
    'region_name': '滴道区',
    'region_code': 230304,
    'parent_code': 230300
  },
  {
    'id': 754,
    'region_name': '梨树区',
    'region_code': 230305,
    'parent_code': 230300
  },
  {
    'id': 755,
    'region_name': '城子河区',
    'region_code': 230306,
    'parent_code': 230300
  },
  {
    'id': 756,
    'region_name': '麻山区',
    'region_code': 230307,
    'parent_code': 230300
  },
  {
    'id': 757,
    'region_name': '鸡东县',
    'region_code': 230321,
    'parent_code': 230300
  },
  {
    'id': 758,
    'region_name': '虎林市',
    'region_code': 230381,
    'parent_code': 230300
  },
  {
    'id': 759,
    'region_name': '密山市',
    'region_code': 230382,
    'parent_code': 230300
  },
  {
    'id': 760,
    'region_name': '鹤岗市',
    'region_code': 230400,
    'parent_code': 230000
  },
  {
    'id': 761,
    'region_name': '市辖区',
    'region_code': 230401,
    'parent_code': 230400
  },
  {
    'id': 762,
    'region_name': '向阳区',
    'region_code': 230402,
    'parent_code': 230400
  },
  {
    'id': 763,
    'region_name': '工农区',
    'region_code': 230403,
    'parent_code': 230400
  },
  {
    'id': 764,
    'region_name': '南山区',
    'region_code': 230404,
    'parent_code': 230400
  },
  {
    'id': 765,
    'region_name': '兴安区',
    'region_code': 230405,
    'parent_code': 230400
  },
  {
    'id': 766,
    'region_name': '东山区',
    'region_code': 230406,
    'parent_code': 230400
  },
  {
    'id': 767,
    'region_name': '兴山区',
    'region_code': 230407,
    'parent_code': 230400
  },
  {
    'id': 768,
    'region_name': '萝北县',
    'region_code': 230421,
    'parent_code': 230400
  },
  {
    'id': 769,
    'region_name': '绥滨县',
    'region_code': 230422,
    'parent_code': 230400
  },
  {
    'id': 770,
    'region_name': '双鸭山市',
    'region_code': 230500,
    'parent_code': 230000
  },
  {
    'id': 771,
    'region_name': '市辖区',
    'region_code': 230501,
    'parent_code': 230500
  },
  {
    'id': 772,
    'region_name': '尖山区',
    'region_code': 230502,
    'parent_code': 230500
  },
  {
    'id': 773,
    'region_name': '岭东区',
    'region_code': 230503,
    'parent_code': 230500
  },
  {
    'id': 774,
    'region_name': '四方台区',
    'region_code': 230505,
    'parent_code': 230500
  },
  {
    'id': 775,
    'region_name': '宝山区',
    'region_code': 230506,
    'parent_code': 230500
  },
  {
    'id': 776,
    'region_name': '集贤县',
    'region_code': 230521,
    'parent_code': 230500
  },
  {
    'id': 777,
    'region_name': '友谊县',
    'region_code': 230522,
    'parent_code': 230500
  },
  {
    'id': 778,
    'region_name': '宝清县',
    'region_code': 230523,
    'parent_code': 230500
  },
  {
    'id': 779,
    'region_name': '饶河县',
    'region_code': 230524,
    'parent_code': 230500
  },
  {
    'id': 780,
    'region_name': '大庆市',
    'region_code': 230600,
    'parent_code': 230000
  },
  {
    'id': 781,
    'region_name': '市辖区',
    'region_code': 230601,
    'parent_code': 230600
  },
  {
    'id': 782,
    'region_name': '萨尔图区',
    'region_code': 230602,
    'parent_code': 230600
  },
  {
    'id': 783,
    'region_name': '龙凤区',
    'region_code': 230603,
    'parent_code': 230600
  },
  {
    'id': 784,
    'region_name': '让胡路区',
    'region_code': 230604,
    'parent_code': 230600
  },
  {
    'id': 785,
    'region_name': '红岗区',
    'region_code': 230605,
    'parent_code': 230600
  },
  {
    'id': 786,
    'region_name': '大同区',
    'region_code': 230606,
    'parent_code': 230600
  },
  {
    'id': 787,
    'region_name': '肇州县',
    'region_code': 230621,
    'parent_code': 230600
  },
  {
    'id': 788,
    'region_name': '肇源县',
    'region_code': 230622,
    'parent_code': 230600
  },
  {
    'id': 789,
    'region_name': '林甸县',
    'region_code': 230623,
    'parent_code': 230600
  },
  {
    'id': 790,
    'region_name': '杜尔伯特蒙古族自治县',
    'region_code': 230624,
    'parent_code': 230600
  },
  {
    'id': 791,
    'region_name': '伊春市',
    'region_code': 230700,
    'parent_code': 230000
  },
  {
    'id': 792,
    'region_name': '市辖区',
    'region_code': 230701,
    'parent_code': 230700
  },
  {
    'id': 793,
    'region_name': '伊春区',
    'region_code': 230702,
    'parent_code': 230700
  },
  {
    'id': 794,
    'region_name': '南岔区',
    'region_code': 230703,
    'parent_code': 230700
  },
  {
    'id': 795,
    'region_name': '友好区',
    'region_code': 230704,
    'parent_code': 230700
  },
  {
    'id': 796,
    'region_name': '西林区',
    'region_code': 230705,
    'parent_code': 230700
  },
  {
    'id': 797,
    'region_name': '翠峦区',
    'region_code': 230706,
    'parent_code': 230700
  },
  {
    'id': 798,
    'region_name': '新青区',
    'region_code': 230707,
    'parent_code': 230700
  },
  {
    'id': 799,
    'region_name': '美溪区',
    'region_code': 230708,
    'parent_code': 230700
  },
  {
    'id': 800,
    'region_name': '金山屯区',
    'region_code': 230709,
    'parent_code': 230700
  },
  {
    'id': 801,
    'region_name': '五营区',
    'region_code': 230710,
    'parent_code': 230700
  },
  {
    'id': 802,
    'region_name': '乌马河区',
    'region_code': 230711,
    'parent_code': 230700
  },
  {
    'id': 803,
    'region_name': '汤旺河区',
    'region_code': 230712,
    'parent_code': 230700
  },
  {
    'id': 804,
    'region_name': '带岭区',
    'region_code': 230713,
    'parent_code': 230700
  },
  {
    'id': 805,
    'region_name': '乌伊岭区',
    'region_code': 230714,
    'parent_code': 230700
  },
  {
    'id': 806,
    'region_name': '红星区',
    'region_code': 230715,
    'parent_code': 230700
  },
  {
    'id': 807,
    'region_name': '上甘岭区',
    'region_code': 230716,
    'parent_code': 230700
  },
  {
    'id': 808,
    'region_name': '嘉荫县',
    'region_code': 230722,
    'parent_code': 230700
  },
  {
    'id': 809,
    'region_name': '铁力市',
    'region_code': 230781,
    'parent_code': 230700
  },
  {
    'id': 810,
    'region_name': '佳木斯市',
    'region_code': 230800,
    'parent_code': 230000
  },
  {
    'id': 811,
    'region_name': '市辖区',
    'region_code': 230801,
    'parent_code': 230800
  },
  {
    'id': 812,
    'region_name': '永红区',
    'region_code': 230802,
    'parent_code': null
  },
  {
    'id': 813,
    'region_name': '向阳区',
    'region_code': 230803,
    'parent_code': 230800
  },
  {
    'id': 814,
    'region_name': '前进区',
    'region_code': 230804,
    'parent_code': 230800
  },
  {
    'id': 815,
    'region_name': '东风区',
    'region_code': 230805,
    'parent_code': 230800
  },
  {
    'id': 816,
    'region_name': '郊区',
    'region_code': 230811,
    'parent_code': 230800
  },
  {
    'id': 817,
    'region_name': '桦南县',
    'region_code': 230822,
    'parent_code': 230800
  },
  {
    'id': 818,
    'region_name': '桦川县',
    'region_code': 230826,
    'parent_code': 230800
  },
  {
    'id': 819,
    'region_name': '汤原县',
    'region_code': 230828,
    'parent_code': 230800
  },
  {
    'id': 820,
    'region_name': '抚远县',
    'region_code': 230833,
    'parent_code': 230800
  },
  {
    'id': 821,
    'region_name': '同江市',
    'region_code': 230881,
    'parent_code': 230800
  },
  {
    'id': 822,
    'region_name': '富锦市',
    'region_code': 230882,
    'parent_code': 230800
  },
  {
    'id': 823,
    'region_name': '七台河市',
    'region_code': 230900,
    'parent_code': 230000
  },
  {
    'id': 824,
    'region_name': '市辖区',
    'region_code': 230901,
    'parent_code': 230900
  },
  {
    'id': 825,
    'region_name': '新兴区',
    'region_code': 230902,
    'parent_code': 230900
  },
  {
    'id': 826,
    'region_name': '桃山区',
    'region_code': 230903,
    'parent_code': 230900
  },
  {
    'id': 827,
    'region_name': '茄子河区',
    'region_code': 230904,
    'parent_code': 230900
  },
  {
    'id': 828,
    'region_name': '勃利县',
    'region_code': 230921,
    'parent_code': 230900
  },
  {
    'id': 829,
    'region_name': '牡丹江市',
    'region_code': 231000,
    'parent_code': 230000
  },
  {
    'id': 830,
    'region_name': '市辖区',
    'region_code': 231001,
    'parent_code': 231000
  },
  {
    'id': 831,
    'region_name': '东安区',
    'region_code': 231002,
    'parent_code': 231000
  },
  {
    'id': 832,
    'region_name': '阳明区',
    'region_code': 231003,
    'parent_code': 231000
  },
  {
    'id': 833,
    'region_name': '爱民区',
    'region_code': 231004,
    'parent_code': 231000
  },
  {
    'id': 834,
    'region_name': '西安区',
    'region_code': 231005,
    'parent_code': 231000
  },
  {
    'id': 835,
    'region_name': '东宁县',
    'region_code': 231024,
    'parent_code': 231000
  },
  {
    'id': 836,
    'region_name': '林口县',
    'region_code': 231025,
    'parent_code': 231000
  },
  {
    'id': 837,
    'region_name': '绥芬河市',
    'region_code': 231081,
    'parent_code': 231000
  },
  {
    'id': 838,
    'region_name': '海林市',
    'region_code': 231083,
    'parent_code': 231000
  },
  {
    'id': 839,
    'region_name': '宁安市',
    'region_code': 231084,
    'parent_code': 231000
  },
  {
    'id': 840,
    'region_name': '穆棱市',
    'region_code': 231085,
    'parent_code': 231000
  },
  {
    'id': 841,
    'region_name': '黑河市',
    'region_code': 231100,
    'parent_code': 230000
  },
  {
    'id': 842,
    'region_name': '市辖区',
    'region_code': 231101,
    'parent_code': 231100
  },
  {
    'id': 843,
    'region_name': '爱辉区',
    'region_code': 231102,
    'parent_code': 231100
  },
  {
    'id': 844,
    'region_name': '嫩江县',
    'region_code': 231121,
    'parent_code': 231100
  },
  {
    'id': 845,
    'region_name': '逊克县',
    'region_code': 231123,
    'parent_code': 231100
  },
  {
    'id': 846,
    'region_name': '孙吴县',
    'region_code': 231124,
    'parent_code': 231100
  },
  {
    'id': 847,
    'region_name': '北安市',
    'region_code': 231181,
    'parent_code': 231100
  },
  {
    'id': 848,
    'region_name': '五大连池市',
    'region_code': 231182,
    'parent_code': 231100
  },
  {
    'id': 849,
    'region_name': '绥化市',
    'region_code': 231200,
    'parent_code': 230000
  },
  {
    'id': 850,
    'region_name': '市辖区',
    'region_code': 231201,
    'parent_code': 231200
  },
  {
    'id': 851,
    'region_name': '北林区',
    'region_code': 231202,
    'parent_code': 231200
  },
  {
    'id': 852,
    'region_name': '望奎县',
    'region_code': 231221,
    'parent_code': 231200
  },
  {
    'id': 853,
    'region_name': '兰西县',
    'region_code': 231222,
    'parent_code': 231200
  },
  {
    'id': 854,
    'region_name': '青冈县',
    'region_code': 231223,
    'parent_code': 231200
  },
  {
    'id': 855,
    'region_name': '庆安县',
    'region_code': 231224,
    'parent_code': 231200
  },
  {
    'id': 856,
    'region_name': '明水县',
    'region_code': 231225,
    'parent_code': 231200
  },
  {
    'id': 857,
    'region_name': '绥棱县',
    'region_code': 231226,
    'parent_code': 231200
  },
  {
    'id': 858,
    'region_name': '安达市',
    'region_code': 231281,
    'parent_code': 231200
  },
  {
    'id': 859,
    'region_name': '肇东市',
    'region_code': 231282,
    'parent_code': 231200
  },
  {
    'id': 860,
    'region_name': '海伦市',
    'region_code': 231283,
    'parent_code': 231200
  },
  {
    'id': 861,
    'region_name': '大兴安岭地区',
    'region_code': 232700,
    'parent_code': 230000
  },
  {
    'id': 862,
    'region_name': '呼玛县',
    'region_code': 232721,
    'parent_code': 232700
  },
  {
    'id': 863,
    'region_name': '塔河县',
    'region_code': 232722,
    'parent_code': 232700
  },
  {
    'id': 864,
    'region_name': '漠河县',
    'region_code': 232723,
    'parent_code': 232700
  },
  {
    'id': 865,
    'region_name': '上海市',
    'region_code': 310000,
    'parent_code': 0
  },
  {
    'id': 866,
    'region_name': '市辖区',
    'region_code': 310100,
    'parent_code': 310000
  },
  {
    'id': 867,
    'region_name': '黄浦区',
    'region_code': 310101,
    'parent_code': 310100
  },
  {
    'id': 868,
    'region_name': '卢湾区',
    'region_code': 310103,
    'parent_code': null
  },
  {
    'id': 869,
    'region_name': '徐汇区',
    'region_code': 310104,
    'parent_code': 310100
  },
  {
    'id': 870,
    'region_name': '长宁区',
    'region_code': 310105,
    'parent_code': 310100
  },
  {
    'id': 871,
    'region_name': '静安区',
    'region_code': 310106,
    'parent_code': 310100
  },
  {
    'id': 872,
    'region_name': '普陀区',
    'region_code': 310107,
    'parent_code': 310100
  },
  {
    'id': 873,
    'region_name': '闸北区',
    'region_code': 310108,
    'parent_code': 310100
  },
  {
    'id': 874,
    'region_name': '虹口区',
    'region_code': 310109,
    'parent_code': 310100
  },
  {
    'id': 875,
    'region_name': '杨浦区',
    'region_code': 310110,
    'parent_code': 310100
  },
  {
    'id': 876,
    'region_name': '闵行区',
    'region_code': 310112,
    'parent_code': 310100
  },
  {
    'id': 877,
    'region_name': '宝山区',
    'region_code': 310113,
    'parent_code': 310100
  },
  {
    'id': 878,
    'region_name': '嘉定区',
    'region_code': 310114,
    'parent_code': 310100
  },
  {
    'id': 879,
    'region_name': '浦东新区',
    'region_code': 310115,
    'parent_code': 310100
  },
  {
    'id': 880,
    'region_name': '金山区',
    'region_code': 310116,
    'parent_code': 310100
  },
  {
    'id': 881,
    'region_name': '松江区',
    'region_code': 310117,
    'parent_code': 310100
  },
  {
    'id': 882,
    'region_name': '青浦区',
    'region_code': 310118,
    'parent_code': 310100
  },
  {
    'id': 883,
    'region_name': '南汇区',
    'region_code': 310119,
    'parent_code': null
  },
  {
    'id': 884,
    'region_name': '奉贤区',
    'region_code': 310120,
    'parent_code': 310100
  },
  {
    'id': 885,
    'region_name': '县',
    'region_code': 310200,
    'parent_code': 310000
  },
  {
    'id': 886,
    'region_name': '崇明县',
    'region_code': 310230,
    'parent_code': 310200
  },
  {
    'id': 887,
    'region_name': '江苏省',
    'region_code': 320000,
    'parent_code': 0
  },
  {
    'id': 888,
    'region_name': '南京市',
    'region_code': 320100,
    'parent_code': 320000
  },
  {
    'id': 889,
    'region_name': '市辖区',
    'region_code': 320101,
    'parent_code': 320100
  },
  {
    'id': 890,
    'region_name': '玄武区',
    'region_code': 320102,
    'parent_code': 320100
  },
  {
    'id': 891,
    'region_name': '白下区',
    'region_code': 320103,
    'parent_code': null
  },
  {
    'id': 892,
    'region_name': '秦淮区',
    'region_code': 320104,
    'parent_code': 320100
  },
  {
    'id': 893,
    'region_name': '建邺区',
    'region_code': 320105,
    'parent_code': 320100
  },
  {
    'id': 894,
    'region_name': '鼓楼区',
    'region_code': 320106,
    'parent_code': 320100
  },
  {
    'id': 895,
    'region_name': '下关区',
    'region_code': 320107,
    'parent_code': null
  },
  {
    'id': 896,
    'region_name': '浦口区',
    'region_code': 320111,
    'parent_code': 320100
  },
  {
    'id': 897,
    'region_name': '栖霞区',
    'region_code': 320113,
    'parent_code': 320100
  },
  {
    'id': 898,
    'region_name': '雨花台区',
    'region_code': 320114,
    'parent_code': 320100
  },
  {
    'id': 899,
    'region_name': '江宁区',
    'region_code': 320115,
    'parent_code': 320100
  },
  {
    'id': 900,
    'region_name': '六合区',
    'region_code': 320116,
    'parent_code': 320100
  },
  {
    'id': 901,
    'region_name': '溧水县',
    'region_code': 320124,
    'parent_code': null
  },
  {
    'id': 902,
    'region_name': '高淳县',
    'region_code': 320125,
    'parent_code': null
  },
  {
    'id': 903,
    'region_name': '无锡市',
    'region_code': 320200,
    'parent_code': 320000
  },
  {
    'id': 904,
    'region_name': '市辖区',
    'region_code': 320201,
    'parent_code': 320200
  },
  {
    'id': 905,
    'region_name': '崇安区',
    'region_code': 320202,
    'parent_code': 320200
  },
  {
    'id': 906,
    'region_name': '南长区',
    'region_code': 320203,
    'parent_code': 320200
  },
  {
    'id': 907,
    'region_name': '北塘区',
    'region_code': 320204,
    'parent_code': 320200
  },
  {
    'id': 908,
    'region_name': '锡山区',
    'region_code': 320205,
    'parent_code': 320200
  },
  {
    'id': 909,
    'region_name': '惠山区',
    'region_code': 320206,
    'parent_code': 320200
  },
  {
    'id': 910,
    'region_name': '滨湖区',
    'region_code': 320211,
    'parent_code': 320200
  },
  {
    'id': 911,
    'region_name': '江阴市',
    'region_code': 320281,
    'parent_code': 320200
  },
  {
    'id': 912,
    'region_name': '宜兴市',
    'region_code': 320282,
    'parent_code': 320200
  },
  {
    'id': 913,
    'region_name': '徐州市',
    'region_code': 320300,
    'parent_code': 320000
  },
  {
    'id': 914,
    'region_name': '市辖区',
    'region_code': 320301,
    'parent_code': 320300
  },
  {
    'id': 915,
    'region_name': '鼓楼区',
    'region_code': 320302,
    'parent_code': 320300
  },
  {
    'id': 916,
    'region_name': '云龙区',
    'region_code': 320303,
    'parent_code': 320300
  },
  {
    'id': 917,
    'region_name': '九里区',
    'region_code': 320304,
    'parent_code': null
  },
  {
    'id': 918,
    'region_name': '贾汪区',
    'region_code': 320305,
    'parent_code': 320300
  },
  {
    'id': 919,
    'region_name': '泉山区',
    'region_code': 320311,
    'parent_code': 320300
  },
  {
    'id': 920,
    'region_name': '丰县',
    'region_code': 320321,
    'parent_code': 320300
  },
  {
    'id': 921,
    'region_name': '沛县',
    'region_code': 320322,
    'parent_code': 320300
  },
  {
    'id': 922,
    'region_name': '铜山县',
    'region_code': 320323,
    'parent_code': null
  },
  {
    'id': 923,
    'region_name': '睢宁县',
    'region_code': 320324,
    'parent_code': 320300
  },
  {
    'id': 924,
    'region_name': '新沂市',
    'region_code': 320381,
    'parent_code': 320300
  },
  {
    'id': 925,
    'region_name': '邳州市',
    'region_code': 320382,
    'parent_code': 320300
  },
  {
    'id': 926,
    'region_name': '常州市',
    'region_code': 320400,
    'parent_code': 320000
  },
  {
    'id': 927,
    'region_name': '市辖区',
    'region_code': 320401,
    'parent_code': 320400
  },
  {
    'id': 928,
    'region_name': '天宁区',
    'region_code': 320402,
    'parent_code': 320400
  },
  {
    'id': 929,
    'region_name': '钟楼区',
    'region_code': 320404,
    'parent_code': 320400
  },
  {
    'id': 930,
    'region_name': '戚墅堰区',
    'region_code': 320405,
    'parent_code': 320400
  },
  {
    'id': 931,
    'region_name': '新北区',
    'region_code': 320411,
    'parent_code': 320400
  },
  {
    'id': 932,
    'region_name': '武进区',
    'region_code': 320412,
    'parent_code': 320400
  },
  {
    'id': 933,
    'region_name': '溧阳市',
    'region_code': 320481,
    'parent_code': 320400
  },
  {
    'id': 934,
    'region_name': '金坛市',
    'region_code': 320482,
    'parent_code': 320400
  },
  {
    'id': 935,
    'region_name': '苏州市',
    'region_code': 320500,
    'parent_code': 320000
  },
  {
    'id': 936,
    'region_name': '市辖区',
    'region_code': 320501,
    'parent_code': 320500
  },
  {
    'id': 937,
    'region_name': '沧浪区',
    'region_code': 320502,
    'parent_code': null
  },
  {
    'id': 938,
    'region_name': '平江区',
    'region_code': 320503,
    'parent_code': null
  },
  {
    'id': 939,
    'region_name': '金阊区',
    'region_code': 320504,
    'parent_code': null
  },
  {
    'id': 940,
    'region_name': '虎丘区',
    'region_code': 320505,
    'parent_code': 320500
  },
  {
    'id': 941,
    'region_name': '吴中区',
    'region_code': 320506,
    'parent_code': 320500
  },
  {
    'id': 942,
    'region_name': '相城区',
    'region_code': 320507,
    'parent_code': 320500
  },
  {
    'id': 943,
    'region_name': '常熟市',
    'region_code': 320581,
    'parent_code': 320500
  },
  {
    'id': 944,
    'region_name': '张家港市',
    'region_code': 320582,
    'parent_code': 320500
  },
  {
    'id': 945,
    'region_name': '昆山市',
    'region_code': 320583,
    'parent_code': 320500
  },
  {
    'id': 946,
    'region_name': '吴江市',
    'region_code': 320584,
    'parent_code': null
  },
  {
    'id': 947,
    'region_name': '太仓市',
    'region_code': 320585,
    'parent_code': 320500
  },
  {
    'id': 948,
    'region_name': '南通市',
    'region_code': 320600,
    'parent_code': 320000
  },
  {
    'id': 949,
    'region_name': '市辖区',
    'region_code': 320601,
    'parent_code': 320600
  },
  {
    'id': 950,
    'region_name': '崇川区',
    'region_code': 320602,
    'parent_code': 320600
  },
  {
    'id': 951,
    'region_name': '港闸区',
    'region_code': 320611,
    'parent_code': 320600
  },
  {
    'id': 952,
    'region_name': '海安县',
    'region_code': 320621,
    'parent_code': 320600
  },
  {
    'id': 953,
    'region_name': '如东县',
    'region_code': 320623,
    'parent_code': 320600
  },
  {
    'id': 954,
    'region_name': '启东市',
    'region_code': 320681,
    'parent_code': 320600
  },
  {
    'id': 955,
    'region_name': '如皋市',
    'region_code': 320682,
    'parent_code': 320600
  },
  {
    'id': 956,
    'region_name': '通州市',
    'region_code': 320683,
    'parent_code': null
  },
  {
    'id': 957,
    'region_name': '海门市',
    'region_code': 320684,
    'parent_code': 320600
  },
  {
    'id': 958,
    'region_name': '连云港市',
    'region_code': 320700,
    'parent_code': 320000
  },
  {
    'id': 959,
    'region_name': '市辖区',
    'region_code': 320701,
    'parent_code': 320700
  },
  {
    'id': 960,
    'region_name': '连云区',
    'region_code': 320703,
    'parent_code': 320700
  },
  {
    'id': 961,
    'region_name': '新浦区',
    'region_code': 320705,
    'parent_code': null
  },
  {
    'id': 962,
    'region_name': '海州区',
    'region_code': 320706,
    'parent_code': 320700
  },
  {
    'id': 963,
    'region_name': '赣榆县',
    'region_code': 320721,
    'parent_code': null
  },
  {
    'id': 964,
    'region_name': '东海县',
    'region_code': 320722,
    'parent_code': 320700
  },
  {
    'id': 965,
    'region_name': '灌云县',
    'region_code': 320723,
    'parent_code': 320700
  },
  {
    'id': 966,
    'region_name': '灌南县',
    'region_code': 320724,
    'parent_code': 320700
  },
  {
    'id': 967,
    'region_name': '淮安市',
    'region_code': 320800,
    'parent_code': 320000
  },
  {
    'id': 968,
    'region_name': '市辖区',
    'region_code': 320801,
    'parent_code': 320800
  },
  {
    'id': 969,
    'region_name': '清河区',
    'region_code': 320802,
    'parent_code': 320800
  },
  {
    'id': 970,
    'region_name': '楚州区',
    'region_code': 320803,
    'parent_code': 320800
  },
  {
    'id': 971,
    'region_name': '淮阴区',
    'region_code': 320804,
    'parent_code': 320800
  },
  {
    'id': 972,
    'region_name': '清浦区',
    'region_code': 320811,
    'parent_code': 320800
  },
  {
    'id': 973,
    'region_name': '涟水县',
    'region_code': 320826,
    'parent_code': 320800
  },
  {
    'id': 974,
    'region_name': '洪泽县',
    'region_code': 320829,
    'parent_code': 320800
  },
  {
    'id': 975,
    'region_name': '盱眙县',
    'region_code': 320830,
    'parent_code': 320800
  },
  {
    'id': 976,
    'region_name': '金湖县',
    'region_code': 320831,
    'parent_code': 320800
  },
  {
    'id': 977,
    'region_name': '盐城市',
    'region_code': 320900,
    'parent_code': 320000
  },
  {
    'id': 978,
    'region_name': '市辖区',
    'region_code': 320901,
    'parent_code': 320900
  },
  {
    'id': 979,
    'region_name': '亭湖区',
    'region_code': 320902,
    'parent_code': 320900
  },
  {
    'id': 980,
    'region_name': '盐都区',
    'region_code': 320903,
    'parent_code': 320900
  },
  {
    'id': 981,
    'region_name': '响水县',
    'region_code': 320921,
    'parent_code': 320900
  },
  {
    'id': 982,
    'region_name': '滨海县',
    'region_code': 320922,
    'parent_code': 320900
  },
  {
    'id': 983,
    'region_name': '阜宁县',
    'region_code': 320923,
    'parent_code': 320900
  },
  {
    'id': 984,
    'region_name': '射阳县',
    'region_code': 320924,
    'parent_code': 320900
  },
  {
    'id': 985,
    'region_name': '建湖县',
    'region_code': 320925,
    'parent_code': 320900
  },
  {
    'id': 986,
    'region_name': '东台市',
    'region_code': 320981,
    'parent_code': 320900
  },
  {
    'id': 987,
    'region_name': '大丰市',
    'region_code': 320982,
    'parent_code': 320900
  },
  {
    'id': 988,
    'region_name': '扬州市',
    'region_code': 321000,
    'parent_code': 320000
  },
  {
    'id': 989,
    'region_name': '市辖区',
    'region_code': 321001,
    'parent_code': 321000
  },
  {
    'id': 990,
    'region_name': '广陵区',
    'region_code': 321002,
    'parent_code': 321000
  },
  {
    'id': 991,
    'region_name': '邗江区',
    'region_code': 321003,
    'parent_code': 321000
  },
  {
    'id': 992,
    'region_name': '郊区',
    'region_code': 321011,
    'parent_code': null
  },
  {
    'id': 993,
    'region_name': '宝应县',
    'region_code': 321023,
    'parent_code': 321000
  },
  {
    'id': 994,
    'region_name': '仪征市',
    'region_code': 321081,
    'parent_code': 321000
  },
  {
    'id': 995,
    'region_name': '高邮市',
    'region_code': 321084,
    'parent_code': 321000
  },
  {
    'id': 996,
    'region_name': '江都市',
    'region_code': 321088,
    'parent_code': null
  },
  {
    'id': 997,
    'region_name': '镇江市',
    'region_code': 321100,
    'parent_code': 320000
  },
  {
    'id': 998,
    'region_name': '市辖区',
    'region_code': 321101,
    'parent_code': 321100
  },
  {
    'id': 999,
    'region_name': '京口区',
    'region_code': 321102,
    'parent_code': 321100
  },
  {
    'id': 1000,
    'region_name': '润州区',
    'region_code': 321111,
    'parent_code': 321100
  },
  {
    'id': 1001,
    'region_name': '丹徒区',
    'region_code': 321112,
    'parent_code': 321100
  },
  {
    'id': 1002,
    'region_name': '丹阳市',
    'region_code': 321181,
    'parent_code': 321100
  },
  {
    'id': 1003,
    'region_name': '扬中市',
    'region_code': 321182,
    'parent_code': 321100
  },
  {
    'id': 1004,
    'region_name': '句容市',
    'region_code': 321183,
    'parent_code': 321100
  },
  {
    'id': 1005,
    'region_name': '泰州市',
    'region_code': 321200,
    'parent_code': 320000
  },
  {
    'id': 1006,
    'region_name': '市辖区',
    'region_code': 321201,
    'parent_code': 321200
  },
  {
    'id': 1007,
    'region_name': '海陵区',
    'region_code': 321202,
    'parent_code': 321200
  },
  {
    'id': 1008,
    'region_name': '高港区',
    'region_code': 321203,
    'parent_code': 321200
  },
  {
    'id': 1009,
    'region_name': '兴化市',
    'region_code': 321281,
    'parent_code': 321200
  },
  {
    'id': 1010,
    'region_name': '靖江市',
    'region_code': 321282,
    'parent_code': 321200
  },
  {
    'id': 1011,
    'region_name': '泰兴市',
    'region_code': 321283,
    'parent_code': 321200
  },
  {
    'id': 1012,
    'region_name': '姜堰市',
    'region_code': 321284,
    'parent_code': null
  },
  {
    'id': 1013,
    'region_name': '宿迁市',
    'region_code': 321300,
    'parent_code': 320000
  },
  {
    'id': 1014,
    'region_name': '市辖区',
    'region_code': 321301,
    'parent_code': 321300
  },
  {
    'id': 1015,
    'region_name': '宿城区',
    'region_code': 321302,
    'parent_code': 321300
  },
  {
    'id': 1016,
    'region_name': '宿豫县',
    'region_code': 321321,
    'parent_code': null
  },
  {
    'id': 1017,
    'region_name': '沭阳县',
    'region_code': 321322,
    'parent_code': 321300
  },
  {
    'id': 1018,
    'region_name': '泗阳县',
    'region_code': 321323,
    'parent_code': 321300
  },
  {
    'id': 1019,
    'region_name': '泗洪县',
    'region_code': 321324,
    'parent_code': 321300
  },
  {
    'id': 1020,
    'region_name': '浙江省',
    'region_code': 330000,
    'parent_code': 0
  },
  {
    'id': 1021,
    'region_name': '杭州市',
    'region_code': 330100,
    'parent_code': 330000
  },
  {
    'id': 1022,
    'region_name': '市辖区',
    'region_code': 330101,
    'parent_code': 330100
  },
  {
    'id': 1023,
    'region_name': '上城区',
    'region_code': 330102,
    'parent_code': 330100
  },
  {
    'id': 1024,
    'region_name': '下城区',
    'region_code': 330103,
    'parent_code': 330100
  },
  {
    'id': 1025,
    'region_name': '江干区',
    'region_code': 330104,
    'parent_code': 330100
  },
  {
    'id': 1026,
    'region_name': '拱墅区',
    'region_code': 330105,
    'parent_code': 330100
  },
  {
    'id': 1027,
    'region_name': '西湖区',
    'region_code': 330106,
    'parent_code': 330100
  },
  {
    'id': 1028,
    'region_name': '滨江区',
    'region_code': 330108,
    'parent_code': 330100
  },
  {
    'id': 1029,
    'region_name': '萧山区',
    'region_code': 330109,
    'parent_code': 330100
  },
  {
    'id': 1030,
    'region_name': '余杭区',
    'region_code': 330110,
    'parent_code': 330100
  },
  {
    'id': 1031,
    'region_name': '桐庐县',
    'region_code': 330122,
    'parent_code': 330100
  },
  {
    'id': 1032,
    'region_name': '淳安县',
    'region_code': 330127,
    'parent_code': 330100
  },
  {
    'id': 1033,
    'region_name': '建德市',
    'region_code': 330182,
    'parent_code': 330100
  },
  {
    'id': 1034,
    'region_name': '富阳市',
    'region_code': 330183,
    'parent_code': 330100
  },
  {
    'id': 1035,
    'region_name': '临安市',
    'region_code': 330185,
    'parent_code': 330100
  },
  {
    'id': 1036,
    'region_name': '宁波市',
    'region_code': 330200,
    'parent_code': 330000
  },
  {
    'id': 1037,
    'region_name': '市辖区',
    'region_code': 330201,
    'parent_code': 330200
  },
  {
    'id': 1038,
    'region_name': '海曙区',
    'region_code': 330203,
    'parent_code': 330200
  },
  {
    'id': 1039,
    'region_name': '江东区',
    'region_code': 330204,
    'parent_code': 330200
  },
  {
    'id': 1040,
    'region_name': '江北区',
    'region_code': 330205,
    'parent_code': 330200
  },
  {
    'id': 1041,
    'region_name': '北仑区',
    'region_code': 330206,
    'parent_code': 330200
  },
  {
    'id': 1042,
    'region_name': '镇海区',
    'region_code': 330211,
    'parent_code': 330200
  },
  {
    'id': 1043,
    'region_name': '鄞州区',
    'region_code': 330212,
    'parent_code': 330200
  },
  {
    'id': 1044,
    'region_name': '象山县',
    'region_code': 330225,
    'parent_code': 330200
  },
  {
    'id': 1045,
    'region_name': '宁海县',
    'region_code': 330226,
    'parent_code': 330200
  },
  {
    'id': 1046,
    'region_name': '余姚市',
    'region_code': 330281,
    'parent_code': 330200
  },
  {
    'id': 1047,
    'region_name': '慈溪市',
    'region_code': 330282,
    'parent_code': 330200
  },
  {
    'id': 1048,
    'region_name': '奉化市',
    'region_code': 330283,
    'parent_code': 330200
  },
  {
    'id': 1049,
    'region_name': '温州市',
    'region_code': 330300,
    'parent_code': 330000
  },
  {
    'id': 1050,
    'region_name': '市辖区',
    'region_code': 330301,
    'parent_code': 330300
  },
  {
    'id': 1051,
    'region_name': '鹿城区',
    'region_code': 330302,
    'parent_code': 330300
  },
  {
    'id': 1052,
    'region_name': '龙湾区',
    'region_code': 330303,
    'parent_code': 330300
  },
  {
    'id': 1053,
    'region_name': '瓯海区',
    'region_code': 330304,
    'parent_code': 330300
  },
  {
    'id': 1054,
    'region_name': '洞头县',
    'region_code': 330322,
    'parent_code': 330300
  },
  {
    'id': 1055,
    'region_name': '永嘉县',
    'region_code': 330324,
    'parent_code': 330300
  },
  {
    'id': 1056,
    'region_name': '平阳县',
    'region_code': 330326,
    'parent_code': 330300
  },
  {
    'id': 1057,
    'region_name': '苍南县',
    'region_code': 330327,
    'parent_code': 330300
  },
  {
    'id': 1058,
    'region_name': '文成县',
    'region_code': 330328,
    'parent_code': 330300
  },
  {
    'id': 1059,
    'region_name': '泰顺县',
    'region_code': 330329,
    'parent_code': 330300
  },
  {
    'id': 1060,
    'region_name': '瑞安市',
    'region_code': 330381,
    'parent_code': 330300
  },
  {
    'id': 1061,
    'region_name': '乐清市',
    'region_code': 330382,
    'parent_code': 330300
  },
  {
    'id': 1062,
    'region_name': '嘉兴市',
    'region_code': 330400,
    'parent_code': 330000
  },
  {
    'id': 1063,
    'region_name': '市辖区',
    'region_code': 330401,
    'parent_code': 330400
  },
  {
    'id': 1064,
    'region_name': '秀城区',
    'region_code': 330402,
    'parent_code': 330400
  },
  {
    'id': 1065,
    'region_name': '秀洲区',
    'region_code': 330411,
    'parent_code': 330400
  },
  {
    'id': 1066,
    'region_name': '嘉善县',
    'region_code': 330421,
    'parent_code': 330400
  },
  {
    'id': 1067,
    'region_name': '海盐县',
    'region_code': 330424,
    'parent_code': 330400
  },
  {
    'id': 1068,
    'region_name': '海宁市',
    'region_code': 330481,
    'parent_code': 330400
  },
  {
    'id': 1069,
    'region_name': '平湖市',
    'region_code': 330482,
    'parent_code': 330400
  },
  {
    'id': 1070,
    'region_name': '桐乡市',
    'region_code': 330483,
    'parent_code': 330400
  },
  {
    'id': 1071,
    'region_name': '湖州市',
    'region_code': 330500,
    'parent_code': 330000
  },
  {
    'id': 1072,
    'region_name': '市辖区',
    'region_code': 330501,
    'parent_code': 330500
  },
  {
    'id': 1073,
    'region_name': '吴兴区',
    'region_code': 330502,
    'parent_code': 330500
  },
  {
    'id': 1074,
    'region_name': '南浔区',
    'region_code': 330503,
    'parent_code': 330500
  },
  {
    'id': 1075,
    'region_name': '德清县',
    'region_code': 330521,
    'parent_code': 330500
  },
  {
    'id': 1076,
    'region_name': '长兴县',
    'region_code': 330522,
    'parent_code': 330500
  },
  {
    'id': 1077,
    'region_name': '安吉县',
    'region_code': 330523,
    'parent_code': 330500
  },
  {
    'id': 1078,
    'region_name': '绍兴市',
    'region_code': 330600,
    'parent_code': 330000
  },
  {
    'id': 1079,
    'region_name': '市辖区',
    'region_code': 330601,
    'parent_code': 330600
  },
  {
    'id': 1080,
    'region_name': '越城区',
    'region_code': 330602,
    'parent_code': 330600
  },
  {
    'id': 1081,
    'region_name': '绍兴县',
    'region_code': 330621,
    'parent_code': null
  },
  {
    'id': 1082,
    'region_name': '新昌县',
    'region_code': 330624,
    'parent_code': 330600
  },
  {
    'id': 1083,
    'region_name': '诸暨市',
    'region_code': 330681,
    'parent_code': 330600
  },
  {
    'id': 1084,
    'region_name': '上虞市',
    'region_code': 330682,
    'parent_code': null
  },
  {
    'id': 1085,
    'region_name': '嵊州市',
    'region_code': 330683,
    'parent_code': 330600
  },
  {
    'id': 1086,
    'region_name': '金华市',
    'region_code': 330700,
    'parent_code': 330000
  },
  {
    'id': 1087,
    'region_name': '市辖区',
    'region_code': 330701,
    'parent_code': 330700
  },
  {
    'id': 1088,
    'region_name': '婺城区',
    'region_code': 330702,
    'parent_code': 330700
  },
  {
    'id': 1089,
    'region_name': '金东区',
    'region_code': 330703,
    'parent_code': 330700
  },
  {
    'id': 1090,
    'region_name': '武义县',
    'region_code': 330723,
    'parent_code': 330700
  },
  {
    'id': 1091,
    'region_name': '浦江县',
    'region_code': 330726,
    'parent_code': 330700
  },
  {
    'id': 1092,
    'region_name': '磐安县',
    'region_code': 330727,
    'parent_code': 330700
  },
  {
    'id': 1093,
    'region_name': '兰溪市',
    'region_code': 330781,
    'parent_code': 330700
  },
  {
    'id': 1094,
    'region_name': '义乌市',
    'region_code': 330782,
    'parent_code': 330700
  },
  {
    'id': 1095,
    'region_name': '东阳市',
    'region_code': 330783,
    'parent_code': 330700
  },
  {
    'id': 1096,
    'region_name': '永康市',
    'region_code': 330784,
    'parent_code': 330700
  },
  {
    'id': 1097,
    'region_name': '衢州市',
    'region_code': 330800,
    'parent_code': 330000
  },
  {
    'id': 1098,
    'region_name': '市辖区',
    'region_code': 330801,
    'parent_code': 330800
  },
  {
    'id': 1099,
    'region_name': '柯城区',
    'region_code': 330802,
    'parent_code': 330800
  },
  {
    'id': 1100,
    'region_name': '衢江区',
    'region_code': 330803,
    'parent_code': 330800
  },
  {
    'id': 1101,
    'region_name': '常山县',
    'region_code': 330822,
    'parent_code': 330800
  },
  {
    'id': 1102,
    'region_name': '开化县',
    'region_code': 330824,
    'parent_code': 330800
  },
  {
    'id': 1103,
    'region_name': '龙游县',
    'region_code': 330825,
    'parent_code': 330800
  },
  {
    'id': 1104,
    'region_name': '江山市',
    'region_code': 330881,
    'parent_code': 330800
  },
  {
    'id': 1105,
    'region_name': '舟山市',
    'region_code': 330900,
    'parent_code': 330000
  },
  {
    'id': 1106,
    'region_name': '市辖区',
    'region_code': 330901,
    'parent_code': 330900
  },
  {
    'id': 1107,
    'region_name': '定海区',
    'region_code': 330902,
    'parent_code': 330900
  },
  {
    'id': 1108,
    'region_name': '普陀区',
    'region_code': 330903,
    'parent_code': 330900
  },
  {
    'id': 1109,
    'region_name': '岱山县',
    'region_code': 330921,
    'parent_code': 330900
  },
  {
    'id': 1110,
    'region_name': '嵊泗县',
    'region_code': 330922,
    'parent_code': 330900
  },
  {
    'id': 1111,
    'region_name': '台州市',
    'region_code': 331000,
    'parent_code': 330000
  },
  {
    'id': 1112,
    'region_name': '市辖区',
    'region_code': 331001,
    'parent_code': 331000
  },
  {
    'id': 1113,
    'region_name': '椒江区',
    'region_code': 331002,
    'parent_code': 331000
  },
  {
    'id': 1114,
    'region_name': '黄岩区',
    'region_code': 331003,
    'parent_code': 331000
  },
  {
    'id': 1115,
    'region_name': '路桥区',
    'region_code': 331004,
    'parent_code': 331000
  },
  {
    'id': 1116,
    'region_name': '玉环县',
    'region_code': 331021,
    'parent_code': 331000
  },
  {
    'id': 1117,
    'region_name': '三门县',
    'region_code': 331022,
    'parent_code': 331000
  },
  {
    'id': 1118,
    'region_name': '天台县',
    'region_code': 331023,
    'parent_code': 331000
  },
  {
    'id': 1119,
    'region_name': '仙居县',
    'region_code': 331024,
    'parent_code': 331000
  },
  {
    'id': 1120,
    'region_name': '温岭市',
    'region_code': 331081,
    'parent_code': 331000
  },
  {
    'id': 1121,
    'region_name': '临海市',
    'region_code': 331082,
    'parent_code': 331000
  },
  {
    'id': 1122,
    'region_name': '丽水市',
    'region_code': 331100,
    'parent_code': 330000
  },
  {
    'id': 1123,
    'region_name': '市辖区',
    'region_code': 331101,
    'parent_code': 331100
  },
  {
    'id': 1124,
    'region_name': '莲都区',
    'region_code': 331102,
    'parent_code': 331100
  },
  {
    'id': 1125,
    'region_name': '青田县',
    'region_code': 331121,
    'parent_code': 331100
  },
  {
    'id': 1126,
    'region_name': '缙云县',
    'region_code': 331122,
    'parent_code': 331100
  },
  {
    'id': 1127,
    'region_name': '遂昌县',
    'region_code': 331123,
    'parent_code': 331100
  },
  {
    'id': 1128,
    'region_name': '松阳县',
    'region_code': 331124,
    'parent_code': 331100
  },
  {
    'id': 1129,
    'region_name': '云和县',
    'region_code': 331125,
    'parent_code': 331100
  },
  {
    'id': 1130,
    'region_name': '庆元县',
    'region_code': 331126,
    'parent_code': 331100
  },
  {
    'id': 1131,
    'region_name': '景宁畲族自治县',
    'region_code': 331127,
    'parent_code': 331100
  },
  {
    'id': 1132,
    'region_name': '龙泉市',
    'region_code': 331181,
    'parent_code': 331100
  },
  {
    'id': 1133,
    'region_name': '安徽省',
    'region_code': 340000,
    'parent_code': 0
  },
  {
    'id': 1134,
    'region_name': '合肥市',
    'region_code': 340100,
    'parent_code': 340000
  },
  {
    'id': 1135,
    'region_name': '市辖区',
    'region_code': 340101,
    'parent_code': 340100
  },
  {
    'id': 1136,
    'region_name': '瑶海区',
    'region_code': 340102,
    'parent_code': 340100
  },
  {
    'id': 1137,
    'region_name': '庐阳区',
    'region_code': 340103,
    'parent_code': 340100
  },
  {
    'id': 1138,
    'region_name': '蜀山区',
    'region_code': 340104,
    'parent_code': 340100
  },
  {
    'id': 1139,
    'region_name': '包河区',
    'region_code': 340111,
    'parent_code': 340100
  },
  {
    'id': 1140,
    'region_name': '长丰县',
    'region_code': 340121,
    'parent_code': 340100
  },
  {
    'id': 1141,
    'region_name': '肥东县',
    'region_code': 340122,
    'parent_code': 340100
  },
  {
    'id': 1142,
    'region_name': '肥西县',
    'region_code': 340123,
    'parent_code': 340100
  },
  {
    'id': 1143,
    'region_name': '芜湖市',
    'region_code': 340200,
    'parent_code': 340000
  },
  {
    'id': 1144,
    'region_name': '市辖区',
    'region_code': 340201,
    'parent_code': 340200
  },
  {
    'id': 1145,
    'region_name': '镜湖区',
    'region_code': 340202,
    'parent_code': 340200
  },
  {
    'id': 1146,
    'region_name': '马塘区',
    'region_code': 340203,
    'parent_code': 340200
  },
  {
    'id': 1147,
    'region_name': '新芜区',
    'region_code': 340204,
    'parent_code': null
  },
  {
    'id': 1148,
    'region_name': '鸠江区',
    'region_code': 340207,
    'parent_code': 340200
  },
  {
    'id': 1149,
    'region_name': '芜湖县',
    'region_code': 340221,
    'parent_code': 340200
  },
  {
    'id': 1150,
    'region_name': '繁昌县',
    'region_code': 340222,
    'parent_code': 340200
  },
  {
    'id': 1151,
    'region_name': '南陵县',
    'region_code': 340223,
    'parent_code': 340200
  },
  {
    'id': 1152,
    'region_name': '蚌埠市',
    'region_code': 340300,
    'parent_code': 340000
  },
  {
    'id': 1153,
    'region_name': '市辖区',
    'region_code': 340301,
    'parent_code': 340300
  },
  {
    'id': 1154,
    'region_name': '东市区',
    'region_code': 340302,
    'parent_code': 340300
  },
  {
    'id': 1155,
    'region_name': '中市区',
    'region_code': 340303,
    'parent_code': 340300
  },
  {
    'id': 1156,
    'region_name': '西市区',
    'region_code': 340304,
    'parent_code': 340300
  },
  {
    'id': 1157,
    'region_name': '郊区',
    'region_code': 340311,
    'parent_code': 340300
  },
  {
    'id': 1158,
    'region_name': '怀远县',
    'region_code': 340321,
    'parent_code': 340300
  },
  {
    'id': 1159,
    'region_name': '五河县',
    'region_code': 340322,
    'parent_code': 340300
  },
  {
    'id': 1160,
    'region_name': '固镇县',
    'region_code': 340323,
    'parent_code': 340300
  },
  {
    'id': 1161,
    'region_name': '淮南市',
    'region_code': 340400,
    'parent_code': 340000
  },
  {
    'id': 1162,
    'region_name': '市辖区',
    'region_code': 340401,
    'parent_code': 340400
  },
  {
    'id': 1163,
    'region_name': '大通区',
    'region_code': 340402,
    'parent_code': 340400
  },
  {
    'id': 1164,
    'region_name': '田家庵区',
    'region_code': 340403,
    'parent_code': 340400
  },
  {
    'id': 1165,
    'region_name': '谢家集区',
    'region_code': 340404,
    'parent_code': 340400
  },
  {
    'id': 1166,
    'region_name': '八公山区',
    'region_code': 340405,
    'parent_code': 340400
  },
  {
    'id': 1167,
    'region_name': '潘集区',
    'region_code': 340406,
    'parent_code': 340400
  },
  {
    'id': 1168,
    'region_name': '凤台县',
    'region_code': 340421,
    'parent_code': 340400
  },
  {
    'id': 1169,
    'region_name': '马鞍山市',
    'region_code': 340500,
    'parent_code': 340000
  },
  {
    'id': 1170,
    'region_name': '市辖区',
    'region_code': 340501,
    'parent_code': 340500
  },
  {
    'id': 1171,
    'region_name': '金家庄区',
    'region_code': 340502,
    'parent_code': null
  },
  {
    'id': 1172,
    'region_name': '花山区',
    'region_code': 340503,
    'parent_code': 340500
  },
  {
    'id': 1173,
    'region_name': '雨山区',
    'region_code': 340504,
    'parent_code': 340500
  },
  {
    'id': 1174,
    'region_name': '当涂县',
    'region_code': 340521,
    'parent_code': 340500
  },
  {
    'id': 1175,
    'region_name': '淮北市',
    'region_code': 340600,
    'parent_code': 340000
  },
  {
    'id': 1176,
    'region_name': '市辖区',
    'region_code': 340601,
    'parent_code': 340600
  },
  {
    'id': 1177,
    'region_name': '杜集区',
    'region_code': 340602,
    'parent_code': 340600
  },
  {
    'id': 1178,
    'region_name': '相山区',
    'region_code': 340603,
    'parent_code': 340600
  },
  {
    'id': 1179,
    'region_name': '烈山区',
    'region_code': 340604,
    'parent_code': 340600
  },
  {
    'id': 1180,
    'region_name': '濉溪县',
    'region_code': 340621,
    'parent_code': 340600
  },
  {
    'id': 1181,
    'region_name': '铜陵市',
    'region_code': 340700,
    'parent_code': 340000
  },
  {
    'id': 1182,
    'region_name': '市辖区',
    'region_code': 340701,
    'parent_code': 340700
  },
  {
    'id': 1183,
    'region_name': '铜官山区',
    'region_code': 340702,
    'parent_code': 340700
  },
  {
    'id': 1184,
    'region_name': '狮子山区',
    'region_code': 340703,
    'parent_code': 340700
  },
  {
    'id': 1185,
    'region_name': '郊区',
    'region_code': 340711,
    'parent_code': 340700
  },
  {
    'id': 1186,
    'region_name': '铜陵县',
    'region_code': 340721,
    'parent_code': 340700
  },
  {
    'id': 1187,
    'region_name': '安庆市',
    'region_code': 340800,
    'parent_code': 340000
  },
  {
    'id': 1188,
    'region_name': '市辖区',
    'region_code': 340801,
    'parent_code': 340800
  },
  {
    'id': 1189,
    'region_name': '迎江区',
    'region_code': 340802,
    'parent_code': 340800
  },
  {
    'id': 1190,
    'region_name': '大观区',
    'region_code': 340803,
    'parent_code': 340800
  },
  {
    'id': 1191,
    'region_name': '郊区',
    'region_code': 340811,
    'parent_code': 340800
  },
  {
    'id': 1192,
    'region_name': '怀宁县',
    'region_code': 340822,
    'parent_code': 340800
  },
  {
    'id': 1193,
    'region_name': '枞阳县',
    'region_code': 340823,
    'parent_code': 340800
  },
  {
    'id': 1194,
    'region_name': '潜山县',
    'region_code': 340824,
    'parent_code': 340800
  },
  {
    'id': 1195,
    'region_name': '太湖县',
    'region_code': 340825,
    'parent_code': 340800
  },
  {
    'id': 1196,
    'region_name': '宿松县',
    'region_code': 340826,
    'parent_code': 340800
  },
  {
    'id': 1197,
    'region_name': '望江县',
    'region_code': 340827,
    'parent_code': 340800
  },
  {
    'id': 1198,
    'region_name': '岳西县',
    'region_code': 340828,
    'parent_code': 340800
  },
  {
    'id': 1199,
    'region_name': '桐城市',
    'region_code': 340881,
    'parent_code': 340800
  },
  {
    'id': 1200,
    'region_name': '黄山市',
    'region_code': 341000,
    'parent_code': 340000
  },
  {
    'id': 1201,
    'region_name': '市辖区',
    'region_code': 341001,
    'parent_code': 341000
  },
  {
    'id': 1202,
    'region_name': '屯溪区',
    'region_code': 341002,
    'parent_code': 341000
  },
  {
    'id': 1203,
    'region_name': '黄山区',
    'region_code': 341003,
    'parent_code': 341000
  },
  {
    'id': 1204,
    'region_name': '徽州区',
    'region_code': 341004,
    'parent_code': 341000
  },
  {
    'id': 1205,
    'region_name': '歙县',
    'region_code': 341021,
    'parent_code': 341000
  },
  {
    'id': 1206,
    'region_name': '休宁县',
    'region_code': 341022,
    'parent_code': 341000
  },
  {
    'id': 1207,
    'region_name': '黟县',
    'region_code': 341023,
    'parent_code': 341000
  },
  {
    'id': 1208,
    'region_name': '祁门县',
    'region_code': 341024,
    'parent_code': 341000
  },
  {
    'id': 1209,
    'region_name': '滁州市',
    'region_code': 341100,
    'parent_code': 340000
  },
  {
    'id': 1210,
    'region_name': '市辖区',
    'region_code': 341101,
    'parent_code': 341100
  },
  {
    'id': 1211,
    'region_name': '琅琊区',
    'region_code': 341102,
    'parent_code': 341100
  },
  {
    'id': 1212,
    'region_name': '南谯区',
    'region_code': 341103,
    'parent_code': 341100
  },
  {
    'id': 1213,
    'region_name': '来安县',
    'region_code': 341122,
    'parent_code': 341100
  },
  {
    'id': 1214,
    'region_name': '全椒县',
    'region_code': 341124,
    'parent_code': 341100
  },
  {
    'id': 1215,
    'region_name': '定远县',
    'region_code': 341125,
    'parent_code': 341100
  },
  {
    'id': 1216,
    'region_name': '凤阳县',
    'region_code': 341126,
    'parent_code': 341100
  },
  {
    'id': 1217,
    'region_name': '天长市',
    'region_code': 341181,
    'parent_code': 341100
  },
  {
    'id': 1218,
    'region_name': '明光市',
    'region_code': 341182,
    'parent_code': 341100
  },
  {
    'id': 1219,
    'region_name': '阜阳市',
    'region_code': 341200,
    'parent_code': 340000
  },
  {
    'id': 1220,
    'region_name': '市辖区',
    'region_code': 341201,
    'parent_code': 341200
  },
  {
    'id': 1221,
    'region_name': '颍州区',
    'region_code': 341202,
    'parent_code': 341200
  },
  {
    'id': 1222,
    'region_name': '颍东区',
    'region_code': 341203,
    'parent_code': 341200
  },
  {
    'id': 1223,
    'region_name': '颍泉区',
    'region_code': 341204,
    'parent_code': 341200
  },
  {
    'id': 1224,
    'region_name': '临泉县',
    'region_code': 341221,
    'parent_code': 341200
  },
  {
    'id': 1225,
    'region_name': '太和县',
    'region_code': 341222,
    'parent_code': 341200
  },
  {
    'id': 1226,
    'region_name': '阜南县',
    'region_code': 341225,
    'parent_code': 341200
  },
  {
    'id': 1227,
    'region_name': '颍上县',
    'region_code': 341226,
    'parent_code': 341200
  },
  {
    'id': 1228,
    'region_name': '界首市',
    'region_code': 341282,
    'parent_code': 341200
  },
  {
    'id': 1229,
    'region_name': '宿州市',
    'region_code': 341300,
    'parent_code': 340000
  },
  {
    'id': 1230,
    'region_name': '市辖区',
    'region_code': 341301,
    'parent_code': 341300
  },
  {
    'id': 1231,
    'region_name': '墉桥区',
    'region_code': 341302,
    'parent_code': 341300
  },
  {
    'id': 1232,
    'region_name': '砀山县',
    'region_code': 341321,
    'parent_code': 341300
  },
  {
    'id': 1233,
    'region_name': '萧县',
    'region_code': 341322,
    'parent_code': 341300
  },
  {
    'id': 1234,
    'region_name': '灵璧县',
    'region_code': 341323,
    'parent_code': 341300
  },
  {
    'id': 1235,
    'region_name': '泗县',
    'region_code': 341324,
    'parent_code': 341300
  },
  {
    'id': 1236,
    'region_name': '巢湖市',
    'region_code': 341400,
    'parent_code': null
  },
  {
    'id': 1237,
    'region_name': '市辖区',
    'region_code': 341401,
    'parent_code': null
  },
  {
    'id': 1238,
    'region_name': '居巢区',
    'region_code': 341402,
    'parent_code': null
  },
  {
    'id': 1239,
    'region_name': '庐江县',
    'region_code': 341421,
    'parent_code': null
  },
  {
    'id': 1240,
    'region_name': '无为县',
    'region_code': 341422,
    'parent_code': null
  },
  {
    'id': 1241,
    'region_name': '含山县',
    'region_code': 341423,
    'parent_code': null
  },
  {
    'id': 1242,
    'region_name': '和县',
    'region_code': 341424,
    'parent_code': null
  },
  {
    'id': 1243,
    'region_name': '六安市',
    'region_code': 341500,
    'parent_code': 340000
  },
  {
    'id': 1244,
    'region_name': '市辖区',
    'region_code': 341501,
    'parent_code': 341500
  },
  {
    'id': 1245,
    'region_name': '金安区',
    'region_code': 341502,
    'parent_code': 341500
  },
  {
    'id': 1246,
    'region_name': '裕安区',
    'region_code': 341503,
    'parent_code': 341500
  },
  {
    'id': 1247,
    'region_name': '寿县',
    'region_code': 341521,
    'parent_code': 341500
  },
  {
    'id': 1248,
    'region_name': '霍邱县',
    'region_code': 341522,
    'parent_code': 341500
  },
  {
    'id': 1249,
    'region_name': '舒城县',
    'region_code': 341523,
    'parent_code': 341500
  },
  {
    'id': 1250,
    'region_name': '金寨县',
    'region_code': 341524,
    'parent_code': 341500
  },
  {
    'id': 1251,
    'region_name': '霍山县',
    'region_code': 341525,
    'parent_code': 341500
  },
  {
    'id': 1252,
    'region_name': '亳州市',
    'region_code': 341600,
    'parent_code': 340000
  },
  {
    'id': 1253,
    'region_name': '市辖区',
    'region_code': 341601,
    'parent_code': 341600
  },
  {
    'id': 1254,
    'region_name': '谯城区',
    'region_code': 341602,
    'parent_code': 341600
  },
  {
    'id': 1255,
    'region_name': '涡阳县',
    'region_code': 341621,
    'parent_code': 341600
  },
  {
    'id': 1256,
    'region_name': '蒙城县',
    'region_code': 341622,
    'parent_code': 341600
  },
  {
    'id': 1257,
    'region_name': '利辛县',
    'region_code': 341623,
    'parent_code': 341600
  },
  {
    'id': 1258,
    'region_name': '池州市',
    'region_code': 341700,
    'parent_code': 340000
  },
  {
    'id': 1259,
    'region_name': '市辖区',
    'region_code': 341701,
    'parent_code': 341700
  },
  {
    'id': 1260,
    'region_name': '贵池区',
    'region_code': 341702,
    'parent_code': 341700
  },
  {
    'id': 1261,
    'region_name': '东至县',
    'region_code': 341721,
    'parent_code': 341700
  },
  {
    'id': 1262,
    'region_name': '石台县',
    'region_code': 341722,
    'parent_code': 341700
  },
  {
    'id': 1263,
    'region_name': '青阳县',
    'region_code': 341723,
    'parent_code': 341700
  },
  {
    'id': 1264,
    'region_name': '宣城市',
    'region_code': 341800,
    'parent_code': 340000
  },
  {
    'id': 1265,
    'region_name': '市辖区',
    'region_code': 341801,
    'parent_code': 341800
  },
  {
    'id': 1266,
    'region_name': '宣州区',
    'region_code': 341802,
    'parent_code': 341800
  },
  {
    'id': 1267,
    'region_name': '郎溪县',
    'region_code': 341821,
    'parent_code': 341800
  },
  {
    'id': 1268,
    'region_name': '广德县',
    'region_code': 341822,
    'parent_code': 341800
  },
  {
    'id': 1269,
    'region_name': '泾县',
    'region_code': 341823,
    'parent_code': 341800
  },
  {
    'id': 1270,
    'region_name': '绩溪县',
    'region_code': 341824,
    'parent_code': 341800
  },
  {
    'id': 1271,
    'region_name': '旌德县',
    'region_code': 341825,
    'parent_code': 341800
  },
  {
    'id': 1272,
    'region_name': '宁国市',
    'region_code': 341881,
    'parent_code': 341800
  },
  {
    'id': 1273,
    'region_name': '福建省',
    'region_code': 350000,
    'parent_code': 0
  },
  {
    'id': 1274,
    'region_name': '福州市',
    'region_code': 350100,
    'parent_code': 350000
  },
  {
    'id': 1275,
    'region_name': '市辖区',
    'region_code': 350101,
    'parent_code': 350100
  },
  {
    'id': 1276,
    'region_name': '鼓楼区',
    'region_code': 350102,
    'parent_code': 350100
  },
  {
    'id': 1277,
    'region_name': '台江区',
    'region_code': 350103,
    'parent_code': 350100
  },
  {
    'id': 1278,
    'region_name': '仓山区',
    'region_code': 350104,
    'parent_code': 350100
  },
  {
    'id': 1279,
    'region_name': '马尾区',
    'region_code': 350105,
    'parent_code': 350100
  },
  {
    'id': 1280,
    'region_name': '晋安区',
    'region_code': 350111,
    'parent_code': 350100
  },
  {
    'id': 1281,
    'region_name': '闽侯县',
    'region_code': 350121,
    'parent_code': 350100
  },
  {
    'id': 1282,
    'region_name': '连江县',
    'region_code': 350122,
    'parent_code': 350100
  },
  {
    'id': 1283,
    'region_name': '罗源县',
    'region_code': 350123,
    'parent_code': 350100
  },
  {
    'id': 1284,
    'region_name': '闽清县',
    'region_code': 350124,
    'parent_code': 350100
  },
  {
    'id': 1285,
    'region_name': '永泰县',
    'region_code': 350125,
    'parent_code': 350100
  },
  {
    'id': 1286,
    'region_name': '平潭县',
    'region_code': 350128,
    'parent_code': 350100
  },
  {
    'id': 1287,
    'region_name': '福清市',
    'region_code': 350181,
    'parent_code': 350100
  },
  {
    'id': 1288,
    'region_name': '长乐市',
    'region_code': 350182,
    'parent_code': 350100
  },
  {
    'id': 1289,
    'region_name': '厦门市',
    'region_code': 350200,
    'parent_code': 350000
  },
  {
    'id': 1290,
    'region_name': '市辖区',
    'region_code': 350201,
    'parent_code': 350200
  },
  {
    'id': 1291,
    'region_name': '思明区',
    'region_code': 350203,
    'parent_code': 350200
  },
  {
    'id': 1292,
    'region_name': '海沧区',
    'region_code': 350205,
    'parent_code': 350200
  },
  {
    'id': 1293,
    'region_name': '湖里区',
    'region_code': 350206,
    'parent_code': 350200
  },
  {
    'id': 1294,
    'region_name': '集美区',
    'region_code': 350211,
    'parent_code': 350200
  },
  {
    'id': 1295,
    'region_name': '同安区',
    'region_code': 350212,
    'parent_code': 350200
  },
  {
    'id': 1296,
    'region_name': '翔安区',
    'region_code': 350213,
    'parent_code': 350200
  },
  {
    'id': 1297,
    'region_name': '莆田市',
    'region_code': 350300,
    'parent_code': 350000
  },
  {
    'id': 1298,
    'region_name': '市辖区',
    'region_code': 350301,
    'parent_code': 350300
  },
  {
    'id': 1299,
    'region_name': '城厢区',
    'region_code': 350302,
    'parent_code': 350300
  },
  {
    'id': 1300,
    'region_name': '涵江区',
    'region_code': 350303,
    'parent_code': 350300
  },
  {
    'id': 1301,
    'region_name': '荔城区',
    'region_code': 350304,
    'parent_code': 350300
  },
  {
    'id': 1302,
    'region_name': '秀屿区',
    'region_code': 350305,
    'parent_code': 350300
  },
  {
    'id': 1303,
    'region_name': '仙游县',
    'region_code': 350322,
    'parent_code': 350300
  },
  {
    'id': 1304,
    'region_name': '三明市',
    'region_code': 350400,
    'parent_code': 350000
  },
  {
    'id': 1305,
    'region_name': '市辖区',
    'region_code': 350401,
    'parent_code': 350400
  },
  {
    'id': 1306,
    'region_name': '梅列区',
    'region_code': 350402,
    'parent_code': 350400
  },
  {
    'id': 1307,
    'region_name': '三元区',
    'region_code': 350403,
    'parent_code': 350400
  },
  {
    'id': 1308,
    'region_name': '明溪县',
    'region_code': 350421,
    'parent_code': 350400
  },
  {
    'id': 1309,
    'region_name': '清流县',
    'region_code': 350423,
    'parent_code': 350400
  },
  {
    'id': 1310,
    'region_name': '宁化县',
    'region_code': 350424,
    'parent_code': 350400
  },
  {
    'id': 1311,
    'region_name': '大田县',
    'region_code': 350425,
    'parent_code': 350400
  },
  {
    'id': 1312,
    'region_name': '尤溪县',
    'region_code': 350426,
    'parent_code': 350400
  },
  {
    'id': 1313,
    'region_name': '沙县',
    'region_code': 350427,
    'parent_code': 350400
  },
  {
    'id': 1314,
    'region_name': '将乐县',
    'region_code': 350428,
    'parent_code': 350400
  },
  {
    'id': 1315,
    'region_name': '泰宁县',
    'region_code': 350429,
    'parent_code': 350400
  },
  {
    'id': 1316,
    'region_name': '建宁县',
    'region_code': 350430,
    'parent_code': 350400
  },
  {
    'id': 1317,
    'region_name': '永安市',
    'region_code': 350481,
    'parent_code': 350400
  },
  {
    'id': 1318,
    'region_name': '泉州市',
    'region_code': 350500,
    'parent_code': 350000
  },
  {
    'id': 1319,
    'region_name': '市辖区',
    'region_code': 350501,
    'parent_code': 350500
  },
  {
    'id': 1320,
    'region_name': '鲤城区',
    'region_code': 350502,
    'parent_code': 350500
  },
  {
    'id': 1321,
    'region_name': '丰泽区',
    'region_code': 350503,
    'parent_code': 350500
  },
  {
    'id': 1322,
    'region_name': '洛江区',
    'region_code': 350504,
    'parent_code': 350500
  },
  {
    'id': 1323,
    'region_name': '泉港区',
    'region_code': 350505,
    'parent_code': 350500
  },
  {
    'id': 1324,
    'region_name': '惠安县',
    'region_code': 350521,
    'parent_code': 350500
  },
  {
    'id': 1325,
    'region_name': '安溪县',
    'region_code': 350524,
    'parent_code': 350500
  },
  {
    'id': 1326,
    'region_name': '永春县',
    'region_code': 350525,
    'parent_code': 350500
  },
  {
    'id': 1327,
    'region_name': '德化县',
    'region_code': 350526,
    'parent_code': 350500
  },
  {
    'id': 1328,
    'region_name': '金门县',
    'region_code': 350527,
    'parent_code': 350500
  },
  {
    'id': 1329,
    'region_name': '石狮市',
    'region_code': 350581,
    'parent_code': 350500
  },
  {
    'id': 1330,
    'region_name': '晋江市',
    'region_code': 350582,
    'parent_code': 350500
  },
  {
    'id': 1331,
    'region_name': '南安市',
    'region_code': 350583,
    'parent_code': 350500
  },
  {
    'id': 1332,
    'region_name': '漳州市',
    'region_code': 350600,
    'parent_code': 350000
  },
  {
    'id': 1333,
    'region_name': '市辖区',
    'region_code': 350601,
    'parent_code': 350600
  },
  {
    'id': 1334,
    'region_name': '芗城区',
    'region_code': 350602,
    'parent_code': 350600
  },
  {
    'id': 1335,
    'region_name': '龙文区',
    'region_code': 350603,
    'parent_code': 350600
  },
  {
    'id': 1336,
    'region_name': '云霄县',
    'region_code': 350622,
    'parent_code': 350600
  },
  {
    'id': 1337,
    'region_name': '漳浦县',
    'region_code': 350623,
    'parent_code': 350600
  },
  {
    'id': 1338,
    'region_name': '诏安县',
    'region_code': 350624,
    'parent_code': 350600
  },
  {
    'id': 1339,
    'region_name': '长泰县',
    'region_code': 350625,
    'parent_code': 350600
  },
  {
    'id': 1340,
    'region_name': '东山县',
    'region_code': 350626,
    'parent_code': 350600
  },
  {
    'id': 1341,
    'region_name': '南靖县',
    'region_code': 350627,
    'parent_code': 350600
  },
  {
    'id': 1342,
    'region_name': '平和县',
    'region_code': 350628,
    'parent_code': 350600
  },
  {
    'id': 1343,
    'region_name': '华安县',
    'region_code': 350629,
    'parent_code': 350600
  },
  {
    'id': 1344,
    'region_name': '龙海市',
    'region_code': 350681,
    'parent_code': 350600
  },
  {
    'id': 1345,
    'region_name': '南平市',
    'region_code': 350700,
    'parent_code': 350000
  },
  {
    'id': 1346,
    'region_name': '市辖区',
    'region_code': 350701,
    'parent_code': 350700
  },
  {
    'id': 1347,
    'region_name': '延平区',
    'region_code': 350702,
    'parent_code': 350700
  },
  {
    'id': 1348,
    'region_name': '顺昌县',
    'region_code': 350721,
    'parent_code': 350700
  },
  {
    'id': 1349,
    'region_name': '浦城县',
    'region_code': 350722,
    'parent_code': 350700
  },
  {
    'id': 1350,
    'region_name': '光泽县',
    'region_code': 350723,
    'parent_code': 350700
  },
  {
    'id': 1351,
    'region_name': '松溪县',
    'region_code': 350724,
    'parent_code': 350700
  },
  {
    'id': 1352,
    'region_name': '政和县',
    'region_code': 350725,
    'parent_code': 350700
  },
  {
    'id': 1353,
    'region_name': '邵武市',
    'region_code': 350781,
    'parent_code': 350700
  },
  {
    'id': 1354,
    'region_name': '武夷山市',
    'region_code': 350782,
    'parent_code': 350700
  },
  {
    'id': 1355,
    'region_name': '建瓯市',
    'region_code': 350783,
    'parent_code': 350700
  },
  {
    'id': 1356,
    'region_name': '建阳市',
    'region_code': 350784,
    'parent_code': 350700
  },
  {
    'id': 1357,
    'region_name': '龙岩市',
    'region_code': 350800,
    'parent_code': 350000
  },
  {
    'id': 1358,
    'region_name': '市辖区',
    'region_code': 350801,
    'parent_code': 350800
  },
  {
    'id': 1359,
    'region_name': '新罗区',
    'region_code': 350802,
    'parent_code': 350800
  },
  {
    'id': 1360,
    'region_name': '长汀县',
    'region_code': 350821,
    'parent_code': 350800
  },
  {
    'id': 1361,
    'region_name': '永定县',
    'region_code': 350822,
    'parent_code': 350800
  },
  {
    'id': 1362,
    'region_name': '上杭县',
    'region_code': 350823,
    'parent_code': 350800
  },
  {
    'id': 1363,
    'region_name': '武平县',
    'region_code': 350824,
    'parent_code': 350800
  },
  {
    'id': 1364,
    'region_name': '连城县',
    'region_code': 350825,
    'parent_code': 350800
  },
  {
    'id': 1365,
    'region_name': '漳平市',
    'region_code': 350881,
    'parent_code': 350800
  },
  {
    'id': 1366,
    'region_name': '宁德市',
    'region_code': 350900,
    'parent_code': 350000
  },
  {
    'id': 1367,
    'region_name': '市辖区',
    'region_code': 350901,
    'parent_code': 350900
  },
  {
    'id': 1368,
    'region_name': '蕉城区',
    'region_code': 350902,
    'parent_code': 350900
  },
  {
    'id': 1369,
    'region_name': '霞浦县',
    'region_code': 350921,
    'parent_code': 350900
  },
  {
    'id': 1370,
    'region_name': '古田县',
    'region_code': 350922,
    'parent_code': 350900
  },
  {
    'id': 1371,
    'region_name': '屏南县',
    'region_code': 350923,
    'parent_code': 350900
  },
  {
    'id': 1372,
    'region_name': '寿宁县',
    'region_code': 350924,
    'parent_code': 350900
  },
  {
    'id': 1373,
    'region_name': '周宁县',
    'region_code': 350925,
    'parent_code': 350900
  },
  {
    'id': 1374,
    'region_name': '柘荣县',
    'region_code': 350926,
    'parent_code': 350900
  },
  {
    'id': 1375,
    'region_name': '福安市',
    'region_code': 350981,
    'parent_code': 350900
  },
  {
    'id': 1376,
    'region_name': '福鼎市',
    'region_code': 350982,
    'parent_code': 350900
  },
  {
    'id': 1377,
    'region_name': '江西省',
    'region_code': 360000,
    'parent_code': 0
  },
  {
    'id': 1378,
    'region_name': '南昌市',
    'region_code': 360100,
    'parent_code': 360000
  },
  {
    'id': 1379,
    'region_name': '市辖区',
    'region_code': 360101,
    'parent_code': 360100
  },
  {
    'id': 1380,
    'region_name': '东湖区',
    'region_code': 360102,
    'parent_code': 360100
  },
  {
    'id': 1381,
    'region_name': '西湖区',
    'region_code': 360103,
    'parent_code': 360100
  },
  {
    'id': 1382,
    'region_name': '青云谱区',
    'region_code': 360104,
    'parent_code': 360100
  },
  {
    'id': 1383,
    'region_name': '湾里区',
    'region_code': 360105,
    'parent_code': 360100
  },
  {
    'id': 1384,
    'region_name': '青山湖区',
    'region_code': 360111,
    'parent_code': 360100
  },
  {
    'id': 1385,
    'region_name': '南昌县',
    'region_code': 360121,
    'parent_code': 360100
  },
  {
    'id': 1386,
    'region_name': '新建县',
    'region_code': 360122,
    'parent_code': 360100
  },
  {
    'id': 1387,
    'region_name': '安义县',
    'region_code': 360123,
    'parent_code': 360100
  },
  {
    'id': 1388,
    'region_name': '进贤县',
    'region_code': 360124,
    'parent_code': 360100
  },
  {
    'id': 1389,
    'region_name': '景德镇市',
    'region_code': 360200,
    'parent_code': 360000
  },
  {
    'id': 1390,
    'region_name': '市辖区',
    'region_code': 360201,
    'parent_code': 360200
  },
  {
    'id': 1391,
    'region_name': '昌江区',
    'region_code': 360202,
    'parent_code': 360200
  },
  {
    'id': 1392,
    'region_name': '珠山区',
    'region_code': 360203,
    'parent_code': 360200
  },
  {
    'id': 1393,
    'region_name': '浮梁县',
    'region_code': 360222,
    'parent_code': 360200
  },
  {
    'id': 1394,
    'region_name': '乐平市',
    'region_code': 360281,
    'parent_code': 360200
  },
  {
    'id': 1395,
    'region_name': '萍乡市',
    'region_code': 360300,
    'parent_code': 360000
  },
  {
    'id': 1396,
    'region_name': '市辖区',
    'region_code': 360301,
    'parent_code': 360300
  },
  {
    'id': 1397,
    'region_name': '安源区',
    'region_code': 360302,
    'parent_code': 360300
  },
  {
    'id': 1398,
    'region_name': '湘东区',
    'region_code': 360313,
    'parent_code': 360300
  },
  {
    'id': 1399,
    'region_name': '莲花县',
    'region_code': 360321,
    'parent_code': 360300
  },
  {
    'id': 1400,
    'region_name': '上栗县',
    'region_code': 360322,
    'parent_code': 360300
  },
  {
    'id': 1401,
    'region_name': '芦溪县',
    'region_code': 360323,
    'parent_code': 360300
  },
  {
    'id': 1402,
    'region_name': '九江市',
    'region_code': 360400,
    'parent_code': 360000
  },
  {
    'id': 1403,
    'region_name': '市辖区',
    'region_code': 360401,
    'parent_code': 360400
  },
  {
    'id': 1404,
    'region_name': '庐山区',
    'region_code': 360402,
    'parent_code': 360400
  },
  {
    'id': 1405,
    'region_name': '浔阳区',
    'region_code': 360403,
    'parent_code': 360400
  },
  {
    'id': 1406,
    'region_name': '九江县',
    'region_code': 360421,
    'parent_code': 360400
  },
  {
    'id': 1407,
    'region_name': '武宁县',
    'region_code': 360423,
    'parent_code': 360400
  },
  {
    'id': 1408,
    'region_name': '修水县',
    'region_code': 360424,
    'parent_code': 360400
  },
  {
    'id': 1409,
    'region_name': '永修县',
    'region_code': 360425,
    'parent_code': 360400
  },
  {
    'id': 1410,
    'region_name': '德安县',
    'region_code': 360426,
    'parent_code': 360400
  },
  {
    'id': 1411,
    'region_name': '星子县',
    'region_code': 360427,
    'parent_code': 360400
  },
  {
    'id': 1412,
    'region_name': '都昌县',
    'region_code': 360428,
    'parent_code': 360400
  },
  {
    'id': 1413,
    'region_name': '湖口县',
    'region_code': 360429,
    'parent_code': 360400
  },
  {
    'id': 1414,
    'region_name': '彭泽县',
    'region_code': 360430,
    'parent_code': 360400
  },
  {
    'id': 1415,
    'region_name': '瑞昌市',
    'region_code': 360481,
    'parent_code': 360400
  },
  {
    'id': 1416,
    'region_name': '新余市',
    'region_code': 360500,
    'parent_code': 360000
  },
  {
    'id': 1417,
    'region_name': '市辖区',
    'region_code': 360501,
    'parent_code': 360500
  },
  {
    'id': 1418,
    'region_name': '渝水区',
    'region_code': 360502,
    'parent_code': 360500
  },
  {
    'id': 1419,
    'region_name': '分宜县',
    'region_code': 360521,
    'parent_code': 360500
  },
  {
    'id': 1420,
    'region_name': '鹰潭市',
    'region_code': 360600,
    'parent_code': 360000
  },
  {
    'id': 1421,
    'region_name': '市辖区',
    'region_code': 360601,
    'parent_code': 360600
  },
  {
    'id': 1422,
    'region_name': '月湖区',
    'region_code': 360602,
    'parent_code': 360600
  },
  {
    'id': 1423,
    'region_name': '余江县',
    'region_code': 360622,
    'parent_code': 360600
  },
  {
    'id': 1424,
    'region_name': '贵溪市',
    'region_code': 360681,
    'parent_code': 360600
  },
  {
    'id': 1425,
    'region_name': '赣州市',
    'region_code': 360700,
    'parent_code': 360000
  },
  {
    'id': 1426,
    'region_name': '市辖区',
    'region_code': 360701,
    'parent_code': 360700
  },
  {
    'id': 1427,
    'region_name': '章贡区',
    'region_code': 360702,
    'parent_code': 360700
  },
  {
    'id': 1428,
    'region_name': '赣县',
    'region_code': 360721,
    'parent_code': 360700
  },
  {
    'id': 1429,
    'region_name': '信丰县',
    'region_code': 360722,
    'parent_code': 360700
  },
  {
    'id': 1430,
    'region_name': '大余县',
    'region_code': 360723,
    'parent_code': 360700
  },
  {
    'id': 1431,
    'region_name': '上犹县',
    'region_code': 360724,
    'parent_code': 360700
  },
  {
    'id': 1432,
    'region_name': '崇义县',
    'region_code': 360725,
    'parent_code': 360700
  },
  {
    'id': 1433,
    'region_name': '安远县',
    'region_code': 360726,
    'parent_code': 360700
  },
  {
    'id': 1434,
    'region_name': '龙南县',
    'region_code': 360727,
    'parent_code': 360700
  },
  {
    'id': 1435,
    'region_name': '定南县',
    'region_code': 360728,
    'parent_code': 360700
  },
  {
    'id': 1436,
    'region_name': '全南县',
    'region_code': 360729,
    'parent_code': 360700
  },
  {
    'id': 1437,
    'region_name': '宁都县',
    'region_code': 360730,
    'parent_code': 360700
  },
  {
    'id': 1438,
    'region_name': '于都县',
    'region_code': 360731,
    'parent_code': 360700
  },
  {
    'id': 1439,
    'region_name': '兴国县',
    'region_code': 360732,
    'parent_code': 360700
  },
  {
    'id': 1440,
    'region_name': '会昌县',
    'region_code': 360733,
    'parent_code': 360700
  },
  {
    'id': 1441,
    'region_name': '寻乌县',
    'region_code': 360734,
    'parent_code': 360700
  },
  {
    'id': 1442,
    'region_name': '石城县',
    'region_code': 360735,
    'parent_code': 360700
  },
  {
    'id': 1443,
    'region_name': '瑞金市',
    'region_code': 360781,
    'parent_code': 360700
  },
  {
    'id': 1444,
    'region_name': '南康市',
    'region_code': 360782,
    'parent_code': null
  },
  {
    'id': 1445,
    'region_name': '吉安市',
    'region_code': 360800,
    'parent_code': 360000
  },
  {
    'id': 1446,
    'region_name': '市辖区',
    'region_code': 360801,
    'parent_code': 360800
  },
  {
    'id': 1447,
    'region_name': '吉州区',
    'region_code': 360802,
    'parent_code': 360800
  },
  {
    'id': 1448,
    'region_name': '青原区',
    'region_code': 360803,
    'parent_code': 360800
  },
  {
    'id': 1449,
    'region_name': '吉安县',
    'region_code': 360821,
    'parent_code': 360800
  },
  {
    'id': 1450,
    'region_name': '吉水县',
    'region_code': 360822,
    'parent_code': 360800
  },
  {
    'id': 1451,
    'region_name': '峡江县',
    'region_code': 360823,
    'parent_code': 360800
  },
  {
    'id': 1452,
    'region_name': '新干县',
    'region_code': 360824,
    'parent_code': 360800
  },
  {
    'id': 1453,
    'region_name': '永丰县',
    'region_code': 360825,
    'parent_code': 360800
  },
  {
    'id': 1454,
    'region_name': '泰和县',
    'region_code': 360826,
    'parent_code': 360800
  },
  {
    'id': 1455,
    'region_name': '遂川县',
    'region_code': 360827,
    'parent_code': 360800
  },
  {
    'id': 1456,
    'region_name': '万安县',
    'region_code': 360828,
    'parent_code': 360800
  },
  {
    'id': 1457,
    'region_name': '安福县',
    'region_code': 360829,
    'parent_code': 360800
  },
  {
    'id': 1458,
    'region_name': '永新县',
    'region_code': 360830,
    'parent_code': 360800
  },
  {
    'id': 1459,
    'region_name': '井冈山市',
    'region_code': 360881,
    'parent_code': 360800
  },
  {
    'id': 1460,
    'region_name': '宜春市',
    'region_code': 360900,
    'parent_code': 360000
  },
  {
    'id': 1461,
    'region_name': '市辖区',
    'region_code': 360901,
    'parent_code': 360900
  },
  {
    'id': 1462,
    'region_name': '袁州区',
    'region_code': 360902,
    'parent_code': 360900
  },
  {
    'id': 1463,
    'region_name': '奉新县',
    'region_code': 360921,
    'parent_code': 360900
  },
  {
    'id': 1464,
    'region_name': '万载县',
    'region_code': 360922,
    'parent_code': 360900
  },
  {
    'id': 1465,
    'region_name': '上高县',
    'region_code': 360923,
    'parent_code': 360900
  },
  {
    'id': 1466,
    'region_name': '宜丰县',
    'region_code': 360924,
    'parent_code': 360900
  },
  {
    'id': 1467,
    'region_name': '靖安县',
    'region_code': 360925,
    'parent_code': 360900
  },
  {
    'id': 1468,
    'region_name': '铜鼓县',
    'region_code': 360926,
    'parent_code': 360900
  },
  {
    'id': 1469,
    'region_name': '丰城市',
    'region_code': 360981,
    'parent_code': 360900
  },
  {
    'id': 1470,
    'region_name': '樟树市',
    'region_code': 360982,
    'parent_code': 360900
  },
  {
    'id': 1471,
    'region_name': '高安市',
    'region_code': 360983,
    'parent_code': 360900
  },
  {
    'id': 1472,
    'region_name': '抚州市',
    'region_code': 361000,
    'parent_code': 360000
  },
  {
    'id': 1473,
    'region_name': '市辖区',
    'region_code': 361001,
    'parent_code': 361000
  },
  {
    'id': 1474,
    'region_name': '临川区',
    'region_code': 361002,
    'parent_code': 361000
  },
  {
    'id': 1475,
    'region_name': '南城县',
    'region_code': 361021,
    'parent_code': 361000
  },
  {
    'id': 1476,
    'region_name': '黎川县',
    'region_code': 361022,
    'parent_code': 361000
  },
  {
    'id': 1477,
    'region_name': '南丰县',
    'region_code': 361023,
    'parent_code': 361000
  },
  {
    'id': 1478,
    'region_name': '崇仁县',
    'region_code': 361024,
    'parent_code': 361000
  },
  {
    'id': 1479,
    'region_name': '乐安县',
    'region_code': 361025,
    'parent_code': 361000
  },
  {
    'id': 1480,
    'region_name': '宜黄县',
    'region_code': 361026,
    'parent_code': 361000
  },
  {
    'id': 1481,
    'region_name': '金溪县',
    'region_code': 361027,
    'parent_code': 361000
  },
  {
    'id': 1482,
    'region_name': '资溪县',
    'region_code': 361028,
    'parent_code': 361000
  },
  {
    'id': 1483,
    'region_name': '东乡县',
    'region_code': 361029,
    'parent_code': 361000
  },
  {
    'id': 1484,
    'region_name': '广昌县',
    'region_code': 361030,
    'parent_code': 361000
  },
  {
    'id': 1485,
    'region_name': '上饶市',
    'region_code': 361100,
    'parent_code': 360000
  },
  {
    'id': 1486,
    'region_name': '市辖区',
    'region_code': 361101,
    'parent_code': 361100
  },
  {
    'id': 1487,
    'region_name': '信州区',
    'region_code': 361102,
    'parent_code': 361100
  },
  {
    'id': 1488,
    'region_name': '上饶县',
    'region_code': 361121,
    'parent_code': 361100
  },
  {
    'id': 1489,
    'region_name': '广丰县',
    'region_code': 361122,
    'parent_code': 361100
  },
  {
    'id': 1490,
    'region_name': '玉山县',
    'region_code': 361123,
    'parent_code': 361100
  },
  {
    'id': 1491,
    'region_name': '铅山县',
    'region_code': 361124,
    'parent_code': 361100
  },
  {
    'id': 1492,
    'region_name': '横峰县',
    'region_code': 361125,
    'parent_code': 361100
  },
  {
    'id': 1493,
    'region_name': '弋阳县',
    'region_code': 361126,
    'parent_code': 361100
  },
  {
    'id': 1494,
    'region_name': '余干县',
    'region_code': 361127,
    'parent_code': 361100
  },
  {
    'id': 1495,
    'region_name': '鄱阳县',
    'region_code': 361128,
    'parent_code': 361100
  },
  {
    'id': 1496,
    'region_name': '万年县',
    'region_code': 361129,
    'parent_code': 361100
  },
  {
    'id': 1497,
    'region_name': '婺源县',
    'region_code': 361130,
    'parent_code': 361100
  },
  {
    'id': 1498,
    'region_name': '德兴市',
    'region_code': 361181,
    'parent_code': 361100
  },
  {
    'id': 1499,
    'region_name': '山东省',
    'region_code': 370000,
    'parent_code': 0
  },
  {
    'id': 1500,
    'region_name': '济南市',
    'region_code': 370100,
    'parent_code': 370000
  },
  {
    'id': 1501,
    'region_name': '市辖区',
    'region_code': 370101,
    'parent_code': 370100
  },
  {
    'id': 1502,
    'region_name': '历下区',
    'region_code': 370102,
    'parent_code': 370100
  },
  {
    'id': 1503,
    'region_name': '市中区',
    'region_code': 370103,
    'parent_code': 370100
  },
  {
    'id': 1504,
    'region_name': '槐荫区',
    'region_code': 370104,
    'parent_code': 370100
  },
  {
    'id': 1505,
    'region_name': '天桥区',
    'region_code': 370105,
    'parent_code': 370100
  },
  {
    'id': 1506,
    'region_name': '历城区',
    'region_code': 370112,
    'parent_code': 370100
  },
  {
    'id': 1507,
    'region_name': '长清区',
    'region_code': 370113,
    'parent_code': 370100
  },
  {
    'id': 1508,
    'region_name': '平阴县',
    'region_code': 370124,
    'parent_code': 370100
  },
  {
    'id': 1509,
    'region_name': '济阳县',
    'region_code': 370125,
    'parent_code': 370100
  },
  {
    'id': 1510,
    'region_name': '商河县',
    'region_code': 370126,
    'parent_code': 370100
  },
  {
    'id': 1511,
    'region_name': '章丘市',
    'region_code': 370181,
    'parent_code': 370100
  },
  {
    'id': 1512,
    'region_name': '青岛市',
    'region_code': 370200,
    'parent_code': 370000
  },
  {
    'id': 1513,
    'region_name': '市辖区',
    'region_code': 370201,
    'parent_code': 370200
  },
  {
    'id': 1514,
    'region_name': '市南区',
    'region_code': 370202,
    'parent_code': 370200
  },
  {
    'id': 1515,
    'region_name': '市北区',
    'region_code': 370203,
    'parent_code': 370200
  },
  {
    'id': 1516,
    'region_name': '四方区',
    'region_code': 370205,
    'parent_code': null
  },
  {
    'id': 1517,
    'region_name': '黄岛区',
    'region_code': 370211,
    'parent_code': 370200
  },
  {
    'id': 1518,
    'region_name': '崂山区',
    'region_code': 370212,
    'parent_code': 370200
  },
  {
    'id': 1519,
    'region_name': '李沧区',
    'region_code': 370213,
    'parent_code': 370200
  },
  {
    'id': 1520,
    'region_name': '城阳区',
    'region_code': 370214,
    'parent_code': 370200
  },
  {
    'id': 1521,
    'region_name': '胶州市',
    'region_code': 370281,
    'parent_code': 370200
  },
  {
    'id': 1522,
    'region_name': '即墨市',
    'region_code': 370282,
    'parent_code': 370200
  },
  {
    'id': 1523,
    'region_name': '平度市',
    'region_code': 370283,
    'parent_code': 370200
  },
  {
    'id': 1524,
    'region_name': '胶南市',
    'region_code': 370284,
    'parent_code': null
  },
  {
    'id': 1525,
    'region_name': '莱西市',
    'region_code': 370285,
    'parent_code': 370200
  },
  {
    'id': 1526,
    'region_name': '淄博市',
    'region_code': 370300,
    'parent_code': 370000
  },
  {
    'id': 1527,
    'region_name': '市辖区',
    'region_code': 370301,
    'parent_code': 370300
  },
  {
    'id': 1528,
    'region_name': '淄川区',
    'region_code': 370302,
    'parent_code': 370300
  },
  {
    'id': 1529,
    'region_name': '张店区',
    'region_code': 370303,
    'parent_code': 370300
  },
  {
    'id': 1530,
    'region_name': '博山区',
    'region_code': 370304,
    'parent_code': 370300
  },
  {
    'id': 1531,
    'region_name': '临淄区',
    'region_code': 370305,
    'parent_code': 370300
  },
  {
    'id': 1532,
    'region_name': '周村区',
    'region_code': 370306,
    'parent_code': 370300
  },
  {
    'id': 1533,
    'region_name': '桓台县',
    'region_code': 370321,
    'parent_code': 370300
  },
  {
    'id': 1534,
    'region_name': '高青县',
    'region_code': 370322,
    'parent_code': 370300
  },
  {
    'id': 1535,
    'region_name': '沂源县',
    'region_code': 370323,
    'parent_code': 370300
  },
  {
    'id': 1536,
    'region_name': '枣庄市',
    'region_code': 370400,
    'parent_code': 370000
  },
  {
    'id': 1537,
    'region_name': '市辖区',
    'region_code': 370401,
    'parent_code': 370400
  },
  {
    'id': 1538,
    'region_name': '市中区',
    'region_code': 370402,
    'parent_code': 370400
  },
  {
    'id': 1539,
    'region_name': '薛城区',
    'region_code': 370403,
    'parent_code': 370400
  },
  {
    'id': 1540,
    'region_name': '峄城区',
    'region_code': 370404,
    'parent_code': 370400
  },
  {
    'id': 1541,
    'region_name': '台儿庄区',
    'region_code': 370405,
    'parent_code': 370400
  },
  {
    'id': 1542,
    'region_name': '山亭区',
    'region_code': 370406,
    'parent_code': 370400
  },
  {
    'id': 1543,
    'region_name': '滕州市',
    'region_code': 370481,
    'parent_code': 370400
  },
  {
    'id': 1544,
    'region_name': '东营市',
    'region_code': 370500,
    'parent_code': 370000
  },
  {
    'id': 1545,
    'region_name': '市辖区',
    'region_code': 370501,
    'parent_code': 370500
  },
  {
    'id': 1546,
    'region_name': '东营区',
    'region_code': 370502,
    'parent_code': 370500
  },
  {
    'id': 1547,
    'region_name': '河口区',
    'region_code': 370503,
    'parent_code': 370500
  },
  {
    'id': 1548,
    'region_name': '垦利县',
    'region_code': 370521,
    'parent_code': 370500
  },
  {
    'id': 1549,
    'region_name': '利津县',
    'region_code': 370522,
    'parent_code': 370500
  },
  {
    'id': 1550,
    'region_name': '广饶县',
    'region_code': 370523,
    'parent_code': 370500
  },
  {
    'id': 1551,
    'region_name': '烟台市',
    'region_code': 370600,
    'parent_code': 370000
  },
  {
    'id': 1552,
    'region_name': '市辖区',
    'region_code': 370601,
    'parent_code': 370600
  },
  {
    'id': 1553,
    'region_name': '芝罘区',
    'region_code': 370602,
    'parent_code': 370600
  },
  {
    'id': 1554,
    'region_name': '福山区',
    'region_code': 370611,
    'parent_code': 370600
  },
  {
    'id': 1555,
    'region_name': '牟平区',
    'region_code': 370612,
    'parent_code': 370600
  },
  {
    'id': 1556,
    'region_name': '莱山区',
    'region_code': 370613,
    'parent_code': 370600
  },
  {
    'id': 1557,
    'region_name': '长岛县',
    'region_code': 370634,
    'parent_code': 370600
  },
  {
    'id': 1558,
    'region_name': '龙口市',
    'region_code': 370681,
    'parent_code': 370600
  },
  {
    'id': 1559,
    'region_name': '莱阳市',
    'region_code': 370682,
    'parent_code': 370600
  },
  {
    'id': 1560,
    'region_name': '莱州市',
    'region_code': 370683,
    'parent_code': 370600
  },
  {
    'id': 1561,
    'region_name': '蓬莱市',
    'region_code': 370684,
    'parent_code': 370600
  },
  {
    'id': 1562,
    'region_name': '招远市',
    'region_code': 370685,
    'parent_code': 370600
  },
  {
    'id': 1563,
    'region_name': '栖霞市',
    'region_code': 370686,
    'parent_code': 370600
  },
  {
    'id': 1564,
    'region_name': '海阳市',
    'region_code': 370687,
    'parent_code': 370600
  },
  {
    'id': 1565,
    'region_name': '潍坊市',
    'region_code': 370700,
    'parent_code': 370000
  },
  {
    'id': 1566,
    'region_name': '市辖区',
    'region_code': 370701,
    'parent_code': 370700
  },
  {
    'id': 1567,
    'region_name': '潍城区',
    'region_code': 370702,
    'parent_code': 370700
  },
  {
    'id': 1568,
    'region_name': '寒亭区',
    'region_code': 370703,
    'parent_code': 370700
  },
  {
    'id': 1569,
    'region_name': '坊子区',
    'region_code': 370704,
    'parent_code': 370700
  },
  {
    'id': 1570,
    'region_name': '奎文区',
    'region_code': 370705,
    'parent_code': 370700
  },
  {
    'id': 1571,
    'region_name': '临朐县',
    'region_code': 370724,
    'parent_code': 370700
  },
  {
    'id': 1572,
    'region_name': '昌乐县',
    'region_code': 370725,
    'parent_code': 370700
  },
  {
    'id': 1573,
    'region_name': '青州市',
    'region_code': 370781,
    'parent_code': 370700
  },
  {
    'id': 1574,
    'region_name': '诸城市',
    'region_code': 370782,
    'parent_code': 370700
  },
  {
    'id': 1575,
    'region_name': '寿光市',
    'region_code': 370783,
    'parent_code': 370700
  },
  {
    'id': 1576,
    'region_name': '安丘市',
    'region_code': 370784,
    'parent_code': 370700
  },
  {
    'id': 1577,
    'region_name': '高密市',
    'region_code': 370785,
    'parent_code': 370700
  },
  {
    'id': 1578,
    'region_name': '昌邑市',
    'region_code': 370786,
    'parent_code': 370700
  },
  {
    'id': 1579,
    'region_name': '济宁市',
    'region_code': 370800,
    'parent_code': 370000
  },
  {
    'id': 1580,
    'region_name': '市辖区',
    'region_code': 370801,
    'parent_code': 370800
  },
  {
    'id': 1581,
    'region_name': '市中区',
    'region_code': 370802,
    'parent_code': null
  },
  {
    'id': 1582,
    'region_name': '任城区',
    'region_code': 370811,
    'parent_code': 370800
  },
  {
    'id': 1583,
    'region_name': '微山县',
    'region_code': 370826,
    'parent_code': 370800
  },
  {
    'id': 1584,
    'region_name': '鱼台县',
    'region_code': 370827,
    'parent_code': 370800
  },
  {
    'id': 1585,
    'region_name': '金乡县',
    'region_code': 370828,
    'parent_code': 370800
  },
  {
    'id': 1586,
    'region_name': '嘉祥县',
    'region_code': 370829,
    'parent_code': 370800
  },
  {
    'id': 1587,
    'region_name': '汶上县',
    'region_code': 370830,
    'parent_code': 370800
  },
  {
    'id': 1588,
    'region_name': '泗水县',
    'region_code': 370831,
    'parent_code': 370800
  },
  {
    'id': 1589,
    'region_name': '梁山县',
    'region_code': 370832,
    'parent_code': 370800
  },
  {
    'id': 1590,
    'region_name': '曲阜市',
    'region_code': 370881,
    'parent_code': 370800
  },
  {
    'id': 1591,
    'region_name': '兖州市',
    'region_code': 370882,
    'parent_code': null
  },
  {
    'id': 1592,
    'region_name': '邹城市',
    'region_code': 370883,
    'parent_code': 370800
  },
  {
    'id': 1593,
    'region_name': '泰安市',
    'region_code': 370900,
    'parent_code': 370000
  },
  {
    'id': 1594,
    'region_name': '市辖区',
    'region_code': 370901,
    'parent_code': 370900
  },
  {
    'id': 1595,
    'region_name': '泰山区',
    'region_code': 370902,
    'parent_code': 370900
  },
  {
    'id': 1596,
    'region_name': '岱岳区',
    'region_code': 370903,
    'parent_code': null
  },
  {
    'id': 1597,
    'region_name': '宁阳县',
    'region_code': 370921,
    'parent_code': 370900
  },
  {
    'id': 1598,
    'region_name': '东平县',
    'region_code': 370923,
    'parent_code': 370900
  },
  {
    'id': 1599,
    'region_name': '新泰市',
    'region_code': 370982,
    'parent_code': 370900
  },
  {
    'id': 1600,
    'region_name': '肥城市',
    'region_code': 370983,
    'parent_code': 370900
  },
  {
    'id': 1601,
    'region_name': '威海市',
    'region_code': 371000,
    'parent_code': 370000
  },
  {
    'id': 1602,
    'region_name': '市辖区',
    'region_code': 371001,
    'parent_code': 371000
  },
  {
    'id': 1603,
    'region_name': '环翠区',
    'region_code': 371002,
    'parent_code': 371000
  },
  {
    'id': 1604,
    'region_name': '文登市',
    'region_code': 371081,
    'parent_code': null
  },
  {
    'id': 1605,
    'region_name': '荣成市',
    'region_code': 371082,
    'parent_code': 371000
  },
  {
    'id': 1606,
    'region_name': '乳山市',
    'region_code': 371083,
    'parent_code': 371000
  },
  {
    'id': 1607,
    'region_name': '日照市',
    'region_code': 371100,
    'parent_code': 370000
  },
  {
    'id': 1608,
    'region_name': '市辖区',
    'region_code': 371101,
    'parent_code': 371100
  },
  {
    'id': 1609,
    'region_name': '东港区',
    'region_code': 371102,
    'parent_code': 371100
  },
  {
    'id': 1610,
    'region_name': '五莲县',
    'region_code': 371121,
    'parent_code': 371100
  },
  {
    'id': 1611,
    'region_name': '莒县',
    'region_code': 371122,
    'parent_code': 371100
  },
  {
    'id': 1612,
    'region_name': '莱芜市',
    'region_code': 371200,
    'parent_code': 370000
  },
  {
    'id': 1613,
    'region_name': '市辖区',
    'region_code': 371201,
    'parent_code': 371200
  },
  {
    'id': 1614,
    'region_name': '莱城区',
    'region_code': 371202,
    'parent_code': 371200
  },
  {
    'id': 1615,
    'region_name': '钢城区',
    'region_code': 371203,
    'parent_code': 371200
  },
  {
    'id': 1616,
    'region_name': '临沂市',
    'region_code': 371300,
    'parent_code': 370000
  },
  {
    'id': 1617,
    'region_name': '市辖区',
    'region_code': 371301,
    'parent_code': 371300
  },
  {
    'id': 1618,
    'region_name': '兰山区',
    'region_code': 371302,
    'parent_code': 371300
  },
  {
    'id': 1619,
    'region_name': '罗庄区',
    'region_code': 371311,
    'parent_code': 371300
  },
  {
    'id': 1620,
    'region_name': '河东区',
    'region_code': 371312,
    'parent_code': 371300
  },
  {
    'id': 1621,
    'region_name': '沂南县',
    'region_code': 371321,
    'parent_code': 371300
  },
  {
    'id': 1622,
    'region_name': '郯城县',
    'region_code': 371322,
    'parent_code': 371300
  },
  {
    'id': 1623,
    'region_name': '沂水县',
    'region_code': 371323,
    'parent_code': 371300
  },
  {
    'id': 1624,
    'region_name': '苍山县',
    'region_code': 371324,
    'parent_code': 371300
  },
  {
    'id': 1625,
    'region_name': '费县',
    'region_code': 371325,
    'parent_code': 371300
  },
  {
    'id': 1626,
    'region_name': '平邑县',
    'region_code': 371326,
    'parent_code': 371300
  },
  {
    'id': 1627,
    'region_name': '莒南县',
    'region_code': 371327,
    'parent_code': 371300
  },
  {
    'id': 1628,
    'region_name': '蒙阴县',
    'region_code': 371328,
    'parent_code': 371300
  },
  {
    'id': 1629,
    'region_name': '临沭县',
    'region_code': 371329,
    'parent_code': 371300
  },
  {
    'id': 1630,
    'region_name': '德州市',
    'region_code': 371400,
    'parent_code': 370000
  },
  {
    'id': 1631,
    'region_name': '市辖区',
    'region_code': 371401,
    'parent_code': 371400
  },
  {
    'id': 1632,
    'region_name': '德城区',
    'region_code': 371402,
    'parent_code': 371400
  },
  {
    'id': 1633,
    'region_name': '陵县',
    'region_code': 371421,
    'parent_code': null
  },
  {
    'id': 1634,
    'region_name': '宁津县',
    'region_code': 371422,
    'parent_code': 371400
  },
  {
    'id': 1635,
    'region_name': '庆云县',
    'region_code': 371423,
    'parent_code': 371400
  },
  {
    'id': 1636,
    'region_name': '临邑县',
    'region_code': 371424,
    'parent_code': 371400
  },
  {
    'id': 1637,
    'region_name': '齐河县',
    'region_code': 371425,
    'parent_code': 371400
  },
  {
    'id': 1638,
    'region_name': '平原县',
    'region_code': 371426,
    'parent_code': 371400
  },
  {
    'id': 1639,
    'region_name': '夏津县',
    'region_code': 371427,
    'parent_code': 371400
  },
  {
    'id': 1640,
    'region_name': '武城县',
    'region_code': 371428,
    'parent_code': 371400
  },
  {
    'id': 1641,
    'region_name': '乐陵市',
    'region_code': 371481,
    'parent_code': 371400
  },
  {
    'id': 1642,
    'region_name': '禹城市',
    'region_code': 371482,
    'parent_code': 371400
  },
  {
    'id': 1643,
    'region_name': '聊城市',
    'region_code': 371500,
    'parent_code': 370000
  },
  {
    'id': 1644,
    'region_name': '市辖区',
    'region_code': 371501,
    'parent_code': 371500
  },
  {
    'id': 1645,
    'region_name': '东昌府区',
    'region_code': 371502,
    'parent_code': 371500
  },
  {
    'id': 1646,
    'region_name': '阳谷县',
    'region_code': 371521,
    'parent_code': 371500
  },
  {
    'id': 1647,
    'region_name': '莘县',
    'region_code': 371522,
    'parent_code': 371500
  },
  {
    'id': 1648,
    'region_name': '茌平县',
    'region_code': 371523,
    'parent_code': 371500
  },
  {
    'id': 1649,
    'region_name': '东阿县',
    'region_code': 371524,
    'parent_code': 371500
  },
  {
    'id': 1650,
    'region_name': '冠县',
    'region_code': 371525,
    'parent_code': 371500
  },
  {
    'id': 1651,
    'region_name': '高唐县',
    'region_code': 371526,
    'parent_code': 371500
  },
  {
    'id': 1652,
    'region_name': '临清市',
    'region_code': 371581,
    'parent_code': 371500
  },
  {
    'id': 1653,
    'region_name': '滨州市',
    'region_code': 371600,
    'parent_code': 370000
  },
  {
    'id': 1654,
    'region_name': '市辖区',
    'region_code': 371601,
    'parent_code': 371600
  },
  {
    'id': 1655,
    'region_name': '滨城区',
    'region_code': 371602,
    'parent_code': 371600
  },
  {
    'id': 1656,
    'region_name': '惠民县',
    'region_code': 371621,
    'parent_code': 371600
  },
  {
    'id': 1657,
    'region_name': '阳信县',
    'region_code': 371622,
    'parent_code': 371600
  },
  {
    'id': 1658,
    'region_name': '无棣县',
    'region_code': 371623,
    'parent_code': 371600
  },
  {
    'id': 1659,
    'region_name': '沾化县',
    'region_code': 371624,
    'parent_code': null
  },
  {
    'id': 1660,
    'region_name': '博兴县',
    'region_code': 371625,
    'parent_code': 371600
  },
  {
    'id': 1661,
    'region_name': '邹平县',
    'region_code': 371626,
    'parent_code': 371600
  },
  {
    'id': 1662,
    'region_name': '荷泽市',
    'region_code': 371700,
    'parent_code': 370000
  },
  {
    'id': 1663,
    'region_name': '市辖区',
    'region_code': 371701,
    'parent_code': 371700
  },
  {
    'id': 1664,
    'region_name': '牡丹区',
    'region_code': 371702,
    'parent_code': 371700
  },
  {
    'id': 1665,
    'region_name': '曹县',
    'region_code': 371721,
    'parent_code': 371700
  },
  {
    'id': 1666,
    'region_name': '单县',
    'region_code': 371722,
    'parent_code': 371700
  },
  {
    'id': 1667,
    'region_name': '成武县',
    'region_code': 371723,
    'parent_code': 371700
  },
  {
    'id': 1668,
    'region_name': '巨野县',
    'region_code': 371724,
    'parent_code': 371700
  },
  {
    'id': 1669,
    'region_name': '郓城县',
    'region_code': 371725,
    'parent_code': 371700
  },
  {
    'id': 1670,
    'region_name': '鄄城县',
    'region_code': 371726,
    'parent_code': 371700
  },
  {
    'id': 1671,
    'region_name': '定陶县',
    'region_code': 371727,
    'parent_code': 371700
  },
  {
    'id': 1672,
    'region_name': '东明县',
    'region_code': 371728,
    'parent_code': 371700
  },
  {
    'id': 1673,
    'region_name': '河南省',
    'region_code': 410000,
    'parent_code': 0
  },
  {
    'id': 1674,
    'region_name': '郑州市',
    'region_code': 410100,
    'parent_code': 410000
  },
  {
    'id': 1675,
    'region_name': '市辖区',
    'region_code': 410101,
    'parent_code': 410100
  },
  {
    'id': 1676,
    'region_name': '中原区',
    'region_code': 410102,
    'parent_code': 410100
  },
  {
    'id': 1677,
    'region_name': '二七区',
    'region_code': 410103,
    'parent_code': 410100
  },
  {
    'id': 1678,
    'region_name': '管城回族区',
    'region_code': 410104,
    'parent_code': 410100
  },
  {
    'id': 1679,
    'region_name': '金水区',
    'region_code': 410105,
    'parent_code': 410100
  },
  {
    'id': 1680,
    'region_name': '上街区',
    'region_code': 410106,
    'parent_code': 410100
  },
  {
    'id': 1681,
    'region_name': '邙山区',
    'region_code': 410108,
    'parent_code': 410100
  },
  {
    'id': 1682,
    'region_name': '中牟县',
    'region_code': 410122,
    'parent_code': 410100
  },
  {
    'id': 1683,
    'region_name': '巩义市',
    'region_code': 410181,
    'parent_code': 410100
  },
  {
    'id': 1684,
    'region_name': '荥阳市',
    'region_code': 410182,
    'parent_code': 410100
  },
  {
    'id': 1685,
    'region_name': '新密市',
    'region_code': 410183,
    'parent_code': 410100
  },
  {
    'id': 1686,
    'region_name': '新郑市',
    'region_code': 410184,
    'parent_code': 410100
  },
  {
    'id': 1687,
    'region_name': '登封市',
    'region_code': 410185,
    'parent_code': 410100
  },
  {
    'id': 1688,
    'region_name': '开封市',
    'region_code': 410200,
    'parent_code': 410000
  },
  {
    'id': 1689,
    'region_name': '市辖区',
    'region_code': 410201,
    'parent_code': 410200
  },
  {
    'id': 1690,
    'region_name': '龙亭区',
    'region_code': 410202,
    'parent_code': 410200
  },
  {
    'id': 1691,
    'region_name': '顺河回族区',
    'region_code': 410203,
    'parent_code': 410200
  },
  {
    'id': 1692,
    'region_name': '鼓楼区',
    'region_code': 410204,
    'parent_code': 410200
  },
  {
    'id': 1693,
    'region_name': '南关区',
    'region_code': 410205,
    'parent_code': 410200
  },
  {
    'id': 1694,
    'region_name': '郊区',
    'region_code': 410211,
    'parent_code': 410200
  },
  {
    'id': 1695,
    'region_name': '杞县',
    'region_code': 410221,
    'parent_code': 410200
  },
  {
    'id': 1696,
    'region_name': '通许县',
    'region_code': 410222,
    'parent_code': 410200
  },
  {
    'id': 1697,
    'region_name': '尉氏县',
    'region_code': 410223,
    'parent_code': 410200
  },
  {
    'id': 1698,
    'region_name': '开封县',
    'region_code': 410224,
    'parent_code': 410200
  },
  {
    'id': 1699,
    'region_name': '兰考县',
    'region_code': 410225,
    'parent_code': 410200
  },
  {
    'id': 1700,
    'region_name': '洛阳市',
    'region_code': 410300,
    'parent_code': 410000
  },
  {
    'id': 1701,
    'region_name': '市辖区',
    'region_code': 410301,
    'parent_code': 410300
  },
  {
    'id': 1702,
    'region_name': '老城区',
    'region_code': 410302,
    'parent_code': 410300
  },
  {
    'id': 1703,
    'region_name': '西工区',
    'region_code': 410303,
    'parent_code': 410300
  },
  {
    'id': 1704,
    'region_name': '廛河回族区',
    'region_code': 410304,
    'parent_code': 410300
  },
  {
    'id': 1705,
    'region_name': '涧西区',
    'region_code': 410305,
    'parent_code': 410300
  },
  {
    'id': 1706,
    'region_name': '吉利区',
    'region_code': 410306,
    'parent_code': 410300
  },
  {
    'id': 1707,
    'region_name': '洛龙区',
    'region_code': 410307,
    'parent_code': null
  },
  {
    'id': 1708,
    'region_name': '孟津县',
    'region_code': 410322,
    'parent_code': 410300
  },
  {
    'id': 1709,
    'region_name': '新安县',
    'region_code': 410323,
    'parent_code': 410300
  },
  {
    'id': 1710,
    'region_name': '栾川县',
    'region_code': 410324,
    'parent_code': 410300
  },
  {
    'id': 1711,
    'region_name': '嵩县',
    'region_code': 410325,
    'parent_code': 410300
  },
  {
    'id': 1712,
    'region_name': '汝阳县',
    'region_code': 410326,
    'parent_code': 410300
  },
  {
    'id': 1713,
    'region_name': '宜阳县',
    'region_code': 410327,
    'parent_code': 410300
  },
  {
    'id': 1714,
    'region_name': '洛宁县',
    'region_code': 410328,
    'parent_code': 410300
  },
  {
    'id': 1715,
    'region_name': '伊川县',
    'region_code': 410329,
    'parent_code': 410300
  },
  {
    'id': 1716,
    'region_name': '偃师市',
    'region_code': 410381,
    'parent_code': 410300
  },
  {
    'id': 1717,
    'region_name': '平顶山市',
    'region_code': 410400,
    'parent_code': 410000
  },
  {
    'id': 1718,
    'region_name': '市辖区',
    'region_code': 410401,
    'parent_code': 410400
  },
  {
    'id': 1719,
    'region_name': '新华区',
    'region_code': 410402,
    'parent_code': 410400
  },
  {
    'id': 1720,
    'region_name': '卫东区',
    'region_code': 410403,
    'parent_code': 410400
  },
  {
    'id': 1721,
    'region_name': '石龙区',
    'region_code': 410404,
    'parent_code': 410400
  },
  {
    'id': 1722,
    'region_name': '湛河区',
    'region_code': 410411,
    'parent_code': 410400
  },
  {
    'id': 1723,
    'region_name': '宝丰县',
    'region_code': 410421,
    'parent_code': 410400
  },
  {
    'id': 1724,
    'region_name': '叶县',
    'region_code': 410422,
    'parent_code': 410400
  },
  {
    'id': 1725,
    'region_name': '鲁山县',
    'region_code': 410423,
    'parent_code': 410400
  },
  {
    'id': 1726,
    'region_name': '郏县',
    'region_code': 410425,
    'parent_code': 410400
  },
  {
    'id': 1727,
    'region_name': '舞钢市',
    'region_code': 410481,
    'parent_code': 410400
  },
  {
    'id': 1728,
    'region_name': '汝州市',
    'region_code': 410482,
    'parent_code': 410400
  },
  {
    'id': 1729,
    'region_name': '安阳市',
    'region_code': 410500,
    'parent_code': 410000
  },
  {
    'id': 1730,
    'region_name': '市辖区',
    'region_code': 410501,
    'parent_code': 410500
  },
  {
    'id': 1731,
    'region_name': '文峰区',
    'region_code': 410502,
    'parent_code': 410500
  },
  {
    'id': 1732,
    'region_name': '北关区',
    'region_code': 410503,
    'parent_code': 410500
  },
  {
    'id': 1733,
    'region_name': '殷都区',
    'region_code': 410505,
    'parent_code': 410500
  },
  {
    'id': 1734,
    'region_name': '龙安区',
    'region_code': 410506,
    'parent_code': 410500
  },
  {
    'id': 1735,
    'region_name': '安阳县',
    'region_code': 410522,
    'parent_code': 410500
  },
  {
    'id': 1736,
    'region_name': '汤阴县',
    'region_code': 410523,
    'parent_code': 410500
  },
  {
    'id': 1737,
    'region_name': '滑县',
    'region_code': 410526,
    'parent_code': 410500
  },
  {
    'id': 1738,
    'region_name': '内黄县',
    'region_code': 410527,
    'parent_code': 410500
  },
  {
    'id': 1739,
    'region_name': '林州市',
    'region_code': 410581,
    'parent_code': 410500
  },
  {
    'id': 1740,
    'region_name': '鹤壁市',
    'region_code': 410600,
    'parent_code': 410000
  },
  {
    'id': 1741,
    'region_name': '市辖区',
    'region_code': 410601,
    'parent_code': 410600
  },
  {
    'id': 1742,
    'region_name': '鹤山区',
    'region_code': 410602,
    'parent_code': 410600
  },
  {
    'id': 1743,
    'region_name': '山城区',
    'region_code': 410603,
    'parent_code': 410600
  },
  {
    'id': 1744,
    'region_name': '淇滨区',
    'region_code': 410611,
    'parent_code': 410600
  },
  {
    'id': 1745,
    'region_name': '浚县',
    'region_code': 410621,
    'parent_code': 410600
  },
  {
    'id': 1746,
    'region_name': '淇县',
    'region_code': 410622,
    'parent_code': 410600
  },
  {
    'id': 1747,
    'region_name': '新乡市',
    'region_code': 410700,
    'parent_code': 410000
  },
  {
    'id': 1748,
    'region_name': '市辖区',
    'region_code': 410701,
    'parent_code': 410700
  },
  {
    'id': 1749,
    'region_name': '红旗区',
    'region_code': 410702,
    'parent_code': 410700
  },
  {
    'id': 1750,
    'region_name': '卫滨区',
    'region_code': 410703,
    'parent_code': 410700
  },
  {
    'id': 1751,
    'region_name': '凤泉区',
    'region_code': 410704,
    'parent_code': 410700
  },
  {
    'id': 1752,
    'region_name': '牧野区',
    'region_code': 410711,
    'parent_code': 410700
  },
  {
    'id': 1753,
    'region_name': '新乡县',
    'region_code': 410721,
    'parent_code': 410700
  },
  {
    'id': 1754,
    'region_name': '获嘉县',
    'region_code': 410724,
    'parent_code': 410700
  },
  {
    'id': 1755,
    'region_name': '原阳县',
    'region_code': 410725,
    'parent_code': 410700
  },
  {
    'id': 1756,
    'region_name': '延津县',
    'region_code': 410726,
    'parent_code': 410700
  },
  {
    'id': 1757,
    'region_name': '封丘县',
    'region_code': 410727,
    'parent_code': 410700
  },
  {
    'id': 1758,
    'region_name': '长垣县',
    'region_code': 410728,
    'parent_code': 410700
  },
  {
    'id': 1759,
    'region_name': '卫辉市',
    'region_code': 410781,
    'parent_code': 410700
  },
  {
    'id': 1760,
    'region_name': '辉县市',
    'region_code': 410782,
    'parent_code': 410700
  },
  {
    'id': 1761,
    'region_name': '焦作市',
    'region_code': 410800,
    'parent_code': 410000
  },
  {
    'id': 1762,
    'region_name': '市辖区',
    'region_code': 410801,
    'parent_code': 410800
  },
  {
    'id': 1763,
    'region_name': '解放区',
    'region_code': 410802,
    'parent_code': 410800
  },
  {
    'id': 1764,
    'region_name': '中站区',
    'region_code': 410803,
    'parent_code': 410800
  },
  {
    'id': 1765,
    'region_name': '马村区',
    'region_code': 410804,
    'parent_code': 410800
  },
  {
    'id': 1766,
    'region_name': '山阳区',
    'region_code': 410811,
    'parent_code': 410800
  },
  {
    'id': 1767,
    'region_name': '修武县',
    'region_code': 410821,
    'parent_code': 410800
  },
  {
    'id': 1768,
    'region_name': '博爱县',
    'region_code': 410822,
    'parent_code': 410800
  },
  {
    'id': 1769,
    'region_name': '武陟县',
    'region_code': 410823,
    'parent_code': 410800
  },
  {
    'id': 1770,
    'region_name': '温县',
    'region_code': 410825,
    'parent_code': 410800
  },
  {
    'id': 1771,
    'region_name': '济源市',
    'region_code': 410881,
    'parent_code': null
  },
  {
    'id': 1772,
    'region_name': '沁阳市',
    'region_code': 410882,
    'parent_code': 410800
  },
  {
    'id': 1773,
    'region_name': '孟州市',
    'region_code': 410883,
    'parent_code': 410800
  },
  {
    'id': 1774,
    'region_name': '濮阳市',
    'region_code': 410900,
    'parent_code': 410000
  },
  {
    'id': 1775,
    'region_name': '市辖区',
    'region_code': 410901,
    'parent_code': 410900
  },
  {
    'id': 1776,
    'region_name': '华龙区',
    'region_code': 410902,
    'parent_code': 410900
  },
  {
    'id': 1777,
    'region_name': '清丰县',
    'region_code': 410922,
    'parent_code': 410900
  },
  {
    'id': 1778,
    'region_name': '南乐县',
    'region_code': 410923,
    'parent_code': 410900
  },
  {
    'id': 1779,
    'region_name': '范县',
    'region_code': 410926,
    'parent_code': 410900
  },
  {
    'id': 1780,
    'region_name': '台前县',
    'region_code': 410927,
    'parent_code': 410900
  },
  {
    'id': 1781,
    'region_name': '濮阳县',
    'region_code': 410928,
    'parent_code': 410900
  },
  {
    'id': 1782,
    'region_name': '许昌市',
    'region_code': 411000,
    'parent_code': 410000
  },
  {
    'id': 1783,
    'region_name': '市辖区',
    'region_code': 411001,
    'parent_code': 411000
  },
  {
    'id': 1784,
    'region_name': '魏都区',
    'region_code': 411002,
    'parent_code': 411000
  },
  {
    'id': 1785,
    'region_name': '许昌县',
    'region_code': 411023,
    'parent_code': 411000
  },
  {
    'id': 1786,
    'region_name': '鄢陵县',
    'region_code': 411024,
    'parent_code': 411000
  },
  {
    'id': 1787,
    'region_name': '襄城县',
    'region_code': 411025,
    'parent_code': 411000
  },
  {
    'id': 1788,
    'region_name': '禹州市',
    'region_code': 411081,
    'parent_code': 411000
  },
  {
    'id': 1789,
    'region_name': '长葛市',
    'region_code': 411082,
    'parent_code': 411000
  },
  {
    'id': 1790,
    'region_name': '漯河市',
    'region_code': 411100,
    'parent_code': 410000
  },
  {
    'id': 1791,
    'region_name': '市辖区',
    'region_code': 411101,
    'parent_code': 411100
  },
  {
    'id': 1792,
    'region_name': '源汇区',
    'region_code': 411102,
    'parent_code': 411100
  },
  {
    'id': 1793,
    'region_name': '舞阳县',
    'region_code': 411121,
    'parent_code': 411100
  },
  {
    'id': 1794,
    'region_name': '临颍县',
    'region_code': 411122,
    'parent_code': 411100
  },
  {
    'id': 1795,
    'region_name': '郾城县',
    'region_code': 411123,
    'parent_code': null
  },
  {
    'id': 1796,
    'region_name': '三门峡市',
    'region_code': 411200,
    'parent_code': 410000
  },
  {
    'id': 1797,
    'region_name': '市辖区',
    'region_code': 411201,
    'parent_code': 411200
  },
  {
    'id': 1798,
    'region_name': '湖滨区',
    'region_code': 411202,
    'parent_code': 411200
  },
  {
    'id': 1799,
    'region_name': '渑池县',
    'region_code': 411221,
    'parent_code': 411200
  },
  {
    'id': 1800,
    'region_name': '陕县',
    'region_code': 411222,
    'parent_code': 411200
  },
  {
    'id': 1801,
    'region_name': '卢氏县',
    'region_code': 411224,
    'parent_code': 411200
  },
  {
    'id': 1802,
    'region_name': '义马市',
    'region_code': 411281,
    'parent_code': 411200
  },
  {
    'id': 1803,
    'region_name': '灵宝市',
    'region_code': 411282,
    'parent_code': 411200
  },
  {
    'id': 1804,
    'region_name': '南阳市',
    'region_code': 411300,
    'parent_code': 410000
  },
  {
    'id': 1805,
    'region_name': '市辖区',
    'region_code': 411301,
    'parent_code': 411300
  },
  {
    'id': 1806,
    'region_name': '宛城区',
    'region_code': 411302,
    'parent_code': 411300
  },
  {
    'id': 1807,
    'region_name': '卧龙区',
    'region_code': 411303,
    'parent_code': 411300
  },
  {
    'id': 1808,
    'region_name': '南召县',
    'region_code': 411321,
    'parent_code': 411300
  },
  {
    'id': 1809,
    'region_name': '方城县',
    'region_code': 411322,
    'parent_code': 411300
  },
  {
    'id': 1810,
    'region_name': '西峡县',
    'region_code': 411323,
    'parent_code': 411300
  },
  {
    'id': 1811,
    'region_name': '镇平县',
    'region_code': 411324,
    'parent_code': 411300
  },
  {
    'id': 1812,
    'region_name': '内乡县',
    'region_code': 411325,
    'parent_code': 411300
  },
  {
    'id': 1813,
    'region_name': '淅川县',
    'region_code': 411326,
    'parent_code': 411300
  },
  {
    'id': 1814,
    'region_name': '社旗县',
    'region_code': 411327,
    'parent_code': 411300
  },
  {
    'id': 1815,
    'region_name': '唐河县',
    'region_code': 411328,
    'parent_code': 411300
  },
  {
    'id': 1816,
    'region_name': '新野县',
    'region_code': 411329,
    'parent_code': 411300
  },
  {
    'id': 1817,
    'region_name': '桐柏县',
    'region_code': 411330,
    'parent_code': 411300
  },
  {
    'id': 1818,
    'region_name': '邓州市',
    'region_code': 411381,
    'parent_code': 411300
  },
  {
    'id': 1819,
    'region_name': '商丘市',
    'region_code': 411400,
    'parent_code': 410000
  },
  {
    'id': 1820,
    'region_name': '市辖区',
    'region_code': 411401,
    'parent_code': 411400
  },
  {
    'id': 1821,
    'region_name': '梁园区',
    'region_code': 411402,
    'parent_code': 411400
  },
  {
    'id': 1822,
    'region_name': '睢阳区',
    'region_code': 411403,
    'parent_code': 411400
  },
  {
    'id': 1823,
    'region_name': '民权县',
    'region_code': 411421,
    'parent_code': 411400
  },
  {
    'id': 1824,
    'region_name': '睢县',
    'region_code': 411422,
    'parent_code': 411400
  },
  {
    'id': 1825,
    'region_name': '宁陵县',
    'region_code': 411423,
    'parent_code': 411400
  },
  {
    'id': 1826,
    'region_name': '柘城县',
    'region_code': 411424,
    'parent_code': 411400
  },
  {
    'id': 1827,
    'region_name': '虞城县',
    'region_code': 411425,
    'parent_code': 411400
  },
  {
    'id': 1828,
    'region_name': '夏邑县',
    'region_code': 411426,
    'parent_code': 411400
  },
  {
    'id': 1829,
    'region_name': '永城市',
    'region_code': 411481,
    'parent_code': 411400
  },
  {
    'id': 1830,
    'region_name': '信阳市',
    'region_code': 411500,
    'parent_code': 410000
  },
  {
    'id': 1831,
    'region_name': '市辖区',
    'region_code': 411501,
    'parent_code': 411500
  },
  {
    'id': 1832,
    'region_name': '师河区',
    'region_code': 411502,
    'parent_code': 411500
  },
  {
    'id': 1833,
    'region_name': '平桥区',
    'region_code': 411503,
    'parent_code': 411500
  },
  {
    'id': 1834,
    'region_name': '罗山县',
    'region_code': 411521,
    'parent_code': 411500
  },
  {
    'id': 1835,
    'region_name': '光山县',
    'region_code': 411522,
    'parent_code': 411500
  },
  {
    'id': 1836,
    'region_name': '新县',
    'region_code': 411523,
    'parent_code': 411500
  },
  {
    'id': 1837,
    'region_name': '商城县',
    'region_code': 411524,
    'parent_code': 411500
  },
  {
    'id': 1838,
    'region_name': '固始县',
    'region_code': 411525,
    'parent_code': 411500
  },
  {
    'id': 1839,
    'region_name': '潢川县',
    'region_code': 411526,
    'parent_code': 411500
  },
  {
    'id': 1840,
    'region_name': '淮滨县',
    'region_code': 411527,
    'parent_code': 411500
  },
  {
    'id': 1841,
    'region_name': '息县',
    'region_code': 411528,
    'parent_code': 411500
  },
  {
    'id': 1842,
    'region_name': '周口市',
    'region_code': 411600,
    'parent_code': 410000
  },
  {
    'id': 1843,
    'region_name': '市辖区',
    'region_code': 411601,
    'parent_code': 411600
  },
  {
    'id': 1844,
    'region_name': '川汇区',
    'region_code': 411602,
    'parent_code': 411600
  },
  {
    'id': 1845,
    'region_name': '扶沟县',
    'region_code': 411621,
    'parent_code': 411600
  },
  {
    'id': 1846,
    'region_name': '西华县',
    'region_code': 411622,
    'parent_code': 411600
  },
  {
    'id': 1847,
    'region_name': '商水县',
    'region_code': 411623,
    'parent_code': 411600
  },
  {
    'id': 1848,
    'region_name': '沈丘县',
    'region_code': 411624,
    'parent_code': 411600
  },
  {
    'id': 1849,
    'region_name': '郸城县',
    'region_code': 411625,
    'parent_code': 411600
  },
  {
    'id': 1850,
    'region_name': '淮阳县',
    'region_code': 411626,
    'parent_code': 411600
  },
  {
    'id': 1851,
    'region_name': '太康县',
    'region_code': 411627,
    'parent_code': 411600
  },
  {
    'id': 1852,
    'region_name': '鹿邑县',
    'region_code': 411628,
    'parent_code': 411600
  },
  {
    'id': 1853,
    'region_name': '项城市',
    'region_code': 411681,
    'parent_code': 411600
  },
  {
    'id': 1854,
    'region_name': '驻马店市',
    'region_code': 411700,
    'parent_code': 410000
  },
  {
    'id': 1855,
    'region_name': '市辖区',
    'region_code': 411701,
    'parent_code': 411700
  },
  {
    'id': 1856,
    'region_name': '驿城区',
    'region_code': 411702,
    'parent_code': 411700
  },
  {
    'id': 1857,
    'region_name': '西平县',
    'region_code': 411721,
    'parent_code': 411700
  },
  {
    'id': 1858,
    'region_name': '上蔡县',
    'region_code': 411722,
    'parent_code': 411700
  },
  {
    'id': 1859,
    'region_name': '平舆县',
    'region_code': 411723,
    'parent_code': 411700
  },
  {
    'id': 1860,
    'region_name': '正阳县',
    'region_code': 411724,
    'parent_code': 411700
  },
  {
    'id': 1861,
    'region_name': '确山县',
    'region_code': 411725,
    'parent_code': 411700
  },
  {
    'id': 1862,
    'region_name': '泌阳县',
    'region_code': 411726,
    'parent_code': 411700
  },
  {
    'id': 1863,
    'region_name': '汝南县',
    'region_code': 411727,
    'parent_code': 411700
  },
  {
    'id': 1864,
    'region_name': '遂平县',
    'region_code': 411728,
    'parent_code': 411700
  },
  {
    'id': 1865,
    'region_name': '新蔡县',
    'region_code': 411729,
    'parent_code': 411700
  },
  {
    'id': 1866,
    'region_name': '湖北省',
    'region_code': 420000,
    'parent_code': 0
  },
  {
    'id': 1867,
    'region_name': '武汉市',
    'region_code': 420100,
    'parent_code': 420000
  },
  {
    'id': 1868,
    'region_name': '市辖区',
    'region_code': 420101,
    'parent_code': 420100
  },
  {
    'id': 1869,
    'region_name': '江岸区',
    'region_code': 420102,
    'parent_code': 420100
  },
  {
    'id': 1870,
    'region_name': '江汉区',
    'region_code': 420103,
    'parent_code': 420100
  },
  {
    'id': 1871,
    'region_name': '乔口区',
    'region_code': 420104,
    'parent_code': 420100
  },
  {
    'id': 1872,
    'region_name': '汉阳区',
    'region_code': 420105,
    'parent_code': 420100
  },
  {
    'id': 1873,
    'region_name': '武昌区',
    'region_code': 420106,
    'parent_code': 420100
  },
  {
    'id': 1874,
    'region_name': '青山区',
    'region_code': 420107,
    'parent_code': 420100
  },
  {
    'id': 1875,
    'region_name': '洪山区',
    'region_code': 420111,
    'parent_code': 420100
  },
  {
    'id': 1876,
    'region_name': '东西湖区',
    'region_code': 420112,
    'parent_code': 420100
  },
  {
    'id': 1877,
    'region_name': '汉南区',
    'region_code': 420113,
    'parent_code': 420100
  },
  {
    'id': 1878,
    'region_name': '蔡甸区',
    'region_code': 420114,
    'parent_code': 420100
  },
  {
    'id': 1879,
    'region_name': '江夏区',
    'region_code': 420115,
    'parent_code': 420100
  },
  {
    'id': 1880,
    'region_name': '黄陂区',
    'region_code': 420116,
    'parent_code': 420100
  },
  {
    'id': 1881,
    'region_name': '新洲区',
    'region_code': 420117,
    'parent_code': 420100
  },
  {
    'id': 1882,
    'region_name': '黄石市',
    'region_code': 420200,
    'parent_code': 420000
  },
  {
    'id': 1883,
    'region_name': '市辖区',
    'region_code': 420201,
    'parent_code': 420200
  },
  {
    'id': 1884,
    'region_name': '黄石港区',
    'region_code': 420202,
    'parent_code': 420200
  },
  {
    'id': 1885,
    'region_name': '西塞山区',
    'region_code': 420203,
    'parent_code': 420200
  },
  {
    'id': 1886,
    'region_name': '下陆区',
    'region_code': 420204,
    'parent_code': 420200
  },
  {
    'id': 1887,
    'region_name': '铁山区',
    'region_code': 420205,
    'parent_code': 420200
  },
  {
    'id': 1888,
    'region_name': '阳新县',
    'region_code': 420222,
    'parent_code': 420200
  },
  {
    'id': 1889,
    'region_name': '大冶市',
    'region_code': 420281,
    'parent_code': 420200
  },
  {
    'id': 1890,
    'region_name': '十堰市',
    'region_code': 420300,
    'parent_code': 420000
  },
  {
    'id': 1891,
    'region_name': '市辖区',
    'region_code': 420301,
    'parent_code': 420300
  },
  {
    'id': 1892,
    'region_name': '茅箭区',
    'region_code': 420302,
    'parent_code': 420300
  },
  {
    'id': 1893,
    'region_name': '张湾区',
    'region_code': 420303,
    'parent_code': 420300
  },
  {
    'id': 1894,
    'region_name': '郧县',
    'region_code': 420321,
    'parent_code': null
  },
  {
    'id': 1895,
    'region_name': '郧西县',
    'region_code': 420322,
    'parent_code': 420300
  },
  {
    'id': 1896,
    'region_name': '竹山县',
    'region_code': 420323,
    'parent_code': 420300
  },
  {
    'id': 1897,
    'region_name': '竹溪县',
    'region_code': 420324,
    'parent_code': 420300
  },
  {
    'id': 1898,
    'region_name': '房县',
    'region_code': 420325,
    'parent_code': 420300
  },
  {
    'id': 1899,
    'region_name': '丹江口市',
    'region_code': 420381,
    'parent_code': 420300
  },
  {
    'id': 1900,
    'region_name': '宜昌市',
    'region_code': 420500,
    'parent_code': 420000
  },
  {
    'id': 1901,
    'region_name': '市辖区',
    'region_code': 420501,
    'parent_code': 420500
  },
  {
    'id': 1902,
    'region_name': '西陵区',
    'region_code': 420502,
    'parent_code': 420500
  },
  {
    'id': 1903,
    'region_name': '伍家岗区',
    'region_code': 420503,
    'parent_code': 420500
  },
  {
    'id': 1904,
    'region_name': '点军区',
    'region_code': 420504,
    'parent_code': 420500
  },
  {
    'id': 1905,
    'region_name': '虎亭区',
    'region_code': 420505,
    'parent_code': 420500
  },
  {
    'id': 1906,
    'region_name': '夷陵区',
    'region_code': 420506,
    'parent_code': 420500
  },
  {
    'id': 1907,
    'region_name': '远安县',
    'region_code': 420525,
    'parent_code': 420500
  },
  {
    'id': 1908,
    'region_name': '兴山县',
    'region_code': 420526,
    'parent_code': 420500
  },
  {
    'id': 1909,
    'region_name': '秭归县',
    'region_code': 420527,
    'parent_code': 420500
  },
  {
    'id': 1910,
    'region_name': '长阳土家族自治县',
    'region_code': 420528,
    'parent_code': 420500
  },
  {
    'id': 1911,
    'region_name': '五峰土家族自治县',
    'region_code': 420529,
    'parent_code': 420500
  },
  {
    'id': 1912,
    'region_name': '宜都市',
    'region_code': 420581,
    'parent_code': 420500
  },
  {
    'id': 1913,
    'region_name': '当阳市',
    'region_code': 420582,
    'parent_code': 420500
  },
  {
    'id': 1914,
    'region_name': '枝江市',
    'region_code': 420583,
    'parent_code': 420500
  },
  {
    'id': 1915,
    'region_name': '襄樊市',
    'region_code': 420600,
    'parent_code': 420000
  },
  {
    'id': 1916,
    'region_name': '市辖区',
    'region_code': 420601,
    'parent_code': 420600
  },
  {
    'id': 1917,
    'region_name': '襄城区',
    'region_code': 420602,
    'parent_code': 420600
  },
  {
    'id': 1918,
    'region_name': '樊城区',
    'region_code': 420606,
    'parent_code': 420600
  },
  {
    'id': 1919,
    'region_name': '襄阳区',
    'region_code': 420607,
    'parent_code': 420600
  },
  {
    'id': 1920,
    'region_name': '南漳县',
    'region_code': 420624,
    'parent_code': 420600
  },
  {
    'id': 1921,
    'region_name': '谷城县',
    'region_code': 420625,
    'parent_code': 420600
  },
  {
    'id': 1922,
    'region_name': '保康县',
    'region_code': 420626,
    'parent_code': 420600
  },
  {
    'id': 1923,
    'region_name': '老河口市',
    'region_code': 420682,
    'parent_code': 420600
  },
  {
    'id': 1924,
    'region_name': '枣阳市',
    'region_code': 420683,
    'parent_code': 420600
  },
  {
    'id': 1925,
    'region_name': '宜城市',
    'region_code': 420684,
    'parent_code': 420600
  },
  {
    'id': 1926,
    'region_name': '鄂州市',
    'region_code': 420700,
    'parent_code': 420000
  },
  {
    'id': 1927,
    'region_name': '市辖区',
    'region_code': 420701,
    'parent_code': 420700
  },
  {
    'id': 1928,
    'region_name': '梁子湖区',
    'region_code': 420702,
    'parent_code': 420700
  },
  {
    'id': 1929,
    'region_name': '华容区',
    'region_code': 420703,
    'parent_code': 420700
  },
  {
    'id': 1930,
    'region_name': '鄂城区',
    'region_code': 420704,
    'parent_code': 420700
  },
  {
    'id': 1931,
    'region_name': '荆门市',
    'region_code': 420800,
    'parent_code': 420000
  },
  {
    'id': 1932,
    'region_name': '市辖区',
    'region_code': 420801,
    'parent_code': 420800
  },
  {
    'id': 1933,
    'region_name': '东宝区',
    'region_code': 420802,
    'parent_code': 420800
  },
  {
    'id': 1934,
    'region_name': '掇刀区',
    'region_code': 420804,
    'parent_code': 420800
  },
  {
    'id': 1935,
    'region_name': '京山县',
    'region_code': 420821,
    'parent_code': 420800
  },
  {
    'id': 1936,
    'region_name': '沙洋县',
    'region_code': 420822,
    'parent_code': 420800
  },
  {
    'id': 1937,
    'region_name': '钟祥市',
    'region_code': 420881,
    'parent_code': 420800
  },
  {
    'id': 1938,
    'region_name': '孝感市',
    'region_code': 420900,
    'parent_code': 420000
  },
  {
    'id': 1939,
    'region_name': '市辖区',
    'region_code': 420901,
    'parent_code': 420900
  },
  {
    'id': 1940,
    'region_name': '孝南区',
    'region_code': 420902,
    'parent_code': 420900
  },
  {
    'id': 1941,
    'region_name': '孝昌县',
    'region_code': 420921,
    'parent_code': 420900
  },
  {
    'id': 1942,
    'region_name': '大悟县',
    'region_code': 420922,
    'parent_code': 420900
  },
  {
    'id': 1943,
    'region_name': '云梦县',
    'region_code': 420923,
    'parent_code': 420900
  },
  {
    'id': 1944,
    'region_name': '应城市',
    'region_code': 420981,
    'parent_code': 420900
  },
  {
    'id': 1945,
    'region_name': '安陆市',
    'region_code': 420982,
    'parent_code': 420900
  },
  {
    'id': 1946,
    'region_name': '汉川市',
    'region_code': 420984,
    'parent_code': 420900
  },
  {
    'id': 1947,
    'region_name': '荆州市',
    'region_code': 421000,
    'parent_code': 420000
  },
  {
    'id': 1948,
    'region_name': '市辖区',
    'region_code': 421001,
    'parent_code': 421000
  },
  {
    'id': 1949,
    'region_name': '沙市区',
    'region_code': 421002,
    'parent_code': 421000
  },
  {
    'id': 1950,
    'region_name': '荆州区',
    'region_code': 421003,
    'parent_code': 421000
  },
  {
    'id': 1951,
    'region_name': '公安县',
    'region_code': 421022,
    'parent_code': 421000
  },
  {
    'id': 1952,
    'region_name': '监利县',
    'region_code': 421023,
    'parent_code': 421000
  },
  {
    'id': 1953,
    'region_name': '江陵县',
    'region_code': 421024,
    'parent_code': 421000
  },
  {
    'id': 1954,
    'region_name': '石首市',
    'region_code': 421081,
    'parent_code': 421000
  },
  {
    'id': 1955,
    'region_name': '洪湖市',
    'region_code': 421083,
    'parent_code': 421000
  },
  {
    'id': 1956,
    'region_name': '松滋市',
    'region_code': 421087,
    'parent_code': 421000
  },
  {
    'id': 1957,
    'region_name': '黄冈市',
    'region_code': 421100,
    'parent_code': 420000
  },
  {
    'id': 1958,
    'region_name': '市辖区',
    'region_code': 421101,
    'parent_code': 421100
  },
  {
    'id': 1959,
    'region_name': '黄州区',
    'region_code': 421102,
    'parent_code': 421100
  },
  {
    'id': 1960,
    'region_name': '团风县',
    'region_code': 421121,
    'parent_code': 421100
  },
  {
    'id': 1961,
    'region_name': '红安县',
    'region_code': 421122,
    'parent_code': 421100
  },
  {
    'id': 1962,
    'region_name': '罗田县',
    'region_code': 421123,
    'parent_code': 421100
  },
  {
    'id': 1963,
    'region_name': '英山县',
    'region_code': 421124,
    'parent_code': 421100
  },
  {
    'id': 1964,
    'region_name': '浠水县',
    'region_code': 421125,
    'parent_code': 421100
  },
  {
    'id': 1965,
    'region_name': '蕲春县',
    'region_code': 421126,
    'parent_code': 421100
  },
  {
    'id': 1966,
    'region_name': '黄梅县',
    'region_code': 421127,
    'parent_code': 421100
  },
  {
    'id': 1967,
    'region_name': '麻城市',
    'region_code': 421181,
    'parent_code': 421100
  },
  {
    'id': 1968,
    'region_name': '武穴市',
    'region_code': 421182,
    'parent_code': 421100
  },
  {
    'id': 1969,
    'region_name': '咸宁市',
    'region_code': 421200,
    'parent_code': 420000
  },
  {
    'id': 1970,
    'region_name': '市辖区',
    'region_code': 421201,
    'parent_code': 421200
  },
  {
    'id': 1971,
    'region_name': '咸安区',
    'region_code': 421202,
    'parent_code': 421200
  },
  {
    'id': 1972,
    'region_name': '嘉鱼县',
    'region_code': 421221,
    'parent_code': 421200
  },
  {
    'id': 1973,
    'region_name': '通城县',
    'region_code': 421222,
    'parent_code': 421200
  },
  {
    'id': 1974,
    'region_name': '崇阳县',
    'region_code': 421223,
    'parent_code': 421200
  },
  {
    'id': 1975,
    'region_name': '通山县',
    'region_code': 421224,
    'parent_code': 421200
  },
  {
    'id': 1976,
    'region_name': '赤壁市',
    'region_code': 421281,
    'parent_code': 421200
  },
  {
    'id': 1977,
    'region_name': '随州市',
    'region_code': 421300,
    'parent_code': 420000
  },
  {
    'id': 1978,
    'region_name': '市辖区',
    'region_code': 421301,
    'parent_code': 421300
  },
  {
    'id': 1979,
    'region_name': '曾都区',
    'region_code': 421302,
    'parent_code': null
  },
  {
    'id': 1980,
    'region_name': '广水市',
    'region_code': 421381,
    'parent_code': 421300
  },
  {
    'id': 1981,
    'region_name': '恩施土家族苗族自治州',
    'region_code': 422800,
    'parent_code': 420000
  },
  {
    'id': 1982,
    'region_name': '恩施市',
    'region_code': 422801,
    'parent_code': 422800
  },
  {
    'id': 1983,
    'region_name': '利川市',
    'region_code': 422802,
    'parent_code': 422800
  },
  {
    'id': 1984,
    'region_name': '建始县',
    'region_code': 422822,
    'parent_code': 422800
  },
  {
    'id': 1985,
    'region_name': '巴东县',
    'region_code': 422823,
    'parent_code': 422800
  },
  {
    'id': 1986,
    'region_name': '宣恩县',
    'region_code': 422825,
    'parent_code': 422800
  },
  {
    'id': 1987,
    'region_name': '咸丰县',
    'region_code': 422826,
    'parent_code': 422800
  },
  {
    'id': 1988,
    'region_name': '来凤县',
    'region_code': 422827,
    'parent_code': 422800
  },
  {
    'id': 1989,
    'region_name': '鹤峰县',
    'region_code': 422828,
    'parent_code': 422800
  },
  {
    'id': 1990,
    'region_name': '省直辖行政单位',
    'region_code': 429000,
    'parent_code': 420000
  },
  {
    'id': 1991,
    'region_name': '仙桃市',
    'region_code': 429004,
    'parent_code': 429000
  },
  {
    'id': 1992,
    'region_name': '潜江市',
    'region_code': 429005,
    'parent_code': 429000
  },
  {
    'id': 1993,
    'region_name': '天门市',
    'region_code': 429006,
    'parent_code': 429000
  },
  {
    'id': 1994,
    'region_name': '神农架林区',
    'region_code': 429021,
    'parent_code': 429000
  },
  {
    'id': 1995,
    'region_name': '湖南省',
    'region_code': 430000,
    'parent_code': 0
  },
  {
    'id': 1996,
    'region_name': '长沙市',
    'region_code': 430100,
    'parent_code': 430000
  },
  {
    'id': 1997,
    'region_name': '市辖区',
    'region_code': 430101,
    'parent_code': 430100
  },
  {
    'id': 1998,
    'region_name': '芙蓉区',
    'region_code': 430102,
    'parent_code': 430100
  },
  {
    'id': 1999,
    'region_name': '天心区',
    'region_code': 430103,
    'parent_code': 430100
  },
  {
    'id': 2000,
    'region_name': '岳麓区',
    'region_code': 430104,
    'parent_code': 430100
  },
  {
    'id': 2001,
    'region_name': '开福区',
    'region_code': 430105,
    'parent_code': 430100
  },
  {
    'id': 2002,
    'region_name': '雨花区',
    'region_code': 430111,
    'parent_code': 430100
  },
  {
    'id': 2003,
    'region_name': '长沙县',
    'region_code': 430121,
    'parent_code': 430100
  },
  {
    'id': 2004,
    'region_name': '望城县',
    'region_code': 430122,
    'parent_code': null
  },
  {
    'id': 2005,
    'region_name': '宁乡县',
    'region_code': 430124,
    'parent_code': 430100
  },
  {
    'id': 2006,
    'region_name': '浏阳市',
    'region_code': 430181,
    'parent_code': 430100
  },
  {
    'id': 2007,
    'region_name': '株洲市',
    'region_code': 430200,
    'parent_code': 430000
  },
  {
    'id': 2008,
    'region_name': '市辖区',
    'region_code': 430201,
    'parent_code': 430200
  },
  {
    'id': 2009,
    'region_name': '荷塘区',
    'region_code': 430202,
    'parent_code': 430200
  },
  {
    'id': 2010,
    'region_name': '芦淞区',
    'region_code': 430203,
    'parent_code': 430200
  },
  {
    'id': 2011,
    'region_name': '石峰区',
    'region_code': 430204,
    'parent_code': 430200
  },
  {
    'id': 2012,
    'region_name': '天元区',
    'region_code': 430211,
    'parent_code': 430200
  },
  {
    'id': 2013,
    'region_name': '株洲县',
    'region_code': 430221,
    'parent_code': 430200
  },
  {
    'id': 2014,
    'region_name': '攸县',
    'region_code': 430223,
    'parent_code': 430200
  },
  {
    'id': 2015,
    'region_name': '茶陵县',
    'region_code': 430224,
    'parent_code': 430200
  },
  {
    'id': 2016,
    'region_name': '炎陵县',
    'region_code': 430225,
    'parent_code': 430200
  },
  {
    'id': 2017,
    'region_name': '醴陵市',
    'region_code': 430281,
    'parent_code': 430200
  },
  {
    'id': 2018,
    'region_name': '湘潭市',
    'region_code': 430300,
    'parent_code': 430000
  },
  {
    'id': 2019,
    'region_name': '市辖区',
    'region_code': 430301,
    'parent_code': 430300
  },
  {
    'id': 2020,
    'region_name': '雨湖区',
    'region_code': 430302,
    'parent_code': 430300
  },
  {
    'id': 2021,
    'region_name': '岳塘区',
    'region_code': 430304,
    'parent_code': 430300
  },
  {
    'id': 2022,
    'region_name': '湘潭县',
    'region_code': 430321,
    'parent_code': 430300
  },
  {
    'id': 2023,
    'region_name': '湘乡市',
    'region_code': 430381,
    'parent_code': 430300
  },
  {
    'id': 2024,
    'region_name': '韶山市',
    'region_code': 430382,
    'parent_code': 430300
  },
  {
    'id': 2025,
    'region_name': '衡阳市',
    'region_code': 430400,
    'parent_code': 430000
  },
  {
    'id': 2026,
    'region_name': '市辖区',
    'region_code': 430401,
    'parent_code': 430400
  },
  {
    'id': 2027,
    'region_name': '珠晖区',
    'region_code': 430405,
    'parent_code': 430400
  },
  {
    'id': 2028,
    'region_name': '雁峰区',
    'region_code': 430406,
    'parent_code': 430400
  },
  {
    'id': 2029,
    'region_name': '石鼓区',
    'region_code': 430407,
    'parent_code': 430400
  },
  {
    'id': 2030,
    'region_name': '蒸湘区',
    'region_code': 430408,
    'parent_code': 430400
  },
  {
    'id': 2031,
    'region_name': '南岳区',
    'region_code': 430412,
    'parent_code': 430400
  },
  {
    'id': 2032,
    'region_name': '衡阳县',
    'region_code': 430421,
    'parent_code': 430400
  },
  {
    'id': 2033,
    'region_name': '衡南县',
    'region_code': 430422,
    'parent_code': 430400
  },
  {
    'id': 2034,
    'region_name': '衡山县',
    'region_code': 430423,
    'parent_code': 430400
  },
  {
    'id': 2035,
    'region_name': '衡东县',
    'region_code': 430424,
    'parent_code': 430400
  },
  {
    'id': 2036,
    'region_name': '祁东县',
    'region_code': 430426,
    'parent_code': 430400
  },
  {
    'id': 2037,
    'region_name': '耒阳市',
    'region_code': 430481,
    'parent_code': 430400
  },
  {
    'id': 2038,
    'region_name': '常宁市',
    'region_code': 430482,
    'parent_code': 430400
  },
  {
    'id': 2039,
    'region_name': '邵阳市',
    'region_code': 430500,
    'parent_code': 430000
  },
  {
    'id': 2040,
    'region_name': '市辖区',
    'region_code': 430501,
    'parent_code': 430500
  },
  {
    'id': 2041,
    'region_name': '双清区',
    'region_code': 430502,
    'parent_code': 430500
  },
  {
    'id': 2042,
    'region_name': '大祥区',
    'region_code': 430503,
    'parent_code': 430500
  },
  {
    'id': 2043,
    'region_name': '北塔区',
    'region_code': 430511,
    'parent_code': 430500
  },
  {
    'id': 2044,
    'region_name': '邵东县',
    'region_code': 430521,
    'parent_code': 430500
  },
  {
    'id': 2045,
    'region_name': '新邵县',
    'region_code': 430522,
    'parent_code': 430500
  },
  {
    'id': 2046,
    'region_name': '邵阳县',
    'region_code': 430523,
    'parent_code': 430500
  },
  {
    'id': 2047,
    'region_name': '隆回县',
    'region_code': 430524,
    'parent_code': 430500
  },
  {
    'id': 2048,
    'region_name': '洞口县',
    'region_code': 430525,
    'parent_code': 430500
  },
  {
    'id': 2049,
    'region_name': '绥宁县',
    'region_code': 430527,
    'parent_code': 430500
  },
  {
    'id': 2050,
    'region_name': '新宁县',
    'region_code': 430528,
    'parent_code': 430500
  },
  {
    'id': 2051,
    'region_name': '城步苗族自治县',
    'region_code': 430529,
    'parent_code': 430500
  },
  {
    'id': 2052,
    'region_name': '武冈市',
    'region_code': 430581,
    'parent_code': 430500
  },
  {
    'id': 2053,
    'region_name': '岳阳市',
    'region_code': 430600,
    'parent_code': 430000
  },
  {
    'id': 2054,
    'region_name': '市辖区',
    'region_code': 430601,
    'parent_code': 430600
  },
  {
    'id': 2055,
    'region_name': '岳阳楼区',
    'region_code': 430602,
    'parent_code': 430600
  },
  {
    'id': 2056,
    'region_name': '云溪区',
    'region_code': 430603,
    'parent_code': 430600
  },
  {
    'id': 2057,
    'region_name': '君山区',
    'region_code': 430611,
    'parent_code': 430600
  },
  {
    'id': 2058,
    'region_name': '岳阳县',
    'region_code': 430621,
    'parent_code': 430600
  },
  {
    'id': 2059,
    'region_name': '华容县',
    'region_code': 430623,
    'parent_code': 430600
  },
  {
    'id': 2060,
    'region_name': '湘阴县',
    'region_code': 430624,
    'parent_code': 430600
  },
  {
    'id': 2061,
    'region_name': '平江县',
    'region_code': 430626,
    'parent_code': 430600
  },
  {
    'id': 2062,
    'region_name': '汨罗市',
    'region_code': 430681,
    'parent_code': 430600
  },
  {
    'id': 2063,
    'region_name': '临湘市',
    'region_code': 430682,
    'parent_code': 430600
  },
  {
    'id': 2064,
    'region_name': '常德市',
    'region_code': 430700,
    'parent_code': 430000
  },
  {
    'id': 2065,
    'region_name': '市辖区',
    'region_code': 430701,
    'parent_code': 430700
  },
  {
    'id': 2066,
    'region_name': '武陵区',
    'region_code': 430702,
    'parent_code': 430700
  },
  {
    'id': 2067,
    'region_name': '鼎城区',
    'region_code': 430703,
    'parent_code': 430700
  },
  {
    'id': 2068,
    'region_name': '安乡县',
    'region_code': 430721,
    'parent_code': 430700
  },
  {
    'id': 2069,
    'region_name': '汉寿县',
    'region_code': 430722,
    'parent_code': 430700
  },
  {
    'id': 2070,
    'region_name': '澧县',
    'region_code': 430723,
    'parent_code': 430700
  },
  {
    'id': 2071,
    'region_name': '临澧县',
    'region_code': 430724,
    'parent_code': 430700
  },
  {
    'id': 2072,
    'region_name': '桃源县',
    'region_code': 430725,
    'parent_code': 430700
  },
  {
    'id': 2073,
    'region_name': '石门县',
    'region_code': 430726,
    'parent_code': 430700
  },
  {
    'id': 2074,
    'region_name': '津市市',
    'region_code': 430781,
    'parent_code': 430700
  },
  {
    'id': 2075,
    'region_name': '张家界市',
    'region_code': 430800,
    'parent_code': 430000
  },
  {
    'id': 2076,
    'region_name': '市辖区',
    'region_code': 430801,
    'parent_code': 430800
  },
  {
    'id': 2077,
    'region_name': '永定区',
    'region_code': 430802,
    'parent_code': 430800
  },
  {
    'id': 2078,
    'region_name': '武陵源区',
    'region_code': 430811,
    'parent_code': 430800
  },
  {
    'id': 2079,
    'region_name': '慈利县',
    'region_code': 430821,
    'parent_code': 430800
  },
  {
    'id': 2080,
    'region_name': '桑植县',
    'region_code': 430822,
    'parent_code': 430800
  },
  {
    'id': 2081,
    'region_name': '益阳市',
    'region_code': 430900,
    'parent_code': 430000
  },
  {
    'id': 2082,
    'region_name': '市辖区',
    'region_code': 430901,
    'parent_code': 430900
  },
  {
    'id': 2083,
    'region_name': '资阳区',
    'region_code': 430902,
    'parent_code': 430900
  },
  {
    'id': 2084,
    'region_name': '赫山区',
    'region_code': 430903,
    'parent_code': 430900
  },
  {
    'id': 2085,
    'region_name': '南县',
    'region_code': 430921,
    'parent_code': 430900
  },
  {
    'id': 2086,
    'region_name': '桃江县',
    'region_code': 430922,
    'parent_code': 430900
  },
  {
    'id': 2087,
    'region_name': '安化县',
    'region_code': 430923,
    'parent_code': 430900
  },
  {
    'id': 2088,
    'region_name': '沅江市',
    'region_code': 430981,
    'parent_code': 430900
  },
  {
    'id': 2089,
    'region_name': '郴州市',
    'region_code': 431000,
    'parent_code': 430000
  },
  {
    'id': 2090,
    'region_name': '市辖区',
    'region_code': 431001,
    'parent_code': 431000
  },
  {
    'id': 2091,
    'region_name': '北湖区',
    'region_code': 431002,
    'parent_code': 431000
  },
  {
    'id': 2092,
    'region_name': '苏仙区',
    'region_code': 431003,
    'parent_code': 431000
  },
  {
    'id': 2093,
    'region_name': '桂阳县',
    'region_code': 431021,
    'parent_code': 431000
  },
  {
    'id': 2094,
    'region_name': '宜章县',
    'region_code': 431022,
    'parent_code': 431000
  },
  {
    'id': 2095,
    'region_name': '永兴县',
    'region_code': 431023,
    'parent_code': 431000
  },
  {
    'id': 2096,
    'region_name': '嘉禾县',
    'region_code': 431024,
    'parent_code': 431000
  },
  {
    'id': 2097,
    'region_name': '临武县',
    'region_code': 431025,
    'parent_code': 431000
  },
  {
    'id': 2098,
    'region_name': '汝城县',
    'region_code': 431026,
    'parent_code': 431000
  },
  {
    'id': 2099,
    'region_name': '桂东县',
    'region_code': 431027,
    'parent_code': 431000
  },
  {
    'id': 2100,
    'region_name': '安仁县',
    'region_code': 431028,
    'parent_code': 431000
  },
  {
    'id': 2101,
    'region_name': '资兴市',
    'region_code': 431081,
    'parent_code': 431000
  },
  {
    'id': 2102,
    'region_name': '永州市',
    'region_code': 431100,
    'parent_code': 430000
  },
  {
    'id': 2103,
    'region_name': '市辖区',
    'region_code': 431101,
    'parent_code': 431100
  },
  {
    'id': 2104,
    'region_name': '芝山区',
    'region_code': 431102,
    'parent_code': 431100
  },
  {
    'id': 2105,
    'region_name': '冷水滩区',
    'region_code': 431103,
    'parent_code': 431100
  },
  {
    'id': 2106,
    'region_name': '祁阳县',
    'region_code': 431121,
    'parent_code': 431100
  },
  {
    'id': 2107,
    'region_name': '东安县',
    'region_code': 431122,
    'parent_code': 431100
  },
  {
    'id': 2108,
    'region_name': '双牌县',
    'region_code': 431123,
    'parent_code': 431100
  },
  {
    'id': 2109,
    'region_name': '道县',
    'region_code': 431124,
    'parent_code': 431100
  },
  {
    'id': 2110,
    'region_name': '江永县',
    'region_code': 431125,
    'parent_code': 431100
  },
  {
    'id': 2111,
    'region_name': '宁远县',
    'region_code': 431126,
    'parent_code': 431100
  },
  {
    'id': 2112,
    'region_name': '蓝山县',
    'region_code': 431127,
    'parent_code': 431100
  },
  {
    'id': 2113,
    'region_name': '新田县',
    'region_code': 431128,
    'parent_code': 431100
  },
  {
    'id': 2114,
    'region_name': '江华瑶族自治县',
    'region_code': 431129,
    'parent_code': 431100
  },
  {
    'id': 2115,
    'region_name': '怀化市',
    'region_code': 431200,
    'parent_code': 430000
  },
  {
    'id': 2116,
    'region_name': '市辖区',
    'region_code': 431201,
    'parent_code': 431200
  },
  {
    'id': 2117,
    'region_name': '鹤城区',
    'region_code': 431202,
    'parent_code': 431200
  },
  {
    'id': 2118,
    'region_name': '中方县',
    'region_code': 431221,
    'parent_code': 431200
  },
  {
    'id': 2119,
    'region_name': '沅陵县',
    'region_code': 431222,
    'parent_code': 431200
  },
  {
    'id': 2120,
    'region_name': '辰溪县',
    'region_code': 431223,
    'parent_code': 431200
  },
  {
    'id': 2121,
    'region_name': '溆浦县',
    'region_code': 431224,
    'parent_code': 431200
  },
  {
    'id': 2122,
    'region_name': '会同县',
    'region_code': 431225,
    'parent_code': 431200
  },
  {
    'id': 2123,
    'region_name': '麻阳苗族自治县',
    'region_code': 431226,
    'parent_code': 431200
  },
  {
    'id': 2124,
    'region_name': '新晃侗族自治县',
    'region_code': 431227,
    'parent_code': 431200
  },
  {
    'id': 2125,
    'region_name': '芷江侗族自治县',
    'region_code': 431228,
    'parent_code': 431200
  },
  {
    'id': 2126,
    'region_name': '靖州苗族侗族自治县',
    'region_code': 431229,
    'parent_code': 431200
  },
  {
    'id': 2127,
    'region_name': '通道侗族自治县',
    'region_code': 431230,
    'parent_code': 431200
  },
  {
    'id': 2128,
    'region_name': '洪江市',
    'region_code': 431281,
    'parent_code': 431200
  },
  {
    'id': 2129,
    'region_name': '娄底市',
    'region_code': 431300,
    'parent_code': 430000
  },
  {
    'id': 2130,
    'region_name': '市辖区',
    'region_code': 431301,
    'parent_code': 431300
  },
  {
    'id': 2131,
    'region_name': '娄星区',
    'region_code': 431302,
    'parent_code': 431300
  },
  {
    'id': 2132,
    'region_name': '双峰县',
    'region_code': 431321,
    'parent_code': 431300
  },
  {
    'id': 2133,
    'region_name': '新化县',
    'region_code': 431322,
    'parent_code': 431300
  },
  {
    'id': 2134,
    'region_name': '冷水江市',
    'region_code': 431381,
    'parent_code': 431300
  },
  {
    'id': 2135,
    'region_name': '涟源市',
    'region_code': 431382,
    'parent_code': 431300
  },
  {
    'id': 2136,
    'region_name': '湘西土家族苗族自治州',
    'region_code': 433100,
    'parent_code': 430000
  },
  {
    'id': 2137,
    'region_name': '吉首市',
    'region_code': 433101,
    'parent_code': 433100
  },
  {
    'id': 2138,
    'region_name': '泸溪县',
    'region_code': 433122,
    'parent_code': 433100
  },
  {
    'id': 2139,
    'region_name': '凤凰县',
    'region_code': 433123,
    'parent_code': 433100
  },
  {
    'id': 2140,
    'region_name': '花垣县',
    'region_code': 433124,
    'parent_code': 433100
  },
  {
    'id': 2141,
    'region_name': '保靖县',
    'region_code': 433125,
    'parent_code': 433100
  },
  {
    'id': 2142,
    'region_name': '古丈县',
    'region_code': 433126,
    'parent_code': 433100
  },
  {
    'id': 2143,
    'region_name': '永顺县',
    'region_code': 433127,
    'parent_code': 433100
  },
  {
    'id': 2144,
    'region_name': '龙山县',
    'region_code': 433130,
    'parent_code': 433100
  },
  {
    'id': 2145,
    'region_name': '广东省',
    'region_code': 440000,
    'parent_code': 0
  },
  {
    'id': 2146,
    'region_name': '广州市',
    'region_code': 440100,
    'parent_code': 440000
  },
  {
    'id': 2147,
    'region_name': '市辖区',
    'region_code': 440101,
    'parent_code': 440100
  },
  {
    'id': 2148,
    'region_name': '东山区',
    'region_code': 440102,
    'parent_code': null
  },
  {
    'id': 2149,
    'region_name': '荔湾区',
    'region_code': 440103,
    'parent_code': 440100
  },
  {
    'id': 2150,
    'region_name': '越秀区',
    'region_code': 440104,
    'parent_code': 440100
  },
  {
    'id': 2151,
    'region_name': '海珠区',
    'region_code': 440105,
    'parent_code': 440100
  },
  {
    'id': 2152,
    'region_name': '天河区',
    'region_code': 440106,
    'parent_code': 440100
  },
  {
    'id': 2153,
    'region_name': '芳村区',
    'region_code': 440107,
    'parent_code': null
  },
  {
    'id': 2154,
    'region_name': '白云区',
    'region_code': 440111,
    'parent_code': 440100
  },
  {
    'id': 2155,
    'region_name': '黄埔区',
    'region_code': 440112,
    'parent_code': 440100
  },
  {
    'id': 2156,
    'region_name': '番禺区',
    'region_code': 440113,
    'parent_code': 440100
  },
  {
    'id': 2157,
    'region_name': '花都区',
    'region_code': 440114,
    'parent_code': 440100
  },
  {
    'id': 2158,
    'region_name': '增城市',
    'region_code': 440183,
    'parent_code': null
  },
  {
    'id': 2159,
    'region_name': '从化市',
    'region_code': 440184,
    'parent_code': null
  },
  {
    'id': 2160,
    'region_name': '韶关市',
    'region_code': 440200,
    'parent_code': 440000
  },
  {
    'id': 2161,
    'region_name': '市辖区',
    'region_code': 440201,
    'parent_code': 440200
  },
  {
    'id': 2162,
    'region_name': '北江区',
    'region_code': 440202,
    'parent_code': null
  },
  {
    'id': 2163,
    'region_name': '武江区',
    'region_code': 440203,
    'parent_code': 440200
  },
  {
    'id': 2164,
    'region_name': '浈江区',
    'region_code': 440204,
    'parent_code': 440200
  },
  {
    'id': 2165,
    'region_name': '曲江县',
    'region_code': 440221,
    'parent_code': null
  },
  {
    'id': 2166,
    'region_name': '始兴县',
    'region_code': 440222,
    'parent_code': 440200
  },
  {
    'id': 2167,
    'region_name': '仁化县',
    'region_code': 440224,
    'parent_code': 440200
  },
  {
    'id': 2168,
    'region_name': '翁源县',
    'region_code': 440229,
    'parent_code': 440200
  },
  {
    'id': 2169,
    'region_name': '乳源瑶族自治县',
    'region_code': 440232,
    'parent_code': 440200
  },
  {
    'id': 2170,
    'region_name': '新丰县',
    'region_code': 440233,
    'parent_code': 440200
  },
  {
    'id': 2171,
    'region_name': '乐昌市',
    'region_code': 440281,
    'parent_code': 440200
  },
  {
    'id': 2172,
    'region_name': '南雄市',
    'region_code': 440282,
    'parent_code': 440200
  },
  {
    'id': 2173,
    'region_name': '深圳市',
    'region_code': 440300,
    'parent_code': 440000
  },
  {
    'id': 2174,
    'region_name': '市辖区',
    'region_code': 440301,
    'parent_code': 440300
  },
  {
    'id': 2175,
    'region_name': '罗湖区',
    'region_code': 440303,
    'parent_code': 440300
  },
  {
    'id': 2176,
    'region_name': '福田区',
    'region_code': 440304,
    'parent_code': 440300
  },
  {
    'id': 2177,
    'region_name': '南山区',
    'region_code': 440305,
    'parent_code': 440300
  },
  {
    'id': 2178,
    'region_name': '宝安区',
    'region_code': 440306,
    'parent_code': 440300
  },
  {
    'id': 2179,
    'region_name': '龙岗区',
    'region_code': 440307,
    'parent_code': 440300
  },
  {
    'id': 2180,
    'region_name': '盐田区',
    'region_code': 440308,
    'parent_code': 440300
  },
  {
    'id': 2181,
    'region_name': '珠海市',
    'region_code': 440400,
    'parent_code': 440000
  },
  {
    'id': 2182,
    'region_name': '市辖区',
    'region_code': 440401,
    'parent_code': 440400
  },
  {
    'id': 2183,
    'region_name': '香洲区',
    'region_code': 440402,
    'parent_code': 440400
  },
  {
    'id': 2184,
    'region_name': '斗门区',
    'region_code': 440403,
    'parent_code': 440400
  },
  {
    'id': 2185,
    'region_name': '金湾区',
    'region_code': 440404,
    'parent_code': 440400
  },
  {
    'id': 2186,
    'region_name': '汕头市',
    'region_code': 440500,
    'parent_code': 440000
  },
  {
    'id': 2187,
    'region_name': '市辖区',
    'region_code': 440501,
    'parent_code': 440500
  },
  {
    'id': 2188,
    'region_name': '龙湖区',
    'region_code': 440507,
    'parent_code': 440500
  },
  {
    'id': 2189,
    'region_name': '金平区',
    'region_code': 440511,
    'parent_code': 440500
  },
  {
    'id': 2190,
    'region_name': '濠江区',
    'region_code': 440512,
    'parent_code': 440500
  },
  {
    'id': 2191,
    'region_name': '潮阳区',
    'region_code': 440513,
    'parent_code': 440500
  },
  {
    'id': 2192,
    'region_name': '潮南区',
    'region_code': 440514,
    'parent_code': 440500
  },
  {
    'id': 2193,
    'region_name': '澄海区',
    'region_code': 440515,
    'parent_code': 440500
  },
  {
    'id': 2194,
    'region_name': '南澳县',
    'region_code': 440523,
    'parent_code': 440500
  },
  {
    'id': 2195,
    'region_name': '佛山市',
    'region_code': 440600,
    'parent_code': 440000
  },
  {
    'id': 2196,
    'region_name': '市辖区',
    'region_code': 440601,
    'parent_code': 440600
  },
  {
    'id': 2197,
    'region_name': '禅城区',
    'region_code': 440604,
    'parent_code': 440600
  },
  {
    'id': 2198,
    'region_name': '南海区',
    'region_code': 440605,
    'parent_code': 440600
  },
  {
    'id': 2199,
    'region_name': '顺德区',
    'region_code': 440606,
    'parent_code': 440600
  },
  {
    'id': 2200,
    'region_name': '三水区',
    'region_code': 440607,
    'parent_code': 440600
  },
  {
    'id': 2201,
    'region_name': '高明区',
    'region_code': 440608,
    'parent_code': 440600
  },
  {
    'id': 2202,
    'region_name': '江门市',
    'region_code': 440700,
    'parent_code': 440000
  },
  {
    'id': 2203,
    'region_name': '市辖区',
    'region_code': 440701,
    'parent_code': 440700
  },
  {
    'id': 2204,
    'region_name': '蓬江区',
    'region_code': 440703,
    'parent_code': 440700
  },
  {
    'id': 2205,
    'region_name': '江海区',
    'region_code': 440704,
    'parent_code': 440700
  },
  {
    'id': 2206,
    'region_name': '新会区',
    'region_code': 440705,
    'parent_code': 440700
  },
  {
    'id': 2207,
    'region_name': '台山市',
    'region_code': 440781,
    'parent_code': 440700
  },
  {
    'id': 2208,
    'region_name': '开平市',
    'region_code': 440783,
    'parent_code': 440700
  },
  {
    'id': 2209,
    'region_name': '鹤山市',
    'region_code': 440784,
    'parent_code': 440700
  },
  {
    'id': 2210,
    'region_name': '恩平市',
    'region_code': 440785,
    'parent_code': 440700
  },
  {
    'id': 2211,
    'region_name': '湛江市',
    'region_code': 440800,
    'parent_code': 440000
  },
  {
    'id': 2212,
    'region_name': '市辖区',
    'region_code': 440801,
    'parent_code': 440800
  },
  {
    'id': 2213,
    'region_name': '赤坎区',
    'region_code': 440802,
    'parent_code': 440800
  },
  {
    'id': 2214,
    'region_name': '霞山区',
    'region_code': 440803,
    'parent_code': 440800
  },
  {
    'id': 2215,
    'region_name': '坡头区',
    'region_code': 440804,
    'parent_code': 440800
  },
  {
    'id': 2216,
    'region_name': '麻章区',
    'region_code': 440811,
    'parent_code': 440800
  },
  {
    'id': 2217,
    'region_name': '遂溪县',
    'region_code': 440823,
    'parent_code': 440800
  },
  {
    'id': 2218,
    'region_name': '徐闻县',
    'region_code': 440825,
    'parent_code': 440800
  },
  {
    'id': 2219,
    'region_name': '廉江市',
    'region_code': 440881,
    'parent_code': 440800
  },
  {
    'id': 2220,
    'region_name': '雷州市',
    'region_code': 440882,
    'parent_code': 440800
  },
  {
    'id': 2221,
    'region_name': '吴川市',
    'region_code': 440883,
    'parent_code': 440800
  },
  {
    'id': 2222,
    'region_name': '茂名市',
    'region_code': 440900,
    'parent_code': 440000
  },
  {
    'id': 2223,
    'region_name': '市辖区',
    'region_code': 440901,
    'parent_code': 440900
  },
  {
    'id': 2224,
    'region_name': '茂南区',
    'region_code': 440902,
    'parent_code': 440900
  },
  {
    'id': 2225,
    'region_name': '茂港区',
    'region_code': 440903,
    'parent_code': null
  },
  {
    'id': 2226,
    'region_name': '电白县',
    'region_code': 440923,
    'parent_code': null
  },
  {
    'id': 2227,
    'region_name': '高州市',
    'region_code': 440981,
    'parent_code': 440900
  },
  {
    'id': 2228,
    'region_name': '化州市',
    'region_code': 440982,
    'parent_code': 440900
  },
  {
    'id': 2229,
    'region_name': '信宜市',
    'region_code': 440983,
    'parent_code': 440900
  },
  {
    'id': 2230,
    'region_name': '肇庆市',
    'region_code': 441200,
    'parent_code': 440000
  },
  {
    'id': 2231,
    'region_name': '市辖区',
    'region_code': 441201,
    'parent_code': 441200
  },
  {
    'id': 2232,
    'region_name': '端州区',
    'region_code': 441202,
    'parent_code': 441200
  },
  {
    'id': 2233,
    'region_name': '鼎湖区',
    'region_code': 441203,
    'parent_code': 441200
  },
  {
    'id': 2234,
    'region_name': '广宁县',
    'region_code': 441223,
    'parent_code': 441200
  },
  {
    'id': 2235,
    'region_name': '怀集县',
    'region_code': 441224,
    'parent_code': 441200
  },
  {
    'id': 2236,
    'region_name': '封开县',
    'region_code': 441225,
    'parent_code': 441200
  },
  {
    'id': 2237,
    'region_name': '德庆县',
    'region_code': 441226,
    'parent_code': 441200
  },
  {
    'id': 2238,
    'region_name': '高要市',
    'region_code': 441283,
    'parent_code': 441200
  },
  {
    'id': 2239,
    'region_name': '四会市',
    'region_code': 441284,
    'parent_code': 441200
  },
  {
    'id': 2240,
    'region_name': '惠州市',
    'region_code': 441300,
    'parent_code': 440000
  },
  {
    'id': 2241,
    'region_name': '市辖区',
    'region_code': 441301,
    'parent_code': 441300
  },
  {
    'id': 2242,
    'region_name': '惠城区',
    'region_code': 441302,
    'parent_code': 441300
  },
  {
    'id': 2243,
    'region_name': '惠阳区',
    'region_code': 441303,
    'parent_code': 441300
  },
  {
    'id': 2244,
    'region_name': '博罗县',
    'region_code': 441322,
    'parent_code': 441300
  },
  {
    'id': 2245,
    'region_name': '惠东县',
    'region_code': 441323,
    'parent_code': 441300
  },
  {
    'id': 2246,
    'region_name': '龙门县',
    'region_code': 441324,
    'parent_code': 441300
  },
  {
    'id': 2247,
    'region_name': '梅州市',
    'region_code': 441400,
    'parent_code': 440000
  },
  {
    'id': 2248,
    'region_name': '市辖区',
    'region_code': 441401,
    'parent_code': 441400
  },
  {
    'id': 2249,
    'region_name': '梅江区',
    'region_code': 441402,
    'parent_code': 441400
  },
  {
    'id': 2250,
    'region_name': '梅县',
    'region_code': 441421,
    'parent_code': null
  },
  {
    'id': 2251,
    'region_name': '大埔县',
    'region_code': 441422,
    'parent_code': 441400
  },
  {
    'id': 2252,
    'region_name': '丰顺县',
    'region_code': 441423,
    'parent_code': 441400
  },
  {
    'id': 2253,
    'region_name': '五华县',
    'region_code': 441424,
    'parent_code': 441400
  },
  {
    'id': 2254,
    'region_name': '平远县',
    'region_code': 441426,
    'parent_code': 441400
  },
  {
    'id': 2255,
    'region_name': '蕉岭县',
    'region_code': 441427,
    'parent_code': 441400
  },
  {
    'id': 2256,
    'region_name': '兴宁市',
    'region_code': 441481,
    'parent_code': 441400
  },
  {
    'id': 2257,
    'region_name': '汕尾市',
    'region_code': 441500,
    'parent_code': 440000
  },
  {
    'id': 2258,
    'region_name': '市辖区',
    'region_code': 441501,
    'parent_code': 441500
  },
  {
    'id': 2259,
    'region_name': '城区',
    'region_code': 441502,
    'parent_code': 441500
  },
  {
    'id': 2260,
    'region_name': '海丰县',
    'region_code': 441521,
    'parent_code': 441500
  },
  {
    'id': 2261,
    'region_name': '陆河县',
    'region_code': 441523,
    'parent_code': 441500
  },
  {
    'id': 2262,
    'region_name': '陆丰市',
    'region_code': 441581,
    'parent_code': 441500
  },
  {
    'id': 2263,
    'region_name': '河源市',
    'region_code': 441600,
    'parent_code': 440000
  },
  {
    'id': 2264,
    'region_name': '市辖区',
    'region_code': 441601,
    'parent_code': 441600
  },
  {
    'id': 2265,
    'region_name': '源城区',
    'region_code': 441602,
    'parent_code': 441600
  },
  {
    'id': 2266,
    'region_name': '紫金县',
    'region_code': 441621,
    'parent_code': 441600
  },
  {
    'id': 2267,
    'region_name': '龙川县',
    'region_code': 441622,
    'parent_code': 441600
  },
  {
    'id': 2268,
    'region_name': '连平县',
    'region_code': 441623,
    'parent_code': 441600
  },
  {
    'id': 2269,
    'region_name': '和平县',
    'region_code': 441624,
    'parent_code': 441600
  },
  {
    'id': 2270,
    'region_name': '东源县',
    'region_code': 441625,
    'parent_code': 441600
  },
  {
    'id': 2271,
    'region_name': '阳江市',
    'region_code': 441700,
    'parent_code': 440000
  },
  {
    'id': 2272,
    'region_name': '市辖区',
    'region_code': 441701,
    'parent_code': 441700
  },
  {
    'id': 2273,
    'region_name': '江城区',
    'region_code': 441702,
    'parent_code': 441700
  },
  {
    'id': 2274,
    'region_name': '阳西县',
    'region_code': 441721,
    'parent_code': 441700
  },
  {
    'id': 2275,
    'region_name': '阳东县',
    'region_code': 441723,
    'parent_code': 441700
  },
  {
    'id': 2276,
    'region_name': '阳春市',
    'region_code': 441781,
    'parent_code': 441700
  },
  {
    'id': 2277,
    'region_name': '清远市',
    'region_code': 441800,
    'parent_code': 440000
  },
  {
    'id': 2278,
    'region_name': '市辖区',
    'region_code': 441801,
    'parent_code': 441800
  },
  {
    'id': 2279,
    'region_name': '清城区',
    'region_code': 441802,
    'parent_code': 441800
  },
  {
    'id': 2280,
    'region_name': '佛冈县',
    'region_code': 441821,
    'parent_code': 441800
  },
  {
    'id': 2281,
    'region_name': '阳山县',
    'region_code': 441823,
    'parent_code': 441800
  },
  {
    'id': 2282,
    'region_name': '连山壮族瑶族自治县',
    'region_code': 441825,
    'parent_code': 441800
  },
  {
    'id': 2283,
    'region_name': '连南瑶族自治县',
    'region_code': 441826,
    'parent_code': 441800
  },
  {
    'id': 2284,
    'region_name': '清新县',
    'region_code': 441827,
    'parent_code': null
  },
  {
    'id': 2285,
    'region_name': '英德市',
    'region_code': 441881,
    'parent_code': 441800
  },
  {
    'id': 2286,
    'region_name': '连州市',
    'region_code': 441882,
    'parent_code': 441800
  },
  {
    'id': 2287,
    'region_name': '东莞市',
    'region_code': 441900,
    'parent_code': 440000
  },
  {
    'id': 2288,
    'region_name': '中山市',
    'region_code': 442000,
    'parent_code': 440000
  },
  {
    'id': 2289,
    'region_name': '潮州市',
    'region_code': 445100,
    'parent_code': 440000
  },
  {
    'id': 2290,
    'region_name': '市辖区',
    'region_code': 445101,
    'parent_code': 445100
  },
  {
    'id': 2291,
    'region_name': '湘桥区',
    'region_code': 445102,
    'parent_code': 445100
  },
  {
    'id': 2292,
    'region_name': '潮安县',
    'region_code': 445121,
    'parent_code': null
  },
  {
    'id': 2293,
    'region_name': '饶平县',
    'region_code': 445122,
    'parent_code': 445100
  },
  {
    'id': 2294,
    'region_name': '揭阳市',
    'region_code': 445200,
    'parent_code': 440000
  },
  {
    'id': 2295,
    'region_name': '市辖区',
    'region_code': 445201,
    'parent_code': 445200
  },
  {
    'id': 2296,
    'region_name': '榕城区',
    'region_code': 445202,
    'parent_code': 445200
  },
  {
    'id': 2297,
    'region_name': '揭东县',
    'region_code': 445221,
    'parent_code': null
  },
  {
    'id': 2298,
    'region_name': '揭西县',
    'region_code': 445222,
    'parent_code': 445200
  },
  {
    'id': 2299,
    'region_name': '惠来县',
    'region_code': 445224,
    'parent_code': 445200
  },
  {
    'id': 2300,
    'region_name': '普宁市',
    'region_code': 445281,
    'parent_code': 445200
  },
  {
    'id': 2301,
    'region_name': '云浮市',
    'region_code': 445300,
    'parent_code': 440000
  },
  {
    'id': 2302,
    'region_name': '市辖区',
    'region_code': 445301,
    'parent_code': 445300
  },
  {
    'id': 2303,
    'region_name': '云城区',
    'region_code': 445302,
    'parent_code': 445300
  },
  {
    'id': 2304,
    'region_name': '新兴县',
    'region_code': 445321,
    'parent_code': 445300
  },
  {
    'id': 2305,
    'region_name': '郁南县',
    'region_code': 445322,
    'parent_code': 445300
  },
  {
    'id': 2306,
    'region_name': '云安县',
    'region_code': 445323,
    'parent_code': null
  },
  {
    'id': 2307,
    'region_name': '罗定市',
    'region_code': 445381,
    'parent_code': 445300
  },
  {
    'id': 2308,
    'region_name': '广西壮族自治区',
    'region_code': 450000,
    'parent_code': 0
  },
  {
    'id': 2309,
    'region_name': '南宁市',
    'region_code': 450100,
    'parent_code': 450000
  },
  {
    'id': 2310,
    'region_name': '市辖区',
    'region_code': 450101,
    'parent_code': 450100
  },
  {
    'id': 2311,
    'region_name': '兴宁区',
    'region_code': 450102,
    'parent_code': 450100
  },
  {
    'id': 2312,
    'region_name': '新城区',
    'region_code': 450103,
    'parent_code': 450100
  },
  {
    'id': 2313,
    'region_name': '城北区',
    'region_code': 450104,
    'parent_code': null
  },
  {
    'id': 2314,
    'region_name': '江南区',
    'region_code': 450105,
    'parent_code': 450100
  },
  {
    'id': 2315,
    'region_name': '永新区',
    'region_code': 450106,
    'parent_code': null
  },
  {
    'id': 2316,
    'region_name': '邕宁县',
    'region_code': 450121,
    'parent_code': null
  },
  {
    'id': 2317,
    'region_name': '武鸣县',
    'region_code': 450122,
    'parent_code': 450100
  },
  {
    'id': 2318,
    'region_name': '隆安县',
    'region_code': 450123,
    'parent_code': 450100
  },
  {
    'id': 2319,
    'region_name': '马山县',
    'region_code': 450124,
    'parent_code': 450100
  },
  {
    'id': 2320,
    'region_name': '上林县',
    'region_code': 450125,
    'parent_code': 450100
  },
  {
    'id': 2321,
    'region_name': '宾阳县',
    'region_code': 450126,
    'parent_code': 450100
  },
  {
    'id': 2322,
    'region_name': '横县',
    'region_code': 450127,
    'parent_code': 450100
  },
  {
    'id': 2323,
    'region_name': '柳州市',
    'region_code': 450200,
    'parent_code': 450000
  },
  {
    'id': 2324,
    'region_name': '市辖区',
    'region_code': 450201,
    'parent_code': 450200
  },
  {
    'id': 2325,
    'region_name': '城中区',
    'region_code': 450202,
    'parent_code': 450200
  },
  {
    'id': 2326,
    'region_name': '鱼峰区',
    'region_code': 450203,
    'parent_code': 450200
  },
  {
    'id': 2327,
    'region_name': '柳南区',
    'region_code': 450204,
    'parent_code': 450200
  },
  {
    'id': 2328,
    'region_name': '柳北区',
    'region_code': 450205,
    'parent_code': 450200
  },
  {
    'id': 2329,
    'region_name': '柳江县',
    'region_code': 450221,
    'parent_code': 450200
  },
  {
    'id': 2330,
    'region_name': '柳城县',
    'region_code': 450222,
    'parent_code': 450200
  },
  {
    'id': 2331,
    'region_name': '鹿寨县',
    'region_code': 450223,
    'parent_code': 450200
  },
  {
    'id': 2332,
    'region_name': '融安县',
    'region_code': 450224,
    'parent_code': 450200
  },
  {
    'id': 2333,
    'region_name': '融水苗族自治县',
    'region_code': 450225,
    'parent_code': 450200
  },
  {
    'id': 2334,
    'region_name': '三江侗族自治县',
    'region_code': 450226,
    'parent_code': 450200
  },
  {
    'id': 2335,
    'region_name': '桂林市',
    'region_code': 450300,
    'parent_code': 450000
  },
  {
    'id': 2336,
    'region_name': '市辖区',
    'region_code': 450301,
    'parent_code': 450300
  },
  {
    'id': 2337,
    'region_name': '秀峰区',
    'region_code': 450302,
    'parent_code': 450300
  },
  {
    'id': 2338,
    'region_name': '叠彩区',
    'region_code': 450303,
    'parent_code': 450300
  },
  {
    'id': 2339,
    'region_name': '象山区',
    'region_code': 450304,
    'parent_code': 450300
  },
  {
    'id': 2340,
    'region_name': '七星区',
    'region_code': 450305,
    'parent_code': 450300
  },
  {
    'id': 2341,
    'region_name': '雁山区',
    'region_code': 450311,
    'parent_code': 450300
  },
  {
    'id': 2342,
    'region_name': '阳朔县',
    'region_code': 450321,
    'parent_code': 450300
  },
  {
    'id': 2343,
    'region_name': '临桂县',
    'region_code': 450322,
    'parent_code': null
  },
  {
    'id': 2344,
    'region_name': '灵川县',
    'region_code': 450323,
    'parent_code': 450300
  },
  {
    'id': 2345,
    'region_name': '全州县',
    'region_code': 450324,
    'parent_code': 450300
  },
  {
    'id': 2346,
    'region_name': '兴安县',
    'region_code': 450325,
    'parent_code': 450300
  },
  {
    'id': 2347,
    'region_name': '永福县',
    'region_code': 450326,
    'parent_code': 450300
  },
  {
    'id': 2348,
    'region_name': '灌阳县',
    'region_code': 450327,
    'parent_code': 450300
  },
  {
    'id': 2349,
    'region_name': '龙胜各族自治县',
    'region_code': 450328,
    'parent_code': 450300
  },
  {
    'id': 2350,
    'region_name': '资源县',
    'region_code': 450329,
    'parent_code': 450300
  },
  {
    'id': 2351,
    'region_name': '平乐县',
    'region_code': 450330,
    'parent_code': 450300
  },
  {
    'id': 2352,
    'region_name': '荔蒲县',
    'region_code': 450331,
    'parent_code': 450300
  },
  {
    'id': 2353,
    'region_name': '恭城瑶族自治县',
    'region_code': 450332,
    'parent_code': 450300
  },
  {
    'id': 2354,
    'region_name': '梧州市',
    'region_code': 450400,
    'parent_code': 450000
  },
  {
    'id': 2355,
    'region_name': '市辖区',
    'region_code': 450401,
    'parent_code': 450400
  },
  {
    'id': 2356,
    'region_name': '万秀区',
    'region_code': 450403,
    'parent_code': 450400
  },
  {
    'id': 2357,
    'region_name': '蝶山区',
    'region_code': 450404,
    'parent_code': null
  },
  {
    'id': 2358,
    'region_name': '长洲区',
    'region_code': 450405,
    'parent_code': 450400
  },
  {
    'id': 2359,
    'region_name': '苍梧县',
    'region_code': 450421,
    'parent_code': 450400
  },
  {
    'id': 2360,
    'region_name': '藤县',
    'region_code': 450422,
    'parent_code': 450400
  },
  {
    'id': 2361,
    'region_name': '蒙山县',
    'region_code': 450423,
    'parent_code': 450400
  },
  {
    'id': 2362,
    'region_name': '岑溪市',
    'region_code': 450481,
    'parent_code': 450400
  },
  {
    'id': 2363,
    'region_name': '北海市',
    'region_code': 450500,
    'parent_code': 450000
  },
  {
    'id': 2364,
    'region_name': '市辖区',
    'region_code': 450501,
    'parent_code': 450500
  },
  {
    'id': 2365,
    'region_name': '海城区',
    'region_code': 450502,
    'parent_code': 450500
  },
  {
    'id': 2366,
    'region_name': '银海区',
    'region_code': 450503,
    'parent_code': 450500
  },
  {
    'id': 2367,
    'region_name': '铁山港区',
    'region_code': 450512,
    'parent_code': 450500
  },
  {
    'id': 2368,
    'region_name': '合浦县',
    'region_code': 450521,
    'parent_code': 450500
  },
  {
    'id': 2369,
    'region_name': '防城港市',
    'region_code': 450600,
    'parent_code': 450000
  },
  {
    'id': 2370,
    'region_name': '市辖区',
    'region_code': 450601,
    'parent_code': 450600
  },
  {
    'id': 2371,
    'region_name': '港口区',
    'region_code': 450602,
    'parent_code': 450600
  },
  {
    'id': 2372,
    'region_name': '防城区',
    'region_code': 450603,
    'parent_code': 450600
  },
  {
    'id': 2373,
    'region_name': '上思县',
    'region_code': 450621,
    'parent_code': 450600
  },
  {
    'id': 2374,
    'region_name': '东兴市',
    'region_code': 450681,
    'parent_code': 450600
  },
  {
    'id': 2375,
    'region_name': '钦州市',
    'region_code': 450700,
    'parent_code': 450000
  },
  {
    'id': 2376,
    'region_name': '市辖区',
    'region_code': 450701,
    'parent_code': 450700
  },
  {
    'id': 2377,
    'region_name': '钦南区',
    'region_code': 450702,
    'parent_code': 450700
  },
  {
    'id': 2378,
    'region_name': '钦北区',
    'region_code': 450703,
    'parent_code': 450700
  },
  {
    'id': 2379,
    'region_name': '灵山县',
    'region_code': 450721,
    'parent_code': 450700
  },
  {
    'id': 2380,
    'region_name': '浦北县',
    'region_code': 450722,
    'parent_code': 450700
  },
  {
    'id': 2381,
    'region_name': '贵港市',
    'region_code': 450800,
    'parent_code': 450000
  },
  {
    'id': 2382,
    'region_name': '市辖区',
    'region_code': 450801,
    'parent_code': 450800
  },
  {
    'id': 2383,
    'region_name': '港北区',
    'region_code': 450802,
    'parent_code': 450800
  },
  {
    'id': 2384,
    'region_name': '港南区',
    'region_code': 450803,
    'parent_code': 450800
  },
  {
    'id': 2385,
    'region_name': '覃塘区',
    'region_code': 450804,
    'parent_code': 450800
  },
  {
    'id': 2386,
    'region_name': '平南县',
    'region_code': 450821,
    'parent_code': 450800
  },
  {
    'id': 2387,
    'region_name': '桂平市',
    'region_code': 450881,
    'parent_code': 450800
  },
  {
    'id': 2388,
    'region_name': '玉林市',
    'region_code': 450900,
    'parent_code': 450000
  },
  {
    'id': 2389,
    'region_name': '市辖区',
    'region_code': 450901,
    'parent_code': 450900
  },
  {
    'id': 2390,
    'region_name': '玉州区',
    'region_code': 450902,
    'parent_code': 450900
  },
  {
    'id': 2391,
    'region_name': '容县',
    'region_code': 450921,
    'parent_code': 450900
  },
  {
    'id': 2392,
    'region_name': '陆川县',
    'region_code': 450922,
    'parent_code': 450900
  },
  {
    'id': 2393,
    'region_name': '博白县',
    'region_code': 450923,
    'parent_code': 450900
  },
  {
    'id': 2394,
    'region_name': '兴业县',
    'region_code': 450924,
    'parent_code': 450900
  },
  {
    'id': 2395,
    'region_name': '北流市',
    'region_code': 450981,
    'parent_code': 450900
  },
  {
    'id': 2396,
    'region_name': '百色市',
    'region_code': 451000,
    'parent_code': 450000
  },
  {
    'id': 2397,
    'region_name': '市辖区',
    'region_code': 451001,
    'parent_code': 451000
  },
  {
    'id': 2398,
    'region_name': '右江区',
    'region_code': 451002,
    'parent_code': 451000
  },
  {
    'id': 2399,
    'region_name': '田阳县',
    'region_code': 451021,
    'parent_code': 451000
  },
  {
    'id': 2400,
    'region_name': '田东县',
    'region_code': 451022,
    'parent_code': 451000
  },
  {
    'id': 2401,
    'region_name': '平果县',
    'region_code': 451023,
    'parent_code': 451000
  },
  {
    'id': 2402,
    'region_name': '德保县',
    'region_code': 451024,
    'parent_code': 451000
  },
  {
    'id': 2403,
    'region_name': '靖西县',
    'region_code': 451025,
    'parent_code': 451000
  },
  {
    'id': 2404,
    'region_name': '那坡县',
    'region_code': 451026,
    'parent_code': 451000
  },
  {
    'id': 2405,
    'region_name': '凌云县',
    'region_code': 451027,
    'parent_code': 451000
  },
  {
    'id': 2406,
    'region_name': '乐业县',
    'region_code': 451028,
    'parent_code': 451000
  },
  {
    'id': 2407,
    'region_name': '田林县',
    'region_code': 451029,
    'parent_code': 451000
  },
  {
    'id': 2408,
    'region_name': '西林县',
    'region_code': 451030,
    'parent_code': 451000
  },
  {
    'id': 2409,
    'region_name': '隆林各族自治县',
    'region_code': 451031,
    'parent_code': 451000
  },
  {
    'id': 2410,
    'region_name': '贺州市',
    'region_code': 451100,
    'parent_code': 450000
  },
  {
    'id': 2411,
    'region_name': '市辖区',
    'region_code': 451101,
    'parent_code': 451100
  },
  {
    'id': 2412,
    'region_name': '八步区',
    'region_code': 451102,
    'parent_code': 451100
  },
  {
    'id': 2413,
    'region_name': '昭平县',
    'region_code': 451121,
    'parent_code': 451100
  },
  {
    'id': 2414,
    'region_name': '钟山县',
    'region_code': 451122,
    'parent_code': 451100
  },
  {
    'id': 2415,
    'region_name': '富川瑶族自治县',
    'region_code': 451123,
    'parent_code': 451100
  },
  {
    'id': 2416,
    'region_name': '河池市',
    'region_code': 451200,
    'parent_code': 450000
  },
  {
    'id': 2417,
    'region_name': '市辖区',
    'region_code': 451201,
    'parent_code': 451200
  },
  {
    'id': 2418,
    'region_name': '金城江区',
    'region_code': 451202,
    'parent_code': 451200
  },
  {
    'id': 2419,
    'region_name': '南丹县',
    'region_code': 451221,
    'parent_code': 451200
  },
  {
    'id': 2420,
    'region_name': '天峨县',
    'region_code': 451222,
    'parent_code': 451200
  },
  {
    'id': 2421,
    'region_name': '凤山县',
    'region_code': 451223,
    'parent_code': 451200
  },
  {
    'id': 2422,
    'region_name': '东兰县',
    'region_code': 451224,
    'parent_code': 451200
  },
  {
    'id': 2423,
    'region_name': '罗城仫佬族自治县',
    'region_code': 451225,
    'parent_code': 451200
  },
  {
    'id': 2424,
    'region_name': '环江毛南族自治县',
    'region_code': 451226,
    'parent_code': 451200
  },
  {
    'id': 2425,
    'region_name': '巴马瑶族自治县',
    'region_code': 451227,
    'parent_code': 451200
  },
  {
    'id': 2426,
    'region_name': '都安瑶族自治县',
    'region_code': 451228,
    'parent_code': 451200
  },
  {
    'id': 2427,
    'region_name': '大化瑶族自治县',
    'region_code': 451229,
    'parent_code': 451200
  },
  {
    'id': 2428,
    'region_name': '宜州市',
    'region_code': 451281,
    'parent_code': 451200
  },
  {
    'id': 2429,
    'region_name': '来宾市',
    'region_code': 451300,
    'parent_code': 450000
  },
  {
    'id': 2430,
    'region_name': '市辖区',
    'region_code': 451301,
    'parent_code': 451300
  },
  {
    'id': 2431,
    'region_name': '兴宾区',
    'region_code': 451302,
    'parent_code': 451300
  },
  {
    'id': 2432,
    'region_name': '忻城县',
    'region_code': 451321,
    'parent_code': 451300
  },
  {
    'id': 2433,
    'region_name': '象州县',
    'region_code': 451322,
    'parent_code': 451300
  },
  {
    'id': 2434,
    'region_name': '武宣县',
    'region_code': 451323,
    'parent_code': 451300
  },
  {
    'id': 2435,
    'region_name': '金秀瑶族自治县',
    'region_code': 451324,
    'parent_code': 451300
  },
  {
    'id': 2436,
    'region_name': '合山市',
    'region_code': 451381,
    'parent_code': 451300
  },
  {
    'id': 2437,
    'region_name': '崇左市',
    'region_code': 451400,
    'parent_code': 450000
  },
  {
    'id': 2438,
    'region_name': '市辖区',
    'region_code': 451401,
    'parent_code': 451400
  },
  {
    'id': 2439,
    'region_name': '江洲区',
    'region_code': 451402,
    'parent_code': 451400
  },
  {
    'id': 2440,
    'region_name': '扶绥县',
    'region_code': 451421,
    'parent_code': 451400
  },
  {
    'id': 2441,
    'region_name': '宁明县',
    'region_code': 451422,
    'parent_code': 451400
  },
  {
    'id': 2442,
    'region_name': '龙州县',
    'region_code': 451423,
    'parent_code': 451400
  },
  {
    'id': 2443,
    'region_name': '大新县',
    'region_code': 451424,
    'parent_code': 451400
  },
  {
    'id': 2444,
    'region_name': '天等县',
    'region_code': 451425,
    'parent_code': 451400
  },
  {
    'id': 2445,
    'region_name': '凭祥市',
    'region_code': 451481,
    'parent_code': 451400
  },
  {
    'id': 2446,
    'region_name': '海南省',
    'region_code': 460000,
    'parent_code': 0
  },
  {
    'id': 2447,
    'region_name': '海口市',
    'region_code': 460100,
    'parent_code': 460000
  },
  {
    'id': 2448,
    'region_name': '市辖区',
    'region_code': 460101,
    'parent_code': 460100
  },
  {
    'id': 2449,
    'region_name': '秀英区',
    'region_code': 460105,
    'parent_code': 460100
  },
  {
    'id': 2450,
    'region_name': '龙华区',
    'region_code': 460106,
    'parent_code': 460100
  },
  {
    'id': 2451,
    'region_name': '琼山区',
    'region_code': 460107,
    'parent_code': 460100
  },
  {
    'id': 2452,
    'region_name': '美兰区',
    'region_code': 460108,
    'parent_code': 460100
  },
  {
    'id': 2453,
    'region_name': '三亚市',
    'region_code': 460200,
    'parent_code': 460000
  },
  {
    'id': 2454,
    'region_name': '市辖区',
    'region_code': 460201,
    'parent_code': 460200
  },
  {
    'id': 2455,
    'region_name': '省直辖县级行政单位',
    'region_code': 469000,
    'parent_code': 460000
  },
  {
    'id': 2456,
    'region_name': '五指山市',
    'region_code': 469001,
    'parent_code': 469000
  },
  {
    'id': 2457,
    'region_name': '琼海市',
    'region_code': 469002,
    'parent_code': 469000
  },
  {
    'id': 2458,
    'region_name': '儋州市',
    'region_code': 469003,
    'parent_code': 469000
  },
  {
    'id': 2459,
    'region_name': '文昌市',
    'region_code': 469005,
    'parent_code': 469000
  },
  {
    'id': 2460,
    'region_name': '万宁市',
    'region_code': 469006,
    'parent_code': 469000
  },
  {
    'id': 2461,
    'region_name': '东方市',
    'region_code': 469007,
    'parent_code': 469000
  },
  {
    'id': 2462,
    'region_name': '定安县',
    'region_code': 469025,
    'parent_code': 469000
  },
  {
    'id': 2463,
    'region_name': '屯昌县',
    'region_code': 469026,
    'parent_code': 469000
  },
  {
    'id': 2464,
    'region_name': '澄迈县',
    'region_code': 469027,
    'parent_code': 469000
  },
  {
    'id': 2465,
    'region_name': '临高县',
    'region_code': 469028,
    'parent_code': 469000
  },
  {
    'id': 2466,
    'region_name': '白沙黎族自治县',
    'region_code': 469030,
    'parent_code': 469000
  },
  {
    'id': 2467,
    'region_name': '昌江黎族自治县',
    'region_code': 469031,
    'parent_code': null
  },
  {
    'id': 2468,
    'region_name': '乐东黎族自治县',
    'region_code': 469033,
    'parent_code': null
  },
  {
    'id': 2469,
    'region_name': '陵水黎族自治县',
    'region_code': 469034,
    'parent_code': null
  },
  {
    'id': 2470,
    'region_name': '保亭黎族苗族自治县',
    'region_code': 469035,
    'parent_code': null
  },
  {
    'id': 2471,
    'region_name': '琼中黎族苗族自治县',
    'region_code': 469036,
    'parent_code': null
  },
  {
    'id': 2472,
    'region_name': '西沙群岛',
    'region_code': 469037,
    'parent_code': null
  },
  {
    'id': 2473,
    'region_name': '南沙群岛',
    'region_code': 469038,
    'parent_code': null
  },
  {
    'id': 2474,
    'region_name': '中沙群岛的岛礁及其海域',
    'region_code': 469039,
    'parent_code': null
  },
  {
    'id': 2475,
    'region_name': '重庆市',
    'region_code': 500000,
    'parent_code': 0
  },
  {
    'id': 2476,
    'region_name': '市辖区',
    'region_code': 500100,
    'parent_code': 500000
  },
  {
    'id': 2477,
    'region_name': '万州区',
    'region_code': 500101,
    'parent_code': 500100
  },
  {
    'id': 2478,
    'region_name': '涪陵区',
    'region_code': 500102,
    'parent_code': 500100
  },
  {
    'id': 2479,
    'region_name': '渝中区',
    'region_code': 500103,
    'parent_code': 500100
  },
  {
    'id': 2480,
    'region_name': '大渡口区',
    'region_code': 500104,
    'parent_code': 500100
  },
  {
    'id': 2481,
    'region_name': '江北区',
    'region_code': 500105,
    'parent_code': 500100
  },
  {
    'id': 2482,
    'region_name': '沙坪坝区',
    'region_code': 500106,
    'parent_code': 500100
  },
  {
    'id': 2483,
    'region_name': '九龙坡区',
    'region_code': 500107,
    'parent_code': 500100
  },
  {
    'id': 2484,
    'region_name': '南岸区',
    'region_code': 500108,
    'parent_code': 500100
  },
  {
    'id': 2485,
    'region_name': '北碚区',
    'region_code': 500109,
    'parent_code': 500100
  },
  {
    'id': 2486,
    'region_name': '万盛区',
    'region_code': 500110,
    'parent_code': 500100
  },
  {
    'id': 2487,
    'region_name': '双桥区',
    'region_code': 500111,
    'parent_code': 500100
  },
  {
    'id': 2488,
    'region_name': '渝北区',
    'region_code': 500112,
    'parent_code': 500100
  },
  {
    'id': 2489,
    'region_name': '巴南区',
    'region_code': 500113,
    'parent_code': 500100
  },
  {
    'id': 2490,
    'region_name': '黔江区',
    'region_code': 500114,
    'parent_code': 500100
  },
  {
    'id': 2491,
    'region_name': '长寿区',
    'region_code': 500115,
    'parent_code': 500100
  },
  {
    'id': 2492,
    'region_name': '县',
    'region_code': 500200,
    'parent_code': 500000
  },
  {
    'id': 2493,
    'region_name': '綦江县',
    'region_code': 500222,
    'parent_code': null
  },
  {
    'id': 2494,
    'region_name': '潼南县',
    'region_code': 500223,
    'parent_code': 500200
  },
  {
    'id': 2495,
    'region_name': '铜梁县',
    'region_code': 500224,
    'parent_code': null
  },
  {
    'id': 2496,
    'region_name': '大足县',
    'region_code': 500225,
    'parent_code': null
  },
  {
    'id': 2497,
    'region_name': '荣昌县',
    'region_code': 500226,
    'parent_code': 500200
  },
  {
    'id': 2498,
    'region_name': '璧山县',
    'region_code': 500227,
    'parent_code': null
  },
  {
    'id': 2499,
    'region_name': '梁平县',
    'region_code': 500228,
    'parent_code': 500200
  },
  {
    'id': 2500,
    'region_name': '城口县',
    'region_code': 500229,
    'parent_code': 500200
  },
  {
    'id': 2501,
    'region_name': '丰都县',
    'region_code': 500230,
    'parent_code': 500200
  },
  {
    'id': 2502,
    'region_name': '垫江县',
    'region_code': 500231,
    'parent_code': 500200
  },
  {
    'id': 2503,
    'region_name': '武隆县',
    'region_code': 500232,
    'parent_code': 500200
  },
  {
    'id': 2504,
    'region_name': '忠县',
    'region_code': 500233,
    'parent_code': 500200
  },
  {
    'id': 2505,
    'region_name': '开县',
    'region_code': 500234,
    'parent_code': 500200
  },
  {
    'id': 2506,
    'region_name': '云阳县',
    'region_code': 500235,
    'parent_code': 500200
  },
  {
    'id': 2507,
    'region_name': '奉节县',
    'region_code': 500236,
    'parent_code': 500200
  },
  {
    'id': 2508,
    'region_name': '巫山县',
    'region_code': 500237,
    'parent_code': 500200
  },
  {
    'id': 2509,
    'region_name': '巫溪县',
    'region_code': 500238,
    'parent_code': 500200
  },
  {
    'id': 2510,
    'region_name': '石柱土家族自治县',
    'region_code': 500240,
    'parent_code': 500200
  },
  {
    'id': 2511,
    'region_name': '秀山土家族苗族自治县',
    'region_code': 500241,
    'parent_code': 500200
  },
  {
    'id': 2512,
    'region_name': '酉阳土家族苗族自治县',
    'region_code': 500242,
    'parent_code': 500200
  },
  {
    'id': 2513,
    'region_name': '彭水苗族土家族自治县',
    'region_code': 500243,
    'parent_code': 500200
  },
  {
    'id': 2514,
    'region_name': '市',
    'region_code': 500300,
    'parent_code': null
  },
  {
    'id': 2515,
    'region_name': '江津市',
    'region_code': 500381,
    'parent_code': null
  },
  {
    'id': 2516,
    'region_name': '合川市',
    'region_code': 500382,
    'parent_code': null
  },
  {
    'id': 2517,
    'region_name': '永川市',
    'region_code': 500383,
    'parent_code': null
  },
  {
    'id': 2518,
    'region_name': '南川市',
    'region_code': 500384,
    'parent_code': null
  },
  {
    'id': 2519,
    'region_name': '四川省',
    'region_code': 510000,
    'parent_code': 0
  },
  {
    'id': 2520,
    'region_name': '成都市',
    'region_code': 510100,
    'parent_code': 510000
  },
  {
    'id': 2521,
    'region_name': '市辖区',
    'region_code': 510101,
    'parent_code': 510100
  },
  {
    'id': 2522,
    'region_name': '锦江区',
    'region_code': 510104,
    'parent_code': 510100
  },
  {
    'id': 2523,
    'region_name': '青羊区',
    'region_code': 510105,
    'parent_code': 510100
  },
  {
    'id': 2524,
    'region_name': '金牛区',
    'region_code': 510106,
    'parent_code': 510100
  },
  {
    'id': 2525,
    'region_name': '武侯区',
    'region_code': 510107,
    'parent_code': 510100
  },
  {
    'id': 2526,
    'region_name': '成华区',
    'region_code': 510108,
    'parent_code': 510100
  },
  {
    'id': 2527,
    'region_name': '龙泉驿区',
    'region_code': 510112,
    'parent_code': 510100
  },
  {
    'id': 2528,
    'region_name': '青白江区',
    'region_code': 510113,
    'parent_code': 510100
  },
  {
    'id': 2529,
    'region_name': '新都区',
    'region_code': 510114,
    'parent_code': 510100
  },
  {
    'id': 2530,
    'region_name': '温江区',
    'region_code': 510115,
    'parent_code': 510100
  },
  {
    'id': 2531,
    'region_name': '金堂县',
    'region_code': 510121,
    'parent_code': 510100
  },
  {
    'id': 2532,
    'region_name': '双流县',
    'region_code': 510122,
    'parent_code': 510100
  },
  {
    'id': 2533,
    'region_name': '郫县',
    'region_code': 510124,
    'parent_code': 510100
  },
  {
    'id': 2534,
    'region_name': '大邑县',
    'region_code': 510129,
    'parent_code': 510100
  },
  {
    'id': 2535,
    'region_name': '蒲江县',
    'region_code': 510131,
    'parent_code': 510100
  },
  {
    'id': 2536,
    'region_name': '新津县',
    'region_code': 510132,
    'parent_code': 510100
  },
  {
    'id': 2537,
    'region_name': '都江堰市',
    'region_code': 510181,
    'parent_code': 510100
  },
  {
    'id': 2538,
    'region_name': '彭州市',
    'region_code': 510182,
    'parent_code': 510100
  },
  {
    'id': 2539,
    'region_name': '邛崃市',
    'region_code': 510183,
    'parent_code': 510100
  },
  {
    'id': 2540,
    'region_name': '崇州市',
    'region_code': 510184,
    'parent_code': 510100
  },
  {
    'id': 2541,
    'region_name': '自贡市',
    'region_code': 510300,
    'parent_code': 510000
  },
  {
    'id': 2542,
    'region_name': '市辖区',
    'region_code': 510301,
    'parent_code': 510300
  },
  {
    'id': 2543,
    'region_name': '自流井区',
    'region_code': 510302,
    'parent_code': 510300
  },
  {
    'id': 2544,
    'region_name': '贡井区',
    'region_code': 510303,
    'parent_code': 510300
  },
  {
    'id': 2545,
    'region_name': '大安区',
    'region_code': 510304,
    'parent_code': 510300
  },
  {
    'id': 2546,
    'region_name': '沿滩区',
    'region_code': 510311,
    'parent_code': 510300
  },
  {
    'id': 2547,
    'region_name': '荣县',
    'region_code': 510321,
    'parent_code': 510300
  },
  {
    'id': 2548,
    'region_name': '富顺县',
    'region_code': 510322,
    'parent_code': 510300
  },
  {
    'id': 2549,
    'region_name': '攀枝花市',
    'region_code': 510400,
    'parent_code': 510000
  },
  {
    'id': 2550,
    'region_name': '市辖区',
    'region_code': 510401,
    'parent_code': 510400
  },
  {
    'id': 2551,
    'region_name': '东区',
    'region_code': 510402,
    'parent_code': 510400
  },
  {
    'id': 2552,
    'region_name': '西区',
    'region_code': 510403,
    'parent_code': 510400
  },
  {
    'id': 2553,
    'region_name': '仁和区',
    'region_code': 510411,
    'parent_code': 510400
  },
  {
    'id': 2554,
    'region_name': '米易县',
    'region_code': 510421,
    'parent_code': 510400
  },
  {
    'id': 2555,
    'region_name': '盐边县',
    'region_code': 510422,
    'parent_code': 510400
  },
  {
    'id': 2556,
    'region_name': '泸州市',
    'region_code': 510500,
    'parent_code': 510000
  },
  {
    'id': 2557,
    'region_name': '市辖区',
    'region_code': 510501,
    'parent_code': 510500
  },
  {
    'id': 2558,
    'region_name': '江阳区',
    'region_code': 510502,
    'parent_code': 510500
  },
  {
    'id': 2559,
    'region_name': '纳溪区',
    'region_code': 510503,
    'parent_code': 510500
  },
  {
    'id': 2560,
    'region_name': '龙马潭区',
    'region_code': 510504,
    'parent_code': 510500
  },
  {
    'id': 2561,
    'region_name': '泸县',
    'region_code': 510521,
    'parent_code': 510500
  },
  {
    'id': 2562,
    'region_name': '合江县',
    'region_code': 510522,
    'parent_code': 510500
  },
  {
    'id': 2563,
    'region_name': '叙永县',
    'region_code': 510524,
    'parent_code': 510500
  },
  {
    'id': 2564,
    'region_name': '古蔺县',
    'region_code': 510525,
    'parent_code': 510500
  },
  {
    'id': 2565,
    'region_name': '德阳市',
    'region_code': 510600,
    'parent_code': 510000
  },
  {
    'id': 2566,
    'region_name': '市辖区',
    'region_code': 510601,
    'parent_code': 510600
  },
  {
    'id': 2567,
    'region_name': '旌阳区',
    'region_code': 510603,
    'parent_code': 510600
  },
  {
    'id': 2568,
    'region_name': '中江县',
    'region_code': 510623,
    'parent_code': 510600
  },
  {
    'id': 2569,
    'region_name': '罗江县',
    'region_code': 510626,
    'parent_code': 510600
  },
  {
    'id': 2570,
    'region_name': '广汉市',
    'region_code': 510681,
    'parent_code': 510600
  },
  {
    'id': 2571,
    'region_name': '什邡市',
    'region_code': 510682,
    'parent_code': 510600
  },
  {
    'id': 2572,
    'region_name': '绵竹市',
    'region_code': 510683,
    'parent_code': 510600
  },
  {
    'id': 2573,
    'region_name': '绵阳市',
    'region_code': 510700,
    'parent_code': 510000
  },
  {
    'id': 2574,
    'region_name': '市辖区',
    'region_code': 510701,
    'parent_code': 510700
  },
  {
    'id': 2575,
    'region_name': '涪城区',
    'region_code': 510703,
    'parent_code': 510700
  },
  {
    'id': 2576,
    'region_name': '游仙区',
    'region_code': 510704,
    'parent_code': 510700
  },
  {
    'id': 2577,
    'region_name': '三台县',
    'region_code': 510722,
    'parent_code': 510700
  },
  {
    'id': 2578,
    'region_name': '盐亭县',
    'region_code': 510723,
    'parent_code': 510700
  },
  {
    'id': 2579,
    'region_name': '安县',
    'region_code': 510724,
    'parent_code': 510700
  },
  {
    'id': 2580,
    'region_name': '梓潼县',
    'region_code': 510725,
    'parent_code': 510700
  },
  {
    'id': 2581,
    'region_name': '北川羌族自治县',
    'region_code': 510726,
    'parent_code': 510700
  },
  {
    'id': 2582,
    'region_name': '平武县',
    'region_code': 510727,
    'parent_code': 510700
  },
  {
    'id': 2583,
    'region_name': '江油市',
    'region_code': 510781,
    'parent_code': 510700
  },
  {
    'id': 2584,
    'region_name': '广元市',
    'region_code': 510800,
    'parent_code': 510000
  },
  {
    'id': 2585,
    'region_name': '市辖区',
    'region_code': 510801,
    'parent_code': 510800
  },
  {
    'id': 2586,
    'region_name': '市中区',
    'region_code': 510802,
    'parent_code': 510800
  },
  {
    'id': 2587,
    'region_name': '元坝区',
    'region_code': 510811,
    'parent_code': 510800
  },
  {
    'id': 2588,
    'region_name': '朝天区',
    'region_code': 510812,
    'parent_code': 510800
  },
  {
    'id': 2589,
    'region_name': '旺苍县',
    'region_code': 510821,
    'parent_code': 510800
  },
  {
    'id': 2590,
    'region_name': '青川县',
    'region_code': 510822,
    'parent_code': 510800
  },
  {
    'id': 2591,
    'region_name': '剑阁县',
    'region_code': 510823,
    'parent_code': 510800
  },
  {
    'id': 2592,
    'region_name': '苍溪县',
    'region_code': 510824,
    'parent_code': 510800
  },
  {
    'id': 2593,
    'region_name': '遂宁市',
    'region_code': 510900,
    'parent_code': 510000
  },
  {
    'id': 2594,
    'region_name': '市辖区',
    'region_code': 510901,
    'parent_code': 510900
  },
  {
    'id': 2595,
    'region_name': '船山区',
    'region_code': 510903,
    'parent_code': 510900
  },
  {
    'id': 2596,
    'region_name': '安居区',
    'region_code': 510904,
    'parent_code': 510900
  },
  {
    'id': 2597,
    'region_name': '蓬溪县',
    'region_code': 510921,
    'parent_code': 510900
  },
  {
    'id': 2598,
    'region_name': '射洪县',
    'region_code': 510922,
    'parent_code': 510900
  },
  {
    'id': 2599,
    'region_name': '大英县',
    'region_code': 510923,
    'parent_code': 510900
  },
  {
    'id': 2600,
    'region_name': '内江市',
    'region_code': 511000,
    'parent_code': 510000
  },
  {
    'id': 2601,
    'region_name': '市辖区',
    'region_code': 511001,
    'parent_code': 511000
  },
  {
    'id': 2602,
    'region_name': '市中区',
    'region_code': 511002,
    'parent_code': 511000
  },
  {
    'id': 2603,
    'region_name': '东兴区',
    'region_code': 511011,
    'parent_code': 511000
  },
  {
    'id': 2604,
    'region_name': '威远县',
    'region_code': 511024,
    'parent_code': 511000
  },
  {
    'id': 2605,
    'region_name': '资中县',
    'region_code': 511025,
    'parent_code': 511000
  },
  {
    'id': 2606,
    'region_name': '隆昌县',
    'region_code': 511028,
    'parent_code': 511000
  },
  {
    'id': 2607,
    'region_name': '乐山市',
    'region_code': 511100,
    'parent_code': 510000
  },
  {
    'id': 2608,
    'region_name': '市辖区',
    'region_code': 511101,
    'parent_code': 511100
  },
  {
    'id': 2609,
    'region_name': '市中区',
    'region_code': 511102,
    'parent_code': 511100
  },
  {
    'id': 2610,
    'region_name': '沙湾区',
    'region_code': 511111,
    'parent_code': 511100
  },
  {
    'id': 2611,
    'region_name': '五通桥区',
    'region_code': 511112,
    'parent_code': 511100
  },
  {
    'id': 2612,
    'region_name': '金口河区',
    'region_code': 511113,
    'parent_code': 511100
  },
  {
    'id': 2613,
    'region_name': '犍为县',
    'region_code': 511123,
    'parent_code': 511100
  },
  {
    'id': 2614,
    'region_name': '井研县',
    'region_code': 511124,
    'parent_code': 511100
  },
  {
    'id': 2615,
    'region_name': '夹江县',
    'region_code': 511126,
    'parent_code': 511100
  },
  {
    'id': 2616,
    'region_name': '沐川县',
    'region_code': 511129,
    'parent_code': 511100
  },
  {
    'id': 2617,
    'region_name': '峨边彝族自治县',
    'region_code': 511132,
    'parent_code': 511100
  },
  {
    'id': 2618,
    'region_name': '马边彝族自治县',
    'region_code': 511133,
    'parent_code': 511100
  },
  {
    'id': 2619,
    'region_name': '峨眉山市',
    'region_code': 511181,
    'parent_code': 511100
  },
  {
    'id': 2620,
    'region_name': '南充市',
    'region_code': 511300,
    'parent_code': 510000
  },
  {
    'id': 2621,
    'region_name': '市辖区',
    'region_code': 511301,
    'parent_code': 511300
  },
  {
    'id': 2622,
    'region_name': '顺庆区',
    'region_code': 511302,
    'parent_code': 511300
  },
  {
    'id': 2623,
    'region_name': '高坪区',
    'region_code': 511303,
    'parent_code': 511300
  },
  {
    'id': 2624,
    'region_name': '嘉陵区',
    'region_code': 511304,
    'parent_code': 511300
  },
  {
    'id': 2625,
    'region_name': '南部县',
    'region_code': 511321,
    'parent_code': 511300
  },
  {
    'id': 2626,
    'region_name': '营山县',
    'region_code': 511322,
    'parent_code': 511300
  },
  {
    'id': 2627,
    'region_name': '蓬安县',
    'region_code': 511323,
    'parent_code': 511300
  },
  {
    'id': 2628,
    'region_name': '仪陇县',
    'region_code': 511324,
    'parent_code': 511300
  },
  {
    'id': 2629,
    'region_name': '西充县',
    'region_code': 511325,
    'parent_code': 511300
  },
  {
    'id': 2630,
    'region_name': '阆中市',
    'region_code': 511381,
    'parent_code': 511300
  },
  {
    'id': 2631,
    'region_name': '眉山市',
    'region_code': 511400,
    'parent_code': 510000
  },
  {
    'id': 2632,
    'region_name': '市辖区',
    'region_code': 511401,
    'parent_code': 511400
  },
  {
    'id': 2633,
    'region_name': '东坡区',
    'region_code': 511402,
    'parent_code': 511400
  },
  {
    'id': 2634,
    'region_name': '仁寿县',
    'region_code': 511421,
    'parent_code': 511400
  },
  {
    'id': 2635,
    'region_name': '彭山县',
    'region_code': 511422,
    'parent_code': 511400
  },
  {
    'id': 2636,
    'region_name': '洪雅县',
    'region_code': 511423,
    'parent_code': 511400
  },
  {
    'id': 2637,
    'region_name': '丹棱县',
    'region_code': 511424,
    'parent_code': 511400
  },
  {
    'id': 2638,
    'region_name': '青神县',
    'region_code': 511425,
    'parent_code': 511400
  },
  {
    'id': 2639,
    'region_name': '宜宾市',
    'region_code': 511500,
    'parent_code': 510000
  },
  {
    'id': 2640,
    'region_name': '市辖区',
    'region_code': 511501,
    'parent_code': 511500
  },
  {
    'id': 2641,
    'region_name': '翠屏区',
    'region_code': 511502,
    'parent_code': 511500
  },
  {
    'id': 2642,
    'region_name': '宜宾县',
    'region_code': 511521,
    'parent_code': 511500
  },
  {
    'id': 2643,
    'region_name': '南溪县',
    'region_code': 511522,
    'parent_code': null
  },
  {
    'id': 2644,
    'region_name': '江安县',
    'region_code': 511523,
    'parent_code': 511500
  },
  {
    'id': 2645,
    'region_name': '长宁县',
    'region_code': 511524,
    'parent_code': 511500
  },
  {
    'id': 2646,
    'region_name': '高县',
    'region_code': 511525,
    'parent_code': 511500
  },
  {
    'id': 2647,
    'region_name': '珙县',
    'region_code': 511526,
    'parent_code': 511500
  },
  {
    'id': 2648,
    'region_name': '筠连县',
    'region_code': 511527,
    'parent_code': 511500
  },
  {
    'id': 2649,
    'region_name': '兴文县',
    'region_code': 511528,
    'parent_code': 511500
  },
  {
    'id': 2650,
    'region_name': '屏山县',
    'region_code': 511529,
    'parent_code': 511500
  },
  {
    'id': 2651,
    'region_name': '广安市',
    'region_code': 511600,
    'parent_code': 510000
  },
  {
    'id': 2652,
    'region_name': '市辖区',
    'region_code': 511601,
    'parent_code': 511600
  },
  {
    'id': 2653,
    'region_name': '广安区',
    'region_code': 511602,
    'parent_code': 511600
  },
  {
    'id': 2654,
    'region_name': '岳池县',
    'region_code': 511621,
    'parent_code': 511600
  },
  {
    'id': 2655,
    'region_name': '武胜县',
    'region_code': 511622,
    'parent_code': 511600
  },
  {
    'id': 2656,
    'region_name': '邻水县',
    'region_code': 511623,
    'parent_code': 511600
  },
  {
    'id': 2657,
    'region_name': '华莹市',
    'region_code': 511681,
    'parent_code': 511600
  },
  {
    'id': 2658,
    'region_name': '达州市',
    'region_code': 511700,
    'parent_code': 510000
  },
  {
    'id': 2659,
    'region_name': '市辖区',
    'region_code': 511701,
    'parent_code': 511700
  },
  {
    'id': 2660,
    'region_name': '通川区',
    'region_code': 511702,
    'parent_code': 511700
  },
  {
    'id': 2661,
    'region_name': '达县',
    'region_code': 511721,
    'parent_code': null
  },
  {
    'id': 2662,
    'region_name': '宣汉县',
    'region_code': 511722,
    'parent_code': 511700
  },
  {
    'id': 2663,
    'region_name': '开江县',
    'region_code': 511723,
    'parent_code': 511700
  },
  {
    'id': 2664,
    'region_name': '大竹县',
    'region_code': 511724,
    'parent_code': 511700
  },
  {
    'id': 2665,
    'region_name': '渠县',
    'region_code': 511725,
    'parent_code': 511700
  },
  {
    'id': 2666,
    'region_name': '万源市',
    'region_code': 511781,
    'parent_code': 511700
  },
  {
    'id': 2667,
    'region_name': '雅安市',
    'region_code': 511800,
    'parent_code': 510000
  },
  {
    'id': 2668,
    'region_name': '市辖区',
    'region_code': 511801,
    'parent_code': 511800
  },
  {
    'id': 2669,
    'region_name': '雨城区',
    'region_code': 511802,
    'parent_code': 511800
  },
  {
    'id': 2670,
    'region_name': '名山县',
    'region_code': 511821,
    'parent_code': null
  },
  {
    'id': 2671,
    'region_name': '荥经县',
    'region_code': 511822,
    'parent_code': 511800
  },
  {
    'id': 2672,
    'region_name': '汉源县',
    'region_code': 511823,
    'parent_code': 511800
  },
  {
    'id': 2673,
    'region_name': '石棉县',
    'region_code': 511824,
    'parent_code': 511800
  },
  {
    'id': 2674,
    'region_name': '天全县',
    'region_code': 511825,
    'parent_code': 511800
  },
  {
    'id': 2675,
    'region_name': '芦山县',
    'region_code': 511826,
    'parent_code': 511800
  },
  {
    'id': 2676,
    'region_name': '宝兴县',
    'region_code': 511827,
    'parent_code': 511800
  },
  {
    'id': 2677,
    'region_name': '巴中市',
    'region_code': 511900,
    'parent_code': 510000
  },
  {
    'id': 2678,
    'region_name': '市辖区',
    'region_code': 511901,
    'parent_code': 511900
  },
  {
    'id': 2679,
    'region_name': '巴州区',
    'region_code': 511902,
    'parent_code': 511900
  },
  {
    'id': 2680,
    'region_name': '通江县',
    'region_code': 511921,
    'parent_code': 511900
  },
  {
    'id': 2681,
    'region_name': '南江县',
    'region_code': 511922,
    'parent_code': 511900
  },
  {
    'id': 2682,
    'region_name': '平昌县',
    'region_code': 511923,
    'parent_code': 511900
  },
  {
    'id': 2683,
    'region_name': '资阳市',
    'region_code': 512000,
    'parent_code': 510000
  },
  {
    'id': 2684,
    'region_name': '市辖区',
    'region_code': 512001,
    'parent_code': 512000
  },
  {
    'id': 2685,
    'region_name': '雁江区',
    'region_code': 512002,
    'parent_code': 512000
  },
  {
    'id': 2686,
    'region_name': '安岳县',
    'region_code': 512021,
    'parent_code': 512000
  },
  {
    'id': 2687,
    'region_name': '乐至县',
    'region_code': 512022,
    'parent_code': 512000
  },
  {
    'id': 2688,
    'region_name': '简阳市',
    'region_code': 512081,
    'parent_code': 512000
  },
  {
    'id': 2689,
    'region_name': '阿坝藏族羌族自治州',
    'region_code': 513200,
    'parent_code': 510000
  },
  {
    'id': 2690,
    'region_name': '汶川县',
    'region_code': 513221,
    'parent_code': 513200
  },
  {
    'id': 2691,
    'region_name': '理县',
    'region_code': 513222,
    'parent_code': 513200
  },
  {
    'id': 2692,
    'region_name': '茂县',
    'region_code': 513223,
    'parent_code': 513200
  },
  {
    'id': 2693,
    'region_name': '松潘县',
    'region_code': 513224,
    'parent_code': 513200
  },
  {
    'id': 2694,
    'region_name': '九寨沟县',
    'region_code': 513225,
    'parent_code': 513200
  },
  {
    'id': 2695,
    'region_name': '金川县',
    'region_code': 513226,
    'parent_code': 513200
  },
  {
    'id': 2696,
    'region_name': '小金县',
    'region_code': 513227,
    'parent_code': 513200
  },
  {
    'id': 2697,
    'region_name': '黑水县',
    'region_code': 513228,
    'parent_code': 513200
  },
  {
    'id': 2698,
    'region_name': '马尔康县',
    'region_code': 513229,
    'parent_code': 513200
  },
  {
    'id': 2699,
    'region_name': '壤塘县',
    'region_code': 513230,
    'parent_code': 513200
  },
  {
    'id': 2700,
    'region_name': '阿坝县',
    'region_code': 513231,
    'parent_code': 513200
  },
  {
    'id': 2701,
    'region_name': '若尔盖县',
    'region_code': 513232,
    'parent_code': 513200
  },
  {
    'id': 2702,
    'region_name': '红原县',
    'region_code': 513233,
    'parent_code': 513200
  },
  {
    'id': 2703,
    'region_name': '甘孜藏族自治州',
    'region_code': 513300,
    'parent_code': 510000
  },
  {
    'id': 2704,
    'region_name': '康定县',
    'region_code': 513321,
    'parent_code': 513300
  },
  {
    'id': 2705,
    'region_name': '泸定县',
    'region_code': 513322,
    'parent_code': 513300
  },
  {
    'id': 2706,
    'region_name': '丹巴县',
    'region_code': 513323,
    'parent_code': 513300
  },
  {
    'id': 2707,
    'region_name': '九龙县',
    'region_code': 513324,
    'parent_code': 513300
  },
  {
    'id': 2708,
    'region_name': '雅江县',
    'region_code': 513325,
    'parent_code': 513300
  },
  {
    'id': 2709,
    'region_name': '道孚县',
    'region_code': 513326,
    'parent_code': 513300
  },
  {
    'id': 2710,
    'region_name': '炉霍县',
    'region_code': 513327,
    'parent_code': 513300
  },
  {
    'id': 2711,
    'region_name': '甘孜县',
    'region_code': 513328,
    'parent_code': 513300
  },
  {
    'id': 2712,
    'region_name': '新龙县',
    'region_code': 513329,
    'parent_code': 513300
  },
  {
    'id': 2713,
    'region_name': '德格县',
    'region_code': 513330,
    'parent_code': 513300
  },
  {
    'id': 2714,
    'region_name': '白玉县',
    'region_code': 513331,
    'parent_code': 513300
  },
  {
    'id': 2715,
    'region_name': '石渠县',
    'region_code': 513332,
    'parent_code': 513300
  },
  {
    'id': 2716,
    'region_name': '色达县',
    'region_code': 513333,
    'parent_code': 513300
  },
  {
    'id': 2717,
    'region_name': '理塘县',
    'region_code': 513334,
    'parent_code': 513300
  },
  {
    'id': 2718,
    'region_name': '巴塘县',
    'region_code': 513335,
    'parent_code': 513300
  },
  {
    'id': 2719,
    'region_name': '乡城县',
    'region_code': 513336,
    'parent_code': 513300
  },
  {
    'id': 2720,
    'region_name': '稻城县',
    'region_code': 513337,
    'parent_code': 513300
  },
  {
    'id': 2721,
    'region_name': '得荣县',
    'region_code': 513338,
    'parent_code': 513300
  },
  {
    'id': 2722,
    'region_name': '凉山彝族自治州',
    'region_code': 513400,
    'parent_code': 510000
  },
  {
    'id': 2723,
    'region_name': '西昌市',
    'region_code': 513401,
    'parent_code': 513400
  },
  {
    'id': 2724,
    'region_name': '木里藏族自治县',
    'region_code': 513422,
    'parent_code': 513400
  },
  {
    'id': 2725,
    'region_name': '盐源县',
    'region_code': 513423,
    'parent_code': 513400
  },
  {
    'id': 2726,
    'region_name': '德昌县',
    'region_code': 513424,
    'parent_code': 513400
  },
  {
    'id': 2727,
    'region_name': '会理县',
    'region_code': 513425,
    'parent_code': 513400
  },
  {
    'id': 2728,
    'region_name': '会东县',
    'region_code': 513426,
    'parent_code': 513400
  },
  {
    'id': 2729,
    'region_name': '宁南县',
    'region_code': 513427,
    'parent_code': 513400
  },
  {
    'id': 2730,
    'region_name': '普格县',
    'region_code': 513428,
    'parent_code': 513400
  },
  {
    'id': 2731,
    'region_name': '布拖县',
    'region_code': 513429,
    'parent_code': 513400
  },
  {
    'id': 2732,
    'region_name': '金阳县',
    'region_code': 513430,
    'parent_code': 513400
  },
  {
    'id': 2733,
    'region_name': '昭觉县',
    'region_code': 513431,
    'parent_code': 513400
  },
  {
    'id': 2734,
    'region_name': '喜德县',
    'region_code': 513432,
    'parent_code': 513400
  },
  {
    'id': 2735,
    'region_name': '冕宁县',
    'region_code': 513433,
    'parent_code': 513400
  },
  {
    'id': 2736,
    'region_name': '越西县',
    'region_code': 513434,
    'parent_code': 513400
  },
  {
    'id': 2737,
    'region_name': '甘洛县',
    'region_code': 513435,
    'parent_code': 513400
  },
  {
    'id': 2738,
    'region_name': '美姑县',
    'region_code': 513436,
    'parent_code': 513400
  },
  {
    'id': 2739,
    'region_name': '雷波县',
    'region_code': 513437,
    'parent_code': 513400
  },
  {
    'id': 2740,
    'region_name': '贵州省',
    'region_code': 520000,
    'parent_code': 0
  },
  {
    'id': 2741,
    'region_name': '贵阳市',
    'region_code': 520100,
    'parent_code': 520000
  },
  {
    'id': 2742,
    'region_name': '市辖区',
    'region_code': 520101,
    'parent_code': 520100
  },
  {
    'id': 2743,
    'region_name': '南明区',
    'region_code': 520102,
    'parent_code': 520100
  },
  {
    'id': 2744,
    'region_name': '云岩区',
    'region_code': 520103,
    'parent_code': 520100
  },
  {
    'id': 2745,
    'region_name': '花溪区',
    'region_code': 520111,
    'parent_code': 520100
  },
  {
    'id': 2746,
    'region_name': '乌当区',
    'region_code': 520112,
    'parent_code': 520100
  },
  {
    'id': 2747,
    'region_name': '白云区',
    'region_code': 520113,
    'parent_code': 520100
  },
  {
    'id': 2748,
    'region_name': '小河区',
    'region_code': 520114,
    'parent_code': null
  },
  {
    'id': 2749,
    'region_name': '开阳县',
    'region_code': 520121,
    'parent_code': 520100
  },
  {
    'id': 2750,
    'region_name': '息烽县',
    'region_code': 520122,
    'parent_code': 520100
  },
  {
    'id': 2751,
    'region_name': '修文县',
    'region_code': 520123,
    'parent_code': 520100
  },
  {
    'id': 2752,
    'region_name': '清镇市',
    'region_code': 520181,
    'parent_code': 520100
  },
  {
    'id': 2753,
    'region_name': '六盘水市',
    'region_code': 520200,
    'parent_code': 520000
  },
  {
    'id': 2754,
    'region_name': '钟山区',
    'region_code': 520201,
    'parent_code': 520200
  },
  {
    'id': 2755,
    'region_name': '六枝特区',
    'region_code': 520203,
    'parent_code': 520200
  },
  {
    'id': 2756,
    'region_name': '水城县',
    'region_code': 520221,
    'parent_code': 520200
  },
  {
    'id': 2757,
    'region_name': '盘县',
    'region_code': 520222,
    'parent_code': 520200
  },
  {
    'id': 2758,
    'region_name': '遵义市',
    'region_code': 520300,
    'parent_code': 520000
  },
  {
    'id': 2759,
    'region_name': '市辖区',
    'region_code': 520301,
    'parent_code': 520300
  },
  {
    'id': 2760,
    'region_name': '红花岗区',
    'region_code': 520302,
    'parent_code': 520300
  },
  {
    'id': 2761,
    'region_name': '汇川区',
    'region_code': 520303,
    'parent_code': 520300
  },
  {
    'id': 2762,
    'region_name': '遵义县',
    'region_code': 520321,
    'parent_code': 520300
  },
  {
    'id': 2763,
    'region_name': '桐梓县',
    'region_code': 520322,
    'parent_code': 520300
  },
  {
    'id': 2764,
    'region_name': '绥阳县',
    'region_code': 520323,
    'parent_code': 520300
  },
  {
    'id': 2765,
    'region_name': '正安县',
    'region_code': 520324,
    'parent_code': 520300
  },
  {
    'id': 2766,
    'region_name': '道真仡佬族苗族自治县',
    'region_code': 520325,
    'parent_code': 520300
  },
  {
    'id': 2767,
    'region_name': '务川仡佬族苗族自治县',
    'region_code': 520326,
    'parent_code': 520300
  },
  {
    'id': 2768,
    'region_name': '凤冈县',
    'region_code': 520327,
    'parent_code': 520300
  },
  {
    'id': 2769,
    'region_name': '湄潭县',
    'region_code': 520328,
    'parent_code': 520300
  },
  {
    'id': 2770,
    'region_name': '余庆县',
    'region_code': 520329,
    'parent_code': 520300
  },
  {
    'id': 2771,
    'region_name': '习水县',
    'region_code': 520330,
    'parent_code': 520300
  },
  {
    'id': 2772,
    'region_name': '赤水市',
    'region_code': 520381,
    'parent_code': 520300
  },
  {
    'id': 2773,
    'region_name': '仁怀市',
    'region_code': 520382,
    'parent_code': 520300
  },
  {
    'id': 2774,
    'region_name': '安顺市',
    'region_code': 520400,
    'parent_code': 520000
  },
  {
    'id': 2775,
    'region_name': '市辖区',
    'region_code': 520401,
    'parent_code': 520400
  },
  {
    'id': 2776,
    'region_name': '西秀区',
    'region_code': 520402,
    'parent_code': 520400
  },
  {
    'id': 2777,
    'region_name': '平坝县',
    'region_code': 520421,
    'parent_code': 520400
  },
  {
    'id': 2778,
    'region_name': '普定县',
    'region_code': 520422,
    'parent_code': 520400
  },
  {
    'id': 2779,
    'region_name': '镇宁布依族苗族自治县',
    'region_code': 520423,
    'parent_code': 520400
  },
  {
    'id': 2780,
    'region_name': '关岭布依族苗族自治县',
    'region_code': 520424,
    'parent_code': 520400
  },
  {
    'id': 2781,
    'region_name': '紫云苗族布依族自治县',
    'region_code': 520425,
    'parent_code': 520400
  },
  {
    'id': 2782,
    'region_name': '铜仁地区',
    'region_code': 522200,
    'parent_code': null
  },
  {
    'id': 2783,
    'region_name': '铜仁市',
    'region_code': 522201,
    'parent_code': null
  },
  {
    'id': 2784,
    'region_name': '江口县',
    'region_code': 522222,
    'parent_code': null
  },
  {
    'id': 2785,
    'region_name': '玉屏侗族自治县',
    'region_code': 522223,
    'parent_code': null
  },
  {
    'id': 2786,
    'region_name': '石阡县',
    'region_code': 522224,
    'parent_code': null
  },
  {
    'id': 2787,
    'region_name': '思南县',
    'region_code': 522225,
    'parent_code': null
  },
  {
    'id': 2788,
    'region_name': '印江土家族苗族自治县',
    'region_code': 522226,
    'parent_code': null
  },
  {
    'id': 2789,
    'region_name': '德江县',
    'region_code': 522227,
    'parent_code': null
  },
  {
    'id': 2790,
    'region_name': '沿河土家族自治县',
    'region_code': 522228,
    'parent_code': null
  },
  {
    'id': 2791,
    'region_name': '松桃苗族自治县',
    'region_code': 522229,
    'parent_code': null
  },
  {
    'id': 2792,
    'region_name': '万山特区',
    'region_code': 522230,
    'parent_code': null
  },
  {
    'id': 2793,
    'region_name': '黔西南布依族苗族自治州',
    'region_code': 522300,
    'parent_code': 520000
  },
  {
    'id': 2794,
    'region_name': '兴义市',
    'region_code': 522301,
    'parent_code': 522300
  },
  {
    'id': 2795,
    'region_name': '兴仁县',
    'region_code': 522322,
    'parent_code': 522300
  },
  {
    'id': 2796,
    'region_name': '普安县',
    'region_code': 522323,
    'parent_code': 522300
  },
  {
    'id': 2797,
    'region_name': '晴隆县',
    'region_code': 522324,
    'parent_code': 522300
  },
  {
    'id': 2798,
    'region_name': '贞丰县',
    'region_code': 522325,
    'parent_code': 522300
  },
  {
    'id': 2799,
    'region_name': '望谟县',
    'region_code': 522326,
    'parent_code': 522300
  },
  {
    'id': 2800,
    'region_name': '册亨县',
    'region_code': 522327,
    'parent_code': 522300
  },
  {
    'id': 2801,
    'region_name': '安龙县',
    'region_code': 522328,
    'parent_code': 522300
  },
  {
    'id': 2802,
    'region_name': '毕节地区',
    'region_code': 522400,
    'parent_code': null
  },
  {
    'id': 2803,
    'region_name': '毕节市',
    'region_code': 522401,
    'parent_code': null
  },
  {
    'id': 2804,
    'region_name': '大方县',
    'region_code': 522422,
    'parent_code': null
  },
  {
    'id': 2805,
    'region_name': '黔西县',
    'region_code': 522423,
    'parent_code': null
  },
  {
    'id': 2806,
    'region_name': '金沙县',
    'region_code': 522424,
    'parent_code': null
  },
  {
    'id': 2807,
    'region_name': '织金县',
    'region_code': 522425,
    'parent_code': null
  },
  {
    'id': 2808,
    'region_name': '纳雍县',
    'region_code': 522426,
    'parent_code': null
  },
  {
    'id': 2809,
    'region_name': '威宁彝族回族苗族自治县',
    'region_code': 522427,
    'parent_code': null
  },
  {
    'id': 2810,
    'region_name': '赫章县',
    'region_code': 522428,
    'parent_code': null
  },
  {
    'id': 2811,
    'region_name': '黔东南苗族侗族自治州',
    'region_code': 522600,
    'parent_code': 520000
  },
  {
    'id': 2812,
    'region_name': '凯里市',
    'region_code': 522601,
    'parent_code': 522600
  },
  {
    'id': 2813,
    'region_name': '黄平县',
    'region_code': 522622,
    'parent_code': 522600
  },
  {
    'id': 2814,
    'region_name': '施秉县',
    'region_code': 522623,
    'parent_code': 522600
  },
  {
    'id': 2815,
    'region_name': '三穗县',
    'region_code': 522624,
    'parent_code': 522600
  },
  {
    'id': 2816,
    'region_name': '镇远县',
    'region_code': 522625,
    'parent_code': 522600
  },
  {
    'id': 2817,
    'region_name': '岑巩县',
    'region_code': 522626,
    'parent_code': 522600
  },
  {
    'id': 2818,
    'region_name': '天柱县',
    'region_code': 522627,
    'parent_code': 522600
  },
  {
    'id': 2819,
    'region_name': '锦屏县',
    'region_code': 522628,
    'parent_code': 522600
  },
  {
    'id': 2820,
    'region_name': '剑河县',
    'region_code': 522629,
    'parent_code': 522600
  },
  {
    'id': 2821,
    'region_name': '台江县',
    'region_code': 522630,
    'parent_code': 522600
  },
  {
    'id': 2822,
    'region_name': '黎平县',
    'region_code': 522631,
    'parent_code': 522600
  },
  {
    'id': 2823,
    'region_name': '榕江县',
    'region_code': 522632,
    'parent_code': 522600
  },
  {
    'id': 2824,
    'region_name': '从江县',
    'region_code': 522633,
    'parent_code': 522600
  },
  {
    'id': 2825,
    'region_name': '雷山县',
    'region_code': 522634,
    'parent_code': 522600
  },
  {
    'id': 2826,
    'region_name': '麻江县',
    'region_code': 522635,
    'parent_code': 522600
  },
  {
    'id': 2827,
    'region_name': '丹寨县',
    'region_code': 522636,
    'parent_code': 522600
  },
  {
    'id': 2828,
    'region_name': '黔南布依族苗族自治州',
    'region_code': 522700,
    'parent_code': 520000
  },
  {
    'id': 2829,
    'region_name': '都匀市',
    'region_code': 522701,
    'parent_code': 522700
  },
  {
    'id': 2830,
    'region_name': '福泉市',
    'region_code': 522702,
    'parent_code': 522700
  },
  {
    'id': 2831,
    'region_name': '荔波县',
    'region_code': 522722,
    'parent_code': 522700
  },
  {
    'id': 2832,
    'region_name': '贵定县',
    'region_code': 522723,
    'parent_code': 522700
  },
  {
    'id': 2833,
    'region_name': '瓮安县',
    'region_code': 522725,
    'parent_code': 522700
  },
  {
    'id': 2834,
    'region_name': '独山县',
    'region_code': 522726,
    'parent_code': 522700
  },
  {
    'id': 2835,
    'region_name': '平塘县',
    'region_code': 522727,
    'parent_code': 522700
  },
  {
    'id': 2836,
    'region_name': '罗甸县',
    'region_code': 522728,
    'parent_code': 522700
  },
  {
    'id': 2837,
    'region_name': '长顺县',
    'region_code': 522729,
    'parent_code': 522700
  },
  {
    'id': 2838,
    'region_name': '龙里县',
    'region_code': 522730,
    'parent_code': 522700
  },
  {
    'id': 2839,
    'region_name': '惠水县',
    'region_code': 522731,
    'parent_code': 522700
  },
  {
    'id': 2840,
    'region_name': '三都水族自治县',
    'region_code': 522732,
    'parent_code': 522700
  },
  {
    'id': 2841,
    'region_name': '云南省',
    'region_code': 530000,
    'parent_code': 0
  },
  {
    'id': 2842,
    'region_name': '昆明市',
    'region_code': 530100,
    'parent_code': 530000
  },
  {
    'id': 2843,
    'region_name': '市辖区',
    'region_code': 530101,
    'parent_code': 530100
  },
  {
    'id': 2844,
    'region_name': '五华区',
    'region_code': 530102,
    'parent_code': 530100
  },
  {
    'id': 2845,
    'region_name': '盘龙区',
    'region_code': 530103,
    'parent_code': 530100
  },
  {
    'id': 2846,
    'region_name': '官渡区',
    'region_code': 530111,
    'parent_code': 530100
  },
  {
    'id': 2847,
    'region_name': '西山区',
    'region_code': 530112,
    'parent_code': 530100
  },
  {
    'id': 2848,
    'region_name': '东川区',
    'region_code': 530113,
    'parent_code': 530100
  },
  {
    'id': 2849,
    'region_name': '呈贡县',
    'region_code': 530121,
    'parent_code': null
  },
  {
    'id': 2850,
    'region_name': '晋宁县',
    'region_code': 530122,
    'parent_code': 530100
  },
  {
    'id': 2851,
    'region_name': '富民县',
    'region_code': 530124,
    'parent_code': 530100
  },
  {
    'id': 2852,
    'region_name': '宜良县',
    'region_code': 530125,
    'parent_code': 530100
  },
  {
    'id': 2853,
    'region_name': '石林彝族自治县',
    'region_code': 530126,
    'parent_code': 530100
  },
  {
    'id': 2854,
    'region_name': '嵩明县',
    'region_code': 530127,
    'parent_code': 530100
  },
  {
    'id': 2855,
    'region_name': '禄劝彝族苗族自治县',
    'region_code': 530128,
    'parent_code': 530100
  },
  {
    'id': 2856,
    'region_name': '寻甸回族彝族自治县',
    'region_code': 530129,
    'parent_code': 530100
  },
  {
    'id': 2857,
    'region_name': '安宁市',
    'region_code': 530181,
    'parent_code': 530100
  },
  {
    'id': 2858,
    'region_name': '曲靖市',
    'region_code': 530300,
    'parent_code': 530000
  },
  {
    'id': 2859,
    'region_name': '市辖区',
    'region_code': 530301,
    'parent_code': 530300
  },
  {
    'id': 2860,
    'region_name': '麒麟区',
    'region_code': 530302,
    'parent_code': 530300
  },
  {
    'id': 2861,
    'region_name': '马龙县',
    'region_code': 530321,
    'parent_code': 530300
  },
  {
    'id': 2862,
    'region_name': '陆良县',
    'region_code': 530322,
    'parent_code': 530300
  },
  {
    'id': 2863,
    'region_name': '师宗县',
    'region_code': 530323,
    'parent_code': 530300
  },
  {
    'id': 2864,
    'region_name': '罗平县',
    'region_code': 530324,
    'parent_code': 530300
  },
  {
    'id': 2865,
    'region_name': '富源县',
    'region_code': 530325,
    'parent_code': 530300
  },
  {
    'id': 2866,
    'region_name': '会泽县',
    'region_code': 530326,
    'parent_code': 530300
  },
  {
    'id': 2867,
    'region_name': '沾益县',
    'region_code': 530328,
    'parent_code': 530300
  },
  {
    'id': 2868,
    'region_name': '宣威市',
    'region_code': 530381,
    'parent_code': 530300
  },
  {
    'id': 2869,
    'region_name': '玉溪市',
    'region_code': 530400,
    'parent_code': 530000
  },
  {
    'id': 2870,
    'region_name': '市辖区',
    'region_code': 530401,
    'parent_code': 530400
  },
  {
    'id': 2871,
    'region_name': '红塔区',
    'region_code': 530402,
    'parent_code': 530400
  },
  {
    'id': 2872,
    'region_name': '江川县',
    'region_code': 530421,
    'parent_code': 530400
  },
  {
    'id': 2873,
    'region_name': '澄江县',
    'region_code': 530422,
    'parent_code': 530400
  },
  {
    'id': 2874,
    'region_name': '通海县',
    'region_code': 530423,
    'parent_code': 530400
  },
  {
    'id': 2875,
    'region_name': '华宁县',
    'region_code': 530424,
    'parent_code': 530400
  },
  {
    'id': 2876,
    'region_name': '易门县',
    'region_code': 530425,
    'parent_code': 530400
  },
  {
    'id': 2877,
    'region_name': '峨山彝族自治县',
    'region_code': 530426,
    'parent_code': 530400
  },
  {
    'id': 2878,
    'region_name': '新平彝族傣族自治县',
    'region_code': 530427,
    'parent_code': 530400
  },
  {
    'id': 2879,
    'region_name': '元江哈尼族彝族傣族自治县',
    'region_code': 530428,
    'parent_code': 530400
  },
  {
    'id': 2880,
    'region_name': '保山市',
    'region_code': 530500,
    'parent_code': 530000
  },
  {
    'id': 2881,
    'region_name': '市辖区',
    'region_code': 530501,
    'parent_code': 530500
  },
  {
    'id': 2882,
    'region_name': '隆阳区',
    'region_code': 530502,
    'parent_code': 530500
  },
  {
    'id': 2883,
    'region_name': '施甸县',
    'region_code': 530521,
    'parent_code': 530500
  },
  {
    'id': 2884,
    'region_name': '腾冲县',
    'region_code': 530522,
    'parent_code': 530500
  },
  {
    'id': 2885,
    'region_name': '龙陵县',
    'region_code': 530523,
    'parent_code': 530500
  },
  {
    'id': 2886,
    'region_name': '昌宁县',
    'region_code': 530524,
    'parent_code': 530500
  },
  {
    'id': 2887,
    'region_name': '昭通市',
    'region_code': 530600,
    'parent_code': 530000
  },
  {
    'id': 2888,
    'region_name': '市辖区',
    'region_code': 530601,
    'parent_code': 530600
  },
  {
    'id': 2889,
    'region_name': '昭阳区',
    'region_code': 530602,
    'parent_code': 530600
  },
  {
    'id': 2890,
    'region_name': '鲁甸县',
    'region_code': 530621,
    'parent_code': 530600
  },
  {
    'id': 2891,
    'region_name': '巧家县',
    'region_code': 530622,
    'parent_code': 530600
  },
  {
    'id': 2892,
    'region_name': '盐津县',
    'region_code': 530623,
    'parent_code': 530600
  },
  {
    'id': 2893,
    'region_name': '大关县',
    'region_code': 530624,
    'parent_code': 530600
  },
  {
    'id': 2894,
    'region_name': '永善县',
    'region_code': 530625,
    'parent_code': 530600
  },
  {
    'id': 2895,
    'region_name': '绥江县',
    'region_code': 530626,
    'parent_code': 530600
  },
  {
    'id': 2896,
    'region_name': '镇雄县',
    'region_code': 530627,
    'parent_code': 530600
  },
  {
    'id': 2897,
    'region_name': '彝良县',
    'region_code': 530628,
    'parent_code': 530600
  },
  {
    'id': 2898,
    'region_name': '威信县',
    'region_code': 530629,
    'parent_code': 530600
  },
  {
    'id': 2899,
    'region_name': '水富县',
    'region_code': 530630,
    'parent_code': 530600
  },
  {
    'id': 2900,
    'region_name': '丽江市',
    'region_code': 530700,
    'parent_code': 530000
  },
  {
    'id': 2901,
    'region_name': '市辖区',
    'region_code': 530701,
    'parent_code': 530700
  },
  {
    'id': 2902,
    'region_name': '古城区',
    'region_code': 530702,
    'parent_code': 530700
  },
  {
    'id': 2903,
    'region_name': '玉龙纳西族自治县',
    'region_code': 530721,
    'parent_code': 530700
  },
  {
    'id': 2904,
    'region_name': '永胜县',
    'region_code': 530722,
    'parent_code': 530700
  },
  {
    'id': 2905,
    'region_name': '华坪县',
    'region_code': 530723,
    'parent_code': 530700
  },
  {
    'id': 2906,
    'region_name': '宁蒗彝族自治县',
    'region_code': 530724,
    'parent_code': 530700
  },
  {
    'id': 2907,
    'region_name': '思茅市',
    'region_code': 530800,
    'parent_code': 530000
  },
  {
    'id': 2908,
    'region_name': '市辖区',
    'region_code': 530801,
    'parent_code': 530800
  },
  {
    'id': 2909,
    'region_name': '翠云区',
    'region_code': 530802,
    'parent_code': 530800
  },
  {
    'id': 2910,
    'region_name': '普洱哈尼族彝族自治县',
    'region_code': 530821,
    'parent_code': 530800
  },
  {
    'id': 2911,
    'region_name': '墨江哈尼族自治县',
    'region_code': 530822,
    'parent_code': 530800
  },
  {
    'id': 2912,
    'region_name': '景东彝族自治县',
    'region_code': 530823,
    'parent_code': 530800
  },
  {
    'id': 2913,
    'region_name': '景谷傣族彝族自治县',
    'region_code': 530824,
    'parent_code': 530800
  },
  {
    'id': 2914,
    'region_name': '镇沅彝族哈尼族拉祜族自治县',
    'region_code': 530825,
    'parent_code': 530800
  },
  {
    'id': 2915,
    'region_name': '江城哈尼族彝族自治县',
    'region_code': 530826,
    'parent_code': 530800
  },
  {
    'id': 2916,
    'region_name': '孟连傣族拉祜族佤族自治县',
    'region_code': 530827,
    'parent_code': 530800
  },
  {
    'id': 2917,
    'region_name': '澜沧拉祜族自治县',
    'region_code': 530828,
    'parent_code': 530800
  },
  {
    'id': 2918,
    'region_name': '西盟佤族自治县',
    'region_code': 530829,
    'parent_code': 530800
  },
  {
    'id': 2919,
    'region_name': '临沧市',
    'region_code': 530900,
    'parent_code': 530000
  },
  {
    'id': 2920,
    'region_name': '市辖区',
    'region_code': 530901,
    'parent_code': 530900
  },
  {
    'id': 2921,
    'region_name': '临翔区',
    'region_code': 530902,
    'parent_code': 530900
  },
  {
    'id': 2922,
    'region_name': '凤庆县',
    'region_code': 530921,
    'parent_code': 530900
  },
  {
    'id': 2923,
    'region_name': '云县',
    'region_code': 530922,
    'parent_code': 530900
  },
  {
    'id': 2924,
    'region_name': '永德县',
    'region_code': 530923,
    'parent_code': 530900
  },
  {
    'id': 2925,
    'region_name': '镇康县',
    'region_code': 530924,
    'parent_code': 530900
  },
  {
    'id': 2926,
    'region_name': '双江拉祜族佤族布朗族傣族自治县',
    'region_code': 530925,
    'parent_code': 530900
  },
  {
    'id': 2927,
    'region_name': '耿马傣族佤族自治县',
    'region_code': 530926,
    'parent_code': 530900
  },
  {
    'id': 2928,
    'region_name': '沧源佤族自治县',
    'region_code': 530927,
    'parent_code': 530900
  },
  {
    'id': 2929,
    'region_name': '楚雄彝族自治州',
    'region_code': 532300,
    'parent_code': 530000
  },
  {
    'id': 2930,
    'region_name': '楚雄市',
    'region_code': 532301,
    'parent_code': 532300
  },
  {
    'id': 2931,
    'region_name': '双柏县',
    'region_code': 532322,
    'parent_code': 532300
  },
  {
    'id': 2932,
    'region_name': '牟定县',
    'region_code': 532323,
    'parent_code': 532300
  },
  {
    'id': 2933,
    'region_name': '南华县',
    'region_code': 532324,
    'parent_code': 532300
  },
  {
    'id': 2934,
    'region_name': '姚安县',
    'region_code': 532325,
    'parent_code': 532300
  },
  {
    'id': 2935,
    'region_name': '大姚县',
    'region_code': 532326,
    'parent_code': 532300
  },
  {
    'id': 2936,
    'region_name': '永仁县',
    'region_code': 532327,
    'parent_code': 532300
  },
  {
    'id': 2937,
    'region_name': '元谋县',
    'region_code': 532328,
    'parent_code': 532300
  },
  {
    'id': 2938,
    'region_name': '武定县',
    'region_code': 532329,
    'parent_code': 532300
  },
  {
    'id': 2939,
    'region_name': '禄丰县',
    'region_code': 532331,
    'parent_code': 532300
  },
  {
    'id': 2940,
    'region_name': '红河哈尼族彝族自治州',
    'region_code': 532500,
    'parent_code': 530000
  },
  {
    'id': 2941,
    'region_name': '个旧市',
    'region_code': 532501,
    'parent_code': 532500
  },
  {
    'id': 2942,
    'region_name': '开远市',
    'region_code': 532502,
    'parent_code': 532500
  },
  {
    'id': 2943,
    'region_name': '蒙自县',
    'region_code': 532522,
    'parent_code': null
  },
  {
    'id': 2944,
    'region_name': '屏边苗族自治县',
    'region_code': 532523,
    'parent_code': 532500
  },
  {
    'id': 2945,
    'region_name': '建水县',
    'region_code': 532524,
    'parent_code': 532500
  },
  {
    'id': 2946,
    'region_name': '石屏县',
    'region_code': 532525,
    'parent_code': 532500
  },
  {
    'id': 2947,
    'region_name': '弥勒县',
    'region_code': 532526,
    'parent_code': null
  },
  {
    'id': 2948,
    'region_name': '泸西县',
    'region_code': 532527,
    'parent_code': 532500
  },
  {
    'id': 2949,
    'region_name': '元阳县',
    'region_code': 532528,
    'parent_code': 532500
  },
  {
    'id': 2950,
    'region_name': '红河县',
    'region_code': 532529,
    'parent_code': 532500
  },
  {
    'id': 2951,
    'region_name': '金平苗族瑶族傣族自治县',
    'region_code': 532530,
    'parent_code': 532500
  },
  {
    'id': 2952,
    'region_name': '绿春县',
    'region_code': 532531,
    'parent_code': 532500
  },
  {
    'id': 2953,
    'region_name': '河口瑶族自治县',
    'region_code': 532532,
    'parent_code': 532500
  },
  {
    'id': 2954,
    'region_name': '文山壮族苗族自治州',
    'region_code': 532600,
    'parent_code': 530000
  },
  {
    'id': 2955,
    'region_name': '文山县',
    'region_code': 532621,
    'parent_code': null
  },
  {
    'id': 2956,
    'region_name': '砚山县',
    'region_code': 532622,
    'parent_code': 532600
  },
  {
    'id': 2957,
    'region_name': '西畴县',
    'region_code': 532623,
    'parent_code': 532600
  },
  {
    'id': 2958,
    'region_name': '麻栗坡县',
    'region_code': 532624,
    'parent_code': 532600
  },
  {
    'id': 2959,
    'region_name': '马关县',
    'region_code': 532625,
    'parent_code': 532600
  },
  {
    'id': 2960,
    'region_name': '丘北县',
    'region_code': 532626,
    'parent_code': 532600
  },
  {
    'id': 2961,
    'region_name': '广南县',
    'region_code': 532627,
    'parent_code': 532600
  },
  {
    'id': 2962,
    'region_name': '富宁县',
    'region_code': 532628,
    'parent_code': 532600
  },
  {
    'id': 2963,
    'region_name': '西双版纳傣族自治州',
    'region_code': 532800,
    'parent_code': 530000
  },
  {
    'id': 2964,
    'region_name': '景洪市',
    'region_code': 532801,
    'parent_code': 532800
  },
  {
    'id': 2965,
    'region_name': '勐海县',
    'region_code': 532822,
    'parent_code': 532800
  },
  {
    'id': 2966,
    'region_name': '勐腊县',
    'region_code': 532823,
    'parent_code': 532800
  },
  {
    'id': 2967,
    'region_name': '大理白族自治州',
    'region_code': 532900,
    'parent_code': 530000
  },
  {
    'id': 2968,
    'region_name': '大理市',
    'region_code': 532901,
    'parent_code': 532900
  },
  {
    'id': 2969,
    'region_name': '漾濞彝族自治县',
    'region_code': 532922,
    'parent_code': 532900
  },
  {
    'id': 2970,
    'region_name': '祥云县',
    'region_code': 532923,
    'parent_code': 532900
  },
  {
    'id': 2971,
    'region_name': '宾川县',
    'region_code': 532924,
    'parent_code': 532900
  },
  {
    'id': 2972,
    'region_name': '弥渡县',
    'region_code': 532925,
    'parent_code': 532900
  },
  {
    'id': 2973,
    'region_name': '南涧彝族自治县',
    'region_code': 532926,
    'parent_code': 532900
  },
  {
    'id': 2974,
    'region_name': '巍山彝族回族自治县',
    'region_code': 532927,
    'parent_code': 532900
  },
  {
    'id': 2975,
    'region_name': '永平县',
    'region_code': 532928,
    'parent_code': 532900
  },
  {
    'id': 2976,
    'region_name': '云龙县',
    'region_code': 532929,
    'parent_code': 532900
  },
  {
    'id': 2977,
    'region_name': '洱源县',
    'region_code': 532930,
    'parent_code': 532900
  },
  {
    'id': 2978,
    'region_name': '剑川县',
    'region_code': 532931,
    'parent_code': 532900
  },
  {
    'id': 2979,
    'region_name': '鹤庆县',
    'region_code': 532932,
    'parent_code': 532900
  },
  {
    'id': 2980,
    'region_name': '德宏傣族景颇族自治州',
    'region_code': 533100,
    'parent_code': 530000
  },
  {
    'id': 2981,
    'region_name': '瑞丽市',
    'region_code': 533102,
    'parent_code': 533100
  },
  {
    'id': 2982,
    'region_name': '潞西市',
    'region_code': 533103,
    'parent_code': 533100
  },
  {
    'id': 2983,
    'region_name': '梁河县',
    'region_code': 533122,
    'parent_code': 533100
  },
  {
    'id': 2984,
    'region_name': '盈江县',
    'region_code': 533123,
    'parent_code': 533100
  },
  {
    'id': 2985,
    'region_name': '陇川县',
    'region_code': 533124,
    'parent_code': 533100
  },
  {
    'id': 2986,
    'region_name': '怒江傈僳族自治州',
    'region_code': 533300,
    'parent_code': 530000
  },
  {
    'id': 2987,
    'region_name': '泸水县',
    'region_code': 533321,
    'parent_code': 533300
  },
  {
    'id': 2988,
    'region_name': '福贡县',
    'region_code': 533323,
    'parent_code': 533300
  },
  {
    'id': 2989,
    'region_name': '贡山独龙族怒族自治县',
    'region_code': 533324,
    'parent_code': 533300
  },
  {
    'id': 2990,
    'region_name': '兰坪白族普米族自治县',
    'region_code': 533325,
    'parent_code': 533300
  },
  {
    'id': 2991,
    'region_name': '迪庆藏族自治州',
    'region_code': 533400,
    'parent_code': 530000
  },
  {
    'id': 2992,
    'region_name': '香格里拉县',
    'region_code': 533421,
    'parent_code': 533400
  },
  {
    'id': 2993,
    'region_name': '德钦县',
    'region_code': 533422,
    'parent_code': 533400
  },
  {
    'id': 2994,
    'region_name': '维西傈僳族自治县',
    'region_code': 533423,
    'parent_code': 533400
  },
  {
    'id': 2995,
    'region_name': '西藏自治区',
    'region_code': 540000,
    'parent_code': 0
  },
  {
    'id': 2996,
    'region_name': '拉萨市',
    'region_code': 540100,
    'parent_code': 540000
  },
  {
    'id': 2997,
    'region_name': '市辖区',
    'region_code': 540101,
    'parent_code': 540100
  },
  {
    'id': 2998,
    'region_name': '城关区',
    'region_code': 540102,
    'parent_code': 540100
  },
  {
    'id': 2999,
    'region_name': '林周县',
    'region_code': 540121,
    'parent_code': 540100
  },
  {
    'id': 3000,
    'region_name': '当雄县',
    'region_code': 540122,
    'parent_code': 540100
  },
  {
    'id': 3001,
    'region_name': '尼木县',
    'region_code': 540123,
    'parent_code': 540100
  },
  {
    'id': 3002,
    'region_name': '曲水县',
    'region_code': 540124,
    'parent_code': 540100
  },
  {
    'id': 3003,
    'region_name': '堆龙德庆县',
    'region_code': 540125,
    'parent_code': 540100
  },
  {
    'id': 3004,
    'region_name': '达孜县',
    'region_code': 540126,
    'parent_code': 540100
  },
  {
    'id': 3005,
    'region_name': '墨竹工卡县',
    'region_code': 540127,
    'parent_code': 540100
  },
  {
    'id': 3006,
    'region_name': '昌都地区',
    'region_code': 542100,
    'parent_code': 540000
  },
  {
    'id': 3007,
    'region_name': '昌都县',
    'region_code': 542121,
    'parent_code': 542100
  },
  {
    'id': 3008,
    'region_name': '江达县',
    'region_code': 542122,
    'parent_code': 542100
  },
  {
    'id': 3009,
    'region_name': '贡觉县',
    'region_code': 542123,
    'parent_code': 542100
  },
  {
    'id': 3010,
    'region_name': '类乌齐县',
    'region_code': 542124,
    'parent_code': 542100
  },
  {
    'id': 3011,
    'region_name': '丁青县',
    'region_code': 542125,
    'parent_code': 542100
  },
  {
    'id': 3012,
    'region_name': '察雅县',
    'region_code': 542126,
    'parent_code': 542100
  },
  {
    'id': 3013,
    'region_name': '八宿县',
    'region_code': 542127,
    'parent_code': 542100
  },
  {
    'id': 3014,
    'region_name': '左贡县',
    'region_code': 542128,
    'parent_code': 542100
  },
  {
    'id': 3015,
    'region_name': '芒康县',
    'region_code': 542129,
    'parent_code': 542100
  },
  {
    'id': 3016,
    'region_name': '洛隆县',
    'region_code': 542132,
    'parent_code': 542100
  },
  {
    'id': 3017,
    'region_name': '边坝县',
    'region_code': 542133,
    'parent_code': 542100
  },
  {
    'id': 3018,
    'region_name': '山南地区',
    'region_code': 542200,
    'parent_code': 540000
  },
  {
    'id': 3019,
    'region_name': '乃东县',
    'region_code': 542221,
    'parent_code': 542200
  },
  {
    'id': 3020,
    'region_name': '扎囊县',
    'region_code': 542222,
    'parent_code': 542200
  },
  {
    'id': 3021,
    'region_name': '贡嘎县',
    'region_code': 542223,
    'parent_code': 542200
  },
  {
    'id': 3022,
    'region_name': '桑日县',
    'region_code': 542224,
    'parent_code': 542200
  },
  {
    'id': 3023,
    'region_name': '琼结县',
    'region_code': 542225,
    'parent_code': 542200
  },
  {
    'id': 3024,
    'region_name': '曲松县',
    'region_code': 542226,
    'parent_code': 542200
  },
  {
    'id': 3025,
    'region_name': '措美县',
    'region_code': 542227,
    'parent_code': 542200
  },
  {
    'id': 3026,
    'region_name': '洛扎县',
    'region_code': 542228,
    'parent_code': 542200
  },
  {
    'id': 3027,
    'region_name': '加查县',
    'region_code': 542229,
    'parent_code': 542200
  },
  {
    'id': 3028,
    'region_name': '隆子县',
    'region_code': 542231,
    'parent_code': 542200
  },
  {
    'id': 3029,
    'region_name': '错那县',
    'region_code': 542232,
    'parent_code': 542200
  },
  {
    'id': 3030,
    'region_name': '浪卡子县',
    'region_code': 542233,
    'parent_code': 542200
  },
  {
    'id': 3031,
    'region_name': '日喀则地区',
    'region_code': 542300,
    'parent_code': null
  },
  {
    'id': 3032,
    'region_name': '日喀则市',
    'region_code': 542301,
    'parent_code': null
  },
  {
    'id': 3033,
    'region_name': '南木林县',
    'region_code': 542322,
    'parent_code': null
  },
  {
    'id': 3034,
    'region_name': '江孜县',
    'region_code': 542323,
    'parent_code': null
  },
  {
    'id': 3035,
    'region_name': '定日县',
    'region_code': 542324,
    'parent_code': null
  },
  {
    'id': 3036,
    'region_name': '萨迦县',
    'region_code': 542325,
    'parent_code': null
  },
  {
    'id': 3037,
    'region_name': '拉孜县',
    'region_code': 542326,
    'parent_code': null
  },
  {
    'id': 3038,
    'region_name': '昂仁县',
    'region_code': 542327,
    'parent_code': null
  },
  {
    'id': 3039,
    'region_name': '谢通门县',
    'region_code': 542328,
    'parent_code': null
  },
  {
    'id': 3040,
    'region_name': '白朗县',
    'region_code': 542329,
    'parent_code': null
  },
  {
    'id': 3041,
    'region_name': '仁布县',
    'region_code': 542330,
    'parent_code': null
  },
  {
    'id': 3042,
    'region_name': '康马县',
    'region_code': 542331,
    'parent_code': null
  },
  {
    'id': 3043,
    'region_name': '定结县',
    'region_code': 542332,
    'parent_code': null
  },
  {
    'id': 3044,
    'region_name': '仲巴县',
    'region_code': 542333,
    'parent_code': null
  },
  {
    'id': 3045,
    'region_name': '亚东县',
    'region_code': 542334,
    'parent_code': null
  },
  {
    'id': 3046,
    'region_name': '吉隆县',
    'region_code': 542335,
    'parent_code': null
  },
  {
    'id': 3047,
    'region_name': '聂拉木县',
    'region_code': 542336,
    'parent_code': null
  },
  {
    'id': 3048,
    'region_name': '萨嘎县',
    'region_code': 542337,
    'parent_code': null
  },
  {
    'id': 3049,
    'region_name': '岗巴县',
    'region_code': 542338,
    'parent_code': null
  },
  {
    'id': 3050,
    'region_name': '那曲地区',
    'region_code': 542400,
    'parent_code': 540000
  },
  {
    'id': 3051,
    'region_name': '那曲县',
    'region_code': 542421,
    'parent_code': 542400
  },
  {
    'id': 3052,
    'region_name': '嘉黎县',
    'region_code': 542422,
    'parent_code': 542400
  },
  {
    'id': 3053,
    'region_name': '比如县',
    'region_code': 542423,
    'parent_code': 542400
  },
  {
    'id': 3054,
    'region_name': '聂荣县',
    'region_code': 542424,
    'parent_code': 542400
  },
  {
    'id': 3055,
    'region_name': '安多县',
    'region_code': 542425,
    'parent_code': 542400
  },
  {
    'id': 3056,
    'region_name': '申扎县',
    'region_code': 542426,
    'parent_code': 542400
  },
  {
    'id': 3057,
    'region_name': '索县',
    'region_code': 542427,
    'parent_code': 542400
  },
  {
    'id': 3058,
    'region_name': '班戈县',
    'region_code': 542428,
    'parent_code': 542400
  },
  {
    'id': 3059,
    'region_name': '巴青县',
    'region_code': 542429,
    'parent_code': 542400
  },
  {
    'id': 3060,
    'region_name': '尼玛县',
    'region_code': 542430,
    'parent_code': 542400
  },
  {
    'id': 3061,
    'region_name': '阿里地区',
    'region_code': 542500,
    'parent_code': 540000
  },
  {
    'id': 3062,
    'region_name': '普兰县',
    'region_code': 542521,
    'parent_code': 542500
  },
  {
    'id': 3063,
    'region_name': '札达县',
    'region_code': 542522,
    'parent_code': 542500
  },
  {
    'id': 3064,
    'region_name': '噶尔县',
    'region_code': 542523,
    'parent_code': 542500
  },
  {
    'id': 3065,
    'region_name': '日土县',
    'region_code': 542524,
    'parent_code': 542500
  },
  {
    'id': 3066,
    'region_name': '革吉县',
    'region_code': 542525,
    'parent_code': 542500
  },
  {
    'id': 3067,
    'region_name': '改则县',
    'region_code': 542526,
    'parent_code': 542500
  },
  {
    'id': 3068,
    'region_name': '措勤县',
    'region_code': 542527,
    'parent_code': 542500
  },
  {
    'id': 3069,
    'region_name': '林芝地区',
    'region_code': 542600,
    'parent_code': 540000
  },
  {
    'id': 3070,
    'region_name': '林芝县',
    'region_code': 542621,
    'parent_code': 542600
  },
  {
    'id': 3071,
    'region_name': '工布江达县',
    'region_code': 542622,
    'parent_code': 542600
  },
  {
    'id': 3072,
    'region_name': '米林县',
    'region_code': 542623,
    'parent_code': 542600
  },
  {
    'id': 3073,
    'region_name': '墨脱县',
    'region_code': 542624,
    'parent_code': 542600
  },
  {
    'id': 3074,
    'region_name': '波密县',
    'region_code': 542625,
    'parent_code': 542600
  },
  {
    'id': 3075,
    'region_name': '察隅县',
    'region_code': 542626,
    'parent_code': 542600
  },
  {
    'id': 3076,
    'region_name': '朗县',
    'region_code': 542627,
    'parent_code': 542600
  },
  {
    'id': 3077,
    'region_name': '陕西省',
    'region_code': 610000,
    'parent_code': 0
  },
  {
    'id': 3078,
    'region_name': '西安市',
    'region_code': 610100,
    'parent_code': 610000
  },
  {
    'id': 3079,
    'region_name': '市辖区',
    'region_code': 610101,
    'parent_code': 610100
  },
  {
    'id': 3080,
    'region_name': '新城区',
    'region_code': 610102,
    'parent_code': 610100
  },
  {
    'id': 3081,
    'region_name': '碑林区',
    'region_code': 610103,
    'parent_code': 610100
  },
  {
    'id': 3082,
    'region_name': '莲湖区',
    'region_code': 610104,
    'parent_code': 610100
  },
  {
    'id': 3083,
    'region_name': '灞桥区',
    'region_code': 610111,
    'parent_code': 610100
  },
  {
    'id': 3084,
    'region_name': '未央区',
    'region_code': 610112,
    'parent_code': 610100
  },
  {
    'id': 3085,
    'region_name': '雁塔区',
    'region_code': 610113,
    'parent_code': 610100
  },
  {
    'id': 3086,
    'region_name': '阎良区',
    'region_code': 610114,
    'parent_code': 610100
  },
  {
    'id': 3087,
    'region_name': '临潼区',
    'region_code': 610115,
    'parent_code': 610100
  },
  {
    'id': 3088,
    'region_name': '长安区',
    'region_code': 610116,
    'parent_code': 610100
  },
  {
    'id': 3089,
    'region_name': '蓝田县',
    'region_code': 610122,
    'parent_code': 610100
  },
  {
    'id': 3090,
    'region_name': '周至县',
    'region_code': 610124,
    'parent_code': 610100
  },
  {
    'id': 3091,
    'region_name': '户县',
    'region_code': 610125,
    'parent_code': 610100
  },
  {
    'id': 3092,
    'region_name': '高陵县',
    'region_code': 610126,
    'parent_code': 610100
  },
  {
    'id': 3093,
    'region_name': '铜川市',
    'region_code': 610200,
    'parent_code': 610000
  },
  {
    'id': 3094,
    'region_name': '市辖区',
    'region_code': 610201,
    'parent_code': 610200
  },
  {
    'id': 3095,
    'region_name': '王益区',
    'region_code': 610202,
    'parent_code': 610200
  },
  {
    'id': 3096,
    'region_name': '印台区',
    'region_code': 610203,
    'parent_code': 610200
  },
  {
    'id': 3097,
    'region_name': '耀州区',
    'region_code': 610204,
    'parent_code': 610200
  },
  {
    'id': 3098,
    'region_name': '宜君县',
    'region_code': 610222,
    'parent_code': 610200
  },
  {
    'id': 3099,
    'region_name': '宝鸡市',
    'region_code': 610300,
    'parent_code': 610000
  },
  {
    'id': 3100,
    'region_name': '市辖区',
    'region_code': 610301,
    'parent_code': 610300
  },
  {
    'id': 3101,
    'region_name': '渭滨区',
    'region_code': 610302,
    'parent_code': 610300
  },
  {
    'id': 3102,
    'region_name': '金台区',
    'region_code': 610303,
    'parent_code': 610300
  },
  {
    'id': 3103,
    'region_name': '陈仓区',
    'region_code': 610304,
    'parent_code': 610300
  },
  {
    'id': 3104,
    'region_name': '凤翔县',
    'region_code': 610322,
    'parent_code': 610300
  },
  {
    'id': 3105,
    'region_name': '岐山县',
    'region_code': 610323,
    'parent_code': 610300
  },
  {
    'id': 3106,
    'region_name': '扶风县',
    'region_code': 610324,
    'parent_code': 610300
  },
  {
    'id': 3107,
    'region_name': '眉县',
    'region_code': 610326,
    'parent_code': 610300
  },
  {
    'id': 3108,
    'region_name': '陇县',
    'region_code': 610327,
    'parent_code': 610300
  },
  {
    'id': 3109,
    'region_name': '千阳县',
    'region_code': 610328,
    'parent_code': 610300
  },
  {
    'id': 3110,
    'region_name': '麟游县',
    'region_code': 610329,
    'parent_code': 610300
  },
  {
    'id': 3111,
    'region_name': '凤县',
    'region_code': 610330,
    'parent_code': 610300
  },
  {
    'id': 3112,
    'region_name': '太白县',
    'region_code': 610331,
    'parent_code': 610300
  },
  {
    'id': 3113,
    'region_name': '咸阳市',
    'region_code': 610400,
    'parent_code': 610000
  },
  {
    'id': 3114,
    'region_name': '市辖区',
    'region_code': 610401,
    'parent_code': 610400
  },
  {
    'id': 3115,
    'region_name': '秦都区',
    'region_code': 610402,
    'parent_code': 610400
  },
  {
    'id': 3116,
    'region_name': '杨凌区',
    'region_code': 610403,
    'parent_code': 610400
  },
  {
    'id': 3117,
    'region_name': '渭城区',
    'region_code': 610404,
    'parent_code': 610400
  },
  {
    'id': 3118,
    'region_name': '三原县',
    'region_code': 610422,
    'parent_code': 610400
  },
  {
    'id': 3119,
    'region_name': '泾阳县',
    'region_code': 610423,
    'parent_code': 610400
  },
  {
    'id': 3120,
    'region_name': '乾县',
    'region_code': 610424,
    'parent_code': 610400
  },
  {
    'id': 3121,
    'region_name': '礼泉县',
    'region_code': 610425,
    'parent_code': 610400
  },
  {
    'id': 3122,
    'region_name': '永寿县',
    'region_code': 610426,
    'parent_code': 610400
  },
  {
    'id': 3123,
    'region_name': '彬县',
    'region_code': 610427,
    'parent_code': 610400
  },
  {
    'id': 3124,
    'region_name': '长武县',
    'region_code': 610428,
    'parent_code': 610400
  },
  {
    'id': 3125,
    'region_name': '旬邑县',
    'region_code': 610429,
    'parent_code': 610400
  },
  {
    'id': 3126,
    'region_name': '淳化县',
    'region_code': 610430,
    'parent_code': 610400
  },
  {
    'id': 3127,
    'region_name': '武功县',
    'region_code': 610431,
    'parent_code': 610400
  },
  {
    'id': 3128,
    'region_name': '兴平市',
    'region_code': 610481,
    'parent_code': 610400
  },
  {
    'id': 3129,
    'region_name': '渭南市',
    'region_code': 610500,
    'parent_code': 610000
  },
  {
    'id': 3130,
    'region_name': '市辖区',
    'region_code': 610501,
    'parent_code': 610500
  },
  {
    'id': 3131,
    'region_name': '临渭区',
    'region_code': 610502,
    'parent_code': 610500
  },
  {
    'id': 3132,
    'region_name': '华县',
    'region_code': 610521,
    'parent_code': 610500
  },
  {
    'id': 3133,
    'region_name': '潼关县',
    'region_code': 610522,
    'parent_code': 610500
  },
  {
    'id': 3134,
    'region_name': '大荔县',
    'region_code': 610523,
    'parent_code': 610500
  },
  {
    'id': 3135,
    'region_name': '合阳县',
    'region_code': 610524,
    'parent_code': 610500
  },
  {
    'id': 3136,
    'region_name': '澄城县',
    'region_code': 610525,
    'parent_code': 610500
  },
  {
    'id': 3137,
    'region_name': '蒲城县',
    'region_code': 610526,
    'parent_code': 610500
  },
  {
    'id': 3138,
    'region_name': '白水县',
    'region_code': 610527,
    'parent_code': 610500
  },
  {
    'id': 3139,
    'region_name': '富平县',
    'region_code': 610528,
    'parent_code': 610500
  },
  {
    'id': 3140,
    'region_name': '韩城市',
    'region_code': 610581,
    'parent_code': 610500
  },
  {
    'id': 3141,
    'region_name': '华阴市',
    'region_code': 610582,
    'parent_code': 610500
  },
  {
    'id': 3142,
    'region_name': '延安市',
    'region_code': 610600,
    'parent_code': 610000
  },
  {
    'id': 3143,
    'region_name': '市辖区',
    'region_code': 610601,
    'parent_code': 610600
  },
  {
    'id': 3144,
    'region_name': '宝塔区',
    'region_code': 610602,
    'parent_code': 610600
  },
  {
    'id': 3145,
    'region_name': '延长县',
    'region_code': 610621,
    'parent_code': 610600
  },
  {
    'id': 3146,
    'region_name': '延川县',
    'region_code': 610622,
    'parent_code': 610600
  },
  {
    'id': 3147,
    'region_name': '子长县',
    'region_code': 610623,
    'parent_code': 610600
  },
  {
    'id': 3148,
    'region_name': '志丹县',
    'region_code': 610625,
    'parent_code': 610600
  },
  {
    'id': 3149,
    'region_name': '吴旗县',
    'region_code': 610626,
    'parent_code': 610600
  },
  {
    'id': 3150,
    'region_name': '甘泉县',
    'region_code': 610627,
    'parent_code': 610600
  },
  {
    'id': 3151,
    'region_name': '富县',
    'region_code': 610628,
    'parent_code': 610600
  },
  {
    'id': 3152,
    'region_name': '洛川县',
    'region_code': 610629,
    'parent_code': 610600
  },
  {
    'id': 3153,
    'region_name': '宜川县',
    'region_code': 610630,
    'parent_code': 610600
  },
  {
    'id': 3154,
    'region_name': '黄龙县',
    'region_code': 610631,
    'parent_code': 610600
  },
  {
    'id': 3155,
    'region_name': '黄陵县',
    'region_code': 610632,
    'parent_code': 610600
  },
  {
    'id': 3156,
    'region_name': '汉中市',
    'region_code': 610700,
    'parent_code': 610000
  },
  {
    'id': 3157,
    'region_name': '市辖区',
    'region_code': 610701,
    'parent_code': 610700
  },
  {
    'id': 3158,
    'region_name': '汉台区',
    'region_code': 610702,
    'parent_code': 610700
  },
  {
    'id': 3159,
    'region_name': '南郑县',
    'region_code': 610721,
    'parent_code': 610700
  },
  {
    'id': 3160,
    'region_name': '城固县',
    'region_code': 610722,
    'parent_code': 610700
  },
  {
    'id': 3161,
    'region_name': '洋县',
    'region_code': 610723,
    'parent_code': 610700
  },
  {
    'id': 3162,
    'region_name': '西乡县',
    'region_code': 610724,
    'parent_code': 610700
  },
  {
    'id': 3163,
    'region_name': '勉县',
    'region_code': 610725,
    'parent_code': 610700
  },
  {
    'id': 3164,
    'region_name': '宁强县',
    'region_code': 610726,
    'parent_code': 610700
  },
  {
    'id': 3165,
    'region_name': '略阳县',
    'region_code': 610727,
    'parent_code': 610700
  },
  {
    'id': 3166,
    'region_name': '镇巴县',
    'region_code': 610728,
    'parent_code': 610700
  },
  {
    'id': 3167,
    'region_name': '留坝县',
    'region_code': 610729,
    'parent_code': 610700
  },
  {
    'id': 3168,
    'region_name': '佛坪县',
    'region_code': 610730,
    'parent_code': 610700
  },
  {
    'id': 3169,
    'region_name': '榆林市',
    'region_code': 610800,
    'parent_code': 610000
  },
  {
    'id': 3170,
    'region_name': '市辖区',
    'region_code': 610801,
    'parent_code': 610800
  },
  {
    'id': 3171,
    'region_name': '榆阳区',
    'region_code': 610802,
    'parent_code': 610800
  },
  {
    'id': 3172,
    'region_name': '神木县',
    'region_code': 610821,
    'parent_code': 610800
  },
  {
    'id': 3173,
    'region_name': '府谷县',
    'region_code': 610822,
    'parent_code': 610800
  },
  {
    'id': 3174,
    'region_name': '横山县',
    'region_code': 610823,
    'parent_code': 610800
  },
  {
    'id': 3175,
    'region_name': '靖边县',
    'region_code': 610824,
    'parent_code': 610800
  },
  {
    'id': 3176,
    'region_name': '定边县',
    'region_code': 610825,
    'parent_code': 610800
  },
  {
    'id': 3177,
    'region_name': '绥德县',
    'region_code': 610826,
    'parent_code': 610800
  },
  {
    'id': 3178,
    'region_name': '米脂县',
    'region_code': 610827,
    'parent_code': 610800
  },
  {
    'id': 3179,
    'region_name': '佳县',
    'region_code': 610828,
    'parent_code': 610800
  },
  {
    'id': 3180,
    'region_name': '吴堡县',
    'region_code': 610829,
    'parent_code': 610800
  },
  {
    'id': 3181,
    'region_name': '清涧县',
    'region_code': 610830,
    'parent_code': 610800
  },
  {
    'id': 3182,
    'region_name': '子洲县',
    'region_code': 610831,
    'parent_code': 610800
  },
  {
    'id': 3183,
    'region_name': '安康市',
    'region_code': 610900,
    'parent_code': 610000
  },
  {
    'id': 3184,
    'region_name': '市辖区',
    'region_code': 610901,
    'parent_code': 610900
  },
  {
    'id': 3185,
    'region_name': '汉滨区',
    'region_code': 610902,
    'parent_code': 610900
  },
  {
    'id': 3186,
    'region_name': '汉阴县',
    'region_code': 610921,
    'parent_code': 610900
  },
  {
    'id': 3187,
    'region_name': '石泉县',
    'region_code': 610922,
    'parent_code': 610900
  },
  {
    'id': 3188,
    'region_name': '宁陕县',
    'region_code': 610923,
    'parent_code': 610900
  },
  {
    'id': 3189,
    'region_name': '紫阳县',
    'region_code': 610924,
    'parent_code': 610900
  },
  {
    'id': 3190,
    'region_name': '岚皋县',
    'region_code': 610925,
    'parent_code': 610900
  },
  {
    'id': 3191,
    'region_name': '平利县',
    'region_code': 610926,
    'parent_code': 610900
  },
  {
    'id': 3192,
    'region_name': '镇坪县',
    'region_code': 610927,
    'parent_code': 610900
  },
  {
    'id': 3193,
    'region_name': '旬阳县',
    'region_code': 610928,
    'parent_code': 610900
  },
  {
    'id': 3194,
    'region_name': '白河县',
    'region_code': 610929,
    'parent_code': 610900
  },
  {
    'id': 3195,
    'region_name': '商洛市',
    'region_code': 611000,
    'parent_code': 610000
  },
  {
    'id': 3196,
    'region_name': '市辖区',
    'region_code': 611001,
    'parent_code': 611000
  },
  {
    'id': 3197,
    'region_name': '商州区',
    'region_code': 611002,
    'parent_code': 611000
  },
  {
    'id': 3198,
    'region_name': '洛南县',
    'region_code': 611021,
    'parent_code': 611000
  },
  {
    'id': 3199,
    'region_name': '丹凤县',
    'region_code': 611022,
    'parent_code': 611000
  },
  {
    'id': 3200,
    'region_name': '商南县',
    'region_code': 611023,
    'parent_code': 611000
  },
  {
    'id': 3201,
    'region_name': '山阳县',
    'region_code': 611024,
    'parent_code': 611000
  },
  {
    'id': 3202,
    'region_name': '镇安县',
    'region_code': 611025,
    'parent_code': 611000
  },
  {
    'id': 3203,
    'region_name': '柞水县',
    'region_code': 611026,
    'parent_code': 611000
  },
  {
    'id': 3204,
    'region_name': '甘肃省',
    'region_code': 620000,
    'parent_code': 0
  },
  {
    'id': 3205,
    'region_name': '兰州市',
    'region_code': 620100,
    'parent_code': 620000
  },
  {
    'id': 3206,
    'region_name': '市辖区',
    'region_code': 620101,
    'parent_code': 620100
  },
  {
    'id': 3207,
    'region_name': '城关区',
    'region_code': 620102,
    'parent_code': 620100
  },
  {
    'id': 3208,
    'region_name': '七里河区',
    'region_code': 620103,
    'parent_code': 620100
  },
  {
    'id': 3209,
    'region_name': '西固区',
    'region_code': 620104,
    'parent_code': 620100
  },
  {
    'id': 3210,
    'region_name': '安宁区',
    'region_code': 620105,
    'parent_code': 620100
  },
  {
    'id': 3211,
    'region_name': '红古区',
    'region_code': 620111,
    'parent_code': 620100
  },
  {
    'id': 3212,
    'region_name': '永登县',
    'region_code': 620121,
    'parent_code': 620100
  },
  {
    'id': 3213,
    'region_name': '皋兰县',
    'region_code': 620122,
    'parent_code': 620100
  },
  {
    'id': 3214,
    'region_name': '榆中县',
    'region_code': 620123,
    'parent_code': 620100
  },
  {
    'id': 3215,
    'region_name': '嘉峪关市',
    'region_code': 620200,
    'parent_code': 620000
  },
  {
    'id': 3216,
    'region_name': '市辖区',
    'region_code': 620201,
    'parent_code': 620200
  },
  {
    'id': 3217,
    'region_name': '金昌市',
    'region_code': 620300,
    'parent_code': 620000
  },
  {
    'id': 3218,
    'region_name': '市辖区',
    'region_code': 620301,
    'parent_code': 620300
  },
  {
    'id': 3219,
    'region_name': '金川区',
    'region_code': 620302,
    'parent_code': 620300
  },
  {
    'id': 3220,
    'region_name': '永昌县',
    'region_code': 620321,
    'parent_code': 620300
  },
  {
    'id': 3221,
    'region_name': '白银市',
    'region_code': 620400,
    'parent_code': 620000
  },
  {
    'id': 3222,
    'region_name': '市辖区',
    'region_code': 620401,
    'parent_code': 620400
  },
  {
    'id': 3223,
    'region_name': '白银区',
    'region_code': 620402,
    'parent_code': 620400
  },
  {
    'id': 3224,
    'region_name': '平川区',
    'region_code': 620403,
    'parent_code': 620400
  },
  {
    'id': 3225,
    'region_name': '靖远县',
    'region_code': 620421,
    'parent_code': 620400
  },
  {
    'id': 3226,
    'region_name': '会宁县',
    'region_code': 620422,
    'parent_code': 620400
  },
  {
    'id': 3227,
    'region_name': '景泰县',
    'region_code': 620423,
    'parent_code': 620400
  },
  {
    'id': 3228,
    'region_name': '天水市',
    'region_code': 620500,
    'parent_code': 620000
  },
  {
    'id': 3229,
    'region_name': '市辖区',
    'region_code': 620501,
    'parent_code': 620500
  },
  {
    'id': 3230,
    'region_name': '秦城区',
    'region_code': 620502,
    'parent_code': 620500
  },
  {
    'id': 3231,
    'region_name': '北道区',
    'region_code': 620503,
    'parent_code': 620500
  },
  {
    'id': 3232,
    'region_name': '清水县',
    'region_code': 620521,
    'parent_code': 620500
  },
  {
    'id': 3233,
    'region_name': '秦安县',
    'region_code': 620522,
    'parent_code': 620500
  },
  {
    'id': 3234,
    'region_name': '甘谷县',
    'region_code': 620523,
    'parent_code': 620500
  },
  {
    'id': 3235,
    'region_name': '武山县',
    'region_code': 620524,
    'parent_code': 620500
  },
  {
    'id': 3236,
    'region_name': '张家川回族自治县',
    'region_code': 620525,
    'parent_code': 620500
  },
  {
    'id': 3237,
    'region_name': '武威市',
    'region_code': 620600,
    'parent_code': 620000
  },
  {
    'id': 3238,
    'region_name': '市辖区',
    'region_code': 620601,
    'parent_code': 620600
  },
  {
    'id': 3239,
    'region_name': '凉州区',
    'region_code': 620602,
    'parent_code': 620600
  },
  {
    'id': 3240,
    'region_name': '民勤县',
    'region_code': 620621,
    'parent_code': 620600
  },
  {
    'id': 3241,
    'region_name': '古浪县',
    'region_code': 620622,
    'parent_code': 620600
  },
  {
    'id': 3242,
    'region_name': '天祝藏族自治县',
    'region_code': 620623,
    'parent_code': 620600
  },
  {
    'id': 3243,
    'region_name': '张掖市',
    'region_code': 620700,
    'parent_code': 620000
  },
  {
    'id': 3244,
    'region_name': '市辖区',
    'region_code': 620701,
    'parent_code': 620700
  },
  {
    'id': 3245,
    'region_name': '甘州区',
    'region_code': 620702,
    'parent_code': 620700
  },
  {
    'id': 3246,
    'region_name': '肃南裕固族自治县',
    'region_code': 620721,
    'parent_code': 620700
  },
  {
    'id': 3247,
    'region_name': '民乐县',
    'region_code': 620722,
    'parent_code': 620700
  },
  {
    'id': 3248,
    'region_name': '临泽县',
    'region_code': 620723,
    'parent_code': 620700
  },
  {
    'id': 3249,
    'region_name': '高台县',
    'region_code': 620724,
    'parent_code': 620700
  },
  {
    'id': 3250,
    'region_name': '山丹县',
    'region_code': 620725,
    'parent_code': 620700
  },
  {
    'id': 3251,
    'region_name': '平凉市',
    'region_code': 620800,
    'parent_code': 620000
  },
  {
    'id': 3252,
    'region_name': '市辖区',
    'region_code': 620801,
    'parent_code': 620800
  },
  {
    'id': 3253,
    'region_name': '崆峒区',
    'region_code': 620802,
    'parent_code': 620800
  },
  {
    'id': 3254,
    'region_name': '泾川县',
    'region_code': 620821,
    'parent_code': 620800
  },
  {
    'id': 3255,
    'region_name': '灵台县',
    'region_code': 620822,
    'parent_code': 620800
  },
  {
    'id': 3256,
    'region_name': '崇信县',
    'region_code': 620823,
    'parent_code': 620800
  },
  {
    'id': 3257,
    'region_name': '华亭县',
    'region_code': 620824,
    'parent_code': 620800
  },
  {
    'id': 3258,
    'region_name': '庄浪县',
    'region_code': 620825,
    'parent_code': 620800
  },
  {
    'id': 3259,
    'region_name': '静宁县',
    'region_code': 620826,
    'parent_code': 620800
  },
  {
    'id': 3260,
    'region_name': '酒泉市',
    'region_code': 620900,
    'parent_code': 620000
  },
  {
    'id': 3261,
    'region_name': '市辖区',
    'region_code': 620901,
    'parent_code': 620900
  },
  {
    'id': 3262,
    'region_name': '肃州区',
    'region_code': 620902,
    'parent_code': 620900
  },
  {
    'id': 3263,
    'region_name': '金塔县',
    'region_code': 620921,
    'parent_code': 620900
  },
  {
    'id': 3264,
    'region_name': '安西县',
    'region_code': 620922,
    'parent_code': 620900
  },
  {
    'id': 3265,
    'region_name': '肃北蒙古族自治县',
    'region_code': 620923,
    'parent_code': 620900
  },
  {
    'id': 3266,
    'region_name': '阿克塞哈萨克族自治县',
    'region_code': 620924,
    'parent_code': 620900
  },
  {
    'id': 3267,
    'region_name': '玉门市',
    'region_code': 620981,
    'parent_code': 620900
  },
  {
    'id': 3268,
    'region_name': '敦煌市',
    'region_code': 620982,
    'parent_code': 620900
  },
  {
    'id': 3269,
    'region_name': '庆阳市',
    'region_code': 621000,
    'parent_code': 620000
  },
  {
    'id': 3270,
    'region_name': '市辖区',
    'region_code': 621001,
    'parent_code': 621000
  },
  {
    'id': 3271,
    'region_name': '西峰区',
    'region_code': 621002,
    'parent_code': 621000
  },
  {
    'id': 3272,
    'region_name': '庆城县',
    'region_code': 621021,
    'parent_code': 621000
  },
  {
    'id': 3273,
    'region_name': '环县',
    'region_code': 621022,
    'parent_code': 621000
  },
  {
    'id': 3274,
    'region_name': '华池县',
    'region_code': 621023,
    'parent_code': 621000
  },
  {
    'id': 3275,
    'region_name': '合水县',
    'region_code': 621024,
    'parent_code': 621000
  },
  {
    'id': 3276,
    'region_name': '正宁县',
    'region_code': 621025,
    'parent_code': 621000
  },
  {
    'id': 3277,
    'region_name': '宁县',
    'region_code': 621026,
    'parent_code': 621000
  },
  {
    'id': 3278,
    'region_name': '镇原县',
    'region_code': 621027,
    'parent_code': 621000
  },
  {
    'id': 3279,
    'region_name': '定西市',
    'region_code': 621100,
    'parent_code': 620000
  },
  {
    'id': 3280,
    'region_name': '市辖区',
    'region_code': 621101,
    'parent_code': 621100
  },
  {
    'id': 3281,
    'region_name': '安定区',
    'region_code': 621102,
    'parent_code': 621100
  },
  {
    'id': 3282,
    'region_name': '通渭县',
    'region_code': 621121,
    'parent_code': 621100
  },
  {
    'id': 3283,
    'region_name': '陇西县',
    'region_code': 621122,
    'parent_code': 621100
  },
  {
    'id': 3284,
    'region_name': '渭源县',
    'region_code': 621123,
    'parent_code': 621100
  },
  {
    'id': 3285,
    'region_name': '临洮县',
    'region_code': 621124,
    'parent_code': 621100
  },
  {
    'id': 3286,
    'region_name': '漳县',
    'region_code': 621125,
    'parent_code': 621100
  },
  {
    'id': 3287,
    'region_name': '岷县',
    'region_code': 621126,
    'parent_code': 621100
  },
  {
    'id': 3288,
    'region_name': '陇南地区',
    'region_code': 622600,
    'parent_code': null
  },
  {
    'id': 3289,
    'region_name': '武都县',
    'region_code': 622621,
    'parent_code': null
  },
  {
    'id': 3290,
    'region_name': '宕昌县',
    'region_code': 622623,
    'parent_code': null
  },
  {
    'id': 3291,
    'region_name': '成县',
    'region_code': 622624,
    'parent_code': null
  },
  {
    'id': 3292,
    'region_name': '康县',
    'region_code': 622625,
    'parent_code': null
  },
  {
    'id': 3293,
    'region_name': '文县',
    'region_code': 622626,
    'parent_code': null
  },
  {
    'id': 3294,
    'region_name': '西和县',
    'region_code': 622627,
    'parent_code': null
  },
  {
    'id': 3295,
    'region_name': '礼县',
    'region_code': 622628,
    'parent_code': null
  },
  {
    'id': 3296,
    'region_name': '两当县',
    'region_code': 622629,
    'parent_code': null
  },
  {
    'id': 3297,
    'region_name': '徽县',
    'region_code': 622630,
    'parent_code': null
  },
  {
    'id': 3298,
    'region_name': '临夏回族自治州',
    'region_code': 622900,
    'parent_code': 620000
  },
  {
    'id': 3299,
    'region_name': '临夏市',
    'region_code': 622901,
    'parent_code': 622900
  },
  {
    'id': 3300,
    'region_name': '临夏县',
    'region_code': 622921,
    'parent_code': 622900
  },
  {
    'id': 3301,
    'region_name': '康乐县',
    'region_code': 622922,
    'parent_code': 622900
  },
  {
    'id': 3302,
    'region_name': '永靖县',
    'region_code': 622923,
    'parent_code': 622900
  },
  {
    'id': 3303,
    'region_name': '广河县',
    'region_code': 622924,
    'parent_code': 622900
  },
  {
    'id': 3304,
    'region_name': '和政县',
    'region_code': 622925,
    'parent_code': 622900
  },
  {
    'id': 3305,
    'region_name': '东乡族自治县',
    'region_code': 622926,
    'parent_code': 622900
  },
  {
    'id': 3306,
    'region_name': '积石山保安族东乡族撒拉族自治县',
    'region_code': 622927,
    'parent_code': 622900
  },
  {
    'id': 3307,
    'region_name': '甘南藏族自治州',
    'region_code': 623000,
    'parent_code': 620000
  },
  {
    'id': 3308,
    'region_name': '合作市',
    'region_code': 623001,
    'parent_code': 623000
  },
  {
    'id': 3309,
    'region_name': '临潭县',
    'region_code': 623021,
    'parent_code': 623000
  },
  {
    'id': 3310,
    'region_name': '卓尼县',
    'region_code': 623022,
    'parent_code': 623000
  },
  {
    'id': 3311,
    'region_name': '舟曲县',
    'region_code': 623023,
    'parent_code': 623000
  },
  {
    'id': 3312,
    'region_name': '迭部县',
    'region_code': 623024,
    'parent_code': 623000
  },
  {
    'id': 3313,
    'region_name': '玛曲县',
    'region_code': 623025,
    'parent_code': 623000
  },
  {
    'id': 3314,
    'region_name': '碌曲县',
    'region_code': 623026,
    'parent_code': 623000
  },
  {
    'id': 3315,
    'region_name': '夏河县',
    'region_code': 623027,
    'parent_code': 623000
  },
  {
    'id': 3316,
    'region_name': '青海省',
    'region_code': 630000,
    'parent_code': 0
  },
  {
    'id': 3317,
    'region_name': '西宁市',
    'region_code': 630100,
    'parent_code': 630000
  },
  {
    'id': 3318,
    'region_name': '市辖区',
    'region_code': 630101,
    'parent_code': 630100
  },
  {
    'id': 3319,
    'region_name': '城东区',
    'region_code': 630102,
    'parent_code': 630100
  },
  {
    'id': 3320,
    'region_name': '城中区',
    'region_code': 630103,
    'parent_code': 630100
  },
  {
    'id': 3321,
    'region_name': '城西区',
    'region_code': 630104,
    'parent_code': 630100
  },
  {
    'id': 3322,
    'region_name': '城北区',
    'region_code': 630105,
    'parent_code': 630100
  },
  {
    'id': 3323,
    'region_name': '大通回族土族自治县',
    'region_code': 630121,
    'parent_code': 630100
  },
  {
    'id': 3324,
    'region_name': '湟中县',
    'region_code': 630122,
    'parent_code': 630100
  },
  {
    'id': 3325,
    'region_name': '湟源县',
    'region_code': 630123,
    'parent_code': 630100
  },
  {
    'id': 3326,
    'region_name': '海东地区',
    'region_code': 632100,
    'parent_code': null
  },
  {
    'id': 3327,
    'region_name': '平安县',
    'region_code': 632121,
    'parent_code': null
  },
  {
    'id': 3328,
    'region_name': '民和回族土族自治县',
    'region_code': 632122,
    'parent_code': null
  },
  {
    'id': 3329,
    'region_name': '乐都县',
    'region_code': 632123,
    'parent_code': null
  },
  {
    'id': 3330,
    'region_name': '互助土族自治县',
    'region_code': 632126,
    'parent_code': null
  },
  {
    'id': 3331,
    'region_name': '化隆回族自治县',
    'region_code': 632127,
    'parent_code': null
  },
  {
    'id': 3332,
    'region_name': '循化撒拉族自治县',
    'region_code': 632128,
    'parent_code': null
  },
  {
    'id': 3333,
    'region_name': '海北藏族自治州',
    'region_code': 632200,
    'parent_code': 630000
  },
  {
    'id': 3334,
    'region_name': '门源回族自治县',
    'region_code': 632221,
    'parent_code': 632200
  },
  {
    'id': 3335,
    'region_name': '祁连县',
    'region_code': 632222,
    'parent_code': 632200
  },
  {
    'id': 3336,
    'region_name': '海晏县',
    'region_code': 632223,
    'parent_code': 632200
  },
  {
    'id': 3337,
    'region_name': '刚察县',
    'region_code': 632224,
    'parent_code': 632200
  },
  {
    'id': 3338,
    'region_name': '黄南藏族自治州',
    'region_code': 632300,
    'parent_code': 630000
  },
  {
    'id': 3339,
    'region_name': '同仁县',
    'region_code': 632321,
    'parent_code': 632300
  },
  {
    'id': 3340,
    'region_name': '尖扎县',
    'region_code': 632322,
    'parent_code': 632300
  },
  {
    'id': 3341,
    'region_name': '泽库县',
    'region_code': 632323,
    'parent_code': 632300
  },
  {
    'id': 3342,
    'region_name': '河南蒙古族自治县',
    'region_code': 632324,
    'parent_code': 632300
  },
  {
    'id': 3343,
    'region_name': '海南藏族自治州',
    'region_code': 632500,
    'parent_code': 630000
  },
  {
    'id': 3344,
    'region_name': '共和县',
    'region_code': 632521,
    'parent_code': 632500
  },
  {
    'id': 3345,
    'region_name': '同德县',
    'region_code': 632522,
    'parent_code': 632500
  },
  {
    'id': 3346,
    'region_name': '贵德县',
    'region_code': 632523,
    'parent_code': 632500
  },
  {
    'id': 3347,
    'region_name': '兴海县',
    'region_code': 632524,
    'parent_code': 632500
  },
  {
    'id': 3348,
    'region_name': '贵南县',
    'region_code': 632525,
    'parent_code': 632500
  },
  {
    'id': 3349,
    'region_name': '果洛藏族自治州',
    'region_code': 632600,
    'parent_code': 630000
  },
  {
    'id': 3350,
    'region_name': '玛沁县',
    'region_code': 632621,
    'parent_code': 632600
  },
  {
    'id': 3351,
    'region_name': '班玛县',
    'region_code': 632622,
    'parent_code': 632600
  },
  {
    'id': 3352,
    'region_name': '甘德县',
    'region_code': 632623,
    'parent_code': 632600
  },
  {
    'id': 3353,
    'region_name': '达日县',
    'region_code': 632624,
    'parent_code': 632600
  },
  {
    'id': 3354,
    'region_name': '久治县',
    'region_code': 632625,
    'parent_code': 632600
  },
  {
    'id': 3355,
    'region_name': '玛多县',
    'region_code': 632626,
    'parent_code': 632600
  },
  {
    'id': 3356,
    'region_name': '玉树藏族自治州',
    'region_code': 632700,
    'parent_code': 630000
  },
  {
    'id': 3357,
    'region_name': '玉树县',
    'region_code': 632721,
    'parent_code': null
  },
  {
    'id': 3358,
    'region_name': '杂多县',
    'region_code': 632722,
    'parent_code': 632700
  },
  {
    'id': 3359,
    'region_name': '称多县',
    'region_code': 632723,
    'parent_code': 632700
  },
  {
    'id': 3360,
    'region_name': '治多县',
    'region_code': 632724,
    'parent_code': 632700
  },
  {
    'id': 3361,
    'region_name': '囊谦县',
    'region_code': 632725,
    'parent_code': 632700
  },
  {
    'id': 3362,
    'region_name': '曲麻莱县',
    'region_code': 632726,
    'parent_code': 632700
  },
  {
    'id': 3363,
    'region_name': '海西蒙古族藏族自治州',
    'region_code': 632800,
    'parent_code': 630000
  },
  {
    'id': 3364,
    'region_name': '格尔木市',
    'region_code': 632801,
    'parent_code': 632800
  },
  {
    'id': 3365,
    'region_name': '德令哈市',
    'region_code': 632802,
    'parent_code': 632800
  },
  {
    'id': 3366,
    'region_name': '乌兰县',
    'region_code': 632821,
    'parent_code': 632800
  },
  {
    'id': 3367,
    'region_name': '都兰县',
    'region_code': 632822,
    'parent_code': 632800
  },
  {
    'id': 3368,
    'region_name': '天峻县',
    'region_code': 632823,
    'parent_code': 632800
  },
  {
    'id': 3369,
    'region_name': '宁夏回族自治区',
    'region_code': 640000,
    'parent_code': 0
  },
  {
    'id': 3370,
    'region_name': '银川市',
    'region_code': 640100,
    'parent_code': 640000
  },
  {
    'id': 3371,
    'region_name': '市辖区',
    'region_code': 640101,
    'parent_code': 640100
  },
  {
    'id': 3372,
    'region_name': '兴庆区',
    'region_code': 640104,
    'parent_code': 640100
  },
  {
    'id': 3373,
    'region_name': '西夏区',
    'region_code': 640105,
    'parent_code': 640100
  },
  {
    'id': 3374,
    'region_name': '金凤区',
    'region_code': 640106,
    'parent_code': 640100
  },
  {
    'id': 3375,
    'region_name': '贺兰县',
    'region_code': 640122,
    'parent_code': 640100
  },
  {
    'id': 3376,
    'region_name': '灵武市',
    'region_code': 640181,
    'parent_code': 640100
  },
  {
    'id': 3377,
    'region_name': '石嘴山市',
    'region_code': 640200,
    'parent_code': 640000
  },
  {
    'id': 3378,
    'region_name': '市辖区',
    'region_code': 640201,
    'parent_code': 640200
  },
  {
    'id': 3379,
    'region_name': '大武口区',
    'region_code': 640202,
    'parent_code': 640200
  },
  {
    'id': 3380,
    'region_name': '惠农区',
    'region_code': 640205,
    'parent_code': 640200
  },
  {
    'id': 3381,
    'region_name': '平罗县',
    'region_code': 640221,
    'parent_code': 640200
  },
  {
    'id': 3382,
    'region_name': '吴忠市',
    'region_code': 640300,
    'parent_code': 640000
  },
  {
    'id': 3383,
    'region_name': '市辖区',
    'region_code': 640301,
    'parent_code': 640300
  },
  {
    'id': 3384,
    'region_name': '利通区',
    'region_code': 640302,
    'parent_code': 640300
  },
  {
    'id': 3385,
    'region_name': '盐池县',
    'region_code': 640323,
    'parent_code': 640300
  },
  {
    'id': 3386,
    'region_name': '同心县',
    'region_code': 640324,
    'parent_code': 640300
  },
  {
    'id': 3387,
    'region_name': '青铜峡市',
    'region_code': 640381,
    'parent_code': 640300
  },
  {
    'id': 3388,
    'region_name': '固原市',
    'region_code': 640400,
    'parent_code': 640000
  },
  {
    'id': 3389,
    'region_name': '市辖区',
    'region_code': 640401,
    'parent_code': 640400
  },
  {
    'id': 3390,
    'region_name': '原州区',
    'region_code': 640402,
    'parent_code': 640400
  },
  {
    'id': 3391,
    'region_name': '西吉县',
    'region_code': 640422,
    'parent_code': 640400
  },
  {
    'id': 3392,
    'region_name': '隆德县',
    'region_code': 640423,
    'parent_code': 640400
  },
  {
    'id': 3393,
    'region_name': '泾源县',
    'region_code': 640424,
    'parent_code': 640400
  },
  {
    'id': 3394,
    'region_name': '彭阳县',
    'region_code': 640425,
    'parent_code': 640400
  },
  {
    'id': 3395,
    'region_name': '中卫市',
    'region_code': 640500,
    'parent_code': 640000
  },
  {
    'id': 3396,
    'region_name': '市辖区',
    'region_code': 640501,
    'parent_code': 640500
  },
  {
    'id': 3397,
    'region_name': '沙坡头区',
    'region_code': 640502,
    'parent_code': 640500
  },
  {
    'id': 3398,
    'region_name': '中宁县',
    'region_code': 640521,
    'parent_code': 640500
  },
  {
    'id': 3399,
    'region_name': '海原县',
    'region_code': 640522,
    'parent_code': 640500
  },
  {
    'id': 3400,
    'region_name': '新疆维吾尔自治区',
    'region_code': 650000,
    'parent_code': 0
  },
  {
    'id': 3401,
    'region_name': '乌鲁木齐市',
    'region_code': 650100,
    'parent_code': 650000
  },
  {
    'id': 3402,
    'region_name': '市辖区',
    'region_code': 650101,
    'parent_code': 650100
  },
  {
    'id': 3403,
    'region_name': '天山区',
    'region_code': 650102,
    'parent_code': 650100
  },
  {
    'id': 3404,
    'region_name': '沙依巴克区',
    'region_code': 650103,
    'parent_code': 650100
  },
  {
    'id': 3405,
    'region_name': '新市区',
    'region_code': 650104,
    'parent_code': 650100
  },
  {
    'id': 3406,
    'region_name': '水磨沟区',
    'region_code': 650105,
    'parent_code': 650100
  },
  {
    'id': 3407,
    'region_name': '头屯河区',
    'region_code': 650106,
    'parent_code': 650100
  },
  {
    'id': 3408,
    'region_name': '达坂城区',
    'region_code': 650107,
    'parent_code': 650100
  },
  {
    'id': 3409,
    'region_name': '东山区',
    'region_code': 650108,
    'parent_code': null
  },
  {
    'id': 3410,
    'region_name': '乌鲁木齐县',
    'region_code': 650121,
    'parent_code': 650100
  },
  {
    'id': 3411,
    'region_name': '克拉玛依市',
    'region_code': 650200,
    'parent_code': 650000
  },
  {
    'id': 3412,
    'region_name': '市辖区',
    'region_code': 650201,
    'parent_code': 650200
  },
  {
    'id': 3413,
    'region_name': '独山子区',
    'region_code': 650202,
    'parent_code': 650200
  },
  {
    'id': 3414,
    'region_name': '克拉玛依区',
    'region_code': 650203,
    'parent_code': 650200
  },
  {
    'id': 3415,
    'region_name': '白碱滩区',
    'region_code': 650204,
    'parent_code': 650200
  },
  {
    'id': 3416,
    'region_name': '乌尔禾区',
    'region_code': 650205,
    'parent_code': 650200
  },
  {
    'id': 3417,
    'region_name': '吐鲁番地区',
    'region_code': 652100,
    'parent_code': 650000
  },
  {
    'id': 3418,
    'region_name': '吐鲁番市',
    'region_code': 652101,
    'parent_code': 652100
  },
  {
    'id': 3419,
    'region_name': '鄯善县',
    'region_code': 652122,
    'parent_code': 652100
  },
  {
    'id': 3420,
    'region_name': '托克逊县',
    'region_code': 652123,
    'parent_code': 652100
  },
  {
    'id': 3421,
    'region_name': '哈密地区',
    'region_code': 652200,
    'parent_code': 650000
  },
  {
    'id': 3422,
    'region_name': '哈密市',
    'region_code': 652201,
    'parent_code': 652200
  },
  {
    'id': 3423,
    'region_name': '巴里坤哈萨克自治县',
    'region_code': 652222,
    'parent_code': 652200
  },
  {
    'id': 3424,
    'region_name': '伊吾县',
    'region_code': 652223,
    'parent_code': 652200
  },
  {
    'id': 3425,
    'region_name': '昌吉回族自治州',
    'region_code': 652300,
    'parent_code': 650000
  },
  {
    'id': 3426,
    'region_name': '昌吉市',
    'region_code': 652301,
    'parent_code': 652300
  },
  {
    'id': 3427,
    'region_name': '阜康市',
    'region_code': 652302,
    'parent_code': 652300
  },
  {
    'id': 3428,
    'region_name': '米泉市',
    'region_code': 652303,
    'parent_code': null
  },
  {
    'id': 3429,
    'region_name': '呼图壁县',
    'region_code': 652323,
    'parent_code': 652300
  },
  {
    'id': 3430,
    'region_name': '玛纳斯县',
    'region_code': 652324,
    'parent_code': 652300
  },
  {
    'id': 3431,
    'region_name': '奇台县',
    'region_code': 652325,
    'parent_code': 652300
  },
  {
    'id': 3432,
    'region_name': '吉木萨尔县',
    'region_code': 652327,
    'parent_code': 652300
  },
  {
    'id': 3433,
    'region_name': '木垒哈萨克自治县',
    'region_code': 652328,
    'parent_code': 652300
  },
  {
    'id': 3434,
    'region_name': '博尔塔拉蒙古自治州',
    'region_code': 652700,
    'parent_code': 650000
  },
  {
    'id': 3435,
    'region_name': '博乐市',
    'region_code': 652701,
    'parent_code': 652700
  },
  {
    'id': 3436,
    'region_name': '精河县',
    'region_code': 652722,
    'parent_code': 652700
  },
  {
    'id': 3437,
    'region_name': '温泉县',
    'region_code': 652723,
    'parent_code': 652700
  },
  {
    'id': 3438,
    'region_name': '巴音郭楞蒙古自治州',
    'region_code': 652800,
    'parent_code': 650000
  },
  {
    'id': 3439,
    'region_name': '库尔勒市',
    'region_code': 652801,
    'parent_code': 652800
  },
  {
    'id': 3440,
    'region_name': '轮台县',
    'region_code': 652822,
    'parent_code': 652800
  },
  {
    'id': 3441,
    'region_name': '尉犁县',
    'region_code': 652823,
    'parent_code': 652800
  },
  {
    'id': 3442,
    'region_name': '若羌县',
    'region_code': 652824,
    'parent_code': 652800
  },
  {
    'id': 3443,
    'region_name': '且末县',
    'region_code': 652825,
    'parent_code': 652800
  },
  {
    'id': 3444,
    'region_name': '焉耆回族自治县',
    'region_code': 652826,
    'parent_code': 652800
  },
  {
    'id': 3445,
    'region_name': '和静县',
    'region_code': 652827,
    'parent_code': 652800
  },
  {
    'id': 3446,
    'region_name': '和硕县',
    'region_code': 652828,
    'parent_code': 652800
  },
  {
    'id': 3447,
    'region_name': '博湖县',
    'region_code': 652829,
    'parent_code': 652800
  },
  {
    'id': 3448,
    'region_name': '阿克苏地区',
    'region_code': 652900,
    'parent_code': 650000
  },
  {
    'id': 3449,
    'region_name': '阿克苏市',
    'region_code': 652901,
    'parent_code': 652900
  },
  {
    'id': 3450,
    'region_name': '温宿县',
    'region_code': 652922,
    'parent_code': 652900
  },
  {
    'id': 3451,
    'region_name': '库车县',
    'region_code': 652923,
    'parent_code': 652900
  },
  {
    'id': 3452,
    'region_name': '沙雅县',
    'region_code': 652924,
    'parent_code': 652900
  },
  {
    'id': 3453,
    'region_name': '新和县',
    'region_code': 652925,
    'parent_code': 652900
  },
  {
    'id': 3454,
    'region_name': '拜城县',
    'region_code': 652926,
    'parent_code': 652900
  },
  {
    'id': 3455,
    'region_name': '乌什县',
    'region_code': 652927,
    'parent_code': 652900
  },
  {
    'id': 3456,
    'region_name': '阿瓦提县',
    'region_code': 652928,
    'parent_code': 652900
  },
  {
    'id': 3457,
    'region_name': '柯坪县',
    'region_code': 652929,
    'parent_code': 652900
  },
  {
    'id': 3458,
    'region_name': '克孜勒苏柯尔克孜自治州',
    'region_code': 653000,
    'parent_code': 650000
  },
  {
    'id': 3459,
    'region_name': '阿图什市',
    'region_code': 653001,
    'parent_code': 653000
  },
  {
    'id': 3460,
    'region_name': '阿克陶县',
    'region_code': 653022,
    'parent_code': 653000
  },
  {
    'id': 3461,
    'region_name': '阿合奇县',
    'region_code': 653023,
    'parent_code': 653000
  },
  {
    'id': 3462,
    'region_name': '乌恰县',
    'region_code': 653024,
    'parent_code': 653000
  },
  {
    'id': 3463,
    'region_name': '喀什地区',
    'region_code': 653100,
    'parent_code': 650000
  },
  {
    'id': 3464,
    'region_name': '喀什市',
    'region_code': 653101,
    'parent_code': 653100
  },
  {
    'id': 3465,
    'region_name': '疏附县',
    'region_code': 653121,
    'parent_code': 653100
  },
  {
    'id': 3466,
    'region_name': '疏勒县',
    'region_code': 653122,
    'parent_code': 653100
  },
  {
    'id': 3467,
    'region_name': '英吉沙县',
    'region_code': 653123,
    'parent_code': 653100
  },
  {
    'id': 3468,
    'region_name': '泽普县',
    'region_code': 653124,
    'parent_code': 653100
  },
  {
    'id': 3469,
    'region_name': '莎车县',
    'region_code': 653125,
    'parent_code': 653100
  },
  {
    'id': 3470,
    'region_name': '叶城县',
    'region_code': 653126,
    'parent_code': 653100
  },
  {
    'id': 3471,
    'region_name': '麦盖提县',
    'region_code': 653127,
    'parent_code': 653100
  },
  {
    'id': 3472,
    'region_name': '岳普湖县',
    'region_code': 653128,
    'parent_code': 653100
  },
  {
    'id': 3473,
    'region_name': '伽师县',
    'region_code': 653129,
    'parent_code': 653100
  },
  {
    'id': 3474,
    'region_name': '巴楚县',
    'region_code': 653130,
    'parent_code': 653100
  },
  {
    'id': 3475,
    'region_name': '塔什库尔干塔吉克自治县',
    'region_code': 653131,
    'parent_code': 653100
  },
  {
    'id': 3476,
    'region_name': '和田地区',
    'region_code': 653200,
    'parent_code': 650000
  },
  {
    'id': 3477,
    'region_name': '和田市',
    'region_code': 653201,
    'parent_code': 653200
  },
  {
    'id': 3478,
    'region_name': '和田县',
    'region_code': 653221,
    'parent_code': 653200
  },
  {
    'id': 3479,
    'region_name': '墨玉县',
    'region_code': 653222,
    'parent_code': 653200
  },
  {
    'id': 3480,
    'region_name': '皮山县',
    'region_code': 653223,
    'parent_code': 653200
  },
  {
    'id': 3481,
    'region_name': '洛浦县',
    'region_code': 653224,
    'parent_code': 653200
  },
  {
    'id': 3482,
    'region_name': '策勒县',
    'region_code': 653225,
    'parent_code': 653200
  },
  {
    'id': 3483,
    'region_name': '于田县',
    'region_code': 653226,
    'parent_code': 653200
  },
  {
    'id': 3484,
    'region_name': '民丰县',
    'region_code': 653227,
    'parent_code': 653200
  },
  {
    'id': 3485,
    'region_name': '伊犁哈萨克自治州',
    'region_code': 654000,
    'parent_code': 650000
  },
  {
    'id': 3486,
    'region_name': '伊宁市',
    'region_code': 654002,
    'parent_code': 654000
  },
  {
    'id': 3487,
    'region_name': '奎屯市',
    'region_code': 654003,
    'parent_code': 654000
  },
  {
    'id': 3488,
    'region_name': '伊宁县',
    'region_code': 654021,
    'parent_code': 654000
  },
  {
    'id': 3489,
    'region_name': '察布查尔锡伯自治县',
    'region_code': 654022,
    'parent_code': 654000
  },
  {
    'id': 3490,
    'region_name': '霍城县',
    'region_code': 654023,
    'parent_code': 654000
  },
  {
    'id': 3491,
    'region_name': '巩留县',
    'region_code': 654024,
    'parent_code': 654000
  },
  {
    'id': 3492,
    'region_name': '新源县',
    'region_code': 654025,
    'parent_code': 654000
  },
  {
    'id': 3493,
    'region_name': '昭苏县',
    'region_code': 654026,
    'parent_code': 654000
  },
  {
    'id': 3494,
    'region_name': '特克斯县',
    'region_code': 654027,
    'parent_code': 654000
  },
  {
    'id': 3495,
    'region_name': '尼勒克县',
    'region_code': 654028,
    'parent_code': 654000
  },
  {
    'id': 3496,
    'region_name': '塔城地区',
    'region_code': 654200,
    'parent_code': 650000
  },
  {
    'id': 3497,
    'region_name': '塔城市',
    'region_code': 654201,
    'parent_code': 654200
  },
  {
    'id': 3498,
    'region_name': '乌苏市',
    'region_code': 654202,
    'parent_code': 654200
  },
  {
    'id': 3499,
    'region_name': '额敏县',
    'region_code': 654221,
    'parent_code': 654200
  },
  {
    'id': 3500,
    'region_name': '沙湾县',
    'region_code': 654223,
    'parent_code': 654200
  },
  {
    'id': 3501,
    'region_name': '托里县',
    'region_code': 654224,
    'parent_code': 654200
  },
  {
    'id': 3502,
    'region_name': '裕民县',
    'region_code': 654225,
    'parent_code': 654200
  },
  {
    'id': 3503,
    'region_name': '和布克赛尔蒙古自治县',
    'region_code': 654226,
    'parent_code': 654200
  },
  {
    'id': 3504,
    'region_name': '阿勒泰地区',
    'region_code': 654300,
    'parent_code': 650000
  },
  {
    'id': 3505,
    'region_name': '阿勒泰市',
    'region_code': 654301,
    'parent_code': 654300
  },
  {
    'id': 3506,
    'region_name': '布尔津县',
    'region_code': 654321,
    'parent_code': 654300
  },
  {
    'id': 3507,
    'region_name': '富蕴县',
    'region_code': 654322,
    'parent_code': 654300
  },
  {
    'id': 3508,
    'region_name': '福海县',
    'region_code': 654323,
    'parent_code': 654300
  },
  {
    'id': 3509,
    'region_name': '哈巴河县',
    'region_code': 654324,
    'parent_code': 654300
  },
  {
    'id': 3510,
    'region_name': '青河县',
    'region_code': 654325,
    'parent_code': 654300
  },
  {
    'id': 3511,
    'region_name': '吉木乃县',
    'region_code': 654326,
    'parent_code': 654300
  },
  {
    'id': 3512,
    'region_name': '省直辖行政单位',
    'region_code': 659000,
    'parent_code': 650000
  },
  {
    'id': 3513,
    'region_name': '石河子市',
    'region_code': 659001,
    'parent_code': 659000
  },
  {
    'id': 3514,
    'region_name': '阿拉尔市',
    'region_code': 659002,
    'parent_code': 659000
  },
  {
    'id': 3515,
    'region_name': '图木舒克市',
    'region_code': 659003,
    'parent_code': 659000
  },
  {
    'id': 3516,
    'region_name': '五家渠市',
    'region_code': 659004,
    'parent_code': 659000
  },
  {
    'id': 3517,
    'region_name': '台湾省',
    'region_code': 710000,
    'parent_code': 0
  },
  {
    'id': 3518,
    'region_name': '香港特别行政区',
    'region_code': 810000,
    'parent_code': 0
  },
  {
    'id': 3519,
    'region_name': '澳门特别行政区',
    'region_code': 820000,
    'parent_code': 0
  }
]

let a = JSON.parse(JSON.stringify(city))

let b = a.map((item, index) => {
  return Object.assign(item, {
    value: item.region_code.toString(),
    label: item.region_name,
    children: []
  })
})

b.forEach(item => {
  b.forEach((el, index) => {
    if (el.parent_code == item.region_code) {
      item.children.push(el)
    }
  })
})

let selectData = b.filter((item) => {
  return item.parent_code === 0
})

export default { city, selectData }
