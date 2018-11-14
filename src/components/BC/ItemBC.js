
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

const ItemBC = ({
  data,
  // onPress = item,
}) => (
	<View style={css.ctItem}>
		<Text style={css.txtStatus}>Mã nhân viên:  <Text style={css.txtValue}>{data.EMPLOYEE_CODE}</Text></Text>
		<Text style={css.txtStatus}>Tên nhân viên:  <Text style={css.txtValue}>{data.VN_FULLNAME}</Text></Text>
		<Text style={css.txtStatus}>Chức danh:  <Text style={css.txtValue}>{data.TITLE_NAME}</Text></Text>
		<Text style={css.txtStatus}>Cấp nhân sự:  <Text style={css.txtValue}>{data.STAFF_RANK_NAME}</Text></Text>
		<Text style={css.txtStatus}>Công làm việc ngày thường:  <Text style={css.txtValue}>{data.WORKING_X}</Text></Text>
		<Text style={css.txtStatus}>Công làm việc ngày lễ:  <Text style={css.txtValue}>{data.WORKING_F}</Text></Text>
		<Text style={css.txtStatus}>Công đào tạo:  <Text style={css.txtValue}>{data.WORKING_E}</Text></Text>
		<Text style={css.txtStatus}>Công làm việc ca 3:  <Text style={css.txtValue}>{data.WORKING_A}</Text></Text>
		<Text style={css.txtStatus}>Công công tác:  <Text style={css.txtValue}>{data.WORKING_C}</Text></Text>
		<Text style={css.txtStatus}>Cấp nghỉ phép:  <Text style={css.txtValue}>{data.WORKING_P}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ Lễ/Tết:  <Text style={css.txtValue}>{data.WORKING_L}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ việc riêng hưởng lương:  <Text style={css.txtValue}>{data.WORKING_R}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ chế độ con nhỏ:  <Text style={css.txtValue}>{data.WORKING_S}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ bù:  <Text style={css.txtValue}>{data.WORKING_B}</Text></Text>
		<Text style={css.txtStatus}>Công ngừng việc:  <Text style={css.txtValue}>{data.WORKING_K}</Text></Text>
		<Text style={css.txtStatus}>Cấp nghỉ TNLĐ:  <Text style={css.txtValue}>{data.WORKING_J}</Text></Text>
		<Text style={css.txtStatus}>Tổng công hưởng lương:  <Text style={css.txtValue}>{data.TOTAL_WORKING_XJ}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ thai sản:  <Text style={css.txtValue}>{data.WORKING_TS}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ ốm:  <Text style={css.txtValue}>{data.WORKING_O}</Text></Text>
		<Text style={css.txtStatus}>Công nghỉ việc riêng không hưởng lương:  <Text style={css.txtValue}>{data.WORKING_V}</Text></Text>
		<Text style={css.txtStatus}>Tổng công hưởng BHXH hoặc không hưởng lương:  <Text style={css.txtValue}>{data.TOTAL_TS_V}</Text></Text>
	</View>
)

const css = StyleSheet.create({
  txtValue: {
    fontSize: 14,
    color: '#1f2a35',
  },
  txtStatus: {
    color: '#c2c4ca',
    // fontSize: 12,
  },
  ctItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4,
    paddingTop: 10,
    padding: 15
  },
})

export default ItemBC;
  