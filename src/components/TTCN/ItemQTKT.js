
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { family_label, family_value} from '../../config/System'

const ItemQTKT = ({
  data,
  // onPress = item,
}) => (
  <View style={css.ctItem}>
    <Text style={css.txtStatus}>Số quyết định:  <Text style={css.txtValue}>{data.DECISION_NO}</Text></Text>
    <Text style={css.txtStatus}>Ngày hiệu lực:  <Text style={css.txtValue}>{data.EFFECT_DATE}</Text></Text>
    <Text style={css.txtStatus}>Cấp khen thưởng:  <Text style={css.txtValue}>{data.COMMEND_LEVEL_NAME}</Text></Text>
    <Text style={css.txtStatus}>Hình thức khen thưởng:  <Text style={css.txtValue}>{data.COMMEND_TYPE_NAME}</Text></Text>
    <Text style={css.txtStatus}>Nội dung khen thưởng:  <Text style={css.txtValue}>{data.REMARK}</Text></Text>
    <Text style={css.txtStatus}>Số tiền:  <Text style={css.txtValue}>{data.MONEY}</Text></Text>
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

export default ItemQTKT;
  