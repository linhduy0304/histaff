
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {family_label, family_value} from '../../config/System'
import { convertDateTime } from '../Functions';

const window = Dimensions.get('window');

const ItemQTDTTCT = ({
  data,
  // onPress = item,
}) => (
  <View style={css.ctItem}>
    <Text style={css.txtStatus}>Thời gian:  <Text style={css.txtValue}>{convertDateTime(data.FROM_DATE)} - {convertDateTime(data.TO_DATE)}</Text></Text>
    <Text style={css.txtStatus}>Năm tốt nghiệp:  <Text style={css.txtValue}>{data.NTN}</Text></Text>
    <Text style={css.txtStatus}>Tên trường:  <Text style={css.txtValue}>{data.NAME_SHOOLS}</Text></Text>
    <Text style={css.txtStatus}>Hình thức đào tạo:  <Text style={css.txtValue}>{data.FORM_TRAIN_NAME}</Text></Text>
    <Text style={css.txtStatus}>Chuyên ngành:  <Text style={css.txtValue}>{data.SPECIALIZED_TRAIN}</Text></Text>
    <Text style={css.txtStatus}>Kết quả dào tạo:  <Text style={css.txtValue}>{data.RESULT_TRAIN}</Text></Text>
    <Text style={css.txtStatus}>Bằng cấp/Chứng chỉ:  <Text style={css.txtValue}>{data.CERTIFICATE}</Text></Text>
    <Text style={css.txtStatus}>Ngày hiệu lực:  <Text style={css.txtValue}>{data.EFFECTIVE_DATE_FROM}</Text></Text>
    <Text style={css.txtStatus}>Ngày hết hiệu lực:  <Text style={css.txtValue}>{data.EFFECTIVE_DATE_TO}</Text></Text>
    <Text style={css.txtStatus}>Trạng thái phê duyệt:  <Text style={css.txtValue}>{data.STATUS_NAME}</Text></Text>
    <Text style={css.txtStatus}>Lý do không phê duyệt:  <Text style={css.txtValue}>{data.Reg}</Text></Text>
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
    padding: 15
  },
})

export default ItemQTDTTCT;
  