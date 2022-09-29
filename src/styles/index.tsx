import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 342,
    height: 342,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent',
  },
  headerIcon: {
    padding: 10,
  },
  headerText: {
    left: 10,
    fontFamily: 'IBMPlexSansArabic-SemiBold',
  },
  viewProductDetails: {
    padding: 16,
    top: -16,
  },
  viewProductLayout: {
    flex: 1,
  },
  textInputStyle: {
    margin: 16,
    fontSize: 16,
    fontFamily: 'IBMPlexSansArabic-Regular',
    backgroundColor: '#FCFCFC',
  },
  selectContainerStyle: {
    padding: 16,
  },
  dialogButtonLabelStyle: {
    color: '#73548F',
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },
  viewShare: {
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDetails: {
    paddingTop: 8,
    top: 8,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDetailsBody: {
    fontSize: 14,
    fontFamily: 'IBMPlexSansArabic-Medium',
    color: '#545454',
  },
  textDetailsView: {
    top: 16,
  },
  textDetailsTitles: {
    fontSize: 16,
    fontFamily: 'IBMPlexSansArabic-Medium',
  },
  priceDetails: {
    flexDirection: 'row',
    top: 6,
    fontFamily: 'IBMPlexSansArabic-SemiBold',
  },
  ratingDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  priceTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    padding: 10,
    width: 340,
    borderRadius: 8,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  likeButton: {
    color: '#000',
    fontSize: 18,
    padding: 16,
  },
  likeText: {
    paddingStart: 6,
    fontFamily: 'IBMPlexSansArabic-Medium',
  },
  shareText: {
    paddingEnd: 20,
    fontFamily: 'IBMPlexSansArabic-Medium',
  },
  productText: {
    fontSize: 16,
    fontFamily: 'IBMPlexSansArabic-Medium',
  },
  rating: {
    right: 5,
  },
  ratingText: {
    fontFamily: 'IBMPlexSansArabic-Regular',
    fontSize: 14,
    marginLeft: 5,
  },
  priceText: {
    fontFamily: 'IBMPlexSansArabic-Medium',
    fontSize: 14,
    color: '#EB1747',
  },
  oldPriceText: {
    left: 5,
    fontFamily: 'IBMPlexSansArabic-Medium',
    fontWeight: '400',
    fontSize: 14,
    color: '#522973',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  viewShareBackground: {
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 8,
    width: 114,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEBF2',
    borderRadius: 48,
  },
  viewLikeBackground: {
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 48,
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 83,
    padding: 10,
  },
  footerBottonView: {
    backgroundColor: 'white',
    alignItems: 'flex-end',
    height: 83,
  },
  footerBottonAddView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 48,
    borderColor: '#EDEBF2',
    borderWidth: 1,
    width: 189,
    height: 51,
  },
  footerBotton: {
    borderRadius: 48,
    width: 143,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  footerBottonAdd: {
    borderRadius: 150,
  },
  footerBottonText: {
    fontFamily: 'IBMPlexSansArabic-Regular',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 48,
    height: 50,
  },
  footerBottonAddText: {
    fontFamily: 'IBMPlexSansArabic-Regular',
    fontSize: 16,
  },
});
