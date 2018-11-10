
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { family_label, family_value} from '../../config/System'
import { convertDateTime } from '../Functions';

const ItemQTHDLD = ({
  data,
  // onPress = item,
}) => (
  <View style={css.ctItem}>
    <Text style={css.txtStatus}>Loại hợp đồng:  <Text style={css.txtValue}>{data.CONTRACTTYPE_NAME}</Text></Text>
    <Text style={css.txtStatus}>Số hợp đồng:  <Text style={css.txtValue}>{data.CONTRACT_NO}</Text></Text>
    <Text style={css.txtStatus}>Thời gian:  <Text style={css.txtValue}>{convertDateTime(data.CREATED_DATE)} - {convertDateTime(data.EXPIRE_DATE)}</Text></Text>
    <Text style={css.txtStatus}>Người ký:  <Text style={css.txtValue}>{data.SIGNER_NAME}</Text></Text>
    <Text style={css.txtStatus}>Ngày ký:  <Text style={css.txtValue}>{data.SIGN_DATE}</Text></Text>
    <Text style={css.txtStatus}>Chức danh người ký:  <Text style={css.txtValue}>{data.SIGNER_TITLE}</Text></Text>
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

export default ItemQTHDLD;
  