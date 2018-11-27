
import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { family_label, family_value} from '../../config/System'
import { convertDateTime } from '../Functions';

const ItemQTDTTCT = ({
  data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Tên khóa đào tạo:  <Text style={css.txtValue}>{data.TR_COURSE_NAME}</Text></Text>
			<Text style={css.txtStatus}>Tên chương trình đào tạo:  <Text style={css.txtValue}>{data.TR_PROGRAM_NAME}</Text></Text>
			<Text style={css.txtStatus}>Nhóm chương trình:  <Text style={css.txtValue}>{data.TR_PROGRAM_GROUP_NAME}</Text></Text>
			<Text style={css.txtStatus}>Lĩnh vực đào tạo:  <Text style={css.txtValue}>{data.TR_TRAIN_FIELD_NAME}</Text></Text>
			<Text style={css.txtStatus}>Hình thức đào tạo:  <Text style={css.txtValue}>{data.TR_TRAIN_FORM_NAME}</Text></Text>
			<Text style={css.txtStatus}>Thời lượng:  <Text style={css.txtValue}>{data.DURATION}</Text></Text>
			<Text style={css.txtStatus}>Thời gian:  <Text style={css.txtValue}>{convertDateTime(data.START_DATE)} - {convertDateTime(data.END_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Trung tâm đào tạo:  <Text style={css.txtValue}>{data.TR_UNIT_NAME}</Text></Text>
			<Text style={css.txtStatus}>Nội dung đào tạo:  <Text style={css.txtValue}>{data.TARGET_TRAIN}</Text></Text>
			<Text style={css.txtStatus}>Mục đích:  <Text style={css.txtValue}>{data.MD}</Text></Text>
			<Text style={css.txtStatus}>Địa điểm tổ chức  <Text style={css.txtValue}>{data.VENUE}</Text></Text>
			<Text style={css.txtStatus}>Điểm đào tạo:  <Text style={css.txtValue}>{data.TOEIC_FINAL_SCORE}</Text></Text>
			<Text style={css.txtStatus}>Kết quả:  <Text style={css.txtValue}>{data.IS_REACH}</Text></Text>
			<Text style={css.txtStatus}>Xếp loại:  <Text style={css.txtValue}>{data.RANK_NAME}</Text></Text>
			<Text style={css.txtStatus}>Văn bằng/Chứng chỉ:  <Text style={css.txtValue}>{data.CERTIFICATE_NO}</Text></Text>
			<Text style={css.txtStatus}>Thời hạn chứng chỉ:  <Text style={css.txtValue}>{data.CERTIFICATE_DATE}</Text></Text>
			<Text style={css.txtStatus}>Ngày cấp chứng chỉ:  <Text style={css.txtValue}>{data.CER_RECEIVE_DATE}</Text></Text>
			<Text style={css.txtStatus}>Ngày hết hạn chứng chỉ:  <Text style={css.txtValue}>{data.CER_EXPIRED_DATE}</Text></Text>
			<Text style={css.txtStatus}>Số cam kết:  <Text style={css.txtValue}>{data.COMITMENT_TRAIN_NO}</Text></Text>
			<Text style={css.txtStatus}>Thời gian cam kết:  <Text style={css.txtValue}>{data.COMMIT_WORK}</Text></Text>
			<Text style={css.txtStatus}>Ngày bắt đầu cam kết:  <Text style={css.txtValue}>{data.COMITMENT_START_DATE}</Text></Text>
			<Text style={css.txtStatus}>Ngày kết thúc cam kết:  <Text style={css.txtValue}>{data.COMITMENT_END_DATE}</Text></Text>
			<Text style={css.txtStatus}>Ghi chú:  <Text style={css.txtValue}>{data.REMARK}</Text></Text>
		</View>
	</View>
)

const css = StyleSheet.create({
  txtValue: {
    fontSize: 14,
    color: '#1f2a35',
    fontFamily: family_value
  },
  txtStatus: {
    color: '#c2c4ca',
    // fontSize: 12,
    fontFamily: family_label
  },
  ctItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4,
    paddingTop: 10,
    padding: 15,
	shadowColor: 'black',
	shadowOffset: {
		width: 0,
		height: 20
	},
	shadowRadius: 10,
	shadowOpacity: 0.3,
	elevation: 5,
  },
})

export default ItemQTDTTCT;
  